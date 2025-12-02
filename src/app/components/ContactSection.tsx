"use client";

import React, { useState } from "react";
import { Mail, Phone, Send } from "lucide-react";

export default function ContactSection() {
  const [result, setResult] = useState("");

  const handleSubmit = async (event: any) => {
    event.preventDefault();
    setResult("Sending....");

    const formData = new FormData(event.target);
    formData.append("access_key", "dd6c0c51-7663-44c2-8a6b-a94c233ae457"); // replace with your Web3Forms key

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData,
    });

    const data = await response.json();

    if (data.success) {
      setResult("Message Sent Successfully ✔️");
      event.target.reset();
    } else {
      setResult(data.message);
    }
  };

  return (
    <section id="contact" className="max-w-7xl mx-auto px-4 sm:px-6 py-16 md:py-24 space-y-10">
      <div className="text-left space-y-3">
        <h2 className="text-4xl md:text-5xl font-bold" style={{ color: "#2D3748" }}>
          Contact Me
        </h2>
        <p className="text-lg" style={{ color: "#718096" }}>
          Have a project in mind or want to collaborate? Feel free to reach out.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-10">

        {/* LEFT SIDE CONTACT DETAILS */}
        <div className="space-y-6">
          <div className="flex items-center gap-4">
            <Mail className="w-7 h-7" style={{ color: "#96C2DB" }} />
            <a
              href="mailto:aksdec14@gmail.com"
              className="text-lg font-semibold hover:underline break-all"
              style={{ color: "#2D3748" }}
            >
              aksdec14@gmail.com
            </a>
          </div>

          <div className="flex items-center gap-4">
            <Phone className="w-7 h-7" style={{ color: "#96C2DB" }} />
            <a
              href="tel:+919651846115"
              className="text-lg font-semibold hover:underline"
              style={{ color: "#2D3748" }}
            >
              +91 96518 46115
            </a>
          </div>

          <p className="text-md leading-relaxed" style={{ color: "#718096" }}>
            I’m available for freelance projects and new opportunities.
            Let’s build something amazing together.
          </p>
        </div>

        {/* RIGHT SIDE FORM */}
        <form
          onSubmit={handleSubmit}
          className="bg-white rounded-2xl shadow-xl border border-gray-200 p-6 md:p-8 space-y-4"
        >
          <input
            type="text"
            name="name"
            placeholder="Your Name"
            required
            className="w-full p-3 rounded-xl border border-gray-300 focus:outline-none"
          />

          <input
            type="email"
            name="email"
            placeholder="Your Email"
            required
            className="w-full p-3 rounded-xl border border-gray-300 focus:outline-none"
          />

          <textarea
            name="message"
            placeholder="Tell me about your project..."
            rows={5}
            required
            className="w-full p-3 rounded-xl border border-gray-300 focus:outline-none"
          ></textarea>

          <div className="h-captcha pb-2" data-captcha="true"></div>

          <button
            type="submit"
            className="w-full px-6 py-3 rounded-xl font-semibold flex items-center justify-center gap-2 transition-all duration-300 hover:scale-105"
            style={{ backgroundColor: "#96C2DB", color: "#FFFFFF" }}
          >
            Send Enquiry
            <Send className="w-5 h-5" />
          </button>

          <p className="text-center pt-2 font-medium text-sm sm:text-base" style={{ color: "#718096" }}>
            {result}
          </p>
        </form>
      </div>
    </section>
  );
}
