import React, { useState, useEffect } from 'react';
import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

import { shoes, statistics } from '../constants';
import { bigShoe1 } from '../assets/images';
import { arrowRight } from '../assets/icons';
import Button from '../components/Button';
import ShoeCard from '../components/ShoeCard';
import { slideAnimation, fadeIn } from '../config/motion';

const Hero = () => {
  const [bigShoeImg, setBigShoeImg] = useState(bigShoe1);
  const controls = useAnimation();
  const [ref, inView] = useInView({
    triggerOnce: false, // Trigger animation every time the section comes into view
    threshold: 0.2, // Adjust to control when the animation triggers
  });

  useEffect(() => {
    if (inView) {
      controls.start('animate');
    } else {
      controls.start('initial'); // Optionally reset to the initial state when out of view
    }
  }, [controls, inView]);

  return (
    <motion.section
      id='home'
      ref={ref}  // Attach the ref to the section
      className='w-full flex xl:flex-row flex-col justify-center min-h-screen gap-10 max-container'
      initial="initial"
      animate={controls}
      variants={fadeIn(0.8)}  // Applying fade-in effect to the whole section
    >
      <div className='relative xl:w-2/5 flex flex-col justify-center items-start w-full max-xl:padding-x pt-28'>
        <motion.p className='text-xl font-montserrat text-coral-red' variants={slideAnimation('down', 0.7)}>
          Our Summer collections
        </motion.p>

        <motion.h1
          className='mt-10 font-palanquin text-8xl max-sm:text-[72px] max-sm:leading-[82px] font-bold'
          variants={slideAnimation('left', 0.9, 0.3)}
        >
          <span className='xl:bg-white xl:whitespace-nowrap relative z-10 pr-10'>
            The New Arrival
          </span>
          <br />
          <span className='text-coral-red inline-block mt-3'>Nike</span> Shoes
        </motion.h1>

        <motion.p
          className='font-montserrat text-slate-gray text-lg leading-8 mt-6 mb-14 sm:max-w-sm'
          variants={slideAnimation('up', 0.9, 0.5)}
        >
          Discover stylish Nike arrivals, quality comfort, and innovation for
          your active life.
        </motion.p>

        <motion.div variants={fadeIn(1.0, 0.7)}>
          <Button label="Shop now" iconURL={arrowRight} />
        </motion.div>

        <motion.div
          className='flex justify-start items-start flex-wrap w-full mt-20 gap-16'
          variants={fadeIn(1.2, 0.9)}
        >
          {statistics.map((stat, index) => (
            <div key={index}>
              <motion.p className='text-4xl font-palanquin font-bold' variants={slideAnimation('up', 0.7, index * 0.2)}>
                {stat.value}
              </motion.p>
              <p className='leading-7 font-montserrat text-slate-gray'>
                {stat.label}
              </p>
            </div>
          ))}
        </motion.div>
      </div>

      <div className='relative flex-1 flex justify-center items-center xl:min-h-screen max-xl:py-40 bg-primary bg-hero bg-cover bg-center'>
        <motion.img
          src={bigShoeImg}
          alt='shoe collection'
          width={610}
          height={502}
          className='object-contain relative z-10'
          variants={slideAnimation('down', 0.9, 0.3)}  // Animation for shoe image
        />

        <motion.div
          className='flex sm:gap-6 gap-4 absolute -bottom-[5%] sm:left-[10%] max-sm:px-6'
          variants={slideAnimation('up', 0.9, 0.5)}  // Animation for shoe cards
        >
          {shoes.map((image, index) => (
            <div key={index}>
              <ShoeCard
                index={index}
                imgURL={image}
                changeBigShoeImage={(shoe) => setBigShoeImg(shoe)}
                bigShoeImg={bigShoeImg}
              />
            </div>
          ))}
        </motion.div>
      </div>
    </motion.section>
  );
}

export default Hero;
