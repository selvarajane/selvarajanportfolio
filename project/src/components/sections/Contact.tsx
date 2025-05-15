import React, { useRef, useState, useEffect } from 'react';
import Section from '../ui/Section';
import Button from '../ui/Button';
import { Mail, Phone, MapPin, Send } from 'lucide-react';
import emailjs from '@emailjs/browser';

const Contact: React.FC = () => {
  const [formState, setFormState] = useState({
    name: '',
    email: '',
    message: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const formRef = useRef<HTMLFormElement>(null);

  useEffect(() => {
    // Initialize EmailJS with your public key
    emailjs.init("YOUR_PUBLIC_KEY");
  }, []);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormState(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    try {
      const templateParams = {
        from_name: formState.name,
        from_email: formState.email,
        message: formState.message,
        to_email: 'selvarajan0259@gmail.com'
      };

      await emailjs.send(
        'YOUR_SERVICE_ID',
        'YOUR_TEMPLATE_ID',
        templateParams
      );
      
      setSubmitted(true);
      setFormState({ name: '', email: '', message: '' });
      
      // Reset the form after 3 seconds
      setTimeout(() => {
        setSubmitted(false);
      }, 3000);
    } catch (error) {
      console.error('Error sending email:', error);
      alert('Failed to send message. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <Section 
      id="contact" 
      title="Get in Touch"
      subtitle="Let's discuss your project or just say hello"
      className="bg-gray-50 dark:bg-gray-900/50"
    >
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
        <div className="animate-on-scroll">
          <h3 className="text-2xl font-serif font-bold mb-6">Contact Information</h3>
          <p className="text-gray-700 dark:text-gray-300 mb-8 leading-relaxed">
            Feel free to reach out if you're looking for a developer, have a question, 
            or just want to connect.
          </p>
          
          <div className="space-y-6">
            <div className="flex items-start">
              <div className="flex-shrink-0 mt-1">
                <Mail className="text-primary-500 w-6 h-6" />
              </div>
              <div className="ml-4">
                <h4 className="text-lg font-medium mb-1">Email</h4>
                <a href="mailto:selvarajan0259@gmail.com" className="text-gray-700 dark:text-gray-300 hover:text-primary-500 dark:hover:text-primary-400">
                  selvarajan0259@gmail.com
                </a>
              </div>
            </div>
            
            <div className="flex items-start">
              <div className="flex-shrink-0 mt-1">
                <Phone className="text-primary-500 w-6 h-6" />
              </div>
              <div className="ml-4">
                <h4 className="text-lg font-medium mb-1">Phone</h4>
                <a href="tel:+919600295627" className="text-gray-700 dark:text-gray-300 hover:text-primary-500 dark:hover:text-primary-400">
                  +91 9600295627
                </a>
              </div>
            </div>
            
            <div className="flex items-start">
              <div className="flex-shrink-0 mt-1">
                <MapPin className="text-primary-500 w-6 h-6" />
              </div>
              <div className="ml-4">
                <h4 className="text-lg font-medium mb-1">Location</h4>
                <p className="text-gray-700 dark:text-gray-300">
                  Tiruvannamalai 606601
                </p>
              </div>
            </div>
          </div>
          
          <div className="mt-12">
            <h3 className="text-2xl font-serif font-bold mb-6">Let's connect</h3>
            <p className="text-gray-700 dark:text-gray-300 mb-4">
              Available for freelance opportunities and collaborations.
            </p>
          </div>
        </div>
        
        <div className="animate-on-scroll">
          <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-xl p-8">
            <h3 className="text-2xl font-serif font-bold mb-6">Send me a message</h3>
            
            {submitted ? (
              <div className="text-center py-8">
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-green-100 text-green-500 mb-4">
                  <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <h4 className="text-xl font-medium mb-2">Message Sent!</h4>
                <p className="text-gray-600 dark:text-gray-400">
                  Thank you for reaching out. I'll get back to you as soon as possible.
                </p>
              </div>
            ) : (
              <form ref={formRef} onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-gray-700 dark:text-gray-300 mb-2">
                    Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formState.name}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 dark:border-gray-700 focus:outline-none focus:ring-2 focus:ring-primary-500 bg-white dark:bg-gray-800 text-gray-900 dark:text-gray-100"
                    placeholder="Your name"
                  />
                </div>
                
                <div>
                  <label htmlFor="email" className="block text-gray-700 dark:text-gray-300 mb-2">
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formState.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 dark:border-gray-700 focus:outline-none focus:ring-2 focus:ring-primary-500 bg-white dark:bg-gray-800 text-gray-900 dark:text-gray-100"
                    placeholder="Your email"
                  />
                </div>
                
                <div>
                  <label htmlFor="message" className="block text-gray-700 dark:text-gray-300 mb-2">
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formState.message}
                    onChange={handleChange}
                    required
                    rows={5}
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 dark:border-gray-700 focus:outline-none focus:ring-2 focus:ring-primary-500 bg-white dark:bg-gray-800 text-gray-900 dark:text-gray-100"
                    placeholder="Your message"
                  />
                </div>
                
                <Button type="submit" disabled={isSubmitting} className="w-full">
                  {isSubmitting ? (
                    <span className="flex items-center justify-center">
                      <svg className="animate-spin -ml-1 mr-2 h-4 w-4 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                      </svg>
                      Sending...
                    </span>
                  ) : (
                    <span className="flex items-center justify-center">
                      <Send size={18} className="mr-2" /> Send Message
                    </span>
                  )}
                </Button>
              </form>
            )}
          </div>
        </div>
      </div>
    </Section>
  );
};

export default Contact;