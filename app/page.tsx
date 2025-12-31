'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  Shirt, ShoppingBag, Palette, Truck, DollarSign, Sparkles,
  CheckCircle, ArrowRight, Star, Upload, Zap, Globe,
  Coffee, Smartphone, Package, Users
} from 'lucide-react';

const products = [
  { id: 'tshirt', name: 'T-Shirts', icon: Shirt, basePrice: 12, sellPrice: 25, color: 'from-blue-500 to-indigo-600' },
  { id: 'hoodie', name: 'Hoodies', icon: Shirt, basePrice: 25, sellPrice: 45, color: 'from-purple-500 to-violet-600' },
  { id: 'mug', name: 'Mugs', icon: Coffee, basePrice: 6, sellPrice: 15, color: 'from-amber-500 to-orange-600' },
  { id: 'phone', name: 'Phone Cases', icon: Smartphone, basePrice: 8, sellPrice: 20, color: 'from-rose-500 to-pink-600' },
  { id: 'tote', name: 'Tote Bags', icon: ShoppingBag, basePrice: 10, sellPrice: 22, color: 'from-emerald-500 to-teal-600' },
  { id: 'poster', name: 'Posters', icon: Package, basePrice: 5, sellPrice: 18, color: 'from-cyan-500 to-blue-600' },
];

const features = [
  { icon: Upload, title: 'Upload Your Design', desc: 'Use our AI tools or upload your own artwork' },
  { icon: Palette, title: 'Customize Products', desc: 'Preview on 100+ product types and colors' },
  { icon: Globe, title: 'Sell Anywhere', desc: 'Connect to your store or use our marketplace' },
  { icon: Truck, title: 'We Handle Fulfillment', desc: 'We print, pack, and ship directly to customers' },
];

const stats = [
  { value: '100+', label: 'Product Types' },
  { value: '0', label: 'Inventory Required' },
  { value: '70%', label: 'Profit Margin' },
  { value: '3-5 Days', label: 'Shipping Time' },
];

export default function MerchPage() {
  const [selectedProduct, setSelectedProduct] = useState<string | null>(null);

  const calculateProfit = (base: number, sell: number) => sell - base;

  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-950 via-purple-950/20 to-slate-950">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-slate-950/95 backdrop-blur-md border-b border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-gradient-to-br from-purple-500 to-pink-600 rounded-lg flex items-center justify-center">
                <Shirt className="w-6 h-6 text-white" />
              </div>
              <div>
                <span className="font-bold text-white text-lg">Javari Merch</span>
                <span className="text-purple-400 text-xs block -mt-1">by CR AudioViz AI</span>
              </div>
            </div>
            <div className="hidden md:flex items-center gap-6">
              <a href="#products" className="text-gray-300 hover:text-white transition">Products</a>
              <a href="#how-it-works" className="text-gray-300 hover:text-white transition">How It Works</a>
              <a href="#pricing" className="text-gray-300 hover:text-white transition">Pricing</a>
              <a href="#start" className="px-4 py-2 bg-gradient-to-r from-purple-600 to-pink-600 text-white font-medium rounded-lg hover:opacity-90 transition">
                Start Creating
              </a>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero */}
      <section className="relative pt-32 pb-20 overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl" />
          <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-pink-500/10 rounded-full blur-3xl" />
        </div>
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="inline-flex items-center gap-2 px-4 py-2 bg-purple-500/20 border border-purple-500/30 rounded-full text-sm text-purple-300 mb-8"
          >
            <Sparkles className="w-4 h-4" />
            <span>AI-powered design tools included</span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-4xl sm:text-5xl md:text-6xl font-bold text-white mb-6"
          >
            Create & Sell<br/>
            <span className="bg-gradient-to-r from-purple-400 via-pink-400 to-rose-400 bg-clip-text text-transparent">
              Custom Merchandise
            </span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-xl text-gray-300 max-w-3xl mx-auto mb-10"
          >
            Design once, sell forever. No inventory, no risk, no upfront costs. 
            We handle printing and shipping worldwide.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16"
          >
            <a href="#start" className="px-8 py-4 bg-gradient-to-r from-purple-600 to-pink-600 text-white font-semibold rounded-xl hover:opacity-90 transition flex items-center gap-2">
              Start Creating Free
              <ArrowRight className="w-5 h-5" />
            </a>
            <a href="#products" className="px-8 py-4 border border-white/20 text-white font-semibold rounded-xl hover:bg-white/5 transition">
              Browse Products
            </a>
          </motion.div>

          {/* Stats */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="grid grid-cols-2 md:grid-cols-4 gap-4"
          >
            {stats.map((stat, i) => (
              <div key={i} className="p-4 bg-white/5 border border-white/10 rounded-xl">
                <div className="text-2xl font-bold text-white">{stat.value}</div>
                <div className="text-sm text-gray-400">{stat.label}</div>
              </div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Products */}
      <section id="products" className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Popular Products</h2>
            <p className="text-xl text-gray-400">High-quality products with great profit margins</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {products.map((product, i) => (
              <motion.div
                key={product.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1 }}
                className={`group p-6 bg-white/5 border rounded-2xl transition-all hover:scale-105 cursor-pointer ${
                  selectedProduct === product.id ? 'border-purple-500 bg-purple-500/10' : 'border-white/10'
                }`}
                onClick={() => setSelectedProduct(product.id)}
              >
                <div className={`inline-flex p-4 rounded-xl bg-gradient-to-r ${product.color} mb-4`}>
                  <product.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-2">{product.name}</h3>
                <div className="flex items-center justify-between text-sm mb-4">
                  <span className="text-gray-400">Base cost: ${product.basePrice}</span>
                  <span className="text-gray-400">Suggested: ${product.sellPrice}</span>
                </div>
                <div className="p-3 bg-green-500/20 border border-green-500/30 rounded-lg">
                  <div className="flex items-center justify-between">
                    <span className="text-green-400 font-medium">Your Profit</span>
                    <span className="text-green-400 font-bold text-lg">${calculateProfit(product.basePrice, product.sellPrice)}</span>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section id="how-it-works" className="py-20 bg-white/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">How It Works</h2>
            <p className="text-xl text-gray-400">Start selling in 4 simple steps</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {features.map((feature, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1 }}
                className="relative p-6 bg-slate-900/50 border border-white/10 rounded-2xl"
              >
                <div className="absolute -top-4 left-6 w-8 h-8 bg-gradient-to-r from-purple-600 to-pink-600 rounded-full flex items-center justify-center text-white font-bold text-sm">
                  {i + 1}
                </div>
                <feature.icon className="w-10 h-10 text-purple-400 mb-4 mt-4" />
                <h3 className="text-lg font-semibold text-white mb-2">{feature.title}</h3>
                <p className="text-gray-400 text-sm">{feature.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing */}
      <section id="pricing" className="py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Simple Pricing</h2>
            <p className="text-xl text-gray-400">No monthly fees. You only pay when you make a sale.</p>
          </div>

          <div className="p-8 bg-gradient-to-b from-purple-900/30 to-pink-900/30 border border-purple-500/30 rounded-2xl">
            <div className="text-center mb-8">
              <div className="text-5xl font-bold text-white mb-2">Free</div>
              <p className="text-gray-400">to get started</p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
              {[
                'Unlimited designs',
                'Access to all products',
                'AI design tools',
                'Mockup generator',
                'Global shipping',
                'Customer support',
                'No inventory risk',
                'Keep 100% of your profit margin',
              ].map((feature, i) => (
                <div key={i} className="flex items-center gap-3 text-gray-300">
                  <CheckCircle className="w-5 h-5 text-purple-400 flex-shrink-0" />
                  {feature}
                </div>
              ))}
            </div>
            <div className="text-center">
              <a href="#start" className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-purple-600 to-pink-600 text-white font-semibold rounded-xl hover:opacity-90 transition">
                Start Creating Now
                <ArrowRight className="w-5 h-5" />
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section id="start" className="py-20 bg-gradient-to-r from-purple-900/50 to-pink-900/50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Ready to Start Your Merch Business?
          </h2>
          <p className="text-xl text-gray-300 mb-8">
            Join thousands of creators earning passive income with custom merchandise
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a href="/create" className="px-8 py-4 bg-white text-purple-900 font-semibold rounded-xl hover:bg-gray-100 transition flex items-center gap-2">
              <Zap className="w-5 h-5" />
              Create Your First Product
            </a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 border-t border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <div className="flex items-center gap-2">
              <Shirt className="w-6 h-6 text-purple-400" />
              <span className="text-white font-semibold">Javari Merch</span>
              <span className="text-gray-500">by CR AudioViz AI</span>
            </div>
            <div className="text-sm text-gray-400">
              © {new Date().getFullYear()} CR AudioViz AI, LLC. All rights reserved.
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
