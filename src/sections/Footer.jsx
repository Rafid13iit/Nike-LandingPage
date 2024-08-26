import React from 'react';
import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { copyrightSign } from "../assets/icons";
import { footerLogo } from "../assets/images";
import { footerLinks, socialMedia } from "../constants";
import { slideAnimation } from '../config/motion';

const Footer = () => {
  const controls = useAnimation();
  const [ref, inView] = useInView({
    triggerOnce: false,
    threshold: 0.1,
  });

  React.useEffect(() => {
    if (inView) {
      controls.start('animate');
    } else {
      controls.start('initial');
    }
  }, [controls, inView]);

  return (
    <motion.footer
      ref={ref}
      className='max-container'
      initial="initial"
      animate={controls}
      variants={slideAnimation('up', 0.8, 0.2)} // Apply a slide-up effect to the footer
    >
      <motion.div className='flex justify-between items-start gap-20 flex-wrap max-lg:flex-col' variants={slideAnimation('up', 0.9, 0.2)}>
        <div className='flex flex-col items-start'>
          <a href='/'>
            <img
              src={footerLogo}
              alt='logo'
              width={150}
              height={46}
              className='m-0'
            />
          </a>
          <p className='mt-6 text-base leading-7 font-montserrat text-white-400 sm:max-w-sm'>
            Get shoes ready for the new term at your nearest Nike store. Find
            Your perfect Size In Store. Get Rewards
          </p>
          <div className='flex items-center gap-5 mt-8'>
            {socialMedia.map((icon) => (
              <div
                className='flex justify-center items-center w-12 h-12 bg-white rounded-full'
                key={icon.alt}
              >
                <img src={icon.src} alt={icon.alt} width={24} height={24} />
              </div>
            ))}
          </div>
        </div>

        <motion.div className='flex flex-1 justify-between lg:gap-10 gap-20 flex-wrap' variants={slideAnimation('up', 0.9, 0.4)}>
          {footerLinks.map((section) => (
            <div key={section.title}>
              <h4 className='font-montserrat text-2xl leading-normal font-medium mb-6 text-white'>
                {section.title}
              </h4>
              <ul>
                {section.links.map((link) => (
                  <li
                    className='mt-3 font-montserrat text-base leading-normal text-white-400 hover:text-slate-gray'
                    key={link.name}
                  >
                    <a href={link.link}>{link.name}</a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </motion.div>
      </motion.div>

      <motion.div className='flex justify-between text-white-400 mt-24 max-sm:flex-col max-sm:items-center' variants={slideAnimation('up', 0.9, 0.6)}>
        <div className='flex flex-1 justify-start items-center gap-2 font-montserrat cursor-pointer'>
          <img
            src={copyrightSign}
            alt='copyright sign'
            width={20}
            height={20}
            className='rounded-full m-0'
          />
          <p>Copyright. All rights reserved.</p>
        </div>
        <p className='font-montserrat cursor-pointer'>Terms & Conditions</p>
      </motion.div>
    </motion.footer>
  );
};

export default Footer;
