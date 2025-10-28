'use client'
import React, { useState } from 'react';
import { Phone, Mail, MapPin, Send } from 'lucide-react';

const ContactUs = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    service_interest: '',
    message: ''
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState('');

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus('');

    const payload = {
      full_name: `${formData.firstName} ${formData.lastName}`.trim(),
      email: formData.email,
      phone_number: formData.phone,
      service_interest: formData.service_interest,
      message: formData.message
    };

    try {
      const response = await fetch('https://www.caryphysicians.com/api/appointments/leads.php', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(payload)
      });

      const result = await response.json();

      if (response.ok && result.success) {
        setSubmitStatus('success');
        setFormData({
          firstName: '',
          lastName: '',
          email: '',
          phone: '',
          service_interest: '',
          message: ''
        });
      } else {
        setSubmitStatus('error');
      }
    } catch (error) {
      console.error('Error submitting form:', error);
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
      setTimeout(() => setSubmitStatus(''), 4000);
    }
  };

  return (
    <div className="min-h-screen text-white relative overflow-hidden">
      {/* Animated Background Blobs */}
      <div className="absolute inset-0 opacity-10 pointer-events-none">
        <div className="absolute top-20 left-20 w-64 h-64 border border-gray-700 rounded-full"></div>
        <div className="absolute bottom-20 right-20 w-48 h-48 border border-gray-700 rounded-full"></div>
        <div className="absolute top-1/2 left-1/3 w-32 h-32 border border-gray-700 rounded-full"></div>
      </div>

      {/* Glass Morphism Overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent"></div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-white via-purple-200 to-pink-200">
            Get in <span className="bg-clip-text text-transparent bg-gradient-to-r from-red-500 to-mtc-red">touch</span> with us
          </h1>
          <p className="text-gray-300 text-lg md:text-xl max-w-2xl mx-auto leading-relaxed">
            We'd love to hear from you! Whether you have questions, need support, or want to discuss a project, feel free to reach out.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Contact Info Cards */}
          <div className="space-y-18 md:mt-9">
            {/* Phone */}
            <div className="group relative rounded-3xl p-8 bg-white/10 backdrop-blur-xl border border-white/20 hover:scale-105 transition-all duration-500">
              <div className="relative flex items-start space-x-4">
                <div className="bg-gradient-to-br from-pink-500/20 to-purple-500/20 p-4 rounded-2xl border border-white/10">
                  <Phone className="w-6 h-8 text-pink-400" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2 text-white">Phone Number</h3>
                  <a href="tel:+19452060214" className="text-gray-300 text-lg hover:text-pink-400 transition-colors duration-300">
                    +1 (945) 206-0214
                  </a>
                </div>
              </div>
            </div>

            {/* Email */}
            <div className="group relative rounded-3xl p-8 bg-white/10 backdrop-blur-xl border border-white/20 hover:scale-105 transition-all duration-500">
              <div className="relative flex items-start space-x-4">
                <div className="bg-gradient-to-br from-purple-500/20 to-cyan-500/20 p-4 rounded-2xl border border-white/10">
                  <Mail className="w-6 h-8 text-purple-400" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2 text-white">Email Address</h3>
                  <a href="mailto:sales@metatechcorps.com" className="text-gray-300 text-lg hover:text-purple-400 transition-colors duration-300 break-all">
                    sales@metatechcorps.com
                  </a>
                </div>
              </div>
            </div>

            {/* Address */}
            <div className="group relative rounded-3xl p-8 bg-white/10 backdrop-blur-xl border border-white/20 hover:scale-105 transition-all duration-500">
              <div className="relative flex items-start space-x-4">
                <div className="bg-gradient-to-br from-cyan-500/20 to-blue-500/20 p-4 rounded-2xl border border-white/10">
                  <MapPin className="w-6 h-8 text-cyan-400" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2 text-white">Address</h3>
                  <p className="text-gray-300 text-lg leading-relaxed">
                    1942 Broadway ste 314C Boulder CO 80302 US.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="relative">
            <div className="relative rounded-3xl p-8 lg:p-10 bg-white/10 backdrop-blur-2xl border border-white/20 shadow-2xl">
              <div className="relative space-y-6">
                <div className="text-center mb-8">
                  <h2 className="text-3xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-pink-400 via-purple-400 to-cyan-400">
                    Send us a Message
                  </h2>
                </div>

                {/* Name Fields */}
                <div className="grid md:grid-cols-2 gap-4">
                  <input
                    type="text"
                    name="firstName"
                    placeholder="First Name"
                    value={formData.firstName}
                    onChange={handleInputChange}
                    required
                    className="w-full text-white placeholder-gray-400 bg-white/5 border border-white/20 px-5 py-4 rounded-2xl focus:border-pink-500 focus:ring-2 focus:ring-pink-500/40 transition-all"
                  />
                  <input
                    type="text"
                    name="lastName"
                    placeholder="Last Name"
                    value={formData.lastName}
                    onChange={handleInputChange}
                    required
                    className="w-full text-white placeholder-gray-400 bg-white/5 border border-white/20 px-5 py-4 rounded-2xl focus:border-purple-500 focus:ring-2 focus:ring-purple-500/40 transition-all"
                  />
                </div>

                {/* Phone */}
                <input
                  type="tel"
                  name="phone"
                  placeholder="Phone Number"
                  value={formData.phone}
                  onChange={handleInputChange}
                  required
                  className="w-full text-white placeholder-gray-400 bg-white/5 border border-white/20 px-5 py-4 rounded-2xl focus:border-cyan-500 focus:ring-2 focus:ring-cyan-500/40 transition-all"
                />

                {/* Email */}
                <input
                  type="email"
                  name="email"
                  placeholder="Email Address"
                  value={formData.email}
                  onChange={handleInputChange}
                  required
                  className="w-full text-white placeholder-gray-400 bg-white/5 border border-white/20 px-5 py-4 rounded-2xl focus:border-pink-500 focus:ring-2 focus:ring-pink-500/40 transition-all"
                />

                {/* Service Interest */}
                <input
                  name="service_interest"
                  placeholder="Type the Service you're interested in"
                  value={formData.service_interest}
                  onChange={handleInputChange}
                  required
                  className="w-full text-white bg-white/5 border border-white/20 px-5 py-4 rounded-2xl focus:border-purple-500 focus:ring-2 focus:ring-purple-500/40 transition-all backdrop-blur-xl"
                >
                </input>

                {/* Message */}
                <textarea
                  name="message"
                  placeholder="Your Message"
                  value={formData.message}
                  onChange={handleInputChange}
                  required
                  rows={5}
                  className="w-full text-white placeholder-gray-400 bg-white/5 border border-white/20 px-5 py-4 rounded-2xl focus:border-purple-500 focus:ring-2 focus:ring-purple-500/40 transition-all resize-none"
                />

                {/* Submit Button */}
                <button
                  type="submit"
                  onClick={handleSubmit}
                  disabled={isSubmitting}
                  className="w-full bg-gradient-to-r from-red-500 via-red-700 to-mtc-red hover:from-red-600 hover:via-red-900 text-white font-semibold py-5 px-6 rounded-2xl shadow-lg transition-all duration-300 flex items-center justify-center space-x-2 disabled:opacity-50"
                >
                  {isSubmitting ? (
                    <>
                      <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white"></div>
                      <span>Sending...</span>
                    </>
                  ) : (
                    <>
                      <Send className="w-5 h-5" />
                      <span>Send Message</span>
                    </>
                  )}
                </button>

                {/* Status Messages */}
                {submitStatus === 'success' && (
                  <div className="text-center p-5 bg-gradient-to-r from-green-500/20 to-emerald-500/20 backdrop-blur-xl border border-green-400/40 rounded-2xl animate-pulse">
                    <p className="text-green-300 font-semibold">
                      ✨ Message sent successfully! We'll get back to you soon.
                    </p>
                  </div>
                )}
                {submitStatus === 'error' && (
                  <div className="text-center p-5 bg-gradient-to-r from-red-500/20 to-pink-500/20 backdrop-blur-xl border border-red-400/40 rounded-2xl animate-pulse">
                    <p className="text-red-300 font-semibold">
                      ❌ Something went wrong. Please try again later.
                    </p>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactUs;
