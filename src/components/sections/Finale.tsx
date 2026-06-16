import { useEffect, useMemo, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

import weddingData from "../../data/weddingData";

gsap.registerPlugin(ScrollTrigger);

const Finale = () => {
  const sectionRef = useRef<HTMLElement>(null);

  const particles = useMemo(
    () =>
      Array.from({ length: 18 }, (_, i) => ({
        id: i,
        left: Math.random() * 100,
        duration: 8 + Math.random() * 8,
      })),
    []
  );

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        ".finale-content",
        {
          y: 80,
          opacity: 0,
        },
        {
          y: 0,
          opacity: 1,
          duration: 1.2,
          ease: "power3.out",
          scrollTrigger: {
            trigger: ".finale-content",
            start: "top 80%",
            once: true,
          },
        }
      );

      gsap.to(".finale-glow", {
        scale: 1.15,
        duration: 4,
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut",
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="
        relative
        flex
        overflow-hidden
        min-h-screen
        items-center
        justify-center
        bg-[#2A0F0F]
        py-18
        text-white
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

          text-[120px]
          md:text-[250px]

          text-[#D4AF37]/5

          pointer-events-none
          select-none
        "
      >
        TOGETHER
      </div>

      {/* Glow */}

      <div
        className="
          finale-glow

          absolute

          left-1/2
          top-1/2

          -translate-x-1/2
          -translate-y-1/2

          w-[500px]
          h-[500px]

          rounded-full

          bg-[#D4AF37]/10

          blur-[120px]
        "
      />

      {/* Particles */}

      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {particles.map((particle) => (
          <span
            key={particle.id}
            className="floating-particle"
            style={{
              left: `${particle.left}%`,
              width: "3px",
              height: "3px",
              animationDuration: `${particle.duration}s`,
            }}
          />
        ))}
      </div>

      <div
        className="
          finale-content

          relative
          z-10

          max-w-5xl

          px-6

          text-center
        "
      >
        {/* Intro */}

        <p
          className="
            uppercase

            tracking-[10px]

            text-[#D4AF37]

            mb-8
          "
        >
          Until We Meet
        </p>

        <h2
          className="
            text-5xl
            md:text-8xl

            leading-tight

            text-[#F4E7C5]
          "
        >
          Two Hearts.
          <br />
          One Endless Journey.
        </h2>

        <p
          className="
            mt-10

            text-lg
            md:text-2xl

            text-gray-300

            max-w-3xl
            mx-auto

            leading-relaxed
          "
        >
          A journey woven together by love,
          strengthened by family,
          and blessed by love.
          <br />
          <br />
          We now look forward to celebrating
          this unforgettable day with you.
        </p>

        {/* Decorative Divider */}

        <div
          className="
            flex
            justify-center
            items-center
            gap-4
            my-16
          "
        >
          <div className="w-20 h-[1px] bg-[#D4AF37]/40" />

          <span className="text-[#D4AF37] text-xl">
            ✦
          </span>

          <div className="w-20 h-[1px] bg-[#D4AF37]/40" />
        </div>

        {/* Couple Section */}

        <div className="relative mt-20">
          {/* Monogram */}

          <div
            className="
              absolute

              left-1/2
              top-1/2

              -translate-x-1/2
              -translate-y-1/2

              text-[180px]
              md:text-[320px]

              text-[#D4AF37]/5

              pointer-events-none
              select-none

              leading-none
            "
          >
            A&T
          </div>

          <div
            className="
              relative
              z-10

              coupleName

              text-5xl
              md:text-[110px]

              leading-tight

              tracking-wide

              text-[#F4E7C5]
            "
          >
            {weddingData.bride.name}

            <br />

            <span
              className="
                text-[#D4AF37]
                text-4xl
                md:text-6xl
              "
            >
              ❦
            </span>

            <br />

            {weddingData.groom.name}
          </div>
        </div>

        {/* Date Card */}

        <div
          className="
            mt-16
            inline-block
            px-10
            py-8
            rounded-[32px]
            border
            border-[#D4AF37]/20
            bg-white/[0.04]
          "
        >
          <p
            className="
              uppercase

              tracking-[8px]

              text-[#D4AF37]

              text-sm

              mb-4
            "
          >
            Save The Date
          </p>

          <p
            className="
              text-3xl
              md:text-5xl
              text-[#F4E7C5]
            "
          >
            07 July 2026
          </p>

          <p
            className="
              mt-4
              text-[#D4AF37]
            "
          >
            Muhurat ✦ 12:39 PM
          </p>
        </div>

        {/* Venue */}

        <p
          className="
            mt-10

            text-xl
            md:text-3xl

            text-gray-300
          "
        >
          Harpale Lawns, Pune
        </p>

        {/* Buttons */}

        <div
          className="
            flex
            flex-wrap

            justify-center

            gap-5

            mt-14
          "
        >
          <a
            href="#invitation"
            className="
              px-10
              py-4
              rounded-full
              bg-[#D4AF37]
              text-[#111]
              font-medium
              hover:scale-[1.03]
              transition-transform
              duration-300
            "
          >
            View Invitation
          </a>

          <a
            href="https://maps.app.goo.gl/xTEKXGS8bnAmy7D39?g_st=aw"
            target="_blank"
            rel="noreferrer"
            className="
              px-10
              py-4

              rounded-full

              border
              border-[#D4AF37]

              text-[#D4AF37]

              hover:bg-[#D4AF37]
              hover:text-[#111]

              transition-all
              duration-500
            "
          >
            Navigate To Venue
          </a>
        </div>

        {/* Closing */}

        <p
          className="
            mt-24

            max-w-3xl
            mx-auto

            text-xl

            text-gray-300

            italic

            leading-relaxed
          "
        >
          Until we meet beneath the wedding lights,
          surrounded by laughter, blessings and love.
        </p>

        <div
          className="
            mt-14

            text-[#D4AF37]

            text-3xl
          "
        >
          ✦ ✦ ✦
        </div>

        <div
          className="
            mt-6

            text-[#D4AF37]/70

            text-sm

            tracking-[6px]

            uppercase
          "
        >
          Every Story Has A Beginning.
          Ours Starts Here.
        </div>
      </div>
    </section>
  );
};

export default Finale;