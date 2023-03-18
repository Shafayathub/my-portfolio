import React, { useRef } from 'react';
// motion
import { motion } from 'framer-motion';
// variants
import { fadeIn } from '../variants';
import emailjs from '@emailjs/browser';

const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        'service_ctq968m',
        'template_81m2qpn',
        form.current,
        'EsbgZD88obVLvxE7P'
      )
      .then(
        (result) => {
          alert('Email sent');
          form.current.reset();
        },
        (error) => {
          console.log(error.text);
        }
      );
  };
  return (
    <section className="lg:section py-16 mb-24" id="contact">
      <div className="container mx-auto">
        <div className="flex flex-col lg:flex-row">
          <motion.div
            variants={fadeIn('right', 0.3)}
            initial="hidden"
            whileInView={'show'}
            viewport={{ once: 'false', amount: 0.3 }}
            className="flex-1">
            <div>
              <h4 className="text-3xl uppercase text-accent font-medium mb-2">
                Contact Me
              </h4>
              <h2 className="text-[45px] lg:text-[90px] leading-none mb-12">
                Let's work <br />
                together!
              </h2>
            </div>
          </motion.div>
          <motion.form
            variants={fadeIn('left', 0.3)}
            initial="hidden"
            whileInView={'show'}
            viewport={{ once: 'false', amount: 0.3 }}
            className="flex-1 flex flex-col border rounded-2xl gap-y-6 pb-24 p-6 items-start"
            ref={form}
            onSubmit={sendEmail}>
            <input
              className="bg-transparent border-b py-3 outline-none w-full placeholder:text-white"
              type="text"
              name="user_name"
              placeholder="Your Name"
              required
            />
            <input
              className="bg-transparent border-b py-3 outline-none w-full placeholder:text-white"
              type="email"
              name="user_email"
              placeholder="Your Email"
              required
            />
            <input
              className="bg-transparent border-b py-3 outline-none w-full placeholder:text-white"
              type="text"
              name="subject"
              placeholder="Subject"
              required
            />
            <textarea
              className="bg-transparent border-b py-12 outline-none w-full placeholder:text-white"
              name="message"
              placeholder="your Message"
              required
            />
            <input className="btn btn-lg" type="submit" value="Send Message" />
          </motion.form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
