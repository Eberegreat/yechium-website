import React from 'react';
import Button from '../components/ui/Button';

// Icon components
const LocationIcon: React.FC<{ className?: string }> = ({ className }) => (
    <svg xmlns="http://www.w3.org/2000/svg" className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
        <path strokeLinecap="round" strokeLinejoin="round" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
        <path strokeLinecap="round" strokeLinejoin="round" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
    </svg>
);

const MailIcon: React.FC<{ className?: string }> = ({ className }) => (
    <svg xmlns="http://www.w3.org/2000/svg" className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
        <path strokeLinecap="round" strokeLinejoin="round" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
    </svg>
);

const PhoneIcon: React.FC<{ className?: string }> = ({ className }) => (
    <svg xmlns="http://www.w3.org/2000/svg" className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
        <path strokeLinecap="round" strokeLinejoin="round" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
    </svg>
);

const FacebookIcon: React.FC<{ className?: string }> = ({ className }) => (
  <svg className={className} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" fill="currentColor">
    <path d="M504 256C504 119 393 8 256 8S8 119 8 256c0 123.78 90.69 226.38 209.25 245V327.69h-63V256h63v-54.64c0-62.15 37-96.48 93.67-96.48 27.14 0 55.52 4.84 55.52 4.84v61h-31.28c-30.8 0-40.41 19.12-40.41 38.73V256h68.78l-11 71.69h-57.78V501C413.31 482.38 504 379.78 504 256z"/>
  </svg>
);


const ContactPage: React.FC = () => {
  return (
    <div className="bg-brand-light py-16 md:py-24">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-display font-semibold text-brand-dark">Get in Touch</h1>
          <p className="mt-4 text-lg text-brand-dark/80">
            We'd love to hear from you. Whether you have a question about our products, partnerships, or just want to say hello, our team is ready to answer all your questions.
          </p>
        </div>
        
        <div className="mt-16 max-w-4xl mx-auto grid md:grid-cols-2 gap-12 bg-white p-8 md:p-12 rounded-lg shadow-md border border-gray-200">
          {/* Contact Form */}
          <div className="order-2 md:order-1">
            <h2 className="text-2xl font-display font-semibold text-brand-dark mb-6">Send us a Message</h2>
            <form 
              action="https://formspree.io/f/manjkzrz"
              method="POST"
              className="space-y-6"
            >
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-brand-dark/90">Full Name</label>
                <input type="text" id="name" name="name" required className="mt-1 block w-full px-3 py-2 bg-yellow-50 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-brand-primary focus:border-brand-primary" />
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-brand-dark/90">Email Address</label>
                <input type="email" id="email" name="email" required className="mt-1 block w-full px-3 py-2 bg-yellow-50 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-brand-primary focus:border-brand-primary" />
              </div>
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-brand-dark/90">Message</label>
                <textarea id="message" name="message" rows={5} required className="mt-1 block w-full px-3 py-2 bg-yellow-50 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-brand-primary focus:border-brand-primary"></textarea>
              </div>
              <div>
                <Button type="submit" className="w-full">Submit</Button>
              </div>
            </form>
          </div>
          
          {/* Contact Info */}
          <div className="order-1 md:order-2">
            <h2 className="text-2xl font-display font-semibold text-brand-dark mb-6">Contact Information</h2>
            <div className="space-y-6 text-brand-dark/80">
              <div className="flex items-start">
                <LocationIcon className="h-6 w-6 mt-1 mr-4 text-brand-primary flex-shrink-0" />
                <div>
                  <h3 className="font-semibold text-brand-dark">Address</h3>
                  <p>Late Mr Agu's Compound Ichide Umudioka Awka</p>
                </div>
              </div>
              <div className="flex items-start">
                <MailIcon className="h-6 w-6 mt-1 mr-4 text-brand-primary flex-shrink-0" />
                <div>
                  <h3 className="font-semibold text-brand-dark">Email</h3>
                  <p>Pio44344@gmail.com</p>
                </div>
              </div>
              <div className="flex items-start">
                <PhoneIcon className="h-6 w-6 mt-1 mr-4 text-brand-primary flex-shrink-0" />
                <div>
                  <h3 className="font-semibold text-brand-dark">Phone</h3>
                  <p>+234 903 270 9105</p>
                </div>
              </div>
              <div className="flex items-start">
                 <FacebookIcon className="h-6 w-6 mt-1 mr-4 text-brand-primary flex-shrink-0" />
                 <div>
                   <h3 className="font-semibold text-brand-dark">Facebook</h3>
                   <p>Nnadi Maryo</p>
                 </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactPage;
