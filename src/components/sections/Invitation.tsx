import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import weddingData from "../../data/weddingData";

gsap.registerPlugin(ScrollTrigger);
const { wedding } = weddingData;
const InvitationReveal = () => {
  const sectionRef = useRef<HTMLElement>(null);

  const ornamentRef = useRef<HTMLDivElement>(null);

  const scrollRef = useRef<HTMLDivElement>(null);

  const contentRef = useRef<HTMLDivElement>(null);

  const dateRef = useRef<HTMLDivElement>(null);

  const ctaRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.to(ornamentRef.current, {
        y: -8,
        duration: 4,
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut",
      });

      gsap.fromTo(
        scrollRef.current,
        {
          scaleY: 0.2,
          opacity: 0,
        },
        {
          scaleY: 1,
          opacity: 1,
          duration: 1.2,
          ease: "power3.out",

          scrollTrigger: {
            trigger: scrollRef.current,
            start: "top 85%",
          },
        }
      );

      gsap.fromTo(
        Array.from(contentRef.current?.children || []),
        {
          opacity: 0,
          y: 60,
        },
        {
          opacity: 1,
          y: 0,
          stagger: 0.15,
          duration: 1,
          ease: "power3.out",

          scrollTrigger: {
            trigger: contentRef.current,
            start: "top 80%",
          },
        }
      );

      gsap.fromTo(
        dateRef.current,
        {
          scale: 0.7,
          opacity: 0,
        },
        {
          scale: 1,
          opacity: 1,
          duration: 1,
          ease: "back.out(1.4)",

          scrollTrigger: {
            trigger: dateRef.current,
            start: "top 80%",
          },
        }
      );

      gsap.fromTo(
        ctaRef.current,
        {
          opacity: 0,
          y: 40,
        },
        {
          opacity: 1,
          y: 0,
          duration: 1,
          ease: "power3.out",

          scrollTrigger: {
            trigger: ctaRef.current,
            start: "top 85%",
          },
        }
      );
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  const goToEvents = () => {
    document
      .getElementById("events")
      ?.scrollIntoView({
        behavior: "smooth",
      });
  };

  return (
    <section
      ref={sectionRef}
      className="
        relative
        overflow-hidden

        min-h-screen

        py-20 md:py-28

        bg-[#faf7f2]
      "
    >
      {/* Ambient Glow */}

      <div
        className="
          absolute
          inset-0

          bg-[radial-gradient(circle_at_center,rgba(212,175,55,.08),transparent_60%)]
        "
      />

      {/* Top Ornament */}

      <div
        ref={ornamentRef}
        className="
          flex
          justify-center

          mb-14
        "
      >
        <div
          className="
            text-[#D4AF37]
            text-6xl
          "
        >
          ✦
        </div>
      </div>

      {/* Scroll */}

      <div
        ref={scrollRef}
        className="
          relative

          max-w-4xl
          mx-auto

          px-6 md:px-10
          py-14 md:py-20

          bg-gradient-to-b
          from-[#fffdf8]
          to-[#faf5ea]

          rounded-[50px]

          border
          border-[#D4AF37]/20

          shadow-[0_25px_80px_rgba(0,0,0,.08)]
        "
      >
        {/* Corners */}

        <div className="absolute top-8 left-8 text-[#D4AF37]/40 text-3xl">
          ✦
        </div>

        <div className="absolute top-8 right-8 text-[#D4AF37]/40 text-3xl">
          ✦
        </div>

        <div className="absolute bottom-8 left-8 text-[#D4AF37]/40 text-3xl">
          ✦
        </div>

        <div className="absolute bottom-8 right-8 text-[#D4AF37]/40 text-3xl">
          ✦
        </div>

        {/* Content */}

        <div
          ref={contentRef}
          className="
            text-center
          "
        >
          <p
            className="
              uppercase

              tracking-[10px]

              text-[#D4AF37]

              mb-10
            "
          >
            The Celebration Begins
          </p>

          <p
            className="
              text-xl

              text-gray-600

              mb-10
            "
          >
            Together with their families
          </p>

          <h2
            className="
              text-5xl
              md:text-7xl

              text-[#6B1E1E]
            "
          >
            Amol Gadekar
          </h2>

          <div
            className="
              text-[#D4AF37]

              text-4xl

              my-6
            "
          >
            &
          </div>

          <h2
            className="
              text-5xl
              md:text-7xl

              text-[#6B1E1E]
            "
          >
            Tejaswini Nikam
          </h2>

          <div
            className="
              w-32
              h-[2px]

              bg-[#D4AF37]

              mx-auto
              my-12
            "
          />

          <p
            className="
              max-w-2xl
              mx-auto

              text-xl
              md:text-2xl

              text-gray-700

              leading-relaxed
            "
          >
            Request the honour of your presence
            as they begin a beautiful new chapter
            filled with love, happiness,
            togetherness and lifelong companionship.
          </p>
        </div>

        {/* Date */}

        <div
          ref={dateRef}
          className="
            text-center

            mt-20
          "
        >
          <div
            className="
              text-[#D4AF37]

              text-lg

              uppercase

              tracking-[8px]

              mb-4
            "
          >
            The Day We Begin Forever
          </div>

          <h2
            className="
              text-7xl
              md:text-9xl

              text-[#6B1E1E]

              leading-none
            "
          >
            07
          </h2>

          <p
            className="
              text-3xl
              md:text-4xl

              mt-3

              text-gray-700
            "
          >
            July 2026
          </p>
          <p
            className="
              eventDate
              mt-4
              text-4x1
              
              text-[#D4AF37]
            "
          >
            Muhurat ✦ {wedding.time}
          </p>
        </div>
        {/* Date */}

        {/* <div
          className="
    mt-10

    text-white

    backdrop-blur-[1px]
  "
        >
          <p
            className=" eventDate
              text-xl
              md:text-2xl
            "
          >
            {weddingData.wedding.date}
          </p>

          {/* <p
            className="
              mt-2

              text-sm
              md:text-base

              text-gray-200
            "
          >
            Muhurat • {weddingData.wedding.time}
          </p> 
        </div> */}
      </div>

      {/* CTA */}

      <div
        ref={ctaRef}
        className="
          text-center

          mt-10
        "
      >
        <button
          onClick={goToEvents}
          className="
            px-10
            py-4

            rounded-full

            border
            border-[#D4AF37]

            text-[#6B1E1E]

            hover:bg-[#D4AF37]
            hover:text-white

            transition-all
            duration-500
          "
        >
          View The Celebrations
        </button>

        {/* <div
          className="
            mt-8

            text-[#D4AF37]

            text-3xl

            animate-bounce
          "
        >
          ↓
        </div> */}
      </div>
    </section>
  );
};

export default InvitationReveal;