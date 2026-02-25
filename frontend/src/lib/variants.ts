import { Variants } from "framer-motion";

export const fadeUp: Variants = {
    hidden: {opacity: 0, y: 20, scale: 0.8},
    visible: {opacity: 1, y: 0, scale: 1, transition: {
        duration: 1
    }}
}
   
export const fadeDown: Variants = {
    hidden: {opacity: 0, y: -20},
    visible: {opacity: 1, y: 0, transition: {
        duration: 1
    }}
}
    
export const fadeLeft: Variants = {
    hidden: {opacity: 0, x: -20},
    visible: {opacity: 1, x: 0, transition: {
        duration: 1
    }}
}

export const fadeRight: Variants = {
    hidden: {opacity: 0, x: 20},
    visible: {opacity: 1, x: 0, transition: {
        duration: 1
    }}
}

export const blur: Variants = {
    hidden: {opacity: 0, filter: "blur(10px)"},
    visible: {opacity: 1, filter: "blur(0px)", transition: {
        duration: 0.5, ease: "easeInOut"
    }}
}

export const scaleUp: Variants = {
    hidden: {opacity: 0, scale: 0.7},
    visible: {opacity: 1, scale: 1, transition: {
        duration: 0.5, ease: "easeInOut"
    }}
}

export const scaleDown: Variants = {
    hidden: {opacity: 0, scale: 1.1},
    visible: {opacity: 1, scale: 1, transition: {
        duration: 0.5, ease: "easeInOut"
    }}
}

export const blurScale: Variants = {
    hidden: {opacity: 0, filter: "blur(10px)", scale: 0.5},
    visible: {opacity: 1, filter: "blur(0px)", scale: 1, transition: {
        duration: 1, ease: "easeOut"
    }}
}

export const spinScaleUp: Variants = {
    hidden: {opacity: 0, scale: 0.5, rotate: 360},
    visible: {opacity: 1, scale: 1, rotate:0, transition: {
        duration: 3, ease: "easeInOut"
    }}
}

export const staggerContainer: Variants = {
    hidden: {},
    visible: {
        transition: {
            staggerChildren: 1,
            when: "beforeChildren"
        },
    },
};