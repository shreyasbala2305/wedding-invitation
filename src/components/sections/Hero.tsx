// import weddingData from "../../data/weddingData";
// import FloatingParticles from "../common/FloatingParticles";

// import heroImage from "../../assets/images/couple/hero.jpg";

// const Hero = () => {
//   const scrollToDestiny = () => {
//     document
//       .getElementById("destiny")
//       ?.scrollIntoView({
//         behavior: "smooth",
//       });
//   };

//   return (
//     <section className="relative h-screen overflow-hidden">

//       {/* Background Image */}

//       <div
//         className="absolute inset-0 hero-bg"
//         style={{
//           backgroundImage: `url(${heroImage})`,
//           backgroundSize: "cover",
//           backgroundPosition: "center center",
//         }}
//       />

//       {/* Main Dark Overlay */}

//       <div
//         className="
//           absolute
//           inset-0
//           bg-gradient-to-b
//           from-black/20
//           via-black/25
//           to-black/70
//           z-[1]
//         "
//       />

//       {/* Luxury Vignette */}

//       <div
//         className="
//           absolute
//           inset-0
//           z-[2]
//           bg-[radial-gradient(circle_at_center,transparent_25%,rgba(0,0,0,.55)_100%)]
//         "
//       />

//       {/* Golden Ambient Glow */}

//       <div
//         className="
//           absolute
//           inset-0
//           z-[2]
//           bg-[radial-gradient(circle_at_top,rgba(212,175,55,.18),transparent_60%)]
//         "
//       />

//       {/* Floating Particles */}

//       <FloatingParticles />

//       {/* Luxury Overlay */}

//       <div
//         className="
//     absolute
//     inset-0
//     z-[1]

//     bg-gradient-to-b
//     from-black/15
//     via-black/20
//     to-black/75
//   "
//       />

//       {/* Cinematic Vignette */}

//       <div
//         className="
//     absolute
//     inset-0
//     z-[2]

//     bg-[radial-gradient(circle_at_center,transparent_30%,rgba(0,0,0,.55)_100%)]
//   "
//       />

//       {/* Gold Ambient Light */}

//       <div
//         className="
//     absolute
//     inset-0
//     z-[2]

//     bg-[radial-gradient(circle_at_top,rgba(212,175,55,.12),transparent_55%)]
//   "
//       />

//       {/* Content */}

//       <div
//         className="
//           relative
//           z-10

//           h-full

//           flex
//           flex-col
//           items-center

//           text-center

//           px-6

//           pt-20
//           md:pt-24
//           lg:pt-28
//         "
//       >

//         {/* Header */}

//         <p
//           className="
//             uppercase
//             tracking-[8px]
//             text-[#D4AF37]

//             text-xs
//             md:text-sm

//             mb-6
//           "
//         >
//           Together With Their Families
//         </p>

//         <div
//           className="
//             w-24
//             h-[2px]

//             bg-[#D4AF37]

//             mb-8
//           "
//         />

//         {/* Groom */}

//         <h1
//           className="coupleName
// text-white

// text-6xl
// md:text-8xl
// lg:text-[7rem]

// leading-none

// font-semibold

// tracking-wide

// [text-shadow:0_2px_15px_rgba(0,0,0,.45)]
// "
//         >
//           {weddingData.groom.name.split(" ")[0].toUpperCase()}
//         </h1>

//         {/* Ampersand */}

//         <div
//           className=" coupleName
// text-[#D4AF37]

// text-5xl

// my-3

// font-light

// [text-shadow:0_0_12px_rgba(212,175,55,.4)]
// "
//         >
//           &
//         </div>

//         {/* Bride */}

//         <h1
//           className="
// text-white

// text-6xl
// md:text-8xl
// lg:text-[7rem]

// leading-none

// font-semibold

// tracking-wide

// [text-shadow:0_2px_15px_rgba(0,0,0,.45)]
// "
//         >
//           {weddingData.bride.name.split(" ")[0].toUpperCase()}
//         </h1>

//         {/* Tagline */}

//         <p
//           className="
// mt-8

// text-[#F7E6B5]

// text-xl
// md:text-2xl

// italic

// tracking-wide

// [text-shadow:0_2px_10px_rgba(0,0,0,.5)]
// "
//         >
//           Two Journeys. One Forever.
//         </p>

//         {/* Date */}

//         {/* <div
//           className="
//     mt-10

//     text-white

//     backdrop-blur-[1px]
//   "
//         >
//           <p
//             className=" eventDate
//               text-xl
//               md:text-2xl
//             "
//           >
//             {weddingData.wedding.date}
//           </p>

//           {/* <p
//             className="
//               mt-2

//               text-sm
//               md:text-base

//               text-gray-200
//             "
//           >
//             Muhurat • {weddingData.wedding.time}
//           </p> 
//         </div> */}

//         {/* CTA */}

//         <button
//           onClick={scrollToDestiny}
//           className="
//             mt-14

//             px-12
//             py-4

//             rounded-full

//             bg-gradient-to-r
//             from-[#D4AF37]
//             to-[#F4D66A]

//             text-black

//             font-semibold
//             tracking-wider

//             shadow-[0_10px_35px_rgba(212,175,55,.25)]

//             hover:scale-105

//             hover:shadow-[0_15px_50px_rgba(212,175,55,.4)]

//             transition-all
//             duration-500
//             "
//         >
//           Begin The Journey
//         </button>

//       </div>

//       {/* Bottom Fade */}

//       <div
//         className="
//           absolute
//           bottom-0
//           left-0
//           right-0

//           h-52

//           bg-gradient-to-t
//           from-black
//           to-transparent

//           z-[3]
//         "
//       />

//       {/* Scroll Indicator */}

//       {/* <div
//         className="
//           absolute

//           bottom-8
//           left-1/2

//           -translate-x-1/2

//           text-[#D4AF37]

//           text-2xl

//           animate-bounce

//           z-20
//         "
//       >
//         ↓
//       </div> */}

//     </section>
//   );
// };

// export default Hero;

import { useCallback, useEffect } from "react";
import weddingData from "../../data/weddingData";
import FloatingParticles from "../common/FloatingParticles";
import gsap from "gsap";
import heroImage from "../../assets/images/couple/hero.jpg";

const Hero = () => {
  useEffect(() => {
    gsap.fromTo(
      ".hero-image",
      {
        scale: 1.12,
      },
      {
        scale: 1,
        duration: 2.5,
        ease: "power2.out",
      }
    );

    gsap.fromTo(
      ".hero-content",
      {
        opacity: 0,
        y: 40,
      },
      {
        opacity: 1,
        y: 0,
        duration: 1.5,
        ease: "power3.out",
        delay: 0.3,
      }
    );
  }, []);
  const groomFirstName =
    weddingData.groom.name.split(" ")[0];

  const brideFirstName =
    weddingData.bride.name.split(" ")[0];

  const scrollToDestiny = useCallback(() => {
    document
      .getElementById("destiny")
      ?.scrollIntoView({
        behavior: "smooth",
      });
  }, []);

  return (
    <section
      className="
        relative
        min-h-[100svh]
        overflow-hidden
      "
    >
      {/* Background Image */}

      <div
        className="absolute inset-0 hero-bg hero-image"
        style={{
          backgroundImage: `url(${heroImage})`,
          backgroundSize: "cover",
          backgroundPosition: "center center",
        }}
      />

      {/* Luxury Overlay */}

      <div
        className="
          absolute
          inset-0
          z-[1]

          bg-gradient-to-b
          from-black/15
          via-black/20
          to-black/75
        "
      />

      {/* Cinematic Vignette */}

      <div
        className="
          absolute
          inset-0
          z-[2]

          bg-[radial-gradient(circle_at_center,transparent_30%,rgba(0,0,0,.55)_100%)]
        "
      />

      {/* Gold Ambient Light */}

      <div
        className="
          absolute
          inset-0
          z-[2]

          bg-[radial-gradient(circle_at_top,rgba(212,175,55,.12),transparent_55%)]
        "
      />

      {/* Floating Particles */}

      <FloatingParticles />

      {/* Content */}

      <div
        className="
          hero-content
          relative
          z-10

          h-full
          min-h-[100svh]

          flex
          flex-col
          items-center

          text-center

          px-6

          pt-20
          md:pt-24
          lg:pt-28
        "
      >
        {/* Header */}

        <p
          className="
            uppercase
            tracking-[8px]

            text-[#D4AF37]

            text-xs
            md:text-sm

            mb-6
          "
        >
          A Celebration Of Love
        </p>

        <div
          className="
            w-24
            h-[2px]

            bg-[#D4AF37]

            mb-8
          "
        />

        {/* Groom */}

        <h1
          className="
            coupleName

            text-white

            text-6xl
            md:text-8xl
            lg:text-[7rem]

            leading-none

            font-semibold

            tracking-wide

            [text-shadow:0_2px_10px_rgba(0,0,0,.4)]
          "
        >
          {groomFirstName.toUpperCase()}
        </h1>

        {/* Ampersand */}

        <div
          className="
            coupleName

            text-[#D4AF37]

            text-5xl

            my-3

            font-light

            [text-shadow:0_0_12px_rgba(212,175,55,.4)]
          "
        >
          &
        </div>

        {/* Bride */}

        <h1
          className="
            coupleName

            text-white

            text-6xl
            md:text-8xl
            lg:text-[7rem]

            leading-none

            font-semibold

            tracking-wide

            [text-shadow:0_2px_10px_rgba(0,0,0,.4)]
          "
        >
          {brideFirstName.toUpperCase()}
        </h1>

        {/* Tagline */}

        <p
          className="
            mt-8

            text-[#F7E6B5]

            text-xl
            md:text-2xl

            italic

            tracking-wide

            [text-shadow:0_2px_10px_rgba(0,0,0,.5)]
          "
        >
          Two Journeys. One Forever.
        </p>

        {/* CTA */}

        <button
          onClick={scrollToDestiny}
          className="
            mt-14

            px-12
            py-4

            rounded-full

            bg-gradient-to-r
            from-[#D4AF37]
            to-[#F4D66A]

            text-black

            font-semibold
            tracking-wider

            shadow-[0_10px_35px_rgba(212,175,55,.25)]

            hover:scale-[1.03]

            hover:shadow-[0_15px_50px_rgba(212,175,55,.4)]

            transition-all
            duration-500
          "
        >
          Begin The Journey
        </button>
      </div>

      {/* Bottom Fade */}

      <div
        className="
          absolute
          bottom-0
          left-0
          right-0

          h-52

          bg-gradient-to-t
          from-black
          to-transparent

          z-[3]
        "
      />
    </section>
  );
};

export default Hero;  