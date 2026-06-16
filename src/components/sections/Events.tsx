import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const events = [
  {
    title: "Sangeet",
    icon: "♫",
    date: "06 July 2026",
    time: "04:00 PM",
    color: "#af2862",
    description:
      "An evening of music, dance and unforgettable celebrations.",
  },
  {
    title: "Haldi",
    icon: "✦",
    date: "06 July 2026",
    time: "06:00 PM",
    color: "#EAB308",
    description:
      "A joyful ceremony filled with laughter, blessings and vibrant traditions.",
  },
  {
    title: "Wedding",
    icon: "♛",
    date: "07 July 2026",
    time: "12:39 PM",
    color: "#6c1a1a",
    description:
      "The sacred union where two souls and two families become one.",
  },
];

const Events = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const progressRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {

      if (!progressRef.current) return;

      gsap.fromTo(
        progressRef.current,
        {
          height: 0,
        },
        {
          height: "100%",
          ease: "none",
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top 70%",
            end: "bottom bottom",
            scrub: true,
          },
        }
      );

      gsap.utils
        .toArray(".event-card")
        .forEach((card: any, index) => {

          gsap.fromTo(
            card,
            {
              opacity: 0,
              y: 120,
              x: index % 2 === 0 ? -120 : 120,
            },
            {
              opacity: 1,
              y: 0,
              x: 0,
              duration: 1,
              ease: "power3.out",

              scrollTrigger: {
                trigger: card,
                start: "top 85%",
              },
            }
          );
        });

      gsap.utils
        .toArray(".event-node")
        .forEach((node: any) => {

          gsap.fromTo(
            node,
            {
              scale: 0.8,
              opacity: 0,
            },
            {
              scale: 1,
              opacity: 1,
              duration: 0.8,

              scrollTrigger: {
                trigger: node,
                start: "top 85%",
              },
            }
          );
        });

    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      id="events"
      className="
        relative
        overflow-hidden

        py-20

        bg-[#faf7f2]
      "
    >
      {/* Background Ornament */}

      <div
        className="
          absolute
          inset-0

          flex
          items-center
          justify-center

          text-[350px]

          text-[#D4AF37]/[0.03]

          pointer-events-none
        "
      >
        ✦
      </div>

      {/* Heading */}

      <div className="text-center mb-16 md:mb-24 relative z-10">

        <p
          className="
            uppercase
            tracking-[10px]

            text-[#D4AF37]

            mb-6
          "
        >
          The Festivities Begin
        </p>

        <h2
          className="
            text-5xl
            md:text-7xl

            text-[#6B1E1E]
          "
        >
          Wedding Festivities
        </h2>

        <p
          className="
            mt-6

            text-xl

            text-gray-600
          "
        >
          Three beautiful moments.
          One unforgettable beginning.
        </p>

      </div>

      <div
        className="
          relative

          max-w-7xl
          mx-auto

          px-6
        "
      >
        {/* Timeline */}

        <div
          className="
            absolute

            left-1/2
            top-0
            bottom-0

            -translate-x-1/2

            w-[2px]

            bg-[#D4AF37]/20
          "
        />

        <div
          ref={progressRef}
          className="
            absolute

            left-1/2
            top-0

            -translate-x-1/2

            w-[4px]

            bg-gradient-to-b
            from-[#D4AF37]
            via-[#F4D66A]
            to-[#D4AF37]

            rounded-full
          "
        />

        {events.map((event, index) => {

          const isWedding =
            event.title === "Wedding";

          return (
            <div
              key={event.title}
              className={`
                event-card
                relative
                flex
                will-change-transform
                ${
                  isWedding
                    ? "justify-center"
                    : index % 2 === 0
                    ? "justify-start"
                    : "justify-end"
                }

                mb-16 md:mb-24
              `}
            >
              {/* Timeline Node */}

              <div
                className="
                  event-node

                  absolute

                  left-1/2
                  top-4

                  -translate-x-1/2

                  w-5
                  h-5

                  rounded-full

                  bg-[#debd4f]

                  shadow-[0_0_30px_rgba(212,175,55,.9)]

                  z-20
                "
              />

              <div
                className={`
                  relative
                  overflow-hidden

                  ${
                    isWedding
                      ? "max-w-4xl w-full"
                      : "max-w-xl w-full"
                  }

                  rounded-[40px]

                  bg-white/70

                  backdrop-blur-sm

                  border
                  border-[#D4AF37]/20

                  p-10

                  shadow-[0_18px_50px_rgba(0,0,0,.08)]
                `}
              >
                {/* Glow */}

                <div
                  className="
                    absolute

                    -top-10
                    -right-10

                    w-40
                    h-40

                    rounded-full

                    blur-[50px]
                  "
                  style={{
                    background: `${event.color}30`,
                  }}
                />

                {/* Watermark Icon */}

                <div
                  className="
                    absolute

                    right-6
                    top-2

                    text-8xl

                    opacity-10
                  "
                  style={{
                    color: event.color,
                  }}
                >
                  {event.icon}
                </div>

                <p
                  className="
                    uppercase
                    tracking-[2px]
                    text-[#D4AF37]
                    mb-3
                  "
                  style={{
                    color: event.color,
                  }}
                >
                  Ceremony
                </p>

                <h3
                  className={`
                    ${
                      isWedding
                        ? "text-5xl md:text-7xl"
                        : "text-4xl md:text-5xl"
                    }

                    mb-6
                  `}
                  style={{
                    color: event.color,
                  }}
                >
                  {event.title}
                </h3>

                <p
                  className="
                    text-lg

                    leading-relaxed

                    text-gray-600

                    mb-8
                  "
                >
                  {event.description}
                </p>

                <div className="flex flex-wrap gap-6">

                  <div>
                    <p className="text-gray-400 text-sm">
                      DATE
                    </p>

                    <p className=" eventDate text-xl text-gray-700">
                      {event.date}
                    </p>
                  </div>

                  <div>
                    <p className="text-gray-400 text-sm">
                      TIME
                    </p>

                    <p className="text-xl text-gray-700">
                      {event.time}
                    </p>
                  </div>

                </div>

                {/* {isWedding && (
                  <div
                    className="
                      mt-10
                      pt-8

                      border-t
                      border-[#D4AF37]/20
                    "
                  >
                    <p
                      className="
                        uppercase

                        tracking-[6px]

                        text-[#D4AF37]

                        mb-3
                      "
                    >
                      Venue
                    </p>

                    <h4
                      className="
                        text-3xl

                        text-[#6B1E1E]
                      "
                    >
                      Harpale Lawns
                    </h4>

                    <p
                      className="
                        mt-2

                        text-gray-600
                      "
                    >
                      Pune, Maharashtra
                    </p>
                  </div> 
                )}*/}
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default Events;