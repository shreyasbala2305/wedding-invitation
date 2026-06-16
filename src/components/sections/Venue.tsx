import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const Venue = () => {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        ".venue-heading",
        {
          y: 100,
          opacity: 0,
        },
        {
          y: 0,
          opacity: 1,
          scrollTrigger: {
            trigger: ".venue-heading",
            start: "top 85%",
            end: "top 40%",
            scrub: true,
          },
        }
      );

      gsap.fromTo(
        ".venue-card",
        {
          scale: 0.9,
          opacity: 0,
          y: 100,
        },
        {
          scale: 1,
          opacity: 1,
          y: 0,
          scrollTrigger: {
            trigger: ".venue-card",
            start: "top 85%",
            end: "top 40%",
            scrub: true,
          },
        }
      );

      gsap.fromTo(
        ".venue-divider",
        {
          width: 0,
        },
        {
          width: 250,
          scrollTrigger: {
            trigger: ".venue-divider",
            start: "top 85%",
            end: "top 55%",
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

        bg-gradient-to-b
        from-[#faf7f2]
        via-[#fffaf0]
        to-[#faf7f2]
      "
    >
      {/* Watermark */}

      <div
        className="
          absolute

          left-1/2
          top-1/2

          -translate-x-1/2
          -translate-y-1/2

          text-[180px]
          md:text-[320px]

          font-light

          text-[#D4AF37]/5

          pointer-events-none
          select-none
        "
      >
        VENUE
      </div>

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

          blur-[90px]
        "
      />

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
            venue-heading

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
            Venue
          </p>

          <h2
            className="
              text-5xl
              md:text-7xl

              text-[#6B1E1E]

              leading-tight
            "
          >
            The Celebration
            <br />
            Awaits
          </h2>
        </div>

        {/* Venue Card */}

        <div
          className="
            venue-card

            max-w-4xl
            mx-auto

            rounded-[40px]

            border
            border-[#D4AF37]/20

            bg-white/70

            backdrop-blur-sm

            shadow-[0_30px_80px_rgba(0,0,0,.08)]

            p-10
            md:p-16

            text-center
          "
        >
          <div
            className="
              venue-divider

              h-[2px]

              bg-[#D4AF37]

              mx-auto

              mb-10
            "
          />

          <h3
            className="
              text-5xl
              md:text-8xl

              text-[#6B1E1E]

              leading-none
            "
          >
            Harpale
          </h3>

          <h3
            className="
              text-5xl
              md:text-8xl

              text-[#6B1E1E]

              leading-none

              mt-2
            "
          >
            Lawns
          </h3>

          <div
            className="
              flex
              justify-center

              my-10

              text-[#D4AF37]
            "
          >
            ✦ ✦ ✦
          </div>

          <p
            className="
              text-xl
              md:text-2xl

              text-gray-600

              leading-relaxed
            "
          >
            Solapur–Pune Highway
            <br />
            Manjri Farms
            <br />
            Pune, Maharashtra
          </p>

          <a
            href="https://maps.app.goo.gl/xTEKXGS8bnAmy7D39?g_st=aw"
            target="_blank"
            rel="noopener noreferrer"
            className="
              venue-button

              inline-flex

              mt-12

              px-12
              py-5

              rounded-full

              bg-[#6B1E1E]

              text-white

              text-lg

              shadow-lg

              transition-all

              hover:scale-105
            "
          >
            Navigate now
          </a>
        </div>

        {/* Closing Message */}

        <div
          className="
            text-center

            mt-24
          "
        >
          <p
            className="
              text-2xl
              md:text-4xl

              text-[#6B1E1E]

              leading-relaxed
            "
          >
            We look forward to celebrating
            <br />
            this beautiful day with you.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Venue;