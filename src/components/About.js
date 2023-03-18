import React from 'react';
// icon
import { AiOutlineWhatsApp } from 'react-icons/ai';
// count up
import CountUp from 'react-countup';
// intersection observer hook
import { useInView } from 'react-intersection-observer';
// motion
import { motion } from 'framer-motion';
// variant
import { fadeIn } from '../variants';
const About = () => {
  const [ref, inView] = useInView({
    threshold: 0.5,
  });
  return (
    <section className="section mt-5 lg:mt-16" id="about" ref={ref}>
      <div className="container mx-auto">
        <div className="flex flex-col gap-y-10 lg:flex-row lg:items-center h-screen">
          {/* image */}
          <motion.div
            variants={fadeIn('right', 0.3)}
            initial="hidden"
            whileInView={'show'}
            viewport={{ once: 'false', amount: 0.3 }}
            className="flex-1 bg-about bg-contain bg-no-repeat h-[640px] mix-blend-lighten"></motion.div>
          {/* text */}
          <motion.div
            variants={fadeIn('left', 0.3)}
            initial="hidden"
            whileInView={'show'}
            viewport={{ once: 'false', amount: 0.3 }}
            className="flex-1">
            <h2 className="h2 text-accent">About me.</h2>
            <h3 className="h3 mb-4">
              A self-taught Web developer since 2022 and an enthusiastic
              explorer in this field.
            </h3>
            <p className="mb-6">
              I have worked on small to large Web Applications and satisfyingly
              fulfilled clients' realistic requirements.
              <br />
              Learning and developing skills on a regular basis. I love to learn
              and apply any updated technology for making Web Applications
              perform better.
            </p>
            {/* stats */}
            <div className="flex gap-x-6 lg:gap-x-10 mb-10">
              <div>
                <div className="text-[40px] font-tertiary text-gradient mb-2">
                  {inView ? <CountUp start={0} end={5} duration={5} /> : 5}
                </div>
                <div className="font-primary text-sm tracking-[2px]">
                  Years of <br />
                  Experience in freelancing.
                </div>
              </div>
              <div>
                <div className="text-[40px] font-tertiary text-gradient mb-2">
                  {inView ? <CountUp start={0} end={2} duration={3} /> : 2}
                </div>
                <div className="font-primary text-sm tracking-[2px]">
                  Years of <br />
                  Experience in Front-end Development.
                </div>
              </div>
            </div>
            <div>
              <button className="btn btn-lg">
                <a
                  href="https://wa.me/+8801718053201"
                  rel="noreferrer"
                  target="_blank"
                  className="flex items-center">
                  Contact me <AiOutlineWhatsApp className="text-xl ml-2" />
                </a>
              </button>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
