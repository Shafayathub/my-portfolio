import React from 'react';
// images
import Image from '../assets/shafayat1.png';
// icons
import { FaGithub, FaLinkedin, FaFacebook } from 'react-icons/fa';
// Type Animation
import { TypeAnimation } from 'react-type-animation';
// motion
import { motion } from 'framer-motion';
// variants
import { fadeIn } from '../variants';
const Banner = () => {
  return (
    <section className="section flex items-center lg:max-h-[88vh]" id="home">
      <div className="container mx-auto">
        <div className="flex flex-col-reverse items-center gap-y-8 md:flex-row md:items-center md:gap-x-8">
          {/* text */}
          <div className="flex-1 text-center font-secondary lg:text-left lg:mt-24">
            <motion.h1
              variants={fadeIn('down', 0.4)}
              initial="hidden"
              whileInView={'show'}
              viewport={{ amount: 0.7 }}
              className="text-[55px] lg:text-[110px] font-bold leading-[1]">
              MD <span>Shafayat Islam</span>
            </motion.h1>
            <div className="mb-6 text-[36px] lg:text-[60px] font-secondary font-semibold uppercase leading-[1]">
              <span className="mr-2">I am a</span>
              <TypeAnimation
                sequence={[
                  'Web Developer',
                  2000,
                  'Team Player',
                  2000,
                  'Learner',
                  2000,
                ]}
                speed={50}
                className="text-accent"
                wrapper="span"
                repeat={Infinity}
              />
            </div>
            <motion.p
              variants={fadeIn('up', 0.5)}
              initial="hidden"
              whileInView={'show'}
              viewport={{ once: 'false', amount: 0.7 }}
              className="mb-8">
              I am a full stack Web Developer who loves to use the
              most-performing MERN stack. I enjoy working with clients who
              appreciate quality.
            </motion.p>
            <div className="mb-6">
              <button className="btn btn-lg">Contact me</button>
            </div>
            <div className="flex text-[20px] gap-x-6 max-w-max mx-auto lg:mx-0">
              <button>
                <FaLinkedin></FaLinkedin>
              </button>
              <button>
                <FaGithub></FaGithub>
              </button>
              <button>
                <FaFacebook></FaFacebook>
              </button>
            </div>
          </div>
          {/* image */}
          <motion.div
            variants={fadeIn('up', 0.5)}
            initial="hidden"
            whileInView={'show'}
            viewport={{ once: 'false', amount: 0.7 }}>
            <img
              className="w-36 md:w-60 lg:w-72"
              src={Image}
              alt="MD Shafayat Islam"
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Banner;
