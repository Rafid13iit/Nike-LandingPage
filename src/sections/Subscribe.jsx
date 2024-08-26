import React from 'react';
import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import Button from "../components/Button";
import { slideAnimation } from '../config/motion';

const Subscribe = () => {
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
    <motion.section
      id='contact-us'
      ref={ref}
      className='max-container flex justify-between items-center max-lg:flex-col gap-10'
      initial="initial"
      animate={controls}
      variants={slideAnimation('up', 0.8, 0.2)} // Apply a slide-up effect to the section
    >
      <h3 className='text-4xl leading-[68px] lg:max-w-md font-palanquin font-bold'>
        Sign Up for
        <span className='text-coral-red'> Updates </span>& Newsletter
      </h3>
      <div className='lg:max-w-[40%] w-full flex items-center max-sm:flex-col gap-5 p-2.5 sm:border sm:border-slate-gray rounded-full'>
        <input type='text' placeholder='subscribe@nike.com' className='input' />
        <div className='flex max-sm:justify-end items-center max-sm:w-full'>
          <Button label='Sign Up' fullWidth />
        </div>
      </div>
    </motion.section>
  );
};

export default Subscribe;
