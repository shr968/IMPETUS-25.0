import React from "react";
import Section from "./Section";
import { socials } from "../constants";

const Footer = () => {
  return (
    <Section crosses className="!px-0 !py-10">
      <div className="container flex flex-col items-center text-center gap-5">
        <p className="caption text-n-4">
          © {new Date().getFullYear()}. All Rights Reserved.
        </p>
        <p className="caption text-n-4">Developed by Software Development SIG</p>
        
        <div className="flex justify-center gap-16">
          <p className="caption text-n-4"><span className="font-bold">Shreya Nayak B</span>, Secretary, SDSIG</p>
          <p className="caption text-n-4"><span className="font-bold">V Sanjay</span>, Secretary, SDSIG</p>
        </div>

        <ul className="flex gap-5 flex-wrap justify-center">
          {socials.map((item) => (
            <a
              key={item.id}
              href={item.url}
              target="_blank"
              className="flex items-center justify-center w-10 h-10 bg-n-7 rounded-full transition-colors hover:bg-n-6"
            >
              <img src={item.iconUrl} width={16} height={16} alt={item.title} />
            </a>
          ))}
        </ul>
      </div>
    </Section>
  );
};

export default Footer;