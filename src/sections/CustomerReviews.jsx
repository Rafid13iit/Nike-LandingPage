import React from 'react';
import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import ReviewCard from "../components/ReviewCard";
import { reviews } from "../constants";
import { fadeIn, slideAnimation } from '../config/motion'; // Assuming you have these in your motion config

const CustomerReviews = () => {
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
      className='max-container'
      initial="initial"
      animate={controls}
      variants={fadeIn(0.8)} // Apply a fade-in effect to the section
    >
      <h3 className='font-palanquin text-center text-4xl font-bold'>
        What Our
        <span className='text-coral-red'> Customers </span>
        Say?
      </h3>
      <p className='m-auto mt-4 max-w-lg text-center info-text'>
        Hear genuine stories from our satisfied customers about their
        exceptional experiences with us.
      </p>

      <motion.div 
        className='mt-24 flex flex-1 justify-evenly items-center max-lg:flex-col gap-14'
        variants={slideAnimation('up', 0.9, 0.2)} // Stagger the animations
      >
        {reviews.map((review, index) => (
          <motion.div key={index} variants={slideAnimation('up', 0.9, index * 0.2)}>
            <ReviewCard
              imgURL={review.imgURL}
              customerName={review.customerName}
              rating={review.rating}
              feedback={review.feedback}
            />
          </motion.div>
        ))}
      </motion.div>
    </motion.section>
  );
};

export default CustomerReviews;
