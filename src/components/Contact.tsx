import React from 'react';
import { MapPin, Phone, Mail, Clock, Truck } from 'lucide-react';

const Contact: React.FC = () => {
  return (
    <section id="contact" className="section">
      <div className="container-custom">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <h2 className="mb-4">Get In Touch</h2>
          <p className="text-lg text-gray-600">
            Have questions or want to place an order? We're here to help with all your hydration needs.
          </p>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Contact info */}
          <div className="lg:col-span-1">
            <div className="bg-white shadow-lg rounded-xl p-8 h-full">
              <h3 className="text-xl font-semibold mb-6">Contact Information</h3>
              
              <div className="space-y-6">
                <div className="flex items-start">
                  <MapPin className="text-primary-500 mt-1 mr-4" size={20} />
                  <div>
                    <h4 className="font-medium mb-1">Our Location</h4>
                    <p className="text-gray-600">
                      123 Water Street, Hydration City<br />
                      Tamil Nadu, India 600001
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <Phone className="text-primary-500 mt-1 mr-4" size={20} />
                  <div>
                    <h4 className="font-medium mb-1">Phone Number</h4>
                    <p className="text-gray-600">
                      +91 98765 43210<br />
                      +91 12345 67890
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <Mail className="text-primary-500 mt-1 mr-4" size={20} />
                  <div>
                    <h4 className="font-medium mb-1">Email</h4>
                    <p className="text-gray-600">
                      info@gangothiriaqua.com<br />
                      orders@gangothiriaqua.com
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <Clock className="text-primary-500 mt-1 mr-4" size={20} />
                  <div>
                    <h4 className="font-medium mb-1">Business Hours</h4>
                    <p className="text-gray-600">
                      Monday - Saturday: 9:00 AM - 6:00 PM<br />
                      Sunday: Closed
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <Truck className="text-primary-500 mt-1 mr-4" size={20} />
                  <div>
                    <h4 className="font-medium mb-1">Delivery Areas</h4>
                    <p className="text-gray-600">
                      We deliver across Tamil Nadu with special same-day delivery available in select areas.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          {/* Contact form */}
          <div className="lg:col-span-2">
            <div className="bg-white shadow-lg rounded-xl p-8">
              <h3 className="text-xl font-semibold mb-6">Send Us a Message</h3>
              
              <form>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                      Your Name
                    </label>
                    <input 
                      type="text" 
                      id="name" 
                      className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-primary-500 focus:border-primary-500 transition-colors"
                      placeholder="John Doe"
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                      Email Address
                    </label>
                    <input 
                      type="email" 
                      id="email" 
                      className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-primary-500 focus:border-primary-500 transition-colors"
                      placeholder="john@example.com"
                    />
                  </div>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                  <div>
                    <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-2">
                      Phone Number
                    </label>
                    <input 
                      type="tel" 
                      id="phone" 
                      className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-primary-500 focus:border-primary-500 transition-colors"
                      placeholder="+91 98765 43210"
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-2">
                      Subject
                    </label>
                    <select 
                      id="subject" 
                      className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-primary-500 focus:border-primary-500 transition-colors"
                    >
                      <option value="">Select a subject</option>
                      <option value="order">Place an Order</option>
                      <option value="inquiry">Product Inquiry</option>
                      <option value="support">Support</option>
                      <option value="feedback">Feedback</option>
                      <option value="other">Other</option>
                    </select>
                  </div>
                </div>
                
                <div className="mb-6">
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                    Your Message
                  </label>
                  <textarea 
                    id="message" 
                    rows={5} 
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-primary-500 focus:border-primary-500 transition-colors resize-none"
                    placeholder="How can we help you today?"
                  ></textarea>
                </div>
                
                <button type="submit" className="btn-primary w-full md:w-auto">
                  Send Message
                </button>
              </form>
            </div>
          </div>
        </div>
        
        {/* Map */}
        <div className="mt-12 rounded-xl overflow-hidden shadow-lg h-80">
          <iframe 
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d497698.66089299855!2d79.92880801656513!3d13.047985325424801!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a5265ea4f7d3361%3A0x6e61a70b6863d433!2sChennai%2C%20Tamil%20Nadu!5e0!3m2!1sen!2sin!4v1698835651259!5m2!1sen!2sin" 
            width="100%" 
            height="100%" 
            style={{ border: 0 }} 
            allowFullScreen 
            loading="lazy" 
            referrerPolicy="no-referrer-when-downgrade"
            title="Gangothiri Aqua location"
          ></iframe>
        </div>
      </div>
    </section>
  );
};

export default Contact;