import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const BlessingReveal = () => {
  const sectionRef = useRef<HTMLElement>(null);

  const ornamentRef = useRef<HTMLDivElement>(null);

  const blessingRef = useRef<HTMLDivElement>(null);

  const destinyRef = useRef<HTMLDivElement>(null);

  const inviteRef = useRef<HTMLDivElement>(null);

  const ctaRef = useRef<HTMLDivElement>(null);

  const scrollToEvents = () => {
    document
      .getElementById("events")
      ?.scrollIntoView({
        behavior: "smooth",
      });
  };

  useEffect(() => {
    const ctx = gsap.context(() => {

      gsap.to(ornamentRef.current, {
        y: -20,
        duration: 3,
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut",
      });

      gsap.fromTo(
        blessingRef.current,
        {
          opacity: 0,
          y: 100,
        },
        {
          opacity: 1,
          y: 0,
          scrollTrigger: {
            trigger: blessingRef.current,
            start: "top 85%",
            end: "top 45%",
            scrub: true,
          },
        }
      );

      gsap.fromTo(
        destinyRef.current,
        {
          opacity: 0,
          y: 80,
        },
        {
          opacity: 1,
          y: 0,
          scrollTrigger: {
            trigger: destinyRef.current,
            start: "top 85%",
            end: "top 45%",
            scrub: true,
          },
        }
      );

      gsap.fromTo(
        inviteRef.current,
        {
          opacity: 0,
          filter: "blur(20px)",
          scale: 0.9,
        },
        {
          opacity: 1,
          filter: "blur(0px)",
          scale: 1,
          scrollTrigger: {
            trigger: inviteRef.current,
            start: "top 85%",
            end: "top 40%",
            scrub: true,
          },
        }
      );

      gsap.fromTo(
        ctaRef.current,
        {
          opacity: 0,
          y: 50,
        },
        {
          opacity: 1,
          y: 0,
          scrollTrigger: {
            trigger: ctaRef.current,
            start: "top 90%",
            end: "top 50%",
            scrub: true,
          },
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
        overflow-hidden

        py-28

        bg-[#faf7f2]
      "
    >
      {/* Gold Ambient Glow */}

      <div
        className="
          absolute
          inset-0

          bg-[radial-gradient(circle_at_center,rgba(212,175,55,.10),transparent_60%)]
        "
      />

      {/* Decorative Particles */}

      <div className="absolute inset-0 overflow-hidden pointer-events-none">

        {[...Array(20)].map((_, i) => (
          <span
            key={i}
            className="floating-particle"
            style={{
              left: `${Math.random() * 100}%`,
              animationDuration: `${12 + Math.random() * 10}s`,
              animationDelay: `${Math.random() * 5}s`,
              width: `${2 + Math.random() * 3}px`,
              height: `${2 + Math.random() * 3}px`,
            }}
          />
        ))}

      </div>

      <div
        className="
          relative
          z-10

          max-w-6xl
          mx-auto

          px-6

          text-center
        "
      >
        {/* Ornament */}

        <div
          ref={ornamentRef}
          className="
            text-[#D4AF37]

            text-6xl

            mb-16
          "
        >
          ✦
        </div>

        {/* Blessings */}

        <div
          ref={blessingRef}
          className="mb-24"
        >
          <p
            className="
              uppercase

              tracking-[10px]

              text-[#D4AF37]

              mb-8
            "
          >
            With The Blessings
          </p>

          <p
            className="
              text-2xl
              md:text-4xl

              text-[#6B1E1E]

              leading-relaxed
            "
          >
            of our parents,
            <br />
            elders, relatives,
            <br />
            and cherished loved ones
          </p>
        </div>

        {/* Destiny */}

        <div
          ref={destinyRef}
          className="mb-28"
        >
          <div
            className="
              w-32
              h-[2px]

              bg-[#D4AF37]

              mx-auto
              mb-10
            "
          />

          <h2
            className="
              text-4xl
              md:text-6xl

              text-[#6B1E1E]

              leading-tight
            "
          >
            Two Souls.
            <br />
            Two Families.
            <br />
            One Destiny.
          </h2>

          <div
            className="
              w-32
              h-[2px]

              bg-[#D4AF37]

              mx-auto
              mt-10
            "
          />
        </div>

        {/* Invitation */}

        <div
          ref={inviteRef}
          className="mb-24"
        >
          <h2
            className="
              text-5xl
              md:text-8xl

              text-[#6B1E1E]

              tracking-[8px]

              leading-none
            "
          >
            YOU ARE
            <br />
            WARMLY INVITED
          </h2>

          <p
            className="
              mt-12

              max-w-3xl
              mx-auto

              text-xl
              md:text-2xl

              leading-relaxed

              text-gray-700
            "
          >
            To witness the beginning
            of a beautiful forever
            and celebrate a journey
            filled with love, joy,
            and togetherness.
          </p>
        </div>

        {/* CTA */}

        <div ref={ctaRef}>

          <button
            onClick={scrollToEvents}
            className="
              group

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
            Enter The Celebration
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

      </div>
    </section>
  );
};

export default BlessingReveal;