interface Props {
  title: string;
  subtitle?: string;
  children?: React.ReactNode;
}

const Section = ({ title, subtitle, children }: Props) => {
  return (
    <section className="py-24 px-6">
      <div className="max-w-6xl mx-auto text-center">

        {subtitle && (
          <p className="uppercase tracking-[5px] text-amber-600 mb-3">
            {subtitle}
          </p>
        )}

        <h2 className="text-5xl mb-10">
          {title}
        </h2>

        {children}
      </div>
    </section>
  );
};

export default Section;