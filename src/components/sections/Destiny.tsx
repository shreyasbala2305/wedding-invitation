import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import FloatingParticles from "../common/FloatingParticles";

gsap.registerPlugin(ScrollTrigger);

const milestones = [
  {
    date: "February 2026",
    title: "First Meeting",
    description:
      "A simple introduction. An unforgettable beginning.",
    watermark: "MEET",
  },

  {
    date: "March 2026",
    title: "Match Confirmed",
    description:
      "Two families. One beautiful decision.",
    watermark: "YES",
  },

  {
    date: "April 2026",
    title: "Engagement",
    description:
      "Promises exchanged. Forever envisioned.",
    watermark: "RINGS",
  },

  {
    date: "May – June 2026",
    title: "Preparations",
    description:
      "Laughter. Celebration. Anticipation.",
    watermark: "JOY",
  },
];

const DestinyV2 = () => {
  const sectionRef =
    useRef<HTMLElement>(null);

  const riverPathRef =
    useRef<SVGPathElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const path =
        riverPathRef.current;

      if (path) {
        const length =
          path.getTotalLength();

        gsap.set(path, {
          strokeDasharray: length,
          strokeDashoffset: length,
        });

        gsap.to(path, {
          strokeDashoffset: 0,

          ease: "none",

          scrollTrigger: {
            trigger: sectionRef.current,

            start: "top 80%",
            end: "bottom 80%",

            scrub: true,
          },
        });
      }

      const milestonesEls =
      gsap.utils.toArray<HTMLElement>(
        ".journey-milestone"
      );

      milestonesEls.forEach(
          (
            item: any,
            index
          ) => {
            gsap.fromTo(
              item,
              {
                opacity: 0,

                x:
                  index % 2 === 0
                    ? -100
                    : 100,

                y: 50,
              },
              {
                opacity: 1,

                x: 0,
                y: 0,

                duration: 1.1,
                ease: "power3.out",

                scrollTrigger: {
                  trigger: item,
                  start: "top 85%",
                },
              }
            );
          }
        );

      gsap.fromTo(
        ".journey-ending",
        {
          opacity: 0,
          scale: 0.9,
        },
        {
          opacity: 1,
          scale: 1,

          duration: 1,

          scrollTrigger: {
            trigger: ".journey-ending",
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
      id="destiny"
      className="
        relative
        overflow-hidden

        bg-gradient-to-b
        from-[#050505]
        via-[#160909]
        to-[#2A0F0F]

        text-white

        py-24 md:py-30
      "
    >
      {/* Background Glow */}

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

          blur-[120px]
        "
      />

      {/* Floating Particles */}

      <FloatingParticles count={18} />
      <div
        className="
          relative
          z-10

          max-w-7xl
          mx-auto

          px-6
        "
      >
        {/* Heading */}

        <div className="text-center mb-40">
          <p
            className="
              uppercase

              tracking-[10px]

              text-[#D4AF37]

              mb-5
            "
          >
            The Journey To Forever
          </p>

          <h2
            className="
              text-5xl
              md:text-7xl

              leading-tight
            "
          >
            Every Chapter
            <br />
            Led Us Here
          </h2>

          <p
            className="
              mt-8

              max-w-3xl
              mx-auto

              text-gray-400
            "
          >
            A beautiful story written
            through family, blessings,
            love and destiny.
          </p>
        </div>
                {/* =========================
            DESKTOP RIVER JOURNEY
        ========================== */}

        <div
          className="
            hidden
            md:block

            relative

            h-[1650px]
          "
        >
          {/* River SVG */}

          <svg
            className="
              absolute
              inset-0

              w-full
              h-full
            "
            viewBox="0 0 1200 1650"
            preserveAspectRatio="none"
          >
            {/* Soft River Glow */}

            <path
              d="
                M600 80
                C980 240,220 380,620 620
                C1000 850,250 980,640 1220
                C980 1450,280 1600,600 1620
              "
              fill="none"
              stroke="rgba(212,175,55,.12)"
              strokeWidth="16"
              strokeLinecap="round"
            />

            {/* Main River */}

            <path
              ref={riverPathRef}
              d="
                M600 80
                C980 240,220 380,620 620
                C1000 850,250 980,640 1220
                C980 1450,280 1600,600 1820
              "
              fill="none"
              stroke="#D4AF37"
              strokeWidth="7"
              strokeLinecap="round"
            />
          </svg>

          {/* =========================
              MILESTONE 1
          ========================== */}

          <div
            className="
              journey-milestone

              absolute

              left-[8%]
              top-[120px]

              max-w-sm
            "
          >
            <div
              className="
                absolute

                -top-10
                left-0

                text-[160px]

                text-[#D4AF37]/5

                leading-none

                pointer-events-none
              "
            >
              MEET
            </div>
            <p
              className="
                uppercase

                tracking-[6px]

                text-[#D4AF37]

                mb-3
              "
            >
              {milestones[0].date}
            </p>

            <h3
              className="
                text-5xl

                mb-5
              "
            >
              {milestones[0].title}
            </h3>

            <p
              className="
                text-gray-300

                leading-relaxed
              "
            >
              {milestones[0].description}
            </p>
          </div>

          {/* Node */}

          <div
            className="
              absolute

              left-[42%]
              top-[140px]

              w-8
              h-8

              rounded-full

              bg-[#D4AF37]

              shadow-[0_0_25px_rgba(212,175,55,.7)]

              animate-pulse
            ">
            <div
              className="
                absolute
                inset-0

                rounded-full

                border
                border-[#D4AF37]/40

                scale-[1.6]
              "
            />
          </div>

          {/* =========================
              MILESTONE 2
          ========================== */}

          <div
            className="
              journey-milestone

              absolute

              right-[8%]
              top-[420px]

              max-w-sm

              text-right
            "
          >
            <div
              className="
                absolute

                -top-10
                right-0

                text-[160px]

                text-[#D4AF37]/5

                leading-none

                pointer-events-none
              "
            >
              YES
            </div>
            <p
              className="
                uppercase

                tracking-[6px]

                text-[#D4AF37]

                mb-3
              "
            >
              {milestones[1].date}
            </p>

            <h3
              className="
                text-5xl

                mb-5
              "
            >
              {milestones[1].title}
            </h3>

            <p
              className="
                text-gray-300

                leading-relaxed
              "
            >
              {milestones[1].description}
            </p>
          </div>

          <div
            className="
              absolute

              right-[32%]
              top-[480px]

              w-8
              h-8

              rounded-full

              bg-[#D4AF37]

              shadow-[0_0_25px_rgba(212,175,55,.7)]

              animate-pulse
            "
          >
            <div
              className="
                absolute
                inset-0

                rounded-full

                border
                border-[#D4AF37]/40

                scale-[1.6]
              "
            />
          </div>

          {/* =========================
              MILESTONE 3
          ========================== */}

          <div
            className="
              journey-milestone

              absolute

              left-[8%]
              top-[830px]

              max-w-sm
            "
          >
            <div
              className="
                absolute

                -top-10
                left-0

                text-[160px]

                text-[#D4AF37]/5

                leading-none

                pointer-events-none
              "
            >
              RINGS
            </div>
            <p
              className="
                uppercase

                tracking-[6px]

                text-[#D4AF37]

                mb-3
              "
            >
              {milestones[2].date}
            </p>

            <h3
              className="
                text-5xl

                mb-5
              "
            >
              {milestones[2].title}
            </h3>

            <p
              className="
                text-gray-300

                leading-relaxed
              "
            >
              {milestones[2].description}
            </p>
          </div>

          <div
            className="
              absolute

              left-[36%]
              top-[850px]

              w-8
              h-8

              rounded-full

              bg-[#D4AF37]

              shadow-[0_0_25px_rgba(212,175,55,.7)]

              animate-pulse
            "
          >
            <div
              className="
                absolute
                inset-0

                rounded-full

                border
                border-[#D4AF37]/40

                scale-[1.6]
              "
            />
          </div>

          {/* =========================
              MILESTONE 4
          ========================== */}

          <div
            className="
              journey-milestone

              absolute

              right-[8%]
              top-[1200px]

              max-w-sm

              text-right
            "
          >
            <div
              className="
                absolute

                -top-10
                right-0

                text-[160px]

                text-[#D4AF37]/5

                leading-none

                pointer-events-none
              "
            >
              JOY
            </div>
            <p
              className="
                uppercase

                tracking-[6px]

                text-[#D4AF37]

                mb-3
              "
            >
              {milestones[3].date}
            </p>

            <h3
              className="
                text-5xl

                mb-5
              "
            >
              {milestones[3].title}
            </h3>

            <p
              className="
                text-gray-300

                leading-relaxed
              "
            >
              {milestones[3].description}
            </p>
          </div>

          <div
            className="
              absolute

              right-[31%]
              top-[1300px]

              w-8
              h-8

              rounded-full

              bg-[#D4AF37]

              shadow-[0_0_25px_rgba(212,175,55,.7)]

              animate-pulse
            "
          >
            <div
              className="
                absolute
                inset-0

                rounded-full

                border
                border-[#D4AF37]/40

                scale-[1.6]
              "
            />
          </div>
        </div>
        {/* =========================
            MOBILE JOURNEY
        ========================== */}

        <div
          className="
            md:hidden

            relative

            max-w-md
            mx-auto
          "
        >
          <div
            className="
              absolute

              left-6
              top-0
              bottom-0

              w-[2px]

              bg-gradient-to-b
              from-[#D4AF37]
              via-[#F4D66A]
              to-[#D4AF37]
            "
          />
          {milestones.map((item) => (
            <div
              key={item.title}
              className="
                journey-milestone

                relative

                pl-16

                pb-24
              "
            >
              <div
                className="
                  absolute

                  left-[15px]
                  top-2

                  -translate-x-1/2

                  w-6
                  h-6

                  rounded-full

                  bg-[#D4AF37]

                  shadow-[0_0_18px_rgba(212,175,55,.7)]
                "
              >
                <div
                  className="
                    absolute
                    inset-0

                    rounded-full

                    border
                    border-[#D4AF37]/40

                    scale-[1.6]
                  "
                />
              </div>
              <p
                className="
                  uppercase

                  tracking-[5px]

                  text-[#D4AF37]

                  mb-3
                "
              >
                {item.date}
              </p>

              <h3
                className="
                  text-4xl

                  mb-4
                "
              >
                {item.title}
              </h3>

              <p
                className="
                  text-gray-300

                  leading-relaxed
                "
              >
                {item.description}
              </p>
            </div>
          ))}
        </div>
                {/* =========================
            FINAL DESTINATION
        ========================== */}

        <div
          className="
            journey-ending

            relative

            text-center

            mt-30
            md:mt-20
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

              w-[350px]
              h-[350px]

              rounded-full

              bg-[#D4AF37]/20

              blur-[90px]
            "
          />

          {/* Final Node */}

          <div
            className="
              relative

              mx-auto

              w-40
              h-40

              rounded-full

              border
              border-[#D4AF37]/30

              flex
              items-center
              justify-center

              mb-12
            "
          >
            <div
              className="
                absolute

                inset-4

                rounded-full

                border
                border-[#D4AF37]/20
              "
            />

            <div
              className="
                text-[#D4AF37]

                text-4xl
              "
            >
              ✦
            </div>
          </div>

          <p
            className="
              relative
              z-10

              uppercase

              tracking-[8px]

              text-[#D4AF37]

              mb-5
            "
          >
            The Journey Continues
          </p>

          <h2
            className="
              relative
              z-10

              text-3xl
              md:text-8xl

              leading-tight

              text-[#F4E7C5]
            "
          >
            Our Story Was Written
            <br />
            By Destiny.
            <br />
            <br />
            Its Most Beautiful Chapter
            <br />
            Begins With Your Presence.
          </h2>

          <p
            className="
              relative
              z-10

              mt-10

              max-w-3xl
              mx-auto

              text-lg
              md:text-2xl

              text-gray-300

              leading-relaxed
            "
          >
            Every turn,
            every blessing,
            every moment,

            brought us here.

            From the first meeting
            to every cherished memory,

            this journey has been shaped
            by family, faith and love.

            Now,
            we invite you to walk beside us
            as the story continues.
          </p>

          {/* Decorative Divider */}

          <div
            className="
              relative
              z-10

              flex
              justify-center

              mt-14
              mb-12

              text-[#D4AF37]

              text-2xl
            "
          >
            ✦ ✦ ✦
          </div>

          <p
            className="
              relative
              z-10

              text-[#D4AF37]

              tracking-[6px]

              uppercase

              text-sm
            "
          >
            Scroll To Meet The Couple
          </p>

          <div
            className="
              relative
              z-10

              mt-6

              text-[#D4AF37]

              text-3xl

              animate-bounce
            "
          >
            ↓
          </div>
        </div>

        {/* =========================
            CONTINUING RIVER
        ========================== */}

        <div
          className="
            hidden
            md:flex

            justify-center

            mt-24
          "
        >
          <div
            className="
              w-[4px]
              h-[350px]

              bg-gradient-to-b
              from-[#D4AF37]
              via-[#D4AF37]
              to-transparent
            "
          />
        </div>
      </div>


      {/* Watermark */}

      <div
        className="
          absolute

          left-1/2
          bottom-[10%]

          -translate-x-1/2

          text-[120px]
          md:text-[300px]

          font-light

          text-[#D4AF37]/5

          pointer-events-none
          select-none

          whitespace-nowrap
        "
      >
        DESTINY
      </div>

      {/* Bottom Transition */}

      <div
        className="
          absolute

          bottom-0
          left-0
          right-0

          h-48

          bg-gradient-to-t
          from-[#faf7f2]
          to-transparent
        "
      />
    </section>
  );
};

export default DestinyV2;