import React from "react";
import { FaInstagram, FaFacebook } from "react-icons/fa";

const Footer = () => {
  // Generic function to open social media links
  const openSocialMedia = (url) => {
    window.open(url, "_blank", "noopener,noreferrer");
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(
      "Form submitted:",
      e.target.elements.email.value,
      e.target.elements.message.value
    );
    e.target.reset();
  };

  // Social media links array for easy management
  const socialLinks = [
    {
      name: "Instagram",
      icon: <FaInstagram size={24} />,
      url: "https://www.instagram.com/thahakoachar/",
    },
    {
      name: "Facebook",
      icon: <FaFacebook size={24} />,
      url: "https://www.facebook.com/profile.php?id=61556258102833", // Replace with actual URL
    },
  ];

  return (
    <footer className="relative bg-[#1f4a39] w-full bg-[url('/green.jpg')] bg-cover bg-center max-h-[636px] aspect-[1.2] lg:aspect-[4.26] min-h-[400px] flex items-center justify-center">
      {/* Overlay for dimming */}
      <div className="absolute inset-0 bg-[#105b3c]/80"></div>

      {/* Main content container */}
      <div className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 flex flex-col md:flex-row gap-8">
        {/* Branding and Description */}
        <div className="flex-1 text-white">
          <h2 className="text-2xl md:text-4xl font-bold mb-4">
            Thaha Ko Achar
          </h2>
          <p className="text-md mb-4">
            Crafting authentic, delicious pickles with love and tradition.
            Follow us for updates and recipes!
          </p>
          <div className=" flex flex-col gap-2">
            {socialLinks.map((social) => (
              <button
                key={social.name}
                onClick={() => openSocialMedia(social.url)}
                className="flex items-center gap-2 text-white hover:text-[#f5a623] transition-colors"
                aria-label={`Follow us on ${social.name}`}
              >
                {social.icon}
                <span>{social.name}</span>
              </button>
            ))}
          </div>
        </div>

        {/* Navigation Links */}
        <div className="flex-1 text-white">
          <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
          <ul className="space-y-2 text-sm">
            <li>
              <a
                href="/about"
                className="hover:text-[#f5a623] transition-colors"
              >
                About Us
              </a>
            </li>
            <li>
              <a
                href="/products"
                className="hover:text-[#f5a623] transition-colors"
              >
                Our Products
              </a>
            </li>
            <li>
              <a
                href="/contact"
                className="hover:text-[#f5a623] transition-colors"
              >
                Contact
              </a>
            </li>
          </ul>
        </div>

        {/* Contact Form */}
        <div className="flex-1 text-white">
          <h3 className="text-lg font-semibold mb-4">Get in Touch</h3>
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <input
                type="email"
                name="email"
                id="email"
                placeholder="Your Email"
                className="w-full px-4 py-2 rounded-md bg-white/10 text-white placeholder-white/50 border border-white/20 focus:outline-none focus:ring-2 focus:ring-[#f5a623]"
                required
              />
            </div>
            <div>
              <textarea
                name="message"
                id="message"
                placeholder="Your Message"
                rows="4"
                className="w-full px-4 py-2 rounded-md bg-white/10 text-white placeholder-white/50 border border-white/20 focus:outline-none focus:ring-2 focus:ring-[#f5a623]"
                required
              ></textarea>
            </div>
            <button
              type="submit"
              className="px-6 py-2 bg-[#f5a623] text-[#1f4a39] font-semibold rounded-md hover:bg-[#e69520] transition-colors"
            >
              Send Message
            </button>
          </form>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="absolute bottom-0 w-full bg-[#1f4a39]/50 text-white text-center py-4 text-sm">
        © {new Date().getFullYear()}{" "}
        <span className="text-amber-300">Thaha Ko Achar.</span> All rights
        reserved.
      </div>
    </footer>
  );
};

export default Footer;
