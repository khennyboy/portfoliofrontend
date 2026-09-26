

export const slideInLeft = {
    hidden: { opacity: 0, x: -100 },
    visible: { opacity: 1, x: 0 },
};

export const scaleUp = {
    hidden: { opacity: 0, scale: 0 },
    visible: { opacity: 1, scale: 1 },
};
export const scaleUpTransition = {
    duration: 0.4,
    scale: { type: "spring", visualDuration: 0.4, bounce: 0.5 },
};

export const slideInRight = {
    hidden: { opacity: 0, x: 100 },
    visible: { opacity: 1, x: 0 },
};

