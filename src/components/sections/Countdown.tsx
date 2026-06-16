import { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);
const petals = Array.from(
  { length: 10 },
  (_, i) => ({
    id: i,
    left: Math.random() * 100,
    size: 10 + Math.random() * 15,
    duration: 10 + Math.random() * 10,
    delay: Math.random() * 8,
  })
);

const dustParticles = Array.from(
  { length: 12 },
  (_, i) => ({
    id: i,
    left: Math.random() * 100,
    duration: 10 + Math.random() * 8,
  })
);

const WEDDING_DATE = new Date(
  "2026-07-07T12:39:00"
).getTime();

const CEREMONY_START = new Date(
  "2026-07-07T11:00:00"
).getTime();

const CEREMONY_END = new Date(
  "2026-07-07T14:00:00"
).getTime();

const WeddingCountdown = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const glowRef = useRef<HTMLDivElement>(null);
  const now = Date.now();

const isWeddingDay =
  new Date(now).toDateString() ===
  new Date(WEDDING_DATE).toDateString();

const ceremonyProgress = Math.min(
  100,
  Math.max(
    0,
    ((now - CEREMONY_START) /
      (CEREMONY_END - CEREMONY_START)) *
      100
  )
);

const ceremonyActive =
  now >= CEREMONY_START &&
  now <= CEREMONY_END;

const ceremonyCompleted =
  now > CEREMONY_END;

  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  useEffect(() => {
    const timer = setInterval(() => {
      const now = Date.now();
      const distance = WEDDING_DATE - now;

      setTimeLeft({
        days: Math.max(
          0,
          Math.floor(
            distance / (1000 * 60 * 60 * 24)
          )
        ),

        hours: Math.max(
          0,
          Math.floor(
            (distance %
              (1000 * 60 * 60 * 24)) /
              (1000 * 60 * 60)
          )
        ),

        minutes: Math.max(
          0,
          Math.floor(
            (distance %
              (1000 * 60 * 60)) /
              (1000 * 60)
          )
        ),

        seconds: Math.max(
          0,
          Math.floor(
            (distance %
              (1000 * 60)) /
              1000
          )
        ),
      });
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // const paths

      // if (!paths) return;

      // paths.forEach((path) => {
      //   const length =
      //     path.getTotalLength();

      //   gsap.set(path, {
      //     strokeDasharray: length,
      //     strokeDashoffset: length,
      //   });

      //   gsap.to(path, {
      //     strokeDashoffset: 0,
      //     duration: 2,
      //     ease: "power2.out",
      //     scrollTrigger: {
      //       trigger: sectionRef.current,
      //       start: "top 75%",
      //     },
      //   });
      // });

      gsap.to(glowRef.current, {
        scale: 1.15,
        duration: 3,
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut",
      });
    }, sectionRef);

    gsap.to("#sacred-flame", {
      scale: 1.05,
      y: -6,
      duration: 1.4,
      repeat: -1,
      yoyo: true,
      ease: "sine.inOut",
    });

    gsap.to("#sacred-flame path:first-child", {
      scaleY: 1.08,
      transformOrigin: "50% 100%",
      duration: 0.8,
      repeat: -1,
      yoyo: true,
      ease: "power1.inOut",
    });

    gsap.fromTo(
      ".countdown-number",
      {
        y: 40,
        opacity: 0,
      },
      {
        y: 0,
        opacity: 1,
        stagger: 0.15,
        duration: 1,
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 70%",
        },
      }
    );

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="
        relative
        overflow-hidden

        py-28 md:py-36

        bg-[#2A0F0F]

        text-white
      "
    >
      {/* Large Glow */}

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

          bg-[#D4AF37]/5

          blur-[120px]
        "
      />

      {/* Breathing Glow */}

      <div
        ref={glowRef}
        className="
          absolute

          left-1/2
          top-1/2

          -translate-x-1/2
          -translate-y-1/2

          w-[500px]
          h-[500px]

          rounded-full

          bg-[#D4AF37]/10

          blur-[90px]
        "
      />

      {/* Petals */}

      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {petals.map((petal) => (
          <span
            key={petal.id}
            className="petal"
            style={{
              left: `${petal.left}%`,
              fontSize: `${petal.size}px`,
              animationDuration: `${petal.duration}s`,
              animationDelay: `${petal.delay}s`,
            }}
          >
            ❀
          </span>
        ))}
      </div>

      {/* Floating Dust */}

      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {dustParticles.map((particle) => (
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

      {/* Heading */}

      <div className="relative z-10 text-center mb-20">
        <p
          className="
            uppercase
            tracking-[10px]

            text-[#D4AF37]

            mb-4
          "
        >
          The Auspicious Moment
        </p>

        <h2
          className="
            text-5xl
            md:text-7xl
          "
        >
          Draws Near
        </h2>
        {isWeddingDay && !ceremonyCompleted && (
        <p
          className="
            mt-6

            text-[#D4AF37]

            uppercase

            tracking-[8px]
          "
        >
          Today Is The Day ✦
        </p>
      )}

      {ceremonyCompleted && (
        <p
          className="
            mt-6

            text-[#D4AF37]

            uppercase

            tracking-[8px]
          "
        >
          Just Married ✦
        </p>
      )}
      </div>

      <p
        className="
          text-center

          text-[#F4E7C5]

          italic

          text-lg
          md:text-2xl

          mb-12
        "
      >
        {ceremonyActive && (
        <div
          className="
            max-w-md
            mx-auto

            mb-12
            px-6
          "
        >
          <div
            className="
              flex
              justify-between

              text-sm

              text-[#D4AF37]

              mb-3
            "
          >
            <span>Ceremony In Progress</span>

            <span>
              {Math.round(ceremonyProgress)}%
            </span>
          </div>

          <div
            className="
              h-2

              rounded-full

              bg-white/10
            "
          >
            <div
              style={{
                width: `${ceremonyProgress}%`,
              }}
              className="
                h-full

                rounded-full

                bg-[#D4AF37]

                transition-all
                duration-500
              "
            />
          </div>
        </div>
      )}
        Every blessing, every prayer,
        every moment brings us closer.
      </p>
      {/* Countdown Hero */}

      <div
        className="
          relative
          z-10

          max-w-6xl
          mx-auto

          px-6
        "
      >
        {/* Decorative Mandap Background */}
        <div
          className="
            absolute

            left-1/2
            top-1/2

            -translate-x-1/2
            -translate-y-1/2

            w-[600px]
            h-[600px]

            md:w-[800px]
            md:h-[800px]

            rounded-full

            border
            border-[#D4AF37]/10
          "
        />

        <div
          className="
            absolute

            left-1/2
            top-1/2

            -translate-x-1/2
            -translate-y-1/2

            w-[450px]
            h-[450px]

            md:w-[650px]
            md:h-[650px]

            rounded-full

            border
            border-[#D4AF37]/10
          "
        />
        
        <div
          className="
            absolute

            left-1/2
            top-1/2

            -translate-x-1/2
            -translate-y-1/2

            text-[280px]
            md:text-[500px]

            text-[#D4AF37]/[0.04]

            select-none
            pointer-events-none

            leading-none
          "
        >
          ✺
        </div>

        {/* Ornament */}

        {/* <div
          className="
            text-center

            text-[#D4AF37]

            text-3xl

            mb-10
          "
        >
          ✦ ✦ ✦
        </div> */}

        {/* Main Days Counter */}

        <div className="text-center">
          <div
            className="
              countdown-number

              text-[#D4AF37]

              text-[90px]
              md:text-[190px]
              leading-[0.9]
              [text-shadow:0_0_35px_rgba(212,175,55,.25)]
            "
          >
            {String(timeLeft.days)}
          </div>

          <div
            className="
              uppercase

              tracking-[12px]

              text-gray-300

              mt-3
            "
          >
            {ceremonyCompleted
              ? "Forever Begins"
              : "Days Remaining"}
          </div>
        </div>

        {/* Sacred Flame */}

        <div
          className="
            relative

            flex
            justify-center

            my-12
          "
        >
          <div
            className="
              absolute

              w-56
              h-56

              rounded-full

              bg-[#D4AF37]/20

              blur-[100px]
            "
          />

          <svg
            id="sacred-flame"
            width="90"
            height="120"
            viewBox="0 0 90 120"
            className="relative z-10"
          >
            <defs>
              <linearGradient
                id="goldFlame"
                x1="0"
                y1="0"
                x2="0"
                y2="1"
              >
                <stop
                  offset="0%"
                  stopColor="#FCE38A"
                />

                <stop
                  offset="50%"
                  stopColor="#D4AF37"
                />

                <stop
                  offset="100%"
                  stopColor="#A97112"
                />
              </linearGradient>
            </defs>

            <path
              d="
              M45 0
              C70 20 82 48 72 72
              C65 92 55 104 45 120
              C35 104 25 92 18 72
              C8 48 20 20 45 0
            "
              fill="url(#goldFlame)"
            />

            <path
              d="
              M45 25
              C58 40 60 58 53 72
              C50 82 47 90 45 96
              C43 90 40 82 37 72
              C30 58 32 40 45 25
            "
              fill="#FFF5CC"
              opacity="0.8"
            />
          </svg>
        </div>

        {/* Time Units */}

        <div
          className="
            flex
            justify-center

            gap-8
            md:gap-20

            mt-4
          "
        >
          {[
            {
              value: timeLeft.hours,
              label: "HRS",
            },
            {
              value: timeLeft.minutes,
              label: "MIN",
            },
            {
              value: timeLeft.seconds,
              label: "SEC",
            },
          ].map((item) => (
            <div
              key={item.label}
              className="text-center"
            >
              <div
                className="
                  countdown-number

                  text-[#D4AF37]

                  text-4xl
                  md:text-6xl
                "
              >
                {String(item.value).padStart(2, "0")}
              </div>

              <div
                className="
                  text-gray-400

                  tracking-[4px]

                  mt-2
                "
              >
                {item.label}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Footer */}

      <div
        className="
          relative
          z-10

          text-center

          mt-24
        "
      >
        <p
          className="
            text-4xl
            md:text-6xl

            text-[#F4E7C5]

            leading-tight
          "
        >
          Every passing moment
          <br />
          brings two souls closer.
        </p>

        <p
          className="
            mt-8

            max-w-2xl
            mx-auto

            text-gray-400

            leading-relaxed
          "
        >
          Every moment brings us closer
          to a a day filled with blessings,
          joy and cherished moments.
        </p>

        {/* <p
          className="
            mt-8

            text-[#D4AF37]

            tracking-[6px]

            uppercase
          "
        >
          07 July 2026 • 12:39 PM
        </p> */}
      </div>
    </section>
  );
};

export default WeddingCountdown;