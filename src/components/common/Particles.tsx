const Particles = () => {

  return (
    <>
      {[...Array(20)].map((_, i) => (
        <span
          key={i}
          className="
            absolute
            h-1
            w-1
            rounded-full
            bg-yellow-400
            animate-pulse
          "
          style={{
            left: `${Math.random()*100}%`,
            top: `${Math.random()*100}%`
          }}
        />
      ))}
    </>
  );

};

export default Particles;