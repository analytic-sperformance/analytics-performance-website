type SectionProps = {
  id?: string;
  title?: string;
  width?: string;
  innerWidth?: string;
  underlineWidth?: string;
  children: React.ReactNode;
};

export default function Section({
  id,
  title,
  width = "max-w-7xl",
  innerWidth = "max-w-4xl",
  underlineWidth = "6rem",
  children,
}: SectionProps) {
  return (
    <section id={id} className="py-20 px-0">
      <div className={`mx-auto ${width}`}>
        {title && (
          <h2 className="text-4xl md:text-5xl font-extrabold mb-12 text-white text-center relative">
            <span className="relative z-10">{title}</span>
            <span
              className="absolute left-1/2 -translate-x-1/2 bottom-0 h-1.5 bg-blue-500 rounded-full"
              style={{ width: underlineWidth }}
            />
          </h2>
        )}
        <div
          className={`text-gray-300 text-lg ${innerWidth} mx-auto leading-relaxed space-y-8`}
        >
          {children}
        </div>
      </div>
    </section>
  );
}