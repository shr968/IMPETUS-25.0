import { useState } from "react";
import Section from "./Section";
import myEquationImage from "../assets/images/MyEquation.jpg";
import indigoImage from "../assets/images/Indigomusic.jpg";
import unstopImage from "../assets/images/unstop.jpg";
import licImage from "../assets/images/lic.jpg";
import wonderwomanImage from "../assets/images/wonderwoman.jpg";
import pazoImage from "../assets/images/pazo.jpg";
import techserImage from "../assets/images/techser2.jpg";
import ieeeImage from "../assets/images/ieeebangaloresection2.jpg";
import gailImage from "../assets/images/gail.jpg";
import uvcefoundation from "../assets/images/uvcefoundation (2).jpg"

const sponsors = [
  { title: "GAIL GAS - Silver Sponsor", image: gailImage, website: "https://gailgas.com/home", description: "GAIL Gas Limited is a subsidiary of GAIL (India) Limited, a government-owned natural gas company in India. It focuses on City Gas Distribution (CGD), supplying piped natural gas (PNG) to households, industries, and commercial establishments, as well as compressed natural gas (CNG) for vehicles.GAIL Gas operates in multiple cities across India, promoting clean energy solutions and reducing dependence on traditional fossil fuels. It plays a key role in India’s push for sustainable energy and a greener future." },
  { title: "IndigoMusic.com - Official Radio Partner", image: indigoImage, website: "https://indigomusic.com/", description: "Indigo Music is a leading platform for music lovers, bringing you the latest hits and exclusive content." },
  { title: "Unstop - Official Ticketing Partner", image: unstopImage, website: "https://unstop.com/", description: "Unstop is a platform for competitions, events, and ticketing services, connecting opportunities with young talents." },
  { title: "MyEquation - Official Industrial Partner", image: myEquationImage, website: "https://myequation.in/", description: "MyEquation provides innovative industrial solutions for various sectors, driving technology and efficiency." },
  { title: "LIC - General Sponsor", image: licImage, website: "https://licindia.in/", description: "Life Insurance Corporation of India is the largest insurer in the country, ensuring financial security for millions." },
  { title: "Wonderwoman Wednesday - General Sponsor", image: wonderwomanImage, website: "https://wonderwomanwednesday.com/", description: "A platform celebrating and empowering women through insightful content and initiatives." },
  { title: "Pazo - General Sponsor", image: pazoImage, website: "https://www.gopazo.com/", description: "Pazo streamlines business operations with automation and real-time reporting solutions." },
  { title: "Techser - General Sponsor", image: techserImage, website: "https://techser.com/", description: "Techser offers IT infrastructure and networking solutions for businesses of all sizes." },
  { title: "IEEE Bangalore Section - General Sponsor", image: ieeeImage, website: "https://ieeebangalore.org/", description: "IEEE Bangalore Section promotes technological advancements and professional networking." },
  { title: "UVCE Foundation - General Sponsor", image: uvcefoundation, website: "https://www.uvcefoundation.org/", description: "To foster, maintain and support lifelong relationships by engaging its worldwide community of alumni, students, and well-wishers with UVCE and each other so as to encourage the philanthropic and volunteer support that will advance the mission of the institution." }
];

const Sponsors = () => {
  const [selectedSponsor, setSelectedSponsor] = useState(null);

  return (
    <Section className="pt-16" id="sponsors">
      <section className="text-white py-16 px-6 md:px-20 lg:px-40">
        <div className="max-w-5xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-8">Our Sponsors</h2><br/><br/>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 justify-center">
            {sponsors.map((sponsor, index) => (
              <div
                key={index}
                className="bg-[#140521] p-0 rounded-lg text-center overflow-hidden w-full h-80 flex flex-col items-center cursor-pointer transition-shadow duration-300 shadow-[0_0_10px_rgba(255,255,255,0.3)] hover:shadow-[0_0_20px_rgba(255,255,255,0.6)]"
              >
                <img src={sponsor.image} alt={sponsor.title} className="w-full h-3/4 object-cover" />
                <div className="text-white mt-2 font-semibold text-sm px-2">{sponsor.title}</div>
                <div className="flex space-x-3 mt-2">
                  <button onClick={() => setSelectedSponsor(sponsor)} className="text-white no-underline">View</button>
                  <a href={sponsor.website} target="_blank" rel="noopener noreferrer" className="text-white no-underline">Visit Website</a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      {selectedSponsor && (
        <div className="fixed top-0 left-0 w-full h-full flex items-center justify-center bg-black bg-opacity-70 z-50">
          <div className="bg-[#140521] p-6 rounded-lg text-white max-w-lg text-center relative">
            <button className="absolute top-3 right-3 text-2xl" onClick={() => setSelectedSponsor(null)}>×</button>
            <h3 className="text-xl font-bold mb-2">{selectedSponsor.title}</h3>
            <p className="text-sm mb-4 text-justify">{selectedSponsor.description}</p>
            <a href={selectedSponsor.website} target="_blank" rel="noopener noreferrer" className="text-white no-underline">Visit Website</a>
          </div>
        </div>
      )}
    </Section>
  );
};

export default Sponsors;