// app/api/generate/route.ts — javari-merch
import { NextRequest, NextResponse } from 'next/server'

async function callGemini(text: string): Promise<string> {
  const key = process.env.GOOGLE_GEMINI_API_KEY ?? process.env.GEMINI_API_KEY ?? ''
  if (!key) return ''
  try {
    const res = await fetch(
      `https://generativelanguage.googleapis.com/v1beta/models/gemini-flash-latest:generateContent?key=${key}`,
      {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          contents: [{ role: 'user', parts: [{ text }] }],
          generationConfig: { maxOutputTokens: 2048, temperature: 0.7 },
        }),
      },
    )
    if (!res.ok) return ''
    const d = (await res.json()) as { candidates?: { content?: { parts?: { text?: string }[] } }[] }
    return d.candidates?.[0]?.content?.parts?.[0]?.text ?? ''
  } catch {
    return ''
  }
}

export const dynamic = 'force-dynamic'; export const runtime = 'nodejs'; export const maxDuration = 60
const GROQ = process.env.GROQ_API_KEY ?? ''; const OR = process.env.OPENROUTER_API_KEY ?? ''
const SYSTEM = `You are a merchandise and print-on-demand expert for CR AudioViz AI. Help creators design products, write product descriptions, create marketing copy, and build merchandise businesses.`; const ACTIONS = ["product_description", "design_brief", "marketing_copy", "collection_theme", "pricing_strategy", "launch_plan"]; const COST = 4
async function gen(p: string): Promise<string> {
  if (OR) { try {
    const r = await fetch('https://openrouter.ai/api/v1/chat/completions', { method:'POST', headers:{'Content-Type':'application/json','Authorization':`Bearer ${OR}`,'HTTP-Referer':'https://craudiovizai.com'}, body:JSON.stringify({model:'deepseek/deepseek-v4-flash:free',max_tokens:2048,temperature:0.7,messages:[{role:'system',content:SYSTEM},{role:'user',content:p}]}) })
    if (r.ok) { const d = await r.json() as {choices?:Array<{message?:{content?:string}}> }; const t = d.choices?.[0]?.message?.content ?? ''; if (t.length > 50) return t }
  } catch {} }
  if (!GROQ) throw new Error('no AI key')
  const r = await fetch('https://api.groq.com/openai/v1/chat/completions', { method:'POST', headers:{'Content-Type':'application/json',Authorization:`Bearer ${GROQ}`}, body:JSON.stringify({model:'llama-3.3-70b-versatile',max_tokens:2048,temperature:0.7,messages:[{role:'system',content:SYSTEM},{role:'user',content:p}]}) })
  // 2026-08-15: Gemini was missing from the cascade entirely, so a Groq 429
  // became a 500 the customer saw. Free tier two of the COST LAW.
  const gem = await callGemini(p)
  if (gem.length > 20) return gem

  if (!r.ok) throw new Error(`Groq ${r.status}`); const d = await r.json() as {choices?:Array<{message?:{content?:string}}> }; return d.choices?.[0]?.message?.content ?? ''
}
export async function GET() { return NextResponse.json({actions:ACTIONS,cost:COST+' credits',cost_usd:'$0.00'}) }
export async function POST(req: NextRequest) {
  try {
    const b = await req.json() as {action:string;input:string}
    if (!b.input?.trim()) return NextResponse.json({error:'input required'},{status:400})
    if (!ACTIONS.includes(b.action)) return NextResponse.json({error:'invalid action',available:ACTIONS},{status:400})
    const result = await gen(`${b.action.replace(/_/g,' ')}: ${b.input}`)
    return NextResponse.json({result,action:b.action,cost_usd:'$0.00',credits_used:COST})
  } catch(err) { return NextResponse.json({error:String(err)},{status:500}) }
}