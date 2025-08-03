"use client";
import React, { useState } from "react";
import Swal from "sweetalert2";
import { FaInstagram } from "react-icons/fa";
import { FaFacebookF } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { IoLogoYoutube } from "react-icons/io";
import { FaLinkedinIn } from "react-icons/fa";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({
          access_key: "3675d93e-b4bc-40a0-b585-c369fa83ee2c",
          ...formData,
        }),
      });

      const result = await response.json();

      if (result.success) {
        Swal.fire({
          title: "Success!",
          text: "Message sent successfully!",
          icon: "success",
        });
        setFormData({ name: "", email: "", message: "" });
      } else {
        Swal.fire({
          title: "Error!",
          text: result.message || "Something went wrong. Please try again.",
          icon: "error",
        });
      }
    } catch (error) {
      console.error("Submission error:", error);
      Swal.fire({
        title: "Error!",
        text: "Could not send message. Please check your network connection.",
        icon: "error",
      });
    }
  };

  return (
    <div className="bg-white py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center">
          <h2 className="text-4xl font-extrabold text-cyan-700 leading-tight mb-4">
            Get in Touch
          </h2>
          <p className="mt-4 text-xl text-gray-600 max-w-3xl mx-auto">
            Have questions or want to learn more? We'd love to hear from you.
          </p>
        </div>

        <div className="mt-12 grid md:grid-cols-2 gap-12">
          <div className="bg-gray-50 p-8 rounded-2xl shadow-xl">
            <h3 className="text-2xl font-bold text-gray-900 leading-tight mb-6">
              Send us a message
            </h3>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label
                  htmlFor="name"
                  className="block text-lg font-medium text-gray-700"
                >
                  Name
                </label>
                <input
                  type="text"
                  name="name"
                  id="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-cyan-500 focus:ring-cyan-500 p-3"
                />
              </div>
              <div>
                <label
                  htmlFor="email"
                  className="block text-lg font-medium text-gray-700"
                >
                  Email
                </label>
                <input
                  type="email"
                  name="email"
                  id="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-cyan-500 focus:ring-cyan-500 p-3"
                />
              </div>
              <div>
                <label
                  htmlFor="message"
                  className="block text-lg font-medium text-gray-700"
                >
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows="4"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-cyan-500 focus:ring-cyan-500 p-3"
                ></textarea>
              </div>
              <button
                type="submit"
                className="w-full inline-flex justify-center py-3 px-6 border border-transparent shadow-sm text-lg font-medium rounded-full text-white bg-cyan-600 hover:bg-cyan-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-cyan-500 transition-colors duration-300"
              >
                Send Message
              </button>
            </form>
          </div>

          <div className="p-8 bg-gray-50 rounded-2xl shadow-xl flex flex-col justify-center">
            <h3 className="text-2xl font-bold text-gray-900 leading-tight mb-6">
              Our Details
            </h3>
            <div className="space-y-4 text-left">
              <div className="flex items-start">
                <span className="flex-shrink-0 text-cyan-600 mr-3">
                  <svg
                    className="w-6 h-6"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fillRule="evenodd"
                      d="M10 2a8 8 0 100 16 8 8 0 000-16zM2 10a8 8 0 1110.13 6.94c.03-.02.06-.03.09-.05.15-.08.3-.17.44-.27.27-.19.53-.39.78-.6.28-.24.55-.49.8-.75.46-.46.88-.95 1.25-1.48.3-.43.56-.88.78-1.35.22-.46.41-.93.56-1.4.15-.47.27-.95.34-1.44.07-.49.07-.99 0-1.48-.07-.49-.19-.97-.34-1.44-.15-.47-.34-.94-.56-1.4-.22-.47-.48-.92-.78-1.35-.37-.53-.79-1.02-1.25-1.48-.25-.26-.52-.51-.8-.75-.25-.21-.51-.41-.78-.6-.14-.1-.29-.19-.44-.27-.03-.02-.06-.03-.09-.05A8 8 0 0110 2zm.05 11.23a1.5 1.5 0 00-1.04-.42c-.4.02-.75.24-.95.58-.2.34-.2.74 0 1.1-.2 0-.4-.1-.5-.3s-.1-.5 0-.7c0-.2.1-.4.3-.5.2-.1.4-.1.6 0 .2.1.3.3.3.6s-.1.5-.3.6c-.2.1-.4.1-.5 0-.2-.1-.3-.3-.3-.6s-.1-.5 0-.7c0-.2.1-.4.3-.5.2-.1.4-.1.6 0z"
                      clipRule="evenodd"
                    />
                  </svg>
                </span>
                <p className="text-lg text-gray-600">
                  <a
                    href="https://mithilanaturals.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-cyan-700"
                  >
                    Visit our website - mithilanaturals.com
                  </a>
                </p>
              </div>
              
              <div className="flex items-start">
                <a
                  href="https://wa.me/917520059556"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-start text-lg text-gray-600 hover:text-cyan-700 transition-colors duration-200"
                >
                  
                  <span className="flex-shrink-0 text-cyan-600 mr-3">
                    <svg
                      className="w-6 h-6"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.774a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.99 18 2 12.01 2 5V3z" />
                    </svg>
                  </span>
                  <p className="text-lg">Reach us at +91 7520 059 556</p>
                </a>
              </div>
              

              <div className="flex items-start">
                <span className="flex-shrink-0 text-cyan-600 mr-3">
                  <svg
                    className="w-6 h-6"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z"></path>
                    <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z"></path>
                  </svg>
                </span>
                <p className="text-lg text-gray-600">
                  <a
                    href="mailto:namaste@organicmithila.com"
                    className="hover:text-cyan-700"
                  >
                    namaste@organicmithila.com
                  </a>
                </p>
              </div>
              <div className="flex items-start">
                <span className="flex-shrink-0 text-cyan-600 mr-3">
                  <svg
                    className="w-6 h-6"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path
                      fillRule="evenodd"
                      d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z"
                      clipRule="evenodd"
                    ></path>
                  </svg>
                </span>
                <p className="text-lg text-gray-600">
                  <a
                    className="hover:text-cyan-700"
                    href="https://maps.app.goo.gl/qw2QUMbX8qWJgkqz6"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Mithila Naturals Pvt. Ltd., Vill: Arer, Madhubani, Bihar -
                    847222
                  </a>
                </p>
              </div>
              <div className="flex justify-center items-center mt-15 gap-8">
                <a
                  href="https://www.facebook.com/MithilaNaturals/"
                  target="_blank"
                >
                  <div className="group">
                    <FaFacebookF
                      size={30}
                      className="text-black text-6xl transition-colors duration-300 ease-in-out group-hover:text-cyan-500"
                    />
                  </div>
                </a>
                <a
                  href="https://www.instagram.com/mithilanaturals/"
                  target="_blank"
                >
                  <div className="group">
                    <FaInstagram
                      size={30}
                      className="text-black text-6xl transition-colors duration-300 ease-in-out group-hover:text-cyan-500"
                    />
                  </div>
                </a>
                <a href="https://x.com/mithilanaturals" target="_blank">
                  <div className="group">
                    <FaXTwitter
                      size={30}
                      className="text-black text-6xl transition-colors duration-300 ease-in-out group-hover:text-cyan-500"
                    />
                  </div>
                </a>
                <a
                  href="https://www.youtube.com/@manish_anand_jarail"
                  target="_blank"
                >
                  <div className="group">
                    <IoLogoYoutube
                      size={30}
                      className="text-black text-6xl transition-colors duration-300 ease-in-out group-hover:text-cyan-500"
                    />
                  </div>
                </a>
                <a
                  href="https://www.linkedin.com/company/mithila-naturals/"
                  target="_blank"
                >
                  <div className="group">
                    <FaLinkedinIn
                      size={30}
                      className="text-black text-6xl transition-colors duration-300 ease-in-out group-hover:text-cyan-500"
                    />
                  </div>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
