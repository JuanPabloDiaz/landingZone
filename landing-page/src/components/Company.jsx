// Code Source: https://www.youtube.com/watch?v=bhRUBc0xjUo

import React, { useState } from "react";
import { motion } from "framer-motion";
import img1 from "../assets/img/10-project295.png";
import img2 from "../assets/img/11-project295.png";
import img3 from "../assets/img/12-project295.png";
import img4 from "../assets/img/13-team380.png";
const OpenCards = () => {
  const [expandedIndex, setExpandedIndex] = useState(null);

  const handleCardClick = (index) => {
    setExpandedIndex(index === expandedIndex ? -1 : index);
  };

  const cardVariants = {
    expanded: { width: "400px" },
    collapsed: { width: "200px" },
  };
  const cardImages = [img1, img2, img3, img4];

  const cardDescriptions = [
    "this is a description, with more text than the other cards",
    "this is a description, with more text than the other cards",
    "this is a description, with more text than the other cards",
    "this is a description, with more text than the other cards",
  ];
  return (
    <section className="py-16 pb-[300px] bg-slate-600">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-3xl font-extrabold text-white">
          Feautured Projects
        </h1>
        <p className="mt-4 text-xl text-gray-300">Check the latest one</p>
      </div>
      <div className="mt-12 flex flex-col md:flex-row justify-center items-center gap-5">
        {[0, 1, 2, 3].map((index) => (
          <motion.div
            key={index}
            className={`card cursor-pointer h-[500px] bg-cover bg-center rounded-[20px] ${
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
            <div className="card-content h-full flex flex-col justify-end">
              <div className="card-footer rounded-b-[20px] bg-gray-800 bg-opacity-75 min-h-[100px] flex flex-col items-center justify-center">
                <h2 className="text-xl font-bold text-white">
                  Card {index + 1}
                </h2>
                {index === expandedIndex && (
                  <p className="text-white text-center">
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
