import { useEffect, useRef } from "react";
import gsap from "gsap";

type Props = {
  onComplete: () => void;
  guestName?: string | null;
};

const particles = Array.from(
  { length: 15 },
  (_, i) => ({
    id: i,
    left: Math.random() * 100,
    top: Math.random() * 100,
  })
);

const WeddingLoader = ({
  onComplete,
  guestName,
}: Props) => {
    
  const loaderRef =
    useRef<HTMLDivElement>(null);

  useEffect(() => {
    const tl = gsap.timeline();

    tl.fromTo(
      ".loader-monogram",
      {
        opacity: 0,
        scale: 0.6,
      },
      {
        opacity: 1,
        scale: 1,
        duration: 1.2,
        ease: "power3.out",
      }
    )

      .fromTo(
        ".loader-line",
        {
          scaleX: 0,
        },
        {
          scaleX: 1,
          duration: 0.8,
        }
      )

      .fromTo(
        ".loader-subtitle",
        {
          opacity: 0,
          y: 20,
        },
        {
          opacity: 1,
          y: 0,
          duration: 0.8,
        }
      )

      .to(
        {},
        {
          duration: 1,
        }
      )

      .to(loaderRef.current, {
        opacity: 0,
        duration: 1,
        onComplete: () => {
            onComplete();
        },
        });
  }, [onComplete]);

  return (
    <div
      ref={loaderRef}
      className="
        fixed
        inset-0
        overflow-hidden
        z-[9999]
        flex
        items-center
        justify-center

        bg-[#050505]

        text-white
      "
    >
      {/* Glow */}

      <div
        className="
          absolute

          w-[500px]
          h-[500px]

          rounded-full

          bg-[#D4AF37]/10

          blur-[120px]
        "
      />
        {particles.map((particle) => (
        <span
            key={particle.id}
            className="floating-particle"
            style={{
            left: `${particle.left}%`,
            top: `${particle.top}%`,
            }}
        />
        ))}
      <div className="text-center">
        <h1
          className="
            loader-monogram

            text-[90px]
            md:text-[180px]

            text-[#D4AF37]

            leading-none
          "
        >
          A
        <span
            className="
            text-[#D4AF37]
            mx-4
            "
        >
            ❦
        </span>
        T
        </h1>

        <div
          className="
            loader-line

            mx-auto

            mt-4
            mb-6

            h-[1px]
            w-40

            bg-[#D4AF37]

            origin-center
          "
        />

        <p
          className="
            loader-subtitle

            uppercase

            tracking-[8px]

            text-sm

            text-[#F4E7C5]
          "
        >
          Together With Their Families
        </p>
        {guestName && (
        <p
            className="
            mt-4

            text-[#D4AF37]

            tracking-[4px]
            uppercase

            text-xs
            "
        >
            Welcome {guestName}
        </p>
        )}
      </div>
    </div>
  );
};

export default WeddingLoader;