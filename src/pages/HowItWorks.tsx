import React from 'react';
import { motion } from 'framer-motion';
import {
  Download,
  ShieldCheck,
  CreditCard,
  KeyRound,
  Zap,
  LineChart,
  Bell,
  Settings,
  CheckCircle
} from 'lucide-react';
import { Button } from '../components/ui/button';
import { Link } from 'react-router-dom';

function HowItWorks() {
  const steps = [
    {
      title: "Quick Installation",
      description: "Install Credito directly from the Chrome Web Store in just a few clicks. No complex setup required.",
      icon: <Download className="w-12 h-12 text-primary-coral" />,
    },
    {
      title: "Smart Activation",
      description: "Our extension automatically activates when you process payments, providing seamless protection.",
      icon: <KeyRound className="w-12 h-12 text-primary-green" />,
    },
    {
      title: "Real-time Analysis",
      description: "Advanced AI analyzes transactions instantly, checking multiple fraud indicators simultaneously.",
      icon: <Zap className="w-12 h-12 text-blue-600" />,
    },
    {
      title: "Instant Protection",
      description: "Suspicious transactions are blocked immediately, while legitimate ones proceed without delay.",
      icon: <ShieldCheck className="w-12 h-12 text-purple-600" />,
    }
  ];

  const features = [
    {
      title: "Transaction Monitoring",
      description: "24/7 monitoring of all payment activities with real-time threat detection.",
      icon: <CreditCard className="w-8 h-8 text-primary-coral" />,
    },
    {
      title: "Performance Analytics",
      description: "Detailed insights into your security metrics and transaction patterns.",
      icon: <LineChart className="w-8 h-8 text-primary-green" />,
    },
    {
      title: "Instant Alerts",
      description: "Immediate notifications for any suspicious activities or potential threats.",
      icon: <Bell className="w-8 h-8 text-blue-600" />,
    },
    {
      title: "Custom Rules",
      description: "Tailor security settings to match your business needs and risk tolerance.",
      icon: <Settings className="w-8 h-8 text-purple-600" />,
    }
  ];

  return (
    <div className="pt-24 pb-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Hero Section */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h1 className="text-5xl font-bold text-gray-900 mb-6">
            How <span className="text-primary-coral">Credito</span> Works
          </h1>
          <p className="text-xl text-gray-700 max-w-3xl mx-auto leading-relaxed">
            Our advanced AI-powered system works seamlessly in the background to protect your business from fraud, while you focus on growth.
          </p>
        </motion.div>

        {/* Main Steps */}
        <div className="grid md:grid-cols-4 gap-8 mb-16">
          {steps.map((step, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              className="bg-white/60 backdrop-blur-sm p-6 rounded-xl shadow-lg hover:shadow-xl transition-all"
            >
              <div className="bg-gray-50 p-4 rounded-full inline-block mb-4">
                {step.icon}
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">{step.title}</h3>
              <p className="text-gray-600 leading-relaxed">{step.description}</p>
            </motion.div>
          ))}
        </div>

        {/* Technology Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          className="bg-gradient-to-r from-primary-coral to-primary-green p-12 rounded-xl text-white mb-16"
        >
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Powered by Advanced Technology</h2>
            <p className="text-lg opacity-90 max-w-2xl mx-auto">
              Our AI engine processes millions of data points in real-time to provide the most accurate fraud detection available.
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white/10 backdrop-blur-sm p-6 rounded-xl">
              <h3 className="text-xl font-semibold mb-2">Machine Learning</h3>
              <p className="opacity-90">
                Continuously learning from new fraud patterns to improve detection accuracy.
              </p>
            </div>
            <div className="bg-white/10 backdrop-blur-sm p-6 rounded-xl">
              <h3 className="text-xl font-semibold mb-2">Neural Networks</h3>
              <p className="opacity-90">
                Deep learning models analyze complex patterns and identify suspicious behaviors.</p>
            </div>
            <div className="bg-white/10 backdrop-blur-sm p-6 rounded-xl">
              <h3 className="text-xl font-semibold mb-2">Real-time Processing</h3>
              <p className="opacity-90">
                Lightning-fast analysis ensures zero impact on transaction speed.
              </p>
            </div>
          </div>
        </motion.div>

        {/* Features Grid */}
        <div className="mb-16">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Key Features</h2>
            <p className="text-xl text-gray-700">
              Comprehensive protection for your business
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: index * 0.1 }}
                className="bg-white/60 backdrop-blur-sm p-6 rounded-xl shadow-lg flex items-start gap-4"
              >
                <div className="bg-gray-50 p-3 rounded-lg">
                  {feature.icon}
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">{feature.title}</h3>
                  <p className="text-gray-600">{feature.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Integration Steps */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6 }}
          className="bg-gray-50 rounded-xl p-8 mb-16"
        >
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Simple Integration Process</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="bg-primary-coral/10 w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-xl font-bold text-primary-coral">1</span>
              </div>
              <h3 className="text-xl font-semibold mb-2">Install Extension</h3>
              <p className="text-gray-600">Add Credito to Chrome with one click</p>
            </div>
            <div className="text-center">
              <div className="bg-primary-green/10 w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-xl font-bold text-primary-green">2</span>
              </div>
              <h3 className="text-xl font-semibold mb-2">Create Account</h3>
              <p className="text-gray-600">Quick setup with your business details</p>
            </div>
            <div className="text-center">
              <div className="bg-blue-600/10 w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-xl font-bold text-blue-600">3</span>
              </div>
              <h3 className="text-xl font-semibold mb-2">Start Protection</h3>
              <p className="text-gray-600">Immediate fraud protection activation</p>
            </div>
          </div>
        </motion.div>

        {/* CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.7 }}
          className="text-center bg-white/60 backdrop-blur-sm rounded-xl p-12 shadow-lg"
        >
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Ready to Secure Your Business?</h2>
          <p className="text-xl text-gray-700 mb-8 max-w-2xl mx-auto">
            Join thousands of businesses already protected by Credito's advanced fraud prevention system.
          </p>
          <div className="flex justify-center gap-4">
            <Button
              size="lg"
              className="bg-primary-coral text-white hover:bg-primary-coral/90"
              onClick={() => window.open('https://chrome.google.com/webstore', '_blank')}
            >
              Install Now
              <CheckCircle className="ml-2 w-5 h-5" />
            </Button>
            <Link to="/contact">
              <Button
                size="lg"
                variant="outline"
                className="border-primary-coral text-primary-coral hover:bg-primary-coral/10"
              >
                Talk to Sales
              </Button>
            </Link>
          </div>
        </motion.div>
      </div>
    </div>
  );
}

export default HowItWorks;