export default function Section({
  id,
  index,
  label,
  title,
  children,
}: {
  id: string;
  index: string;
  label: string;
  title: React.ReactNode;
  children: React.ReactNode;
}) {
  return (
    <section id={id} className="section container">
      <div className="section-head">
        <span className="section-index">{index}</span>
        <span className="section-rule" />
        <span className="section-label">{label}</span>
      </div>
      <h2 className="section-title">{title}</h2>
      {children}
    </section>
  );
}
