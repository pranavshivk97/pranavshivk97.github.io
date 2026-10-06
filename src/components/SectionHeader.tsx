interface SectionHeaderProps {
  kicker: string;
  title: string;
}

export default function SectionHeader({ kicker, title }: SectionHeaderProps) {
  return (
    <div className="section-head reveal">
      <p className="section-kicker">{kicker}</p>
      <h2 className="section-title">{title}</h2>
      <hr className="section-rule" />
    </div>
  );
}
