import React, { useState } from 'react';

const ContactPage = () => {
  React.useEffect(() => {
    document.title = "PetCare Vet | Contact Us";
  }, []);

  const [notification, setNotification] = useState('');
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setNotification('');

    const form = e.target;
    const formData = new FormData(form);

    try {
      const response = await fetch('https://formsubmit.co/ajax/m.dgamal456@gmail.com', {
        method: 'POST',
        headers: { 'Accept': 'application/json' },
        body: formData
      });

      if (response.ok) {
        setNotification('Thank you! We will reply to you as soon as possible.');
        form.reset();
      } else {
        const data = await response.json();
        setNotification(data.message || 'Oops! Something went wrong.');
      }
    } catch (error) {
      setNotification('Oops! Something went wrong.');
    }

    setLoading(false);
  };

  return (
    <div className="py-12">
      <div className="container mx-auto px-4">
        <div className="max-w-5xl mx-auto">
          <h1 className="text-4xl font-bold mb-8 text-center">Contact Us</h1>

          <div className="bg-white rounded-lg shadow-lg overflow-hidden mb-8">
            <div className="md:flex">
              <div className="md:w-1/2 p-8">
                <h2 className="text-2xl font-semibold mb-6">Get In Touch</h2>

                <form className="space-y-4" onSubmit={handleSubmit}>
                  <input type="hidden" name="_captcha" value="false" />

                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">Full Name</label>
                    <input type="text" id="name" name="name" required className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-vet-blue" />
                  </div>

                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">Email Address</label>
                    <input type="email" id="email" name="email" required className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-vet-blue" />
                  </div>

                  <div>
                    <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-1">Subject</label>
                    <input type="text" id="subject" name="_subject" required className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-vet-blue" />
                  </div>

                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">Message</label>
                    <textarea id="message" name="message" rows={5} required className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-vet-blue"></textarea>
                  </div>

                  <div>
                    <button type="submit" disabled={loading} className="bg-vet-blue hover:bg-vet-darkblue text-white px-6 py-3 rounded-md font-semibold transition-colors disabled:opacity-50">
                      {loading ? 'Sending...' : 'Send Message'}
                    </button>
                  </div>
                </form>

                {notification && (
                  <div className="mt-4 p-3 bg-green-100 text-green-800 rounded">
                    {notification}
                  </div>
                )}
              </div>

              <div className="md:w-1/2 bg-gray-100 p-8">
                <h2 className="text-2xl font-semibold mb-6">Contact Information</h2>

                <div className="space-y-4">
                  <div>
                    <h3 className="text-lg font-medium mb-2">Address</h3>
                    <p className="text-gray-600">
                      J7F9+WP8, El Sheikh Zayed, Ismailia 3, Ismailia Governorate 8366004
                    </p>
                  </div>

                  <div>
                    <h3 className="text-lg font-medium mb-2">Phone</h3>
                    <a href="tel:+201286472342" className="text-theme-deepsky font-semibold hover:underline block">
                      +20 128 647 2342
                    </a>
                  </div>

                  <div>
                    <h3 className="text-lg font-medium mb-2">WhatsApp</h3>
                    <a
                      href="https://wa.me/201272151734"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-green-600 font-semibold hover:underline block"
                    >
                      +20 127 215 1734
                    </a>
                  </div>

                  <div>
                    <h3 className="text-lg font-medium mb-2">Email</h3>
                    <p className="text-gray-600">info@petcarevet.com</p>
                  </div>

                  <div>
                    <h3 className="text-lg font-medium mb-2">Business Hours</h3>
                    <ul className="text-gray-600">
                      <li className="flex justify-between">
                        <span>Sunday - Wednesday:</span>
                        <span>8:00 AM - 11:00 PM</span>
                      </li>
                      <li className="flex justify-between">
                        <span>Friday:</span>
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
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3433.32581284351!2d32.267235870015476!3d30.624774064139142!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14f85981bc0575c9%3A0x79c5e695041c526d!2z2YPZhNmK2Kkg2KfZhNi32Kgg2KfZhNio2YrYt9ix2Yk!5e0!3m2!1sen!2seg!4v1749036344795!5m2!1sen!2seg"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="PetCare Vet Location"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactPage;
