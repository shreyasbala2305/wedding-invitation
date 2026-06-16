import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

import weddingData from "../../data/weddingData";

gsap.registerPlugin(ScrollTrigger);

const groomFamily =
  weddingData.families.groomSide;

const brideFamily =
  weddingData.families.brideSide;

const Families = () => {
  const sectionRef = useRef<HTMLElement>(null);

  const headingRef = useRef<HTMLDivElement>(null);

  const groomCardRef = useRef<HTMLDivElement>(null);
  const brideCardRef = useRef<HTMLDivElement>(null);

  const dividerRef = useRef<HTMLDivElement>(null);

  const footerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        headingRef.current,
        {
          y: 80,
          opacity: 0,
        },
        {
          y: 0,
          opacity: 1,
          duration: 1,
          ease: "power3.out",

          scrollTrigger: {
            trigger: headingRef.current,
            start: "top 85%",
          },
        }
      );

      gsap.fromTo(
        groomCardRef.current,
        {
          x: -150,
          opacity: 0.2,
          rotate: -4,
        },
        {
          x: 0,
          opacity: 1,
          rotate: 0,
          duration: 1.1,
          ease: "power3.out",

          scrollTrigger: {
            trigger: groomCardRef.current,
            start: "top 85%",
          },
        }
      );

      gsap.fromTo(
        brideCardRef.current,
        {
          x: 150,
          opacity: 0.2,
          rotate: 4,
        },
        {
          x: 0,
          opacity: 1,
          rotate: 0,
          duration: 1.1,
          ease: "power3.out",

          scrollTrigger: {
            trigger: brideCardRef.current,
            start: "top 85%",
          },
        }
      );

      gsap.fromTo(
        dividerRef.current,
        {
          width: 0,
        },
        {
          width: 220,
          duration: 0.8,

          scrollTrigger: {
            trigger: dividerRef.current,
            start: "top 85%",
          },
        }
      );

      gsap.fromTo(
        footerRef.current,
        {
          y: 80,
          opacity: 0,
        },
        {
          y: 0,
          opacity: 1,
          duration: 1,
          ease: "power3.out",

          scrollTrigger: {
            trigger: footerRef.current,
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
      className="
        relative
        overflow-hidden

        bg-gradient-to-b
        from-[#faf7f2]
        to-[#fffaf0]

        py-24 md:py-30
      "
    >
      {/* Background Accents */}

      <div className="absolute inset-0 overflow-hidden pointer-events-none">

        <div
          className="
            absolute
            -top-20
            -left-20

            text-[300px]

            text-[#D4AF37]/5
          "
        >
          ✦
        </div>

        <div
          className="
            absolute
            bottom-0
            right-0

            text-[300px]

            text-[#D4AF37]/5
          "
        >
          ✦
        </div>

      </div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">

        {/* Heading */}

        <div
          ref={headingRef}
          className="text-center mb-16 md:mb-24"
        >
          <p
            className="
              uppercase
              tracking-[10px]
              text-[#D4AF37]
              mb-5
            "
          >
            Families
          </p>

          <h2
            className="
              text-5xl
              md:text-7xl

              text-[#6B1E1E]
            "
          >
            Two Families
          </h2>

          <p
            className="
              mt-6

              text-xl

              text-gray-600

              max-w-3xl
              mx-auto
            "
          >
            Bound together by blessings, traditions,
            and the joy of a beautiful new beginning.
          </p>
        </div>

        {/* Cards */}

        <div
          className="
            grid
            lg:grid-cols-2

            gap-8 md:gap-12
          "
        >
          {/* Groom Family */}

          <div
            ref={groomCardRef}
            className="
              backdrop-blur-sm

              bg-white/60

              border
              border-[#D4AF37]/20

              rounded-[40px]

              p-8 md:p-12

              shadow-[0_15px_40px_rgba(0,0,0,.08)]

              text-center
            "
          >
            <p
              className="
                uppercase
                tracking-[8px]
                text-[#D4AF37]
                mb-4
              "
            >
              Groom's Family
            </p>

            <h3
              className="
                text-4xl

                text-[#6B1E1E]

                mb-10
              "
            >
              {groomFamily.familyName}
            </h3>

            <div className="space-y-8">

              <div>
                <p className="text-gray-500 mb-2">
                  Father
                </p>

                <h4 className="text-2xl">
                  {groomFamily.father}
                </h4>
              </div>

              <div>
                <p className="text-gray-500 mb-2">
                  Mother
                </p>

                <h4 className="text-2xl">
                  {groomFamily.mother}
                </h4>
              </div>

            </div>
          </div>

          {/* Bride Family */}

          <div
            ref={brideCardRef}
            className="
              backdrop-blur-sm

              bg-white/60

              border
              border-[#D4AF37]/20

              rounded-[40px]

              p-8 md:p-12

              shadow-[0_15px_40px_rgba(0,0,0,.08)]

              text-center
            "
          >
            <p
              className="
                uppercase
                tracking-[8px]
                text-[#D4AF37]
                mb-4
              "
            >
              Bride's Family
            </p>

            <h3
              className="
                text-4xl

                text-[#6B1E1E]

                mb-10
              "
            >
              {brideFamily.familyName}
            </h3>

            <div className="space-y-8">

              <div>
                <p className="text-gray-500 mb-2">
                  Father
                </p>

                <h4 className="text-2xl">
                  {brideFamily.father}
                </h4>
              </div>

              <div>
                <p className="text-gray-500 mb-2">
                  Mother
                </p>

                <h4 className="text-2xl">
                  {brideFamily.mother}
                </h4>
              </div>

            </div>
          </div>
        </div>

        {/* Center Divider */}

        <div className="flex justify-center mt-20">

          <div className="flex items-center gap-4">

            <div
              ref={dividerRef}
              className="
                h-[2px]
                bg-[#D4AF37]
              "
            />

            <span
              className="
                text-[#D4AF37]
                text-xl
              "
            >
              ✦
            </span>

          </div>

        </div>

        {/* Footer */}

        <div
          ref={footerRef}
          className="
            text-center

            mt-20
          "
        >
          <h3
            className="
              text-4xl
              md:text-5xl

              text-[#6B1E1E]
            "
          >
            One Celebration
          </h3>

          <p
            className="
              mt-6

              text-xl

              text-gray-600

              max-w-2xl
              mx-auto
            "
          >
            With the blessings of parents, elders,
            relatives and friends, two families come
            together to celebrate a beautiful union.
          </p>
        </div>

      </div>
    </section>
  );
};

export default Families;