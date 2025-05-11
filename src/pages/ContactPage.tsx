
import React from 'react';

const ContactPage = () => {
  React.useEffect(() => {
    document.title = "PetCare Vet | Contact Us";
  }, []);
  
  return (
    <div className="py-12 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="max-w-5xl mx-auto">
          <h1 className="text-4xl font-bold mb-8 text-center">Contact Us</h1>
          
          <div className="bg-white rounded-lg shadow-lg overflow-hidden mb-8">
            <div className="md:flex">
              <div className="md:w-1/2 p-8">
                <h2 className="text-2xl font-semibold mb-6">Get In Touch</h2>
                
                <form className="space-y-4">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">Full Name</label>
                    <input 
                      type="text" 
                      id="name" 
                      name="name" 
                      className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-vet-blue" 
                      placeholder="Your name"
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">Email Address</label>
                    <input 
                      type="email" 
                      id="email" 
                      name="email" 
                      className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-vet-blue" 
                      placeholder="Your email"
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-1">Subject</label>
                    <input 
                      type="text" 
                      id="subject" 
                      name="subject" 
                      className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-vet-blue" 
                      placeholder="Message subject"
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">Message</label>
                    <textarea 
                      id="message" 
                      name="message" 
                      rows={5} 
                      className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-vet-blue" 
                      placeholder="Your message"
                    />
                  </div>
                  
                  <div>
                    <button 
                      type="submit" 
                      className="bg-vet-blue hover:bg-vet-darkblue text-white px-6 py-3 rounded-md font-semibold transition-colors"
                    >
                      Send Message
                    </button>
                  </div>
                </form>
              </div>
              
              <div className="md:w-1/2 bg-gray-100 p-8">
                <h2 className="text-2xl font-semibold mb-6">Contact Information</h2>
                
                <div className="space-y-4">
                  <div>
                    <h3 className="text-lg font-medium mb-2">Address</h3>
                    <p className="text-gray-600">
                      123 Pet Street<br />
                      Vet City, VC 12345<br />
                      United States
                    </p>
                  </div>
                  
                  <div>
                    <h3 className="text-lg font-medium mb-2">Phone</h3>
                    <p className="text-gray-600">(123) 456-7890</p>
                  </div>
                  
                  <div>
                    <h3 className="text-lg font-medium mb-2">Email</h3>
                    <p className="text-gray-600">info@petcarevet.com</p>
                  </div>
                  
                  <div>
                    <h3 className="text-lg font-medium mb-2">Business Hours</h3>
                    <ul className="text-gray-600">
                      <li className="flex justify-between">
                        <span>Monday - Friday:</span>
                        <span>8:00 AM - 6:00 PM</span>
                      </li>
                      <li className="flex justify-between">
                        <span>Saturday:</span>
                        <span>9:00 AM - 4:00 PM</span>
                      </li>
                      <li className="flex justify-between">
                        <span>Sunday:</span>
                        <span>Closed</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          <div className="bg-white rounded-lg shadow-lg overflow-hidden">
            <div className="h-96 w-full">
              {/* Replace with actual Google Maps embed or any map component */}
              <div className="w-full h-full bg-gray-300 flex items-center justify-center">
                <p className="text-gray-600">Map Location Placeholder</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactPage;
