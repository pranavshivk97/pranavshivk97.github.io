import { marqueeItems } from '../data/content';

export default function Marquee() {
  return (
    <div className="marquee-shell" aria-label="Technology stack">
      <div className="marquee">
        <div className="marquee-group">
          {marqueeItems.map((item) => (
            <span key={item}>{item}</span>
          ))}
        </div>
        <div className="marquee-group" aria-hidden="true">
          {marqueeItems.map((item) => (
            <span key={item}>{item}</span>
          ))}
        </div>
      </div>
    </div>
  );
}
