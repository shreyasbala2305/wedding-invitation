interface Props {
  title: string;
  subtitle?: string;
}

const SectionTitle = ({ title, subtitle }: Props) => {
  return (
    <div className="text-center mb-16">
      <p className="tracking-[5px] uppercase text-amber-600 text-sm">
        {subtitle}
      </p>

      <h2 className="text-5xl font-bold mt-3">
        {title}
      </h2>
    </div>
  );
};

export default SectionTitle;