import React from 'react';
// icons
import { BsArrowUpRight } from 'react-icons/bs';
// motion
import { motion } from 'framer-motion';
// variants
import { fadeIn } from '../variants';

// Services Data
const services = [
  {
    name: 'Front-End Web development',
    descriprtion:
      'Front-end web development, also known as client-side development is the practice of producing HTML, CSS and JavaScript for a website or Web Application so that a user can see and interact with them directly. The challenge associated with front end development is that the tools and techniques used to create the front end of a website change constantly and so the developer needs to constantly be aware of how the field is developing.',
    link: 'Learn more',
  },
  {
    name: 'Back-end Web development',
    descriprtion:
      "Back-end development means working on server-side software, which focuses on everything you can't see on a website. Back-end developers ensure the website performs correctly, focusing on databases, back-end logic, application programming interface (APIs), architecture, and servers.:",
    link: 'Learn more',
  },
  {
    name: 'Full stack Web development',
    descriprtion:
      'Full stack development is the end-to-end development of applications. It includes both the front end and back end of an application. The front end is usually accessed by a client, and the back end forms the core of the application where all the business logic is applied.',
    link: 'Learn more',
  },
];
const Services = () => {
  return (
    <section className="section mt-5 lg:mt-10" id="services">
      <div className="container mx-auto">
        <div className="flex flex-col gap-y-6 lg:flex-row">
          {/* text & image */}
          <motion.div
            variants={fadeIn('right', 0.3)}
            initial="hidden"
            whileInView={'show'}
            viewport={{ once: 'false', amount: 0.3 }}
            className="flex-1 lg:bg-services mix-blend-lighten lg:bg-bottom bg-no-repeat">
            <h2 className="h2 text-accent mb-6">What I do.</h2>
            <h3 className="h3 max-w-[480px] mb-16">
              A self-taught Web developer since 2022 and an enthusiastic
              explorer in this field.
            </h3>
            <button className="btn btn-sm">
              <a
                href="https://github.com/Shafayathub"
                rel="noreferrer"
                target="_blank">
                see my work
              </a>
            </button>
          </motion.div>
          {/* services */}
          <div className="flex-1">
            {/* service list */}
            <div>
              {services.map((service, index) => {
                return (
                  <motion.div
                    variants={fadeIn('left', 0.3)}
                    initial="hidden"
                    whileInView={'show'}
                    viewport={{ once: 'false', amount: 0.3 }}
                    key={index}
                    className="border-b border-white/20 mb-6 flex flex-col md:flex-row items-center py-6">
                    <div className="max-w-[476px]">
                      <h4 className="text-[20px] tracking-wider font-primary font-semibold mb-6">
                        {service.name}
                      </h4>
                      <p className="font-secondary leading-tight">
                        {service.descriprtion}
                      </p>
                    </div>
                    <div className="flex flex-col flex-1 items-center">
                      <a
                        href="https://www.fiverr.com/seo_expert1314"
                        rel="noreferrer"
                        target="_blank"
                        className="btn w-9 h-9 flex justify-center items-center">
                        <BsArrowUpRight />
                      </a>
                      <a
                        href="https://www.fiverr.com/seo_expert1314"
                        rel="noreferrer"
                        target="_blank"
                        className="text-sm text-gradient">
                        {service.link}
                      </a>
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
