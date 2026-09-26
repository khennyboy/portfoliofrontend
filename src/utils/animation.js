export const slideInLeft = {
  hidden: { opacity: 0, x: -60 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.5, ease: [0.25, 0.1, 0.25, 1] },
  },
};

export const slideInRight = {
  hidden: { opacity: 0, x: 60 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.5, ease: [0.25, 0.1, 0.25, 1] },
  },
};

// gentler scale, less aggressive bounce — reads as "smooth pop" not "jolt"
export const scaleUp = {
  hidden: { opacity: 0, scale: 0.85 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: {
      duration: 0.35,
      scale: { type: "spring", stiffness: 260, damping: 22 },
    },
  },
};

// used on the grid's parent — this creates the row/column cascade natively
export const staggerContainer = (staggerDelay = 0.08) => ({
  hidden: {},
  visible: {
    transition: { staggerChildren: staggerDelay },
  },
});