'use client'
import React, { useState } from 'react';
import { Phone, Mail, MapPin, Send } from 'lucide-react';

const ContactUs = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    phone: '',
    email: '',
    message: ''
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState('');

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    setIsSubmitting(true);
    setSubmitStatus('');

    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 1000));
    
    setSubmitStatus('success');
    setIsSubmitting(false);
    
    // Reset form after successful submission
    setTimeout(() => {
      setFormData({
        firstName: '',
        lastName: '',
        phone: '',
        email: '',
        message: ''
      });
      setSubmitStatus('');
    }, 3000);
  };

  return (
    <div className="min-h-screen  text-white relative overflow-hidden">
      {/* Background Pattern */}
         <div className="absolute inset-0 opacity-20">
         <div className="absolute top-20 left-20 w-72 h-72 bg-mtc-red rounded-full mix-blend-multiply filter blur-xl animate-pulse"></div> 
        <div className="absolute top-30 right-20 w-32 h-96 bg-mtc-red rounded-full mix-blend-multiply filter blur-xl "></div>
        <div className="absolute bottom-20 left-40 w-20 h-96 rounded-full bg-mtc-red mix-blend-multiply filter blur-xl "></div>
      </div>
       <div className="absolute inset-0 bg-grid-pattern opacity-10"></div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            Get in <span className="text-mtc-red">touch</span> with us
          </h1>
          <p className="text-gray-300 text-lg md:text-xl max-w-2xl mx-auto">
            We'd love to hear from you! Whether you have questions, need support, or want to 
            discuss a project, feel free to reach out.
          </p>
          <div className="mt-8 flex justify-center">
            <div className="w-2 h-2 bg-mtc-red rounded-full"></div>
          </div>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Contact Information */}
          <div className="space-y-8">
            {/* Phone */}
<div className=" rounded-2xl p-8 border border-gray-800 hover:border-mtc-red transition-colors duration-300">
              <div className="flex items-center space-x-4 mb-4">
                <div className=" bg-opacity-20 p-3 rounded-xl">
                  <Phone className="w-6 h-6 text-mtc-red" />
                </div>
                <h3 className="text-xl font-semibold">Phone Number</h3>
              </div>
              <a 
                href="tel:+19452060214" 
                className="text-gray-300 text-lg hover:text-mtc-red transition-colors duration-300 hover:underline"
              >
                +1 (945) 206-0214
              </a>
            </div>

            {/* Email */}
            <div className=" rounded-2xl p-8 border border-gray-800 hover:border-mtc-red transition-colors duration-300">
              <div className="flex items-center space-x-4 mb-4">
                <div className=" bg-opacity-20 p-3 rounded-xl">
                  <Mail className="w-6 h-6 text-mtc-red" />
                </div>
                <h3 className="text-xl font-semibold">Email Address</h3>
              </div>
<a 
  href="https://mail.google.com/mail/?view=cm&to=sales.digimarkxperts@gmail.com"
  target="_blank"
  rel="noopener noreferrer"
  className="text-gray-300 text-lg hover:text-mtc-red transition-colors duration-300 hover:underline"
>
  sales.digimarkxperts@gmail.com
</a>

            </div>

            {/* Address */}
            <div className=" rounded-2xl p-8 border border-gray-800 hover:border-mtc-red transition-colors duration-300">
              <div className="flex items-center space-x-4 mb-4">
                <div className=" bg-opacity-20 p-3 rounded-xl">
                  <MapPin className="w-6 h-6 text-mtc-red" />
                </div>
                <h3 className="text-xl font-semibold">Address</h3>
              </div>
              <p className="text-gray-300 text-lg">
                1942 Broadway ste 314C Boulder CO 80302 US.
              </p>
            </div>
          </div>

          {/* Contact Form */}
          <div className=" rounded-2xl p-8 border border-gray-800">
            <div className="space-y-6">
              {/* Name Fields */}
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <input
                    type="text"
                    name="firstName"
                    placeholder="First Name"
                    value={formData.firstName}
                    onChange={handleInputChange}
                    required
                    className="w-full  text-white placeholder-gray-400 px-4 py-3 rounded-lg border border-gray-700 focus:border-mtc-red focus:outline-none focus:ring-2 focus:ring-mtc-red focus:ring-opacity-50 transition-colors duration-300"
                  />
                </div>
                <div>
                  <input
                    type="text"
                    name="lastName"
                    placeholder="Last Name"
                    value={formData.lastName}
                    onChange={handleInputChange}
                    required
                    className="w-full  text-white placeholder-gray-400 px-4 py-3 rounded-lg border border-gray-700 focus:border-mtc-red focus:outline-none focus:ring-2 focus:ring-mtc-red focus:ring-opacity-50 transition-colors duration-300"
                  />
                </div>
              </div>

              {/* Phone */}
              <div>
                <input
                  type="tel"
                  name="phone"
                  placeholder="Phone No"
                  value={formData.phone}
                  onChange={handleInputChange}
                  required
                  className="w-full  text-white placeholder-gray-400 px-4 py-3 rounded-lg border border-gray-700 focus:border-mtc-red focus:outline-none focus:ring-2 focus:ring-mtc-red focus:ring-opacity-50 transition-colors duration-300"
                />
              </div>

              {/* Email */}
              <div>
                <input
                  type="email"
                  name="email"
                  placeholder="E-mail"
                  value={formData.email}
                  onChange={handleInputChange}
                  required
                  className="w-full text-white placeholder-gray-400 px-4 py-3 rounded-lg border border-gray-700 focus:border-mtc-red focus:outline-none focus:ring-2 focus:ring-mtc-red focus:ring-opacity-50 transition-colors duration-300"
                />
              </div>

              {/* Message */}
              <div>
                <textarea
                  name="message"
                  placeholder="Message"
                  value={formData.message}
                  onChange={handleInputChange}
                  required
                  rows={6}
                  className="w-full  text-white placeholder-gray-400 px-4 py-3 rounded-lg border border-gray-700 focus:border-mtc-red focus:outline-none focus:ring-2 focus:ring-mtc-red focus:ring-opacity-50 transition-colors duration-300 resize-none"
                />
              </div>

              {/* Submit Button */}
              <button
                type="button"
                onClick={handleSubmit}
                disabled={isSubmitting}
                className="w-full bg-mtc-red hover:bg-red-600 text-white font-semibold py-4 px-6 rounded-lg transition-all duration-300 flex items-center justify-center space-x-2 disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {isSubmitting ? (
                  <>
                    <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white"></div>
                    <span>Sending...</span>
                  </>
                ) : (
                  <>
                    <Send className="w-5 h-5" />
                    <span>Submit Message</span>
                  </>
                )}
              </button>

              {/* Success Message */}
              {submitStatus === 'success' && (
                <div className="text-center p-4 bg-green-500 bg-opacity-20 border border-green-500 rounded-lg">
                  <p className="text-green-400 font-semibold">
                    Message sent successfully! We'll get back to you soon.
                  </p>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactUs;