import React, { useState, useEffect } from "react";
import Section from "./Section";
import { Gradient } from "./design/Roadmap";

const Stats = () => {
  const [events, setEvents] = useState(0);
  const [participants, setParticipants] = useState(0);
  const [prizePool, setPrizePool] = useState(0);

  const countUp = (start, end, duration, setter) => {
    let startTime = null;
    const animate = (timestamp) => {
      if (!startTime) startTime = timestamp;
      const progress = timestamp - startTime;
      const value = Math.min(
        Math.floor((progress / duration) * (end - start) + start),
        end
      );
      setter(value);
      if (progress < duration) {
        requestAnimationFrame(animate);
      }
    };
    requestAnimationFrame(animate);
  };

  useEffect(() => {
    countUp(0, 19, 9000, setEvents);
    countUp(0, 40, 9000, setParticipants);
    countUp(0, 55000, 9000, setPrizePool);
  }, []);

  return (
    <Section className="relative text-white py-20 overflow-hidden">
      <center>
        <h4 className="h4 mb-12 text-4xl font-bold text-white-500">
          PREVIOUS STATS
        </h4>
      </center>

      {/* Stats Box with Border and Gradient */}
      <div className="relative max-w-5xl mx-auto p-8">
        {/* Gradient inside the box */}
        <div className="absolute top-0 left-0 w-full h-full"></div>
        
        <div className="relative flex flex-col items-center justify-center space-y-16">
          <div className="flex flex-col md:flex-row gap-8 md:gap-20">
            <div className="stat text-center p-8 bg-gradient-to-r from-blue-950 to-purple-950 opacity--10 rounded-lg">
              <h2 className="text-5xl font-extrabold text-white">{events}</h2>
              <p className="text-lg font-medium text-gray-300 mt-2">Events</p>
            </div>
            <div className="stat text-center p-8 bg-gradient-to-r from-blue-950 to-purple-950 opacity--10 rounded-lg">
              <h2 className="text-5xl font-extrabold text-white">{participants}</h2>
              <p className="text-lg font-medium text-gray-300 mt-2">Participants</p>
            </div>
            <div className="stat text-center p-8 bg-gradient-to-r from-blue-950 to-purple-950 opacity--10 rounded-lg">
              <h2 className="text-5xl font-extrabold text-white">{prizePool}</h2>
              <p className="text-lg font-medium text-gray-300 mt-2">Prize Pool</p>
            </div>
          </div>
        </div>
      </div>
    </Section>
  );
};

export default Stats;
