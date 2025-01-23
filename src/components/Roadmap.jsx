import Button from "./Button";
import Heading from "./Heading";
import Section from "./Section";
import Tagline from "./Tagline";
import { roadmap } from "../constants";
import { check2, grid, loading1 } from "../assets";
import { Gradient } from "./design/Roadmap";

const Roadmap = () => (
  <Section className="overflow-hidden" id="roadmap">
    <div className="container md:pb-10">
      <Heading tag="" title="ABOUT IEEE UVCE" className="text-center"/>

      <div className="relative mb-8 p-6 rounded-xl backdrop-blur-md">
        <p className="text-n-4 body-1 text-justify">
        IEEE UVCE is an IEEE student branch at the University of Visvesvaraya College of Engineering, under the aegis of the IEEE Bangalore Section. Started in 2001, IEEE UVCE is dedicated to spreading knowledge through a variety of activities. The branch provides students with opportunities to attend global and national IEEE workshops, symposiums, guest lectures, and conferences. It also supports various technical interest groups, offering guidance and a nurturing platform for students. IEEE UVCE enriches students' experiences with social, cultural, and technical events, encourages the use of IEEE membership benefits, and promotes collaboration with the global IEEE community. It has become one of the most recognized student branches in IEEE Region 10.

This year is particularly special as IEEE UVCE celebrates its Silver Jubilee, marking 25 years of fostering innovation, professional growth, and academic excellence among students. To commemorate this milestone, a series of special events and activities are planned. This year aims to honour the legacy of IEEE UVCE and its impact on countless students' lives, highlighting the achievements of its members and their contributions to the engineering field. The Silver Jubilee is a testament to the branch's enduring commitment to excellence and its pivotal role in shaping future engineers.
        </p>
      </div>

      <div className="relative grid gap-6 md:grid-cols-2 md:gap-4 md:pb-[7rem]">
        {roadmap.map((item) => {
          const status = item.status === "done" ? "Done" : "In progress";

          return (
            <div
              className={`md:flex even:md:translate-y-[7rem] p-0.25 rounded-[2.5rem] ${
                item.colorful ? "bg-conic-gradient" : "bg-n-6"
              }`}
              key={item.id}
            >
              <div className="relative p-8 bg-n-8 rounded-[2.4375rem] overflow-hidden xl:p-15">
                <div className="absolute top-0 left-0 max-w-full">
                  <img
                    className="w-full"
                    src={grid}
                    width={550}
                    height={550}
                    alt="Grid"
                  />
                </div>
                <div className="relative z-1">
                  <div className="flex items-center justify-between max-w-[27rem] mb-8 md:mb-20">
                   
                    
                  </div>

                  <div className="mb-10 -my-10 -mx-15">
                    <img
                      className="w-full"
                      src={item.imageUrl}
                      width={628}
                      height={426}
                      alt={item.title}
                    />
                  </div>
                  <h4 className="h4 mb-4">{item.title}</h4>
                  <p className="body-2 text-n-4">{item.text}</p>
                </div>
              </div>
            </div>
          );
        })}

        <Gradient />
      </div>

      
    </div>
  </Section>
);

export default Roadmap;
