import React from 'react';
// motion
import { motion } from 'framer-motion';
// variants
import { fadeIn } from '../variants';
// image
import img1 from '../assets/portfolio-img1.png';
import img2 from '../assets/portfolio-img2.png';

const Work = () => {
  return (
    <div className="section mt-5 lg:mt-48" id="work">
      <div className="container mx-auto">
        <div className="flex flex-col lg:flex-row gap-x-10">
          <div className="flex-1 flex flex-col gap-y-12 mb-10">
            {/* text */}
            <motion.div
              variants={fadeIn('right', 0.3)}
              initial="hidden"
              whileInView={'show'}
              viewport={{ once: 'false', amount: 0.3 }}>
              <h2 className="h2 leading-tight text-accent font-primary font-semibold">
                My Latest <br />
                work
              </h2>
              <p className="max-w-sm mb-6">
                I keep doing project maybe I forget to update them here. Contact
                me to see my projects.
              </p>
              <button className="btn btn-sm">
                <a
                  href="https://github.com/Shafayathub"
                  rel="noreferrer"
                  target="_blank">
                  View my projects
                </a>
              </button>
            </motion.div>
            {/* image */}
            <motion.div
              variants={fadeIn('up', 0.3)}
              initial="hidden"
              whileInView={'show'}
              viewport={{ once: 'false', amount: 0.3 }}
              className="group relative overflow-hidden border-2 border-white/50 rounded-xl">
              {/* overlay */}
              <div className="group-hover:bg-black/70 w-full h-full absolute z-40 transition-all duration-300"></div>
              {/* image */}
              <img
                className="group-hover:scale-125 transition-all duration-500"
                src={img1}
                alt="MD Shafayat Islam"
              />
              {/* pretitle */}
              <div className="absolute -bottom-full left-12 group-hover:bottom-24 transition-all duration-500 z-50">
                <span className="text-gradient">Web Development</span>
              </div>
              {/* title */}
              <div className="absolute -bottom-full left-12 group-hover:bottom-14 transition-all duration-700 z-50">
                <span className="text-2xl text-white">Project Title</span>
              </div>
            </motion.div>
          </div>
          <motion.div
            variants={fadeIn('down', 0.3)}
            initial="hidden"
            whileInView={'show'}
            viewport={{ once: 'false', amount: 0.3 }}
            className="flex-1">
            {/* image */}
            <div className="group relative overflow-hidden border-2 border-white/50 rounded-xl">
              {/* overlay */}
              <div className="group-hover:bg-black/70 w-full h-full absolute z-40 transition-all duration-300"></div>
              {/* image */}
              <img
                className="group-hover:scale-125 transition-all duration-500"
                src={img2}
                alt="MD Shafayat Islam"
              />
              {/* pretitle */}
              <div className="absolute -bottom-full left-12 group-hover:bottom-24 transition-all duration-500 z-50">
                <span className="text-gradient">Web Development</span>
              </div>
              {/* title */}
              <div className="absolute -bottom-full left-12 group-hover:bottom-14 transition-all duration-700 z-50">
                <span className="text-2xl text-white">Project Title</span>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Work;
