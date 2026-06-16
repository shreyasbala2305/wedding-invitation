import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

import storyImage from "../../assets/images/couple/story-couple-2.jpg";
import FloatingParticles from "../common/FloatingParticles";

gsap.registerPlugin(ScrollTrigger);

const Story = () => {
  const sectionRef = useRef<HTMLElement>(null);

  const scene1Ref = useRef<HTMLDivElement>(null);
  const scene2Ref = useRef<HTMLDivElement>(null);
  const scene3Ref = useRef<HTMLDivElement>(null);

  const imageRef = useRef<HTMLImageElement>(null);

  const namesRef = useRef<HTMLDivElement>(null);
  const leftPathRef = useRef<HTMLDivElement>(null);
  const rightPathRef = useRef<HTMLDivElement>(null);
  const destinyGlowRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top top",
          end: "+=2500",
          scrub: 0.5,
          pin: true,
        },
      });
      gsap.to(".storyGlow", {
        scale: 1.25,
        duration: 4,
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut",
      });
      gsap.to(imageRef.current, {
        y: -50,
        ease: "none",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top top",
          end: "bottom bottom",
          scrub: true,
        },
      });
      tl.fromTo(
        scene1Ref.current,
        {
          opacity: 0,
          y: 100,
        },
        {
          opacity: 1,
          y: 0,
          duration: 1,
        }
      )
        .to(scene1Ref.current, {
          opacity: 0,
          y: -100,
          duration: 1,
        })

        .fromTo(
          scene2Ref.current,
          {
            opacity: 0,
            scale: 0.9,
          },
          {
            opacity: 1,
            scale: 1,
            duration: 1,
          }
        )
        .to(scene2Ref.current, {
          opacity: 0,
          duration: 1,
        })

        .fromTo(
          scene3Ref.current,
          {
            opacity: 0,
            y: 100,
          },
          {
            opacity: 1,
            y: 0,
            duration: 1,
          }
        )
        .to(scene3Ref.current, {
          opacity: 0,
          duration: 1,
        })

        .fromTo(
          leftPathRef.current,
          {
            x: -250,
            rotate: -18,
            opacity: 0.2,
          },
          {
            x: 0,
            rotate: 0,
            opacity: 0.8,
            duration: 2,
          }
        )

        .fromTo(
          rightPathRef.current,
          {
            x: 250,
            rotate: 18,
            opacity: 0.2,
          },
          {
            x: 0,
            rotate: 0,
            opacity: 0.8,
            duration: 2,
          },
          "<"
        )

        .fromTo(
          imageRef.current,
          {
            scale: 1.15,
            opacity: 0,
          },
          {
            scale: 1,
            opacity: 1,
            duration: 2,
          }
        )

        .fromTo(
          destinyGlowRef.current,
          {
            opacity: 0,
            scale: 0.5,
          },
          {
            opacity: 1,
            scale: 1.5,
            duration: 1,
          }
        )

        .fromTo(
          namesRef.current,
          {
            opacity: 0,
            y: 80,
          },
          {
            opacity: 1,
            y: 0,
            duration: 1.5,
          }
        );
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="
        relative
        min-h-[100svh]
        overflow-hidden
        bg-black
      "
    >
      <FloatingParticles count={12} />
    <div
      className="
        storyGlow

        absolute

        left-1/2
        top-1/2

        -translate-x-1/2
        -translate-y-1/2

        w-[600px]
        h-[600px]

        rounded-full

        bg-[#D4AF37]/10

        blur-[100px]
      "
    />
      {/* Destiny Paths */}

      <div
        ref={leftPathRef}
        className="
          absolute

          left-1/2
          top-0

          w-[2px]
          h-full

          bg-gradient-to-b
          from-transparent
          via-[#D4AF37]
          to-transparent

          opacity-40
        "
        style={{
          transform: "translateX(-220px) rotate(-18deg)",
          transformOrigin: "top center",
        }}
      />

      <div
        ref={rightPathRef}
        className="
          absolute

          left-1/2
          top-0

          w-[2px]
          h-full

          bg-gradient-to-b
          from-transparent
          via-[#D4AF37]
          to-transparent

          opacity-40
        "
        style={{
          transform: "translateX(220px) rotate(18deg)",
          transformOrigin: "top center",
        }}
      />

      {/* Background Image */}

      <img
        loading="lazy"
        ref={imageRef}
        src={storyImage}
        alt=""
        className="
          absolute
          inset-0
          w-full
          h-full
          object-cover
          opacity-0
          bg-[radial-gradient(circle_at_center,transparent_20%,rgba(0,0,0,.75)_100%)]
        "
      />
      <div
        className="
          absolute
          inset-0

          bg-[radial-gradient(circle_at_center,transparent_20%,rgba(0,0,0,.75)_100%)]
        "
      />

      <div
        className="
          absolute
          inset-0
          bg-black/50
        "
      />

      <div
        ref={destinyGlowRef}
        className="
          absolute

          left-1/2
          top-1/2

          -translate-x-1/2
          -translate-y-1/2

          w-40
          h-40

          rounded-full

          bg-[#D4AF37]/20

          blur-[60px]

          opacity-0
        "
      />

      {/* Scene 1 */}

      <div
        ref={scene1Ref}
        className="
          absolute
          inset-0

          flex
          items-center
          justify-center

          text-center
          px-6
        "
      >
        <h2
          className="
            text-white
            text-5xl
            md:text-8xl
          "
        >
          Millions Of Stories
        </h2>
      </div>

      {/* Scene 2 */}

      <div
        ref={scene2Ref}
        className="
          absolute
          inset-0

          flex
          items-center
          justify-center

          text-center
          px-6
        "
      >
        <h2
          className="
            text-[#D4AF37]
            text-5xl
            md:text-8xl
          "
        >
          Two Journeys
        </h2>
      </div>

      {/* Scene 3 */}

      <div
        ref={scene3Ref}
        className="
          absolute
          inset-0

          flex
          items-center
          justify-center

          text-center
          px-6
        "
      >
        <h2
          className="
            text-white
            text-5xl
            md:text-8xl
          "
        >
          Destiny Brought Them Together
        </h2>
      </div>

      {/* Names */}

      <div
        ref={namesRef}
        className="
          absolute
          inset-0

          flex
          flex-col

          items-center
          justify-center

          text-center

          opacity-0
        "
      >
        <div
          className="
            mb-15
            uppercase
            tracking-[10px]
            text-[#D4AF37]
            text-sm
          "
        >
          A New Chapter Begins
        </div>

        <h1
          className="
            text-white
            text-5xl
            md:text-8xl

            tracking-[8px]
          "
        >
          AMOL
        </h1>

        <div
          className="
            text-[#D4AF37]
            text-5xl
            my-8
          "
        >
          ✦
        </div>

        <h1
          className="
            text-white
            text-5xl
            md:text-8xl

            tracking-[8px]
          "
        >
          TEJASWINI
        </h1>
        <p
          className="
            mt-10

            text-[#D4AF37]

            uppercase

            tracking-[6px]
          "
        >
          A Beautiful Beginning
        </p>
      </div>
    </section>
  );
};

export default Story;