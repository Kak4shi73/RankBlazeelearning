import React, { useState } from 'react';
import { BookOpen, Mail, Phone, MapPin } from 'lucide-react';

const Footer: React.FC = () => {
  const [showTerms, setShowTerms] = useState(false);

  const footerLinks = {
    Company: [
      { name: 'About Us', href: '#' },
      { name: 'Our Team', href: '#' },
      { name: 'Careers', href: '#' },
      { name: 'Press', href: '#' }
    ],
    Courses: [
      { name: 'Web Development', href: '#' },
      { name: 'Data Science', href: '#' },
      { name: 'Design', href: '#' },
      { name: 'Marketing', href: '#' }
    ],
    Support: [
    ],
    Legal: [
      { name: 'Terms of Service', href: '#', onClick: () => setShowTerms(true) }
    ]
  };

  return (
    <>
      <footer className="bg-gray-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="grid lg:grid-cols-4 md:grid-cols-2 gap-8">
            {/* Brand Section */}
            <div className="lg:col-span-1">
              <div className="flex items-center space-x-2 mb-6">
                <div className="bg-gradient-to-r from-blue-600 to-purple-600 p-2 rounded-lg">
                  <BookOpen className="h-6 w-6 text-white" />
                </div>
                <span className="text-2xl font-bold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                  RankBlaze
                </span>
              </div>
              
              <p className="text-gray-300 mb-6 leading-relaxed">
                Empowering learners worldwide with cutting-edge courses and expert instruction. 
                Transform your career with RankBlaze.
              </p>
              
              <div className="space-y-3">
                <div className="flex items-center space-x-3 text-gray-300">
                  <Mail className="h-5 w-5 text-blue-400" />
                  <span>aryanrajawat.2311@gmail.com</span>
                </div>
                <div className="flex items-center space-x-3 text-gray-300">
                  <Phone className="h-5 w-5 text-blue-400" />
                  <span>+91 9891474595</span>
                </div>
                <div className="flex items-center space-x-3 text-gray-300">
                  <MapPin className="h-5 w-5 text-blue-400" />
                  <span>Gate band colony, pincode 209726, district Kannauj</span>
                </div>
              </div>
            </div>

            {/* Links Sections */}
            {Object.entries(footerLinks).map(([title, links]) => (
              <div key={title}>
                <h3 className="text-lg font-semibold mb-6">{title}</h3>
                <ul className="space-y-3">
                  {links.map((link) => (
                    <li key={link.name}>
                      <button
                        onClick={link.onClick}
                        className="text-gray-300 hover:text-white transition-colors duration-200 text-left"
                      >
                        {link.name}
                      </button>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          {/* Newsletter */}
          <div className="border-t border-gray-800 pt-8 mt-12">
            <div className="md:flex md:items-center md:justify-between">
              <div className="mb-6 md:mb-0">
                <h3 className="text-lg font-semibold mb-2">Stay Updated</h3>
                <p className="text-gray-300">Get the latest courses and updates delivered to your inbox.</p>
              </div>
              <div className="flex max-w-md">
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="flex-1 px-4 py-3 bg-gray-800 border border-gray-700 rounded-l-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent text-white"
                />
                <button className="bg-gradient-to-r from-blue-600 to-purple-600 px-6 py-3 rounded-r-lg hover:from-blue-700 hover:to-purple-700 transition-all duration-200 font-medium">
                  Subscribe
                </button>
              </div>
            </div>
          </div>

          {/* Bottom Section */}
          <div className="border-t border-gray-800 pt-8 mt-8">
            <div className="text-center">
              <div className="text-gray-300 text-sm">
                © 2024 RankBlaze. All rights reserved. Owned by Kiran Devi.
              </div>
            </div>
          </div>
        </div>
      </footer>

      {/* Terms and Conditions Modal */}
      {showTerms && (
        <div className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4">
          <div className="bg-white rounded-2xl shadow-2xl w-full max-w-4xl max-h-[90vh] overflow-hidden">
            <div className="flex items-center justify-between p-6 border-b border-gray-200">
              <h2 className="text-2xl font-bold text-gray-900">Terms and Conditions</h2>
              <button
                onClick={() => setShowTerms(false)}
                className="p-2 hover:bg-gray-100 rounded-lg transition-colors duration-200"
              >
                <svg className="h-6 w-6 text-gray-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>
            
            <div className="p-6 overflow-y-auto max-h-[calc(90vh-140px)]">
              <div className="prose max-w-none">
                <p className="text-gray-600 mb-4">
                  For the purpose of these Terms and Conditions, The term "we", "us", "our" used anywhere on this page shall mean Kiran Devi, whose registered/operational office is Gate band colony, pincode 209726, district Kannauj. "you", "your", "user", "visitor" shall mean any natural or legal person who is visiting our website and/or agreed to purchase from us.
                </p>
                
                <p className="text-gray-600 mb-4">
                  Your use of the website and/or purchase from us are governed by following Terms and Conditions:
                </p>

                <div className="space-y-4 text-gray-600">
                  <p>• The content of the pages of this website is subject to change without notice.</p>
                  
                  <p>• Neither we nor any third parties provide any warranty or guarantee as to the accuracy, timeliness, performance, completeness or suitability of the information and materials found or offered on this website for any particular purpose. You acknowledge that such information and materials may contain inaccuracies or errors and we expressly exclude liability for any such inaccuracies or errors to the fullest extent permitted by law.</p>
                  
                  <p>• Your use of any information or materials on our website and/or product pages is entirely at your own risk, for which we shall not be liable. It shall be your own responsibility to ensure that any products, services or information available through our website and/or product pages meet your specific requirements.</p>
                  
                  <p>• Our website contains material which is owned by or licensed to us. This material includes, but are not limited to, the design, layout, look, appearance and graphics. Reproduction is prohibited other than in accordance with the copyright notice, which forms part of these terms and conditions.</p>
                  
                  <p>• All trademarks reproduced in our website which are not the property of, or licensed to, the operator are acknowledged on the website.</p>
                  
                  <p>• Unauthorized use of information provided by us shall give rise to a claim for damages and/or be a criminal offense.</p>
                  
                  <p>• From time to time our website may also include links to other websites. These links are provided for your convenience to provide further information.</p>
                  
                  <p>• You may not create a link to our website from another website or document without Kiran Devi's prior written consent.</p>
                  
                  <p>• Any dispute arising out of use of our website and/or purchase with us and/or any engagement with us is subject to the laws of India.</p>
                  
                  <p>• We, shall be under no liability whatsoever in respect of any loss or damage arising directly or indirectly out of the decline of authorization for any Transaction, on Account of the Cardholder having exceeded the preset limit mutually agreed by us with our acquiring bank from time to time.</p>
                </div>

                <h3 className="text-xl font-semibold text-gray-900 mt-8 mb-4">Cancellation and Refund</h3>
                <p className="text-gray-600 mb-4">No cancellations & Refunds are entertained.</p>

                <h3 className="text-xl font-semibold text-gray-900 mt-8 mb-4">Shipping and Delivery</h3>
                <p className="text-gray-600">Shipping is not applicable for business.</p>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Footer;