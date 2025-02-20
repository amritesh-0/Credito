import React from 'react';
import { motion } from 'framer-motion';
import { ChevronRight, ShieldCheck, Lock, Zap, Users, ArrowRight } from 'lucide-react';
import { Button } from '../components/ui/button';
import { Link } from 'react-router-dom';

function Home() {
  return (
    <>
      {/* Hero Section */}
      <section className="pt-24 pb-16 bg-gradient-to-b from-blue-50 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.75 }}
              className="text-left"
            >
              <h1 className="text-5xl font-extrabold text-gray-900 mb-6 leading-tight">
                Secure Your Digital <span className="text-primary-coral">Transactions</span> with AI-Powered Protection
              </h1>
              <p className="text-xl text-gray-700 mb-8 leading-relaxed">
                Credito leverages advanced artificial intelligence to protect your business from credit card fraud in real-time, ensuring safe and secure transactions for you and your customers.
              </p>
              <div className="flex gap-4">
                <Button
                  size="lg"
                  className="group bg-primary-coral text-white hover:bg-primary-coral/90"
                  onClick={() => window.open('https://chrome.google.com/webstore', '_blank')}
                >
                  Get Started Free
                  <ChevronRight className="ml-2 group-hover:translate-x-1 transition-transform" />
                </Button>
                <Link to="/how-it-works">
                  <Button
                    size="lg"
                    variant="outline"
                    className="group"
                  >
                    Learn More
                    <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" />
                  </Button>
                </Link>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.75 }}
              className="relative hidden md:block"
            >
              <img
                src="https://images.unsplash.com/photo-1563013544-824ae1b704d3?auto=format&fit=crop&w=800"
                alt="Secure Payments"
                className="rounded-2xl shadow-2xl"
              />
              <div className="absolute -bottom-6 -left-6 bg-white p-4 rounded-lg shadow-lg">
                <div className="flex items-center gap-3">
                  <div className="bg-green-100 p-2 rounded-full">
                    <ShieldCheck className="w-6 h-6 text-green-600" />
                  </div>
                  <div>
                    <p className="font-semibold text-gray-900">Protected by AI</p>
                    <p className="text-sm text-gray-600">Real-time fraud detection</p>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-3 gap-8 text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="p-6"
            >
              <p className="text-4xl font-bold text-primary-coral mb-2">99.9%</p>
              <p className="text-gray-600">Fraud Detection Rate</p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="p-6"
            >
              <p className="text-4xl font-bold text-primary-green mb-2">50M+</p>
              <p className="text-gray-600">Transactions Protected</p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="p-6"
            >
              <p className="text-4xl font-bold text-blue-600 mb-2">10K+</p>
              <p className="text-gray-600">Business Customers</p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Why Choose Credito?</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Our comprehensive security solution provides everything you need to protect your business from fraud.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow"
            >
              <ShieldCheck className="w-12 h-12 text-primary-coral mb-4" />
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Real-time Protection</h3>
              <p className="text-gray-600">
                Instant fraud detection powered by advanced AI algorithms that adapt to new threats.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow"
            >
              <Lock className="w-12 h-12 text-primary-green mb-4" />
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Bank-Grade Security</h3>
              <p className="text-gray-600">
                Enterprise-level encryption and security protocols protect sensitive data.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow"
            >
              <Zap className="w-12 h-12 text-blue-600 mb-4" />
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Lightning Fast</h3>
              <p className="text-gray-600">
                Zero impact on transaction speed with our optimized processing system.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow"
            >
              <Users className="w-12 h-12 text-purple-600 mb-4" />
              <h3 className="text-xl font-semibold text-gray-900 mb-2">24/7 Support</h3>
              <p className="text-gray-600">
                Expert support team available around the clock to assist you.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Trusted by Industry Leaders</h2>
            <p className="text-xl text-gray-600">See what our customers have to say about Credito</p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="bg-gray-50 p-6 rounded-xl"
            >
              <div className="flex items-center mb-4">
                <img
                  src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&w=100"
                  alt="John Doe"
                  className="w-12 h-12 rounded-full mr-4"
                />
                <div>
                  <p className="font-semibold">John Doe</p>
                  <p className="text-gray-600">CEO, TechCorp</p>
                </div>
              </div>
              <p className="text-gray-700 italic">
                "Credito has revolutionized how we handle online payments. Their AI-powered system has saved us countless hours and prevented numerous fraud attempts."
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="bg-gray-50 p-6 rounded-xl"
            >
              <div className="flex items-center mb-4">
                <img
                  src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&w=100"
                  alt="Jane Smith"
                  className="w-12 h-12 rounded-full mr-4"
                />
                <div>
                  <p className="font-semibold">Jane Smith</p>
                  <p className="text-gray-600">CTO, E-Commerce Plus</p>
                </div>
              </div>
              <p className="text-gray-700 italic">
                "The level of security and peace of mind that Credito provides is unmatched. Their system is incredibly easy to integrate and use."
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="bg-gray-50 p-6 rounded-xl"
            >
              <div className="flex items-center mb-4">
                <img
                  src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=100"
                  alt="Mike Johnson"
                  className="w-12 h-12 rounded-full mr-4"
                />
                <div>
                  <p className="font-semibold">Mike Johnson</p>
                  <p className="text-gray-600">Founder, PaySafe</p>
                </div>
              </div>
              <p className="text-gray-700 italic">
                "Since implementing Credito, we've seen a 99% reduction in fraudulent transactions. Their customer support is exceptional."
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-primary-coral">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-3xl font-bold text-white mb-4">Ready to Secure Your Business?</h2>
            <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
              Join thousands of businesses that trust Credito for their payment security needs.
            </p>
            <div className="flex justify-center gap-4">
              <Button
                size="lg"
                className="bg-white text-primary-coral hover:bg-gray-100"
                onClick={() => window.open('https://chrome.google.com/webstore', '_blank')}
              >
                Get Started Free
              </Button>
              <Link to="/contact">
                <Button
                  size="lg"
                  variant="outline"
                  className="border-white text-white hover:bg-white/10"
                >
                  Contact Sales
                </Button>
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </>
  );
}

export default Home;