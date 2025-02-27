import Section from "./Section"
const Sponsors = () => {
    const sponsors = [
      { title: "General Sponsor" },
      { title: "Silver Sponsor" },
      { title: "Gold Sponsor" },
      { title: "Platinum Sponsor" },
      { title: "Diamond Sponsor" },
    ];
  
    return (
        <Section>
      <section className="text-white py-16 px-6 md:px-20 lg:px-40">
        <div className="max-w-5xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-8">
            Our Sponsors
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
            {sponsors.map((sponsor, index) => (
              <div key={index} className="bg-gray-p-6 rounded-lg shadow-lg text-center">
                <div className="w-full h-32 bg-gray-600 flex items-center justify-center rounded-md mb-4">
                  <span className="text-gray-400">Image Placeholder</span>
                </div>
                <h3 className="text-lg font-semibold mb-3">
                  {sponsor.title}
                </h3>
                <button className="px-4 py-2 text-gray-700 font-semibold rounded-md">
                  View Website
                </button>
              </div>
            ))}
          </div>
        </div>
      </section><br/><br/>
      </Section>
    );
  };
  
  export default Sponsors;
  