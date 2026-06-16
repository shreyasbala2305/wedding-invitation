import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

import weddingData from "../../data/weddingData";

import groomImage from "../../assets/images/groom/groom-1.jpg";
import brideImage from "../../assets/images/bride/bride-1.jpg";

gsap.registerPlugin(ScrollTrigger);

const CoupleIntro = () => {
  const sectionRef = useRef<HTMLElement>(null);

  const groomImageRef = useRef<HTMLImageElement>(null);
  const groomContentRef = useRef<HTMLDivElement>(null);
  const groomDividerRef = useRef<HTMLDivElement>(null);

  const brideImageRef = useRef<HTMLImageElement>(null);
  const brideContentRef = useRef<HTMLDivElement>(null);
  const brideDividerRef = useRef<HTMLDivElement>(null);

  const groomName = weddingData.groom.name;
  const brideName = weddingData.bride.name;

  useEffect(() => {
    const ctx = gsap.context(() => {
      // GROOM IMAGE PARALLAX

      gsap.fromTo(
        groomImageRef.current,
        {
          y: 80,
          scale: 1.15,
        },
        {
          y: -80,
          scale: 1,
          ease: "none",
          scrollTrigger: {
            trigger: groomImageRef.current,
            start: "top bottom",
            end: "bottom top",
            scrub: true,
          },
        }
      );

      // BRIDE IMAGE PARALLAX

      gsap.fromTo(
        brideImageRef.current,
        {
          y: 80,
          scale: 1.15,
        },
        {
          y: -80,
          scale: 1,
          ease: "none",
          scrollTrigger: {
            trigger: brideImageRef.current,
            start: "top bottom",
            end: "bottom top",
            scrub: true,
          },
        }
      );

      // GROOM CONTENT

      gsap.fromTo(
        groomContentRef.current,
        {
          x: 120,
          opacity: 0,
        },
        {
          x: 0,
          opacity: 1,
          duration: 1.1,
          ease: "power3.out",

          scrollTrigger: {
            trigger: groomContentRef.current,
            start: "top 80%",
          },
        }
      );

      // BRIDE CONTENT

      gsap.fromTo(
        brideContentRef.current,
        {
          x: -120,
          opacity: 0,
        },
        {
          x: 0,
          opacity: 1,
          duration: 1.1,
          ease: "power3.out",

          scrollTrigger: {
            trigger: brideContentRef.current,
            start: "top 80%",
          },
        }
      );

      // GROOM DIVIDER

      gsap.fromTo(
        groomDividerRef.current,
        {
          width: 0,
        },
        {
          width: 120,
          duration: 0.8,

          scrollTrigger: {
            trigger: groomDividerRef.current,
            start: "top 85%",
          },
        }
      );

      // BRIDE DIVIDER

      gsap.fromTo(
        brideDividerRef.current,
        {
          width: 0,
        },
        {
          width: 120,
          duration: 0.8,

          scrollTrigger: {
            trigger: brideDividerRef.current,
            start: "top 85%",
          },
        }
      );
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      id="couple"
      className="
        relative
        overflow-hidden

        bg-[#faf7f2]

        py-24 md:py-30
      "
    >
      {/* SECTION HEADING */}

      <div className="text-center mb-20 md:mb-28">
        <p
          className="
            uppercase
            tracking-[10px]
            text-[#D4AF37]
            mb-5
          "
        >
          The Couple
        </p>

        <h2
          className="
            text-5xl
            md:text-7xl

            text-[#111]
          "
        >
          Two Hearts,
          <br />
          One Beautiful Story
        </h2>
      </div>

      {/* GROOM */}

      <div
        className="
          max-w-7xl
          mx-auto

          px-6

          mb-25

          grid
          lg:grid-cols-2
          gap-10 md:gap-16

          items-center
        "
      >
        <div
          className="
            overflow-hidden
            rounded-[40px]
          "
        >
          <img
            loading="lazy"
            ref={groomImageRef}
            src={groomImage}
            alt="Groom"
            className="
              w-full
              h-[500px]
              md:h-[650px]
              object-cover
            "
          />
        </div>

        <div ref={groomContentRef}>
          <p
            className="
              uppercase
              tracking-[8px]
              text-[#D4AF37]
            "
          >
            The Groom
          </p>

          <h3
            className="
              text-5xl
              md:text-6xl

              mt-4
              mb-6

              text-[#111]
            "
          >
            {groomName}
          </h3>

          <div
            ref={groomDividerRef}
            className="
              h-[2px]
              bg-[#D4AF37]
              mb-8
            "
          />

          <p
            className="
              text-xl
              md:text-2xl

              leading-relaxed

              text-gray-700
            "
          >
            Calm, thoughtful, and grounded, he brings warmth
            wherever he goes. Known for his humility, dedication,
            and kind-hearted nature, he values relationships and
            believes life's greatest joys are found in the people
            we share it with.
          </p>
        </div>
      </div>

      {/* BRIDE */}

      <div
        className="
          max-w-7xl
          mx-auto

          px-6

          grid
          lg:grid-cols-2
          gap-10 md:gap-16

          items-center
        "
      >
        <div
          ref={brideContentRef}
          className="
            order-2
            lg:order-1
          "
        >
          <p
            className="
              uppercase
              tracking-[8px]
              text-[#D4AF37]
            "
          >
            The Bride
          </p>

          <h3
            className="
              text-5xl
              md:text-6xl

              mt-4
              mb-6

              text-[#111]
            "
          >
            {brideName}
          </h3>

          <div
            ref={brideDividerRef}
            className="
              h-[2px]
              bg-[#D4AF37]
              mb-8
            "
          />

          <p
            className="
              text-xl
              md:text-2xl

              leading-relaxed

              text-gray-700
            "
          >
            Graceful, compassionate, and full of positivity,
            she lights up every room with her smile. Her caring
            nature, strength, and elegance make her truly special
            to everyone fortunate enough to know her.
          </p>
        </div>

        <div
          className="
            order-1
            lg:order-2

            overflow-hidden
            rounded-[40px]
          "
        >
          <img
            loading="lazy"
            ref={brideImageRef}
            src={brideImage}
            alt="Bride"
            className="
              w-full
              h-[500px]
              md:h-[650px]
              object-cover
            "
          />
        </div>
      </div>
    </section>
  );
};

export default CoupleIntro;