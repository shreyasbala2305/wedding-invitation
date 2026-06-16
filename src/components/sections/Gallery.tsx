import { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

import gallery1 from "../../assets/images/gallery/gallery-1.jpg";
import gallery2 from "../../assets/images/gallery/gallery-2.jpg";
import gallery3 from "../../assets/images/gallery/gallery-3.jpg";
import gallery4 from "../../assets/images/gallery/gallery-4.jpg";
import gallery5 from "../../assets/images/gallery/gallery-5.jpg";
import gallery6 from "../../assets/images/gallery/gallery-6.jpg";
import gallery7 from "../../assets/images/gallery/gallery-7.jpg";
import gallery8 from "../../assets/images/gallery/gallery-8.jpg";
import gallery9 from "../../assets/images/gallery/gallery-9.jpg";

gsap.registerPlugin(ScrollTrigger);

const Gallery = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const [selectedImage, setSelectedImage] =
    useState<string | null>(null);

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

      gsap.utils
        .toArray(".gallery-image")
        .forEach((image: any) => {
          gsap.fromTo(
            image,
            {
              y: 100,
              opacity: 0,
              scale: 1.1,
            },
            {
              y: 0,
              opacity: 1,
              scale: 1,
              duration: 1,
              ease: "power3.out",

              scrollTrigger: {
                trigger: image,
                start: "top 85%",
              }
            }
          );
        });
    }, sectionRef);

    if (window.innerWidth < 768) {
      const images =
        gsap.utils.toArray<HTMLElement>(
          ".mobile-gallery-image"
        );

      gsap.set(images, {
        opacity: 0,
        scale: 1.03,
      });

      gsap.set(images[0], {
        opacity: 1,
        scale: 1,
      });

      const tl = gsap.timeline({
        repeat: -1,
      });

      images.forEach((image, index) => {
        if (index === 0) return;

        tl.to(images[index - 1], {
          opacity: 0,
          scale: 1.08,
          duration: 1.1,
        });

        tl.fromTo(
          image,
          {
            opacity: 0,
            scale: 1.05,
          },
          {
            opacity: 1,
            scale: 1,
            duration: 1.2,
          },
          "<"
        );

        tl.to({}, { duration: 2.5 });
      });

      tl.to(images[images.length - 1], {
        opacity: 0,
        scale: 1.08,
        duration: 1.2,
      });

      tl.fromTo(
        images[0],
        {
          opacity: 0,
          scale: 1.05,
        },
        {
          opacity: 1,
          scale: 1,
          duration: 1.2,
        }
      );

      // images.forEach((image: any, index) => {
      //   if (index === 0) return;

      //   tl.to(images[index - 1], {
      //     opacity: 0,
      //     scale: 1.05,
      //     y: -40,
      //     duration: 1,
      //   });

      //   tl.fromTo(
      //     image,
      //     {
      //       opacity: 0,
      //       scale: 1.1,
      //       y: 40,
      //     },
      //     {
      //       opacity: 1,
      //       scale: 1,
      //       y: 0,
      //       duration: 1,
      //     },
      //     "<"
      //   );
      // });
    }

    return () => ctx.revert();
  }, []);

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
          FOREVER
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

        {/* Desktop Gallery */}
        <div className="hidden md:block">

          {/* Hero Image */}

          <div
            className="
              gallery-image
              mb-10
              overflow-hidden
              rounded-[40px]
              cursor-pointer
              will-change-transform
            "
            onClick={() =>
              setSelectedImage(gallery1)
            }
          >
            <img
              src={gallery1}
              loading="lazy"
              alt=""
              className="
                w-full

                h-[320px]
                md:h-[700px]

                object-cover

                transition-all
                duration-700

                hover:scale-105
                active:scale-[0.98]
              "
            />
          </div>

          {/* Editorial Layout */}

          <div
            className="
              grid
              lg:grid-cols-2

              gap-5
              md:gap-8

              mb-10
            "
          >
            {/* <div
              className="
                gallery-image

                overflow-hidden

                rounded-[40px]

                cursor-pointer
              "
              onClick={() =>
                setSelectedImage(gallery4)
              }
            >
              <img
                src={gallery4}
                alt=""
                className="
                  w-full

                  md:h-[700px]

                  object-cover

                  transition-all
                  duration-700

                  hover:scale-105
                  active:scale-[0.98]
                "
              />
            </div> */}

            <div
              className="
                gallery-image
                overflow-hidden
                rounded-[40px]
                cursor-pointer
                will-change-transform
              "
              onClick={() =>
                setSelectedImage(gallery2)
              }
            >
              <img
                src={gallery2}
                loading="lazy"
                alt=""
                className="
                  w-full

                  md:h-[700px]

                  object-cover

                  transition-all
                  duration-700

                  hover:scale-105
                  active:scale-[0.98]
                "
              />
            </div>

            <div
              className="
                gallery-image
                overflow-hidden
                rounded-[40px]
                cursor-pointer
                will-change-transform
              "
              onClick={() =>
                setSelectedImage(gallery3)
              }
            >
              <img
                src={gallery3}
                loading="lazy"
                alt=""
                className="
                  w-full

                  md:h-[700px]

                  object-cover

                  transition-all
                  duration-700

                  hover:scale-105
                  active:scale-[0.98]
                "
              />
            </div>
          </div>
          </div>

          {/* Final Memory Grid */}

          <div
            className="
              hidden
              md:grid

              md:grid-cols-3

              gap-8
            "
          >
            {[
              gallery4,
              gallery5,
              gallery6,
              gallery7,
              gallery8,
              gallery9,
            ].map((image, index) => (
              <div
                key={index}
                className="
                  gallery-image
                  overflow-hidden
                  rounded-[32px]
                  cursor-pointer
                  will-change-transform
                "
                onClick={() =>
                  setSelectedImage(image)
                }
              >
                <img
                  src={image}
                  loading="lazy"
                  alt=""
                  className="
                    w-full

                    h-[420px]

                    object-cover

                    transition-all
                    duration-700

                    hover:scale-105
                  "
                />
              </div>
            ))}
          </div>

          {/* Memory Grid */}

          <div
            className="
              md:hidden

              relative

              h-[70vh]

              overflow-hidden

              rounded-[32px]
            "
          >
            {[
              gallery1,
              gallery2,
              gallery3,
              gallery4,
              gallery5,
              gallery6,
              gallery7,
              gallery8,
              gallery9,
            ].map((image, index) => (
              <div
                key={index}
                className="
                  mobile-gallery-image
                  pointer-events-none
                  absolute
                  inset-0
                  will-change-transform
                  cursor-pointer
                "
                onClick={() =>
                  setSelectedImage(image)
                }
              >
                <img
                  src={image}
                  loading="lazy"
                  alt=""
                  className="
                    w-full
                    h-full

                    object-cover
                  "
                />

                <div
                  className="
                    absolute
                    inset-0

                    bg-gradient-to-t
                    from-black/65
                    via-transparent
                    to-transparent
                  "
                />

                <div
                  className="
                    absolute

                    bottom-10
                    left-6
                    right-6
                  "
                >
                  <p
                    className="
                      text-[#D4AF37]

                      uppercase

                      tracking-[6px]

                      text-sm

                      mb-2
                    "
                  >
                    Memory 
                  </p>

                  <h3
                    className="
                      text-white

                      text-3xl

                      leading-tight
                    "
                  >
                    A Moment To
                    <br />
                    Cherish Forever
                  </h3>
                </div>
              </div>
            ))}
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

              text-5xl
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