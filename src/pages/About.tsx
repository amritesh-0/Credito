import React from 'react';
import { motion } from 'framer-motion';
import { Shield, Users, Lock, Target, Lightbulb, Award, Globe, Heart } from 'lucide-react';
import { Button } from '../components/ui/button';
import { Link } from 'react-router-dom';

function About() {
  return (
    <div className="pt-24 pb-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Hero Section */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.75 }}
          className="text-center mb-16"
        >
          <h1 className="text-5xl font-extrabold text-gray-900 tracking-tight mb-6">
            Pioneering the Future of
            <span className="bg-gradient-to-r from-primary-coral to-primary-green bg-clip-text text-transparent"> Payment Security</span>
          </h1>
          <p className="text-xl text-gray-700 max-w-3xl mx-auto leading-relaxed">
            At Credito, we're more than just a security company. We're a team of passionate innovators dedicated to creating a safer digital payment ecosystem for businesses worldwide.
          </p>
        </motion.div>

        {/* Mission & Vision Section */}
        <div className="grid md:grid-cols-2 gap-12 mb-16">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2 }}
            className="bg-white/60 backdrop-blur-sm rounded-xl p-8 shadow-lg"
          >
            <Target className="w-12 h-12 text-primary-coral mb-4" />
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Our Mission</h2>
            <p className="text-lg text-gray-700 leading-relaxed">
              To revolutionize payment security through innovative AI technology, making secure transactions accessible to businesses of all sizes while maintaining the highest standards of privacy and reliability.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.3 }}
            className="bg-white/60 backdrop-blur-sm rounded-xl p-8 shadow-lg"
          >
            <Lightbulb className="w-12 h-12 text-primary-green mb-4" />
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Our Vision</h2>
            <p className="text-lg text-gray-700 leading-relaxed">
              To become the global standard in payment security, creating a world where businesses can focus on growth while we handle their security concerns with cutting-edge AI technology.
            </p>
          </motion.div>
        </div>

        {/* Values Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          className="bg-white/60 backdrop-blur-sm rounded-xl p-8 shadow-lg mb-16"
        >
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Our Core Values</h2>
          <div className="grid md:grid-cols-4 gap-8">
            <div className="text-center">
              <Shield className="w-12 h-12 text-primary-coral mx-auto mb-4" />
              <h3 className="text-xl font-semibold text-gray-800 mb-2">Security First</h3>
              <p className="text-gray-600">We prioritize the security and privacy of our users above all else.</p>
            </div>
            <div className="text-center">
              <Award className="w-12 h-12 text-primary-green mx-auto mb-4" />
              <h3 className="text-xl font-semibold text-gray-800 mb-2">Excellence</h3>
              <p className="text-gray-600">We strive for excellence in everything we do, from code to customer service.</p>
            </div>
            <div className="text-center">
              <Globe className="w-12 h-12 text-blue-600 mx-auto mb-4" />
              <h3 className="text-xl font-semibold text-gray-800 mb-2">Innovation</h3>
              <p className="text-gray-600">We continuously innovate to stay ahead of emerging security threats.</p>
            </div>
            <div className="text-center">
              <Heart className="w-12 h-12 text-red-500 mx-auto mb-4" />
              <h3 className="text-xl font-semibold text-gray-800 mb-2">Customer Focus</h3>
              <p className="text-gray-600">Our customers' success is our success. We're dedicated to their growth.</p>
            </div>
          </div>
        </motion.div>

        {/* Team Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
          className="mb-16"
        >
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Meet Our Leadership Team</h2>
          <div className="flex flex-wrap justify-center gap-12">
            <div className="text-center w-64">
              <img src="https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&w=300" alt="Amritesh Kumar" className="w-32 h-32 rounded-full mx-auto mb-4 object-cover" />
              <h3 className="text-xl font-semibold text-gray-800">Amritesh Kumar</h3>
              <p className="text-gray-600">23FE10CAI00318</p>
              <p className="text-sm text-gray-500 mt-2">CSE(AI/ML)</p>
            </div>
            <div className="text-center w-64">
              <img src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=300" alt="Ananya Khandelwal" className="w-32 h-32 rounded-full mx-auto mb-4 object-cover" />
              <h3 className="text-xl font-semibold text-gray-800">Ananya Khandelwal</h3>
              <p className="text-gray-600">23FE10CAI00139</p>
              <p className="text-sm text-gray-500 mt-2">CSE(AI/ML)</p>
            </div>
            <div className="text-center w-64">
              <img src="https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&w=300" alt="Ananya Maheswari" className="w-32 h-32 rounded-full mx-auto mb-4 object-cover" />
              <h3 className="text-xl font-semibold text-gray-800">Ananya Maheswari</h3>
              <p className="text-gray-600">23FE10CAI00015</p>
              <p className="text-sm text-gray-500 mt-2">CSE(AI/ML)</p>
            </div>
          </div>
        </motion.div>

        {/* Achievement Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6 }}
          className="bg-primary-coral rounded-xl text-white p-12 text-center mb-16"
        >
          <h2 className="text-3xl font-bold mb-8">Our Impact in Numbers</h2>
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <p className="text-4xl font-bold mb-2">$500M+</p>
              <p className="text-lg">Fraud Prevented</p>
            </div>
            <div>
              <p className="text-4xl font-bold mb-2">10K+</p>
              <p className="text-lg">Businesses Protected</p>
            </div>
            <div>
              <p className="text-4xl font-bold mb-2">99.9%</p>
              <p className="text-lg">Detection Rate</p>
            </div>
            <div>
              <p className="text-4xl font-bold mb-2">24/7</p>
              <p className="text-lg">Support Available</p>
            </div>
          </div>
        </motion.div>

        {/* CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.7 }}
          className="text-center"
        >
          <h2 className="text-3xl font-bold text-gray-900 mb-6">Ready to Join Us?</h2>
          <p className="text-xl text-gray-700 mb-8">
            Start protecting your business with Credito today.
          </p>
          <div className="flex justify-center gap-4">
            <Button
              size="lg"
              className="bg-primary-coral text-white hover:bg-primary-coral/90"
              onClick={() => window.open('https://chrome.google.com/webstore', '_blank')}
            >
              Get Started
            </Button>
            <Link to="/contact">
              <Button
                size="lg"
                variant="outline"
                className="border-primary-coral text-primary-coral hover:bg-primary-coral/10"
              >
                Contact Us
              </Button>
            </Link>
          </div>
        </motion.div>
      </div>
    </div>
  );
}

export default About;