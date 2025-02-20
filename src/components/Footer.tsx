import React from 'react';
import { Link } from 'react-router-dom';

function Footer() {
  return (
    <footer className="bg-white/80 py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-4 gap-8">
          <div>
            <h3 className="text-lg font-semibold mb-4">Company</h3>
            <ul className="space-y-2">
              <li><Link to="/about" className="text-primary-text/80 hover:text-primary-coral">About Us</Link></li>
              <li><Link to="/contact" className="text-primary-text/80 hover:text-primary-coral">Contact</Link></li>
              <li><a href="#" className="text-primary-text/80 hover:text-primary-coral">Careers</a></li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4">Resources</h3>
            <ul className="space-y-2">
              <li><a href="#" className="text-primary-text/80 hover:text-primary-coral">Blog</a></li>
              <li><a href="#" className="text-primary-text/80 hover:text-primary-coral">Documentation</a></li>
              <li><a href="#" className="text-primary-text/80 hover:text-primary-coral">Support</a></li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4">Legal</h3>
            <ul className="space-y-2">
              <li><Link to="/privacy" className="text-primary-text/80 hover:text-primary-coral">Privacy Policy</Link></li>
              <li><a href="#" className="text-primary-text/80 hover:text-primary-coral">Terms of Service</a></li>
              <li><a href="#" className="text-primary-text/80 hover:text-primary-coral">Cookie Policy</a></li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4">Connect</h3>
            <ul className="space-y-2">
              <li><a href="" className="text-primary-text/80 hover:text-primary-coral">Twitter</a></li>
              <li><a href="" className="text-primary-text/80 hover:text-primary-coral">LinkedIn</a></li>
              <li><a href="" className="text-primary-text/80 hover:text-primary-coral">GitHub</a></li>
            </ul>
          </div>
        </div>
        <div className="mt-8 pt-8 border-t border-gray-200">
          <p className="text-center text-primary-text/60">
            © 2025 Credito. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;