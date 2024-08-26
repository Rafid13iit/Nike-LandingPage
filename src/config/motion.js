export const transition = {
  duration: 0.7,
  ease: [0.6, -0.05, 0.01, 0.99],  // You can tweak these values as per your design
};

export const slideAnimation = (direction = 'up', duration = 0.7, delay = 0) => ({
  initial: {
    x: direction === 'left' ? -100 : direction === 'right' ? 100 : 0,
    y: direction === 'up' ? 100 : direction === 'down' ? -100 : 0,
    opacity: 0,
  },
  animate: {
    x: 0,
    y: 0,
    opacity: 1,
    transition: { duration, delay, ...transition },
  },
  exit: {
    x: direction === 'left' ? -100 : direction === 'right' ? 100 : 0,
    y: direction === 'up' ? 100 : direction === 'down' ? -100 : 0,
    opacity: 0,
    transition: { duration, ...transition },
  },
});

export const fadeIn = (duration = 0.5, delay = 0) => ({
  initial: { opacity: 0 },
  animate: { opacity: 1, transition: { duration, delay, ...transition } },
  exit: { opacity: 0, transition: { duration, ...transition } },
});
