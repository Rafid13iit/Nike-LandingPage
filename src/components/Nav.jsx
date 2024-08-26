import React, { useEffect } from 'react';
import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { headerLogo } from '../assets/images';
import { hamburger } from '../assets/icons';
import { navLinks } from '../constants';
import { slideAnimation } from '../config/motion';

const Nav = () => {
  const controls = useAnimation();
  const [ref, inView] = useInView({
    triggerOnce: false, // Trigger animation every time the component comes into view
    threshold: 0.1, // Adjust to control when the animation triggers
  });

  useEffect(() => {
    if (inView) {
      controls.start('animate');
    } else {
      controls.start('initial'); // Optionally reset the animation when out of view
    }
  }, [controls, inView]);

  return (
    <header className="padding-x py-8 absolute z-10 w-full">
      <nav ref={ref} className="flex justify-between items-center max-container">
        <motion.a
          href="/"
          initial="initial"
          animate={controls}
          variants={slideAnimation('left')}
        >
          <img src={headerLogo} alt="Logo" width={130} height={29} />
        </motion.a>
        <ul className='flex-1 flex justify-center items-center gap-16 max-lg:hidden'>
          {navLinks.map((item, index) => (
            <motion.li
              key={item.label}
              initial="initial"
              animate={controls}
              variants={slideAnimation('down')}
              transition={{ ...slideAnimation('up').animate.transition, delay: index * 0.1 }}
              whileHover={{ scale: 1.1 }}
            >
              <a
                href={item.href}
                className='font-montserrat leading-normal text-lg text-slate-gray'
              >
                {item.label}
              </a>
            </motion.li>
          ))}
        </ul>
        <motion.div
          className="hidden max-lg:block"
          initial="initial"
          animate={controls}
          variants={slideAnimation('right')}
          whileHover={{ scale: 1.2 }}
        >
          <img src={hamburger} alt="Hamburger" width={25} height={25} />
        </motion.div>
      </nav>
    </header>
  );
};

export default Nav;
