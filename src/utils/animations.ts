import gsap from "gsap";

export const fadeUp = (
  selector: string
) => {

  gsap.from(selector, {

    y: 80,

    opacity: 0,

    duration: 1.2,

    ease: "power3.out"

  });

};