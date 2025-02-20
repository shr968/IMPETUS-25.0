import React from "react";
import Section from "./Section";
import { Gradient } from "./design/Roadmap";
import { grid } from "../assets";

const Contact = () => {
  return (
    <Section className="relative text-white py-20 overflow-hidden" id="contact">
      <Gradient />

      {/* Updated Grid Background */}
      <img
        className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[550px] h-[550px] md:w-[650px] md:h-[650px] opacity-60"
        src={grid}
        alt="Grid"
      />
        <center>
        <h4 className="h4 mb-12 text-4xl font-bold text-white-500">
          REACH OUT TO US!
        </h4>
      </center>
      <div className="container mx-auto px-4">
        {/* Outer Box with Reduced Width */}
        <div className="bg-7 shadow-lg rounded-lg overflow-hidden p-8 max-w-5xl mx-auto border border-dashed border-white">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Google Map */}
            <div className="map-container">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3887.9419644988807!2d77.58406837484146!3d12.975563787340187!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae1672fcfc6af1%3A0x9c2dc517c9231979!2sUVCE!5e0!3m2!1sen!2sin!4v1737792391123!5m2!1sen!2sin"
                width="100%"
                height="400"
                style={{ border: 0 }}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Location Map"
              ></iframe>
            </div>

            {/* Contact Information */}
            {/* Contact Information */}
<div className="contact-info ml--5 mt-10 px-4 sm:px-8 md:px-0">
  <h2 className="text-2xl font-bold mb-4 text-white-800 text-center md:text-left">Contact Information</h2>
  <div className="space-y-2 text-center md:text-left">
    <p className="text-lg mb-2 text-white-700">
      <strong>Mohammed Saad</strong> - +91 74063 81301
    </p>
    <p className="text-lg mb-2 text-white-700">
      <strong>Swapna P Hiremath</strong> - +91 63600 66916
    </p>
    <p className="text-lg mb-2 text-white-700">
      <strong>V P Charan</strong> - +91 81230 01489
    </p>
  </div>
</div>

          </div>
        </div>
      </div>
    </Section>
  );
};

export default Contact;
