import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const BlessingsWall = () => {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        ".blessing-heading",
        {
          y: 100,
          opacity: 0,
        },
        {
          y: 0,
          opacity: 1,
          scrollTrigger: {
            trigger: ".blessing-heading",
            start: "top 85%",
            end: "top 40%",
            scrub: true,
          },
        }
      );

      gsap.fromTo(
        ".blessing-card",
        {
          y: 120,
          opacity: 0,
          scale: 0.95,
        },
        {
          y: 0,
          opacity: 1,
          scale: 1,
          scrollTrigger: {
            trigger: ".blessing-card",
            start: "top 85%",
            end: "top 35%",
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

        py-30

        bg-gradient-to-b
        from-[#0A0A0A]
        via-[#160909]
        to-[#2A0F0F]

        text-white
      "
    >
      {/* Glow */}

      <div
        className="
          absolute

          left-1/2
          top-1/2

          -translate-x-1/2
          -translate-y-1/2

          w-[700px]
          h-[700px]

          rounded-full

          bg-[#D4AF37]/10

          blur-[150px]
        "
      />

      {/* Floating Particles */}

      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(30)].map((_, i) => (
          <span
            key={i}
            className="floating-particle"
            style={{
              left: `${Math.random() * 100}%`,
              width: "3px",
              height: "3px",
              animationDuration: `${8 + Math.random() * 8}s`,
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
        "
      >
        {/* Heading */}

        <div
          className="
            blessing-heading

            text-center

            mb-24
          "
        >
          <p
            className="
              uppercase

              tracking-[10px]

              text-[#D4AF37]

              mb-5
            "
          >
            Bestow Your Blessings
          </p>

          <h2
            className="
              text-5xl
              md:text-7xl

              leading-tight
            "
          >
            A Message
            <br />
            For The Couple
          </h2>

          <p
            className="
              mt-8

              max-w-2xl
              mx-auto

              text-gray-400

              text-lg
            "
          >
            Your kind words and heartfelt wishes
            will become a cherished part of our
            celebration and journey together.
          </p>
        </div>

        {/* Main Card */}

        <div
          className="
            blessing-card

            max-w-5xl
            mx-auto

            grid
            lg:grid-cols-2

            gap-16

            rounded-[40px]

            border
            border-[#D4AF37]/20

            bg-white/[0.04]

            backdrop-blur-xl

            p-10
            md:p-16
          "
        >
          {/* Left Side */}

          <div
            className="
              flex
              flex-col
              justify-center
            "
          >
            <div
              className="
                text-[#D4AF37]

                text-7xl

                mb-6
              "
            >
              ❝
            </div>

            <h3
              className="
                text-3xl
                md:text-4xl

                leading-relaxed
              "
            >
              Blessings from loved ones
              make every celebration
              more meaningful.
            </h3>

            <div
              className="
                mt-8

                w-24
                h-[2px]

                bg-[#D4AF37]
              "
            />
          </div>

          {/* Right Side */}

          <div>
            <input
              placeholder="Your Name"
              className="
                w-full

                bg-white/10

                border
                border-white/10

                rounded-2xl

                px-6
                py-4

                outline-none

                focus:border-[#D4AF37]

                mb-5
              "
            />

            <textarea
              rows={6}
              placeholder="Write your blessing..."
              className="
                w-full

                bg-white/10

                border
                border-white/10

                rounded-2xl

                px-6
                py-4

                outline-none

                focus:border-[#D4AF37]

                resize-none
              "
            />

            <button
              className="
                mt-6

                px-10
                py-4

                rounded-full

                bg-[#D4AF37]

                text-[#111]

                font-medium

                hover:scale-105

                transition-all
              "
            >
              Send Blessing
            </button>
          </div>
        </div>

        {/* Bottom Quote */}

        <div
          className="
            text-center

            mt-24
          "
        >
          <p
            className="
              text-2xl
              md:text-3xl

              text-[#F4E7C5]

              italic
            "
          >
            Every blessing adds another
            beautiful memory to our story.
          </p>
        </div>
      </div>
    </section>
  );
};

export default BlessingsWall;