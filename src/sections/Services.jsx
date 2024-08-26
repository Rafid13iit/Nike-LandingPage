import React from 'react';
import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import ServiceCard from "../components/ServiceCard";
import { services } from "../constants";
import { slideAnimation } from '../config/motion';

const Services = () => {
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
      ref={ref}  // Attach the ref to the section
      className='max-container flex justify-evenly flex-wrap gap-9'
      initial="initial"
      animate={controls}
      variants={slideAnimation('up', 0.8, 0.2)}  // Add your slide animation here
    >
      {services.map((service, index) => (
        <motion.div 
          key={service.label} 
          variants={slideAnimation('up', 0.9, index * 0.2)}  // Stagger the animations
        >
          <ServiceCard {...service} />
        </motion.div>
      ))}
    </motion.section>
  );
};

export default Services;
