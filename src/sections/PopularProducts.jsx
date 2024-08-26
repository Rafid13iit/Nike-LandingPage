import React from 'react';
import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import PopularProductCard from "../components/PopularProductCard";
import { products } from "../constants";
import { fadeIn, slideAnimation } from '../config/motion';

const PopularProducts = () => {
  const controls = useAnimation();
  const [ref, inView] = useInView({
    threshold: 0.1, // Percentage of the element that must be visible before triggering the animation
  });

  React.useEffect(() => {
    if (inView) {
      controls.start('animate');
    } else {
      controls.start('initial'); // Reset the animation when the section goes out of view
    }
  }, [controls, inView]);

  return (
    <motion.section 
      id='products' 
      className='max-container max-sm:mt-12'
      ref={ref} // Reference to the section
      initial="initial"
      animate={controls}
      variants={fadeIn(0.8)}  // Using fade-in effect when the section comes into view
    >
      <motion.div 
        className='flex flex-col justify-start gap-5'
        variants={slideAnimation('up', 0.8, 0.2)}  // Slide-up effect for the header
      >
        <h2 className='text-4xl font-palanquin font-bold'>
          Our <span className='text-coral-red'> Popular </span> Products
        </h2>
        <p className='lg:max-w-lg mt-2 font-montserrat text-slate-gray'>
          Experience top-notch quality and style with our sought-after
          selections. Discover a world of comfort, design, and value
        </p>
      </motion.div>

      <motion.div 
        className='mt-16 grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 grid-cols-1 sm:gap-6 gap-14'
        variants={slideAnimation('up', 1.0, 0.4)}  // Slide-up effect for the grid container
      >
        {products.map((product, index) => (
          <motion.div
            key={product.name}
            whileHover={{ scale: 1.05 }}  // Adding a hover effect to each product card
            variants={fadeIn(0.9, index * 0.1)}  // Staggered fade-in effect for each card
          >
            <PopularProductCard {...product} />
          </motion.div>
        ))}
      </motion.div>
    </motion.section>
  );
};

export default PopularProducts;
