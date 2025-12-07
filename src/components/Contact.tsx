import { Mail, MapPin, Phone, Send } from 'lucide-react';
import { useState } from 'react';

export function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // In a real application, you would send this data to a backend
    setIsSubmitted(true);
    setTimeout(() => {
      setIsSubmitted(false);
      setFormData({ name: '', email: '', message: '' });
    }, 3000);
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <section id="contact" className="py-20 bg-gray-50">
      <div className="max-w-6xl mx-auto px-6">
        <h2 className="text-center mb-4">Get In Touch</h2>
        <p className="text-center text-gray-600 mb-12 max-w-2xl mx-auto">
          Have a project in mind or just want to chat? Feel free to reach out!
        </p>

        <div className="grid md:grid-cols-2 gap-12">
          <div>
            <h3 className="mb-6">Contact Information</h3>
            
            <div className="space-y-4 mb-8">
              <div className="flex items-start gap-4">
                <div className="p-3 bg-blue-100 text-blue-600 rounded-lg">
                  <Mail size={24} />
                </div>
                <div>
                  <p className="text-gray-600">Email</p>
                  <a
                    href="mailto:hello@example.com"
                    className="text-blue-600 hover:underline"
                  >
                    hello@example.com
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="p-3 bg-blue-100 text-blue-600 rounded-lg">
                  <Phone size={24} />
                </div>
                <div>
                  <p className="text-gray-600">Phone</p>
                  <a href="tel:+1234567890" className="text-blue-600 hover:underline">
                    +1 (234) 567-890
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="p-3 bg-blue-100 text-blue-600 rounded-lg">
                  <MapPin size={24} />
                </div>
                <div>
                  <p className="text-gray-600">Location</p>
                  <p>San Francisco, CA</p>
                </div>
              </div>
            </div>

            <div className="p-6 bg-blue-50 rounded-lg">
              <p className="text-gray-700">
                I&apos;m always interested in hearing about new projects and opportunities.
                Whether you have a question or just want to say hi, I&apos;ll try my best
                to get back to you!
              </p>
            </div>
          </div>

          <div>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block mb-2 text-gray-700">
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600"
                  placeholder="Your name"
                />
              </div>

              <div>
                <label htmlFor="email" className="block mb-2 text-gray-700">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600"
                  placeholder="your.email@example.com"
                />
              </div>

              <div>
                <label htmlFor="message" className="block mb-2 text-gray-700">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={5}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600 resize-none"
                  placeholder="Your message..."
                />
              </div>

              <button
                type="submit"
                className="w-full flex items-center justify-center gap-2 px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
              >
                {isSubmitted ? (
                  <>Sent Successfully!</>
                ) : (
                  <>
                    Send Message
                    <Send size={18} />
                  </>
                )}
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
