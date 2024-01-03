// Code Source: https://www.youtube.com/watch?v=bhRUBc0xjUo

import React, { useState } from "react";
import { motion } from "framer-motion";
import missionImg from "../assets/img/19-mission.jpg";
import visionImg from "../assets/img/20-vision.jpg";
import companyImg from "../assets/img/21-company.jpg";
import customerImg from "../assets/img/22-customer.jpg";
const OpenCards = () => {
  const [expandedIndex, setExpandedIndex] = useState(null);

  const handleCardClick = (index) => {
    setExpandedIndex(index === expandedIndex ? -1 : index);
  };

  const cardVariants = {
    expanded: { width: "600px" },
    collapsed: { width: "300px" },
  };
  const cardImages = [missionImg, visionImg, companyImg, customerImg];
  const cardTitle = [
    "Our Mission",
    "Our Vision",
    "Our Company",
    "Our Customer",
  ];
  const cardDescriptions = [
    "To foster brand success by delivering innovative software solutions that help them thrive and distinguish themselves.",
    "To empower every brand to define new standards of excellence and distinction, using our software solutions.",
    "We're dedicated to fueling brand success with cutting-edge technology, making us the catalyst for your journey to excellence.",
    "Our customers are ambitious businesses and entrepreneurs, and we're here to empower their success with innovative software solutions.",
  ];
  return (
    <section name="company" className="pb-6 pt-24 sm:pb-6 md:pt-32">
      <div className="mx-auto max-w-7xl px-4 text-center sm:px-6 lg:px-8">
        <h2 className="text-4xl tracking-tight text-[#132577] sm:text-2xl">
          WE LOVE OUR WORK
        </h2>
        <p className="text-black-600 mt-2 text-3xl font-bold leading-8">
          FIND OUT MORE
        </p>
      </div>
      <div className="mt-12 flex flex-col items-center justify-center gap-5 md:flex-row">
        {[0, 1, 2, 3].map((index) => (
          <motion.div
            key={index}
            className={`card h-[300px] cursor-pointer rounded-[20px] bg-cover bg-center md:h-[500px] ${
              index === expandedIndex ? "expanded" : ""
            }`}
            variants={cardVariants}
            initial="collapsed"
            animate={index === expandedIndex ? "expanded" : "collapsed"}
            transition={{ duration: 0.5 }}
            onClick={() => handleCardClick(index)}
            style={{
              backgroundImage: `url(${cardImages[index]})`,
            }}
          >
            <div className="card-content flex h-full flex-col justify-end">
              <div className="card-footer flex min-h-[100px] flex-col items-center justify-center rounded-b-[20px] bg-[#132577] bg-opacity-75">
                <h2 className="text-xl font-bold text-white">
                  {cardTitle[index]}
                </h2>
                {index === expandedIndex && (
                  <p className="text-center text-white">
                    {cardDescriptions[index]}
                  </p>
                )}
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default OpenCards;
