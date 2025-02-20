import React from 'react';
import { motion } from 'framer-motion';
import { Shield, Lock, Eye, FileCheck, Bell, RefreshCw, UserCheck, HelpCircle } from 'lucide-react';
import { Button } from '../components/ui/button';
import { Link } from 'react-router-dom';

function Privacy() {
  const sections = [
    {
      title: "Data Collection",
      icon: <Shield className="w-8 h-8 text-primary-coral" />,
      content: "We collect only essential data required for fraud detection, including transaction patterns and security-relevant information. Personal data is minimized and encrypted using industry-standard protocols.",
      details: [
        "Payment transaction metadata",
        "Device security information",
        "Authentication logs",
        "Security-relevant user interactions"
      ]
    },
    {
      title: "Data Usage & Processing",
      icon: <Lock className="w-8 h-8 text-primary-green" />,
      content: "Your data is processed solely for fraud detection and security enhancement. We employ advanced encryption and secure processing methods to ensure data integrity and confidentiality.",
      details: [
        "Real-time fraud detection",
        "Security pattern analysis",
        "System improvement",
        "Threat prevention"
      ]
    },
    {
      title: "Data Protection",
      icon: <Eye className="w-8 h-8 text-blue-600" />,
      content: "We implement multiple layers of security measures to protect your data, including end-to-end encryption, secure data centers, and regular security audits.",
      details: [
        "256-bit encryption",
        "Regular security audits",
        "Secure data centers",
        "Access control systems"
      ]
    },
    {
      title: "Your Privacy Rights",
      icon: <UserCheck className="w-8 h-8 text-purple-600" />,
      content: "You have complete control over your data. Access, modify, or delete your information at any time through your dashboard or by contacting our privacy team.",
      details: [
        "Right to access",
        "Right to rectification",
        "Right to erasure",
        "Right to data portability"
      ]
    }
  ];

  const additionalInfo = [
    {
      title: "Regular Updates",
      icon: <RefreshCw className="w-6 h-6 text-primary-coral" />,
      content: "We regularly update our privacy practices to maintain the highest standards of data protection."
    },
    {
      title: "Compliance",
      icon: <FileCheck className="w-6 h-6 text-primary-green" />,
      content: "We comply with GDPR, CCPA, and other relevant data protection regulations."
    },
    {
      title: "Notifications",
      icon: <Bell className="w-6 h-6 text-blue-600" />,
      content: "We'll notify you promptly about any changes to our privacy policy or data handling practices."
    },
    {
      title: "Support",
      icon: <HelpCircle className="w-6 h-6 text-purple-600" />,
      content: "Our privacy team is available 24/7 to address any concerns about your data."
    }
  ];

  return (
    <div className="pt-24 pb-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h1 className="text-5xl font-bold text-gray-900 mb-6">
            Privacy Policy & Data Protection
          </h1>
          <p className="text-xl text-gray-700 max-w-3xl mx-auto leading-relaxed">
            At Credito, we take your privacy seriously. Learn how we protect your data while providing industry-leading fraud prevention.
          </p>
        </motion.div>

        {/* Main Sections */}
        <div className="grid md:grid-cols-2 gap-8 mb-16">
          {sections.map((section, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              className="bg-white/60 backdrop-blur-sm rounded-xl p-8 shadow-lg"
            >
              <div className="flex items-center mb-4">
                {section.icon}
                <h2 className="text-2xl font-semibold ml-3">{section.title}</h2>
              </div>
              <p className="text-gray-700 mb-4 leading-relaxed">{section.content}</p>
              <ul className="space-y-2">
                {section.details.map((detail, idx) => (
                  <li key={idx} className="flex items-center text-gray-600">
                    <div className="w-1.5 h-1.5 bg-primary-coral rounded-full mr-2" />
                    {detail}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>

        {/* Additional Information */}
        <div className="grid md:grid-cols-4 gap-6 mb-16">
          {additionalInfo.map((info, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 + index * 0.1 }}
              className="bg-gray-50 rounded-xl p-6 text-center"
            >
              <div className="bg-white w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4 shadow-sm">
                {info.icon}
              </div>
              <h3 className="text-lg font-semibold mb-2">{info.title}</h3>
              <p className="text-gray-600">{info.content}</p>
            </motion.div>
          ))}
        </div>

        {/* GDPR Compliance Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8 }}
          className="bg-primary-coral/10 rounded-xl p-8 mb-16"
        >
          <h2 className="text-2xl font-bold text-gray-900 mb-6 text-center">GDPR & International Compliance</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-xl font-semibold mb-3">EU Data Protection</h3>
              <p className="text-gray-700 leading-relaxed">
                We fully comply with GDPR requirements and maintain strict data protection standards for EU citizens. Your data is processed in accordance with EU regulations and stored in secure, EU-approved facilities.
              </p>
            </div>
            <div>
              <h3 className="text-xl font-semibold mb-3">International Standards</h3>
              <p className="text-gray-700 leading-relaxed">
                Our privacy practices meet or exceed international data protection standards, including CCPA, PIPEDA, and other regional requirements. We regularly audit our compliance with global privacy regulations.
              </p>
            </div>
          </div>
        </motion.div>

        {/* Contact Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.9 }}
          className="text-center bg-white/60 backdrop-blur-sm rounded-xl p-12 shadow-lg"
        >
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Have Privacy Concerns?</h2>
          <p className="text-xl text-gray-700 mb-8 max-w-2xl mx-auto">
            Our dedicated privacy team is here to help. Contact us for any questions about your data or our privacy practices.
          </p>
          <div className="flex justify-center gap-4">
            <Link to="/contact">
              <Button
                size="lg"
                className="bg-primary-coral text-white hover:bg-primary-coral/90"
              >
                Contact Privacy Team
              </Button>
            </Link>
            <Button
              size="lg"
              variant="outline"
              className="border-primary-coral text-primary-coral hover:bg-primary-coral/10"
              onClick={() => window.open('/privacy.pdf', '_blank')}
            >
              Download Full Policy
            </Button>
          </div>
        </motion.div>
      </div>
    </div>
  );
}

export default Privacy;