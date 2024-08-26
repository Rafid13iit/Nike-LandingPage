import React from 'react';
import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { arrowRight } from "../assets/icons";
import { offer } from "../assets/images";
import Button from "../components/Button";
import { fadeIn, slideAnimation } from '../config/motion';

const SpecialOffer = () => {
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
      ref={ref}
      className='flex justify-between items-center max-xl:flex-col-reverse gap-10 max-container'
      initial="initial"
      animate={controls}
      variants={fadeIn(0.8)} // Apply a fade-in effect to the section
    >
      <motion.div 
        className='flex-1'
        variants={slideAnimation('left', 0.9, 0.2)} // Animation for the image
      >
        <img
          src={offer}
          alt='Shoe Promotion'
          width={773}
          height={687}
          className='object-contain w-full'
        />
      </motion.div>

      <motion.div className='flex flex-1 flex-col' variants={slideAnimation('right', 0.9, 0.4)}>
        <h2 className='text-4xl font-palanquin font-bold'>
          <span className='text-coral-red'>Special </span>
          Offer
        </h2>
        <p className='mt-4 info-text'>
          Embark on a shopping journey that redefines your experience with
          unbeatable deals. From premier selections to incredible savings, we
          offer unparalleled value that sets us apart.
        </p>
        <p className='mt-6 info-text'>
          Navigate a realm of possibilities designed to fulfill your unique
          desires, surpassing the loftiest expectations. Your journey with us is
          nothing short of exceptional.
        </p>
        <div className='mt-11 flex flex-wrap gap-4'>
          <Button label='Shop now' iconURL={arrowRight} />
          <Button
            label='Learn more'
            backgroundColor='bg-white'
            borderColor='border-slate-gray'
            textColor='text-slate-gray'
          />
        </div>
      </motion.div>
    </motion.section>
  );
};

export default SpecialOffer;
