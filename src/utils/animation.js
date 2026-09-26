
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

export const scaleUp = {
    hidden: { opacity: 0, scale: 0 },
    visible: {
        opacity: 1,
        scale: 1,
        transition: { duration: 0.5, ease: [0.25, 0.1, 0.25, 1] }
    }
}

export const slideUp = {
    hidden: { opacity: 0, y: 80 },
    visible: (i = 0) => ({
        opacity: 1,
        y: 0,
        transition: {
            duration: 0.5,
            delay: i * 0.1,
            ease: [0.25, 0.1, 0.25, 1]
        },
    }),
};

