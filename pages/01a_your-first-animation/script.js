import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

const scrollTrigger = gsap.registerPlugin(ScrollTrigger);

const card = document.querySelector(".card");


gsap.to(card, {
    x: 100,
    opacity: 0.5,
    duration: 1,
    ease: "power1.inOut",
    repeat: 1,

    yoyo: true,
    onComplete: () => {
        gsap.to(card, {
            x: 0,
            scale: 0,
            opacity: 1,
            duration: 1,
            ease: "power1.inOut",
            yoyo: true,
        });
    }
});