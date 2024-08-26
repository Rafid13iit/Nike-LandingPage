import React from 'react';
import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { shoe8 } from "../assets/images";
import Button from "../components/Button";
import { fadeIn, slideAnimation } from '../config/motion';

const SuperQuality = () => {
  const controls = useAnimation();
  const [ref, inView] = useInView({
    triggerOnce: false, // Keep this false to trigger every time it's in view
    threshold: 0.1, // Adjust if needed to 0.5 or 0.3 based on your testing
  });

  React.useEffect(() => {
    if (inView) {
      controls.start('animate');
    } else {
      controls.start('initial'); // Reset to initial state if out of view
    }
  }, [controls, inView]);

  return (
    <motion.section
      id='about-us'
      ref={ref}
      className='flex justify-between items-center max-lg:flex-col gap-10 w-full max-container'
      initial="initial"
      animate={controls}
      variants={fadeIn(0.8)}  // Applying fade-in effect to the whole section
    >
      <motion.div className='flex flex-1 flex-col' variants={slideAnimation('left', 0.9, 0.2)}>
        <h2 className='font-palanquin capitalize text-4xl lg:max-w-lg font-bold'>
          We Provide You
          <span className='text-coral-red'> Super </span>
          <span className='text-coral-red'>Quality </span> Shoes
        </h2>
        <p className='mt-4 lg:max-w-lg info-text'>
          Ensuring premium comfort and style, our meticulously crafted footwear
          is designed to elevate your experience, providing you with unmatched
          quality, innovation, and a touch of elegance.
        </p>
        <p className='mt-6 lg:max-w-lg info-text'>
          Our dedication to detail and excellence ensures your satisfaction
        </p>
        <div className='mt-11'>
          <Button label='View details' />
        </div>
      </motion.div>

      <motion.div 
        className='flex-1 flex justify-center items-center'
        variants={slideAnimation('right', 0.9, 0.4)} // Animation for the image
      >
        <img
          src={shoe8}
          alt='product detail'
          width={570}
          height={522}
          className='object-contain'
        />
      </motion.div>
    </motion.section>
  );
};

export default SuperQuality;
