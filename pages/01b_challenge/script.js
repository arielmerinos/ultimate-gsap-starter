
const card = document.querySelector(".card");

gsap.to(card, {
    scale: 1,
    y: -20,
    opacity: 1,
    boxShadow: "0 20px 20px rgba(255, 255, 255, 0.6)",
    duration: 1,
    ease: "power1.inOut",  
    repeat: -1,
    yoyo: true,
    })