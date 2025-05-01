import { NextPage } from "next";
import {
  FiMail,
  FiPhone,
  FiMapPin,
  FiClock,
  FiMessageSquare,
  FiSend,
} from "react-icons/fi";
import {
  FaWhatsapp,
  FaInstagram,
  FaTwitter,
  FaFacebookF,
} from "react-icons/fa";

const Contact: NextPage = () => {
  return (
    <div className="min-h-screen bg-[#1d1515]">
      <div className="relative bg-cover bg-center h-[600px] flex items-center justify-center">
        {/* Background Video */}
        <video
          autoPlay
          loop
          muted
          className="absolute top-0 left-0 w-full h-full object-cover"
        >
          <source
            src="https://cdn.pixabay.com/video/2016/05/12/3176-166338965_tiny.mp4"
            type="video/mp4"
          />
          Your browser does not support the video tag.
        </video>

        {/* Overlay */}
        <div className="absolute inset-0 bg-black bg-opacity-30"></div>

        {/* Content */}
        <div className="relative z-10 flex items-center justify-center">
          <div className="relative w-[350px] h-32 bg-transparent border-2 border-amber-500 shadow-lg flex items-center justify-center">
            <img
              src="https://i.postimg.cc/cLgCqV4p/Screenshot-2025-01-17-190615.png"
              alt="Left Image"
              className="absolute hidden sm:block top-0 right-[-160px] transform translate-y-3/4 opacity-90"
              style={{
                width: "200px",
                height: "80px",
                backgroundColor: "transparent",
              }}
            />

            <img
              src="https://i.postimg.cc/cLgCqV4p/Screenshot-2025-01-17-190615.png"
              alt="Right Image"
              className="absolute hidden sm:block bottom-0 left-[-160px] transform -translate-y-3/4 opacity-90"
              style={{
                width: "200px",
                height: "80px",
                backgroundColor: "transparent",
              }}
            />

            {/* Text Content */}
            <p className="text-center text-5xl font-bold text-amber-600">
              Contact Us
            </p>
          </div>
        </div>
      </div>
      {/* Hero Section */}
      <div className="relative bg-[#1d1515] py-20 text-white mb-10">
        <div
          className="absolute inset-0 opacity-10"
          style={{
            backgroundImage:
              "url('https://i.ytimg.com/vi/QLPxMKmCp20/maxresdefault.jpg')",
          }}
        ></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              We are Here to Help
            </h1>
            <p className="text-xl md:text-2xl max-w-3xl mx-auto">
              Have questions about your order or need support? Our team is ready
              to assist you 24/7.
            </p>
          </div>
        </div>
      </div>

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Contact Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          {/* Contact Card 1 */}
          <div className="bg-transparent border border-amber-700 rounded-xl shadow-lg p-8 hover:shadow-xl transition-shadow">
            <div className="bg-transparent border border-amber-700 w-20 h-20 rounded-full flex items-center justify-center mb-6">
              <FiPhone className="text-amber-700 text-5xl" />
            </div>
            <h3 className="text-xl font-bold text-white mb-3">Call Us</h3>
            <p className="text-white mb-4">
              Speak directly with our customer support team
            </p>
            <div className="space-y-2">
              <a
                href="tel:+18005551234"
                className="block text-amber-700 hover:text-amber-800 font-medium"
              >
                +88 (016) 833-38523
              </a>
              <a
                href="tel:+18005554321"
                className="block text-amber-700 hover:text-amber-800 font-medium"
              >
                +88 (016) 833-38523 (24/7 Support)
              </a>
            </div>
          </div>

          {/* Contact Card 2 */}
          <div className="bg-transparent border border-amber-700 rounded-xl shadow-lg p-8 hover:shadow-xl transition-shadow">
            <div className="bg-transparent border border-amber-700 w-20 h-20 rounded-full flex items-center justify-center mb-6">
              <FiMessageSquare className="text-amber-600 text-5xl" />
            </div>
            <h3 className="text-xl font-bold text-white mb-3">Live Chat</h3>
            <p className="text-white mb-4">
              Get instant help from our support agents
            </p>
            <div className="space-y-4">
              <button className="bg-green-600 hover:bg-green-700 text-white px-6 py-3 rounded-lg font-medium flex items-center justify-center gap-2 w-full transition-colors">
                <FaWhatsapp className="text-xl" />
                WhatsApp Chat
              </button>
              <button className="bg-amber-600 hover:bg-amber-700 text-white px-6 py-3 rounded-lg font-medium flex items-center justify-center gap-2 w-full transition-colors">
                <FiMessageSquare />
                In-App Messenger
              </button>
            </div>
          </div>

          {/* Contact Card 3 */}
          <div className="bg-transparent border border-amber-700 rounded-xl shadow-lg p-8 hover:shadow-xl transition-shadow">
            <div className="bg-transparent border border-amber-700 w-20 h-20 rounded-full flex items-center justify-center mb-6">
              <FiMail className="text-amber-600 text-5xl" />
            </div>
            <h3 className="text-xl font-bold text-white mb-3">Email Us</h3>
            <p className="text-white mb-4">
              We respond within 2 hours during business hours
            </p>
            <div className="space-y-2">
              <a
                href="mailto:support@foodexpress.com"
                className="block text-amber-600 hover:text-amber-700 font-medium"
              >
                support@foodexpress.com
              </a>
              <a
                href="mailto:orders@foodexpress.com"
                className="block text-amber-600 hover:text-amber-700 font-medium"
              >
                orders@foodexpress.com
              </a>
            </div>
          </div>
        </div>

        {/* Contact Form + Info Section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <div className="bg-transparent border border-amber-700 rounded-xl shadow-lg p-8">
            <h2 className="text-2xl font-bold text-white mb-6">
              Send Us a Message
            </h2>
            <form className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label
                    htmlFor="first-name"
                    className="block text-sm font-medium text-white mb-1"
                  >
                    First Name
                  </label>
                  <input
                    type="text"
                    id="first-name"
                    className="w-full text-black px-4 py-3 text-white bg-transparent border border-amber-700 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-amber-500 outline-none transition"
                    placeholder="Your first name"
                  />
                </div>
                <div>
                  <label
                    htmlFor="last-name"
                    className="block text-sm font-medium text-white mb-1"
                  >
                    Last Name
                  </label>
                  <input
                    type="text"
                    id="last-name"
                    className="w-full px-4 py-3 bg-transparent text-white border border-amber-700 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-amber-500 outline-none transition"
                    placeholder="Your last name"
                  />
                </div>
              </div>

              <div>
                <label
                  htmlFor="email"
                  className="block text-sm font-medium text-white mb-1"
                >
                  Email Address
                </label>
                <input
                  type="email"
                  id="email"
                  className="w-full px-4 py-3 bg-transparent text-white border border-amber-700 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-amber-500 outline-none transition"
                  placeholder="your@email.com"
                />
              </div>

              <div>
                <label
                  htmlFor="order-number"
                  className="block text-sm font-medium text-white mb-1"
                >
                  Order Number (if applicable)
                </label>
                <input
                  type="text"
                  id="order-number"
                  className="w-full px-4 py-3 text-white bg-transparent border border-amber-700 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-amber-500 outline-none transition"
                  placeholder="EX-123456"
                />
              </div>

              <div>
                <label
                  htmlFor="subject"
                  className="block text-sm font-medium text-white mb-1"
                >
                  Subject
                </label>
                <select
                  id="subject"
                  className="w-full px-3 py-3 text-white bg-transparent border border-amber-700 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-amber-500 outline-none transition hover:text-white"
                  defaultValue=""
                >
                  <option
                    value=""
                    disabled
                    hidden
                    className="bg-[#1a1a1a] text-gray-400"
                  >
                    Select a subject
                  </option>
                  <option
                    value="order-issue"
                    className="bg-[#1a1a1a] text-white hover:bg-amber-700"
                  >
                    Order Issue
                  </option>
                  <option value="delivery" className="bg-[#1a1a1a] text-white">
                    Delivery Question
                  </option>
                  <option value="payment" className="bg-[#1a1a1a] text-white">
                    Payment Issue
                  </option>
                  <option value="feedback" className="bg-[#1a1a1a] text-white">
                    Feedback/Suggestion
                  </option>
                  <option value="other" className="bg-[#1a1a1a] text-white">
                    Other
                  </option>
                </select>
              </div>

              <div>
                <label
                  htmlFor="message"
                  className="block text-sm font-medium text-white mb-1"
                >
                  Your Message
                </label>
                <textarea
                  id="message"
                  rows={5}
                  className="w-full px-4 text-white py-3 bg-transparent border border-amber-700 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-amber-500 outline-none transition"
                  placeholder="How can we help you?"
                ></textarea>
              </div>

              <button
                type="submit"
                className="bg-amber-700 hover:bg-amber-800 text-white px-6 py-3 rounded-lg font-medium flex items-center justify-center gap-2 w-full transition-colors"
              >
                <FiSend />
                Send Message
              </button>
            </form>
          </div>

          {/* Info Section */}
          <div className="space-y-8">
            {/* Restaurant Locations */}
            <div className="bg-transparent border border-amber-700 rounded-xl shadow-lg p-8">
              <h3 className="text-xl font-bold text-white mb-6 flex items-center gap-2">
                <FiMapPin className="text-amber-600" />
                Our Restaurant Locations
              </h3>
              <div className="space-y-4">
                <div className="border-b border-gray-200 pb-4">
                  <h4 className="font-medium text-white">Downtown Branch</h4>
                  <p className="text-white">123 Main Street, Suite 100</p>
                  <p className="text-white">New York, NY 10001</p>
                </div>
                <div className="border-b border-gray-200 pb-4">
                  <h4 className="font-medium text-white">Uptown Branch</h4>
                  <p className="text-white">456 Central Avenue</p>
                  <p className="text-white">New York, NY 10022</p>
                </div>
                <div>
                  <h4 className="font-medium text-white">Brooklyn Branch</h4>
                  <p className="text-white">789 Park Place</p>
                  <p className="text-white">Brooklyn, NY 11201</p>
                </div>
              </div>
            </div>

            {/* Opening Hours */}
            <div className="bg-transparent border border-amber-700 rounded-xl shadow-lg p-8">
              <h3 className="text-xl font-bold text-white mb-6 flex items-center gap-2">
                <FiClock className="text-amber-600" />
                Opening Hours
              </h3>
              <div className="space-y-3">
                <div className="flex justify-between">
                  <span className="text-white">Monday - Friday</span>
                  <span className="font-medium text-white">
                    8:00 AM - 11:00 PM
                  </span>
                </div>
                <div className="flex justify-between">
                  <span className="text-white">Saturday</span>
                  <span className="font-medium text-white">
                    9:00 AM - 12:00 AM
                  </span>
                </div>
                <div className="flex justify-between">
                  <span className="text-white">Sunday</span>
                  <span className="font-medium text-white">
                    9:00 AM - 10:00 PM
                  </span>
                </div>
                <div className="pt-3 mt-3 border-t border-gray-200">
                  <p className="text-white text-sm">
                    * Delivery available until 30 minutes before closing
                  </p>
                </div>
              </div>
            </div>

            {/* Social Media */}
            <div className="bg-transparent border border-amber-700 rounded-xl shadow-lg p-8">
              <h3 className="text-xl font-bold text-white mb-6">
                Connect With Us
              </h3>
              <div className="flex justify-center gap-6">
                <a
                  href="#"
                  className="bg-transparent border border-amber-700 w-12 h-12 rounded-full flex items-center justify-center text-amber-600 hover:bg-amber-200 transition-colors"
                >
                  <FaInstagram className="text-xl" />
                </a>
                <a
                  href="#"
                  className="bg-transparent border border-amber-700 w-12 h-12 rounded-full flex items-center justify-center text-amber-600 hover:bg-amber-200 transition-colors"
                >
                  <FaTwitter className="text-xl" />
                </a>
                <a
                  href="#"
                  className="bg-transparent border border-amber-700 w-12 h-12 rounded-full flex items-center justify-center text-amber-600 hover:bg-amber-200 transition-colors"
                >
                  <FaFacebookF className="text-xl" />
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* FAQ CTA */}
        <div className="mt-16 text-center bg-transparent">
          <h3 className="text-2xl font-bold text-white mb-4">
            Need Help Quickly?
          </h3>
          <p className="text-white max-w-3xl mx-auto mb-6">
            Check out our FAQ section for instant answers to common questions
            about ordering, delivery, payments, and more.
          </p>
          <button className="bg-amber-600 hover:bg-amber-700 text-white px-6 py-3 rounded-lg font-medium transition-colors">
            Visit Help Center
          </button>
        </div>
      </main>
    </div>
  );
};

export default Contact;
