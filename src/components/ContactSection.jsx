// components/ContactSection.js

import React from 'react';

const ContactSection = () => {
  return (
    <section id="contact" className="py-16 px-6 bg-gray-100">
      <h1 className="text-4xl font-bold text-center mb-8">Contact Us</h1>
      
      <div className="max-w-4xl mx-auto bg-white p-8 rounded-lg shadow-lg">
        <form>
          <div className="mb-4">
            <label htmlFor="name" className="block text-lg font-medium">Name</label>
            <input
              type="text"
              id="name"
              name="name"
              className="w-full px-4 py-2 mt-2 border rounded-lg"
              placeholder="Enter your name"
              required
            />
          </div>
          
          <div className="mb-4">
            <label htmlFor="email" className="block text-lg font-medium">Email</label>
            <input
              type="email"
              id="email"
              name="email"
              className="w-full px-4 py-2 mt-2 border rounded-lg"
              placeholder="Enter your email"
              required
            />
          </div>

          <div className="mb-4">
            <label htmlFor="message" className="block text-lg font-medium">Message</label>
            <textarea
              id="message"
              name="message"
              className="w-full px-4 py-2 mt-2 border rounded-lg"
              rows="6"
              placeholder="Write your message here"
              required
            ></textarea>
          </div>

          <button type="submit" className="w-full bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700">
            Send Message
          </button>
        </form>
      </div>
    </section>
  );
};

export default ContactSection;
