import type { ReactNode } from 'react';

interface SectionHeaderProps {
  no: string;
  title: ReactNode;
  intro?: string;
}

export default function SectionHeader({ no, title, intro }: SectionHeaderProps) {
  return (
    <div className="section-header reveal">
      <div className="section-no">{no}</div>
      <div>
        <h2 className="section-title">{title}</h2>
        {intro && <p className="section-intro">{intro}</p>}
      </div>
    </div>
  );
}
