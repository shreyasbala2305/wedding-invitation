// const particles = Array.from({ length: 40 }, (_, i) => ({
//   id: i,
//   left: Math.random() * 100,
//   delay: Math.random() * 10,
//   duration: 10 + Math.random() * 12,
//   size: 2 + Math.random() * 6,
// }));

// const FloatingParticles = () => {
//   return (
//     <div className="absolute inset-0 overflow-hidden pointer-events-none z-[4]">
//       {particles.map((particle) => (
//         <span
//           key={particle.id}
//           className="floating-particle"
//           style={{
//             left: `${particle.left}%`,
//             width: `${particle.size}px`,
//             height: `${particle.size}px`,
//             animationDelay: `${particle.delay}s`,
//             animationDuration: `${particle.duration}s`,
//           }}
//         />
//       ))}
//     </div>
//   );
// };

// export default FloatingParticles;

import { useMemo } from "react";

interface FloatingParticlesProps {
  count?: number;
}

const FloatingParticles = ({
  count = 26,
}: FloatingParticlesProps) => {
  const particles = useMemo(
    () =>
      Array.from(
        { length: count },
        (_, i) => ({
          id: i,
          left: Math.random() * 100,
          delay: Math.random() * 10,
          duration:
            12 + Math.random() * 10,
          size:
            2 + Math.random() * 4,
        })
      ),
    [count]
  );

  return (
    <div
      className="
        absolute
        inset-0

        overflow-hidden

        pointer-events-none

        z-[4]
      "
    >
      {particles.map((particle) => (
        <span
          key={particle.id}
          className="floating-particle"
          style={{
            left: `${particle.left}%`,
            width: `${particle.size}px`,
            height: `${particle.size}px`,
            animationDelay: `${particle.delay}s`,
            animationDuration: `${particle.duration}s`,
          }}
        />
      ))}
    </div>
  );
};

export default FloatingParticles;