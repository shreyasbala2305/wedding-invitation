import { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

import gallery1 from "../../assets/images/gallery/gallery-1.jpg";
import gallery2 from "../../assets/images/gallery/gallery-2.jpg";
import gallery3 from "../../assets/images/gallery/gallery-3.jpg";
import gallery4 from "../../assets/images/gallery/gallery-4.jpg";
import gallery5 from "../../assets/images/gallery/gallery-5.jpg";
import gallery6 from "../../assets/images/gallery/gallery-6.jpg";
import gallery10 from "../../assets/images/gallery/gallery-10.jpg";
import gallery11 from "../../assets/images/gallery/gallery-11.jpg";
import gallery12 from "../../assets/images/gallery/gallery-12.jpg";
import gallery13 from "../../assets/images/gallery/gallery-13.jpg";
import gallery14 from "../../assets/images/gallery/gallery-14.jpg";
import gallery15 from "../../assets/images/gallery/gallery-15.jpg";
import gallery16 from "../../assets/images/gallery/gallery-16.jpg";

const galleryImages = [
  gallery1,
  gallery2,
  gallery3,
  gallery4,
  gallery5,
  gallery6,
  gallery10,
  gallery11,
  gallery12,
  gallery13,
  gallery14,
  gallery15,
  gallery16,
];

gsap.registerPlugin(ScrollTrigger);

const Gallery = () => {
  const sectionRef = useRef<HTMLElement>(null);

  const [selectedImage, setSelectedImage] =
    useState<string | null>(null);

  const [activeIndex, setActiveIndex] =
    useState(0);

  const [isPaused, setIsPaused] =
    useState(false);

  useEffect(() => {
    gsap.fromTo(
      ".main-gallery-image",
      {
        opacity: 0.4,
        scale: 1.02,
      },
      {
        opacity: 1,
        scale: 1,
        duration: 0.6,
        ease: "power2.out",
      }
    );
  }, [activeIndex]);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        ".gallery-heading",
        {
          y: 100,
          opacity: 0,
        },
        {
          y: 0,
          opacity: 1,
          scrollTrigger: {
            trigger: ".gallery-heading",
            start: "top 85%",
            end: "top 40%",
          },
        }
      );
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  useEffect(() => {
    if (isPaused) return;

    const timer = setInterval(() => {
      setActiveIndex(prev =>
        prev === galleryImages.length - 1
          ? 0
          : prev + 1
      );
    }, 5000);

    return () => clearInterval(timer);
  }, [isPaused]);

  return (
    <>
      <section
        ref={sectionRef}
        className="
          relative
          overflow-hidden

          py-24
          md:py-36

          bg-[#faf7f2]
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

            w-[500px]
            h-[500px]
            md:h-[700px]

            rounded-full

            bg-[#D4AF37]/10

            blur-[90px]
          "
        />

        {/* Watermark */}

        <div
          className="
            absolute

            left-1/2
            top-1/2

            -translate-x-1/2
            -translate-y-1/2

            text-[100px]
            md:text-[300px]

            text-[#D4AF37]/5

            select-none
            pointer-events-none
          "
        >
          A ❦ T
        </div>

        <div
          className="
            relative
            z-10
            max-w-7xl
            mx-auto
            px-6
          "
        >
          <div
            className="
              flex
              justify-center

              mb-10

              text-[#D4AF37]
              text-2xl
            "
          >
            ✦ ✦ ✦
          </div>

          {/* Heading */}
          <div
            className="
              gallery-heading
              text-center
              mb-16
              md:mb-24
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
              Moments To Cherish
            </p>

            <h2
              className="
                text-4xl
                sm:text-5xl
                md:text-7xl

                text-[#6B1E1E]
              "
            >
              A Collection
              <br />
              Of Memories
            </h2>

            <p
              className="
                mt-8

                text-lg

                text-gray-600

                max-w-2xl
                mx-auto
              "
            >
              Beautiful moments captured forever,
              celebrating love, laughter and togetherness.
            </p>
          </div>

          <div
            className="
              max-w-6xl
              mx-auto
            "
          >
            <div
              className="
                relative

                overflow-hidden

                rounded-[36px]

                bg-black
              "
            >
              <img
                src={galleryImages[activeIndex]}
                alt=""
                className="
                  main-gallery-image
                  w-full
                  h-[60vh]
                  md:h-[90vh]
                  object-cover
                  transition-all
                  duration-1000
                "
                onClick={() =>
                  setSelectedImage(
                    galleryImages[activeIndex]
                  )
                }
              />

              <div
                className="
                  absolute
                  inset-0

                  bg-gradient-to-t
                  from-black/50
                  via-transparent
                  to-transparent
                "
              />

              <div
                className="
                  absolute

                  top-8
                  left-8
                "
              >
                <p
                  className="
                    text-[#D4AF37]

                    uppercase

                    tracking-[6px]

                    text-sm
                  "
                >
                  Memory
                </p>

                <p
                  className="
                    text-white

                    text-xl
                    md:text-3xl
                  "
                >
                  Forever Begins Here
                </p>
              </div>
            </div>

            <div
              className="
                relative
                flex
                justify-center
                items-center
                h-[140px]
                md:h-[180px]
                -mt-14
                z-20
              "
            >
              {galleryImages.map((image, index) => {
                let offset =
                  index - activeIndex;

                const total =
                  galleryImages.length;

                if (offset > total / 2)
                  offset -= total;

                if (offset < -total / 2)
                  offset += total;
                return (
                  <button
                    key={index}
                    onClick={() => {
                      setActiveIndex(index);

                      setIsPaused(true);

                      setTimeout(() => {
                        setIsPaused(false);
                      }, 10000);
                    }}
                    className={`
                      absolute
                      overflow-hidden
                      rounded-[18px]
                      transition-all
                      duration-700 ease-out
                      ${
                        activeIndex === index
                          ? "z-30"
                          : "z-10"
                      }
                    `}
                    style={{
                      transform: `
                        translateX(${
                          window.innerWidth < 768
                            ? offset * 55
                            : offset * 110
                        }px)
                        scale(${
                          activeIndex === index
                            ? 1.15
                            : 0.85
                        })
                        rotateY(${offset * -18}deg)
                      `,
                      opacity:
                      Math.abs(offset) > 2
                        ? 0
                        : 1,
                    }}
                  >
                    <img
                      src={image}
                      alt=""
                      className="
                        w-[65px]
                        h-[90px]

                        md:w-[90px]
                        md:h-[130px]

                        object-cover
                      "
                    />
                  </button>
                )}
              )}
            </div>

          </div>
        </div>
        
      </section>

      {/* Lightbox */}

      {selectedImage && (
        <div
          className="
            fixed
            inset-0

            z-[999]

            bg-black/95

            flex
            items-center
            justify-center

            p-6
          "
          onClick={() =>
            setSelectedImage(null)
          }
        >
          <img
            src={selectedImage}
            loading="lazy"
            alt=""
            className="
              max-w-full
              max-h-full

              rounded-2xl
            "
          />

          <button
            onClick={() =>
              setSelectedImage(null)
            }
            className="
              absolute

              top-6
              right-6

              text-white
              w-12
              h-12

              rounded-full

              bg-black/40
              backdrop-blur-sm

              flex
              items-center
              justify-center

              text-2xl
            "
          >
            ×
          </button>
        </div>
      )}
    </>
  );
};

export default Gallery;