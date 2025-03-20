import Section from "./Section";
import myEquationImage from "../assets/images/MyEquation.jpg";

const Sponsors = () => {
  const sponsors = [
    {
      title: "MyEquation - Official Industrial Partner",
      image: myEquationImage,
      website: "https://myequation.in/"
    }
  ];

  return (
    <Section className="pt-16" id="sponsors">
      <section className="text-white py-16 px-6 md:px-20 lg:px-40">
        <div className="max-w-5xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-8">Our Sponsors</h2>
          <div className="flex justify-center">
            {sponsors.map((sponsor, index) => (
              <div key={index} className="bg-[#140521] p-0 rounded-lg shadow-lg text-center overflow-hidden w-64 h-72 flex flex-col items-center shadow-[0_0_15px_rgba(255,255,255,0.5)]">
                <a href={sponsor.website} target="_blank" rel="noopener noreferrer" className="w-full h-3/4">
                  <img src={sponsor.image} alt={sponsor.title} className="w-full h-full object-cover" />
                </a>
                <a href={sponsor.website} target="_blank" rel="noopener noreferrer" className="text-white mt-5 underline no-underline">
                Visit Website
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>
    </Section>
  );
};

export default Sponsors;
