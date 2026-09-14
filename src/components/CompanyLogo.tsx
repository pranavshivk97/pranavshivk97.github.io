type LogoName = 'meta' | 'cisco' | 'tcs';

const META_PATH = "M 90.00,22.00 L 89.55,25.45 L 88.24,28.64 L 86.21,31.37 L 83.65,33.51 L 80.76,35.00 L 77.71,35.86 L 74.65,36.14 L 71.68,35.94 L 68.86,35.33 L 66.20,34.41 L 63.73,33.25 L 61.43,31.90 L 59.28,30.41 L 57.27,28.83 L 55.36,27.17 L 53.53,25.47 L 51.75,23.74 L 50.00,22.00 L 48.25,20.26 L 46.47,18.53 L 44.64,16.83 L 42.73,15.17 L 40.72,13.59 L 38.57,12.10 L 36.27,10.75 L 33.80,9.59 L 31.14,8.67 L 28.32,8.06 L 25.35,7.86 L 22.29,8.14 L 19.24,9.00 L 16.35,10.49 L 13.79,12.63 L 11.76,15.36 L 10.45,18.55 L 10.00,22.00 L 10.45,25.45 L 11.76,28.64 L 13.79,31.37 L 16.35,33.51 L 19.24,35.00 L 22.29,35.86 L 25.35,36.14 L 28.32,35.94 L 31.14,35.33 L 33.80,34.41 L 36.27,33.25 L 38.57,31.90 L 40.72,30.41 L 42.73,28.83 L 44.64,27.17 L 46.47,25.47 L 48.25,23.74 L 50.00,22.00 L 51.75,20.26 L 53.53,18.53 L 55.36,16.83 L 57.27,15.17 L 59.28,13.59 L 61.43,12.10 L 63.73,10.75 L 66.20,9.59 L 68.86,8.67 L 71.68,8.06 L 74.65,7.86 L 77.71,8.14 L 80.76,9.00 L 83.65,10.49 L 86.21,12.63 L 88.24,15.36 L 89.55,18.55 L 90.00,22.00 Z";

function MetaMark() {
  return (
    <svg viewBox="0 0 100 44" width="30" height="14" aria-hidden="true">
      <defs>
        <linearGradient id="meta-g" x1="0" y1="0" x2="1" y2="0">
          <stop offset="0" stopColor="#0064e0" />
          <stop offset="1" stopColor="#0082fb" />
        </linearGradient>
      </defs>
      <path d={META_PATH} fill="none" stroke="url(#meta-g)" strokeWidth="8" strokeLinecap="round" />
    </svg>
  );
}

function CiscoMark() {
  return (
    <svg viewBox="0 0 64 48" width="27" height="20" aria-hidden="true">
      <rect x="1.10" y="28.00" width="4.6" height="18" rx="2.30" fill="#049fd9"/><rect x="8.25" y="22.00" width="4.6" height="24" rx="2.30" fill="#049fd9"/><rect x="15.40" y="16.00" width="4.6" height="30" rx="2.30" fill="#049fd9"/><rect x="22.55" y="10.00" width="4.6" height="36" rx="2.30" fill="#049fd9"/><rect x="29.70" y="4.00" width="4.6" height="42" rx="2.30" fill="#049fd9"/><rect x="36.85" y="10.00" width="4.6" height="36" rx="2.30" fill="#049fd9"/><rect x="44.00" y="16.00" width="4.6" height="30" rx="2.30" fill="#049fd9"/><rect x="51.15" y="22.00" width="4.6" height="24" rx="2.30" fill="#049fd9"/><rect x="58.30" y="28.00" width="4.6" height="18" rx="2.30" fill="#049fd9"/>
    </svg>
  );
}

function TcsMark() {
  return (
    <svg viewBox="0 0 64 28" width="32" height="14" aria-hidden="true">
      <text x="32" y="21" textAnchor="middle" fontFamily="Arial, Helvetica, sans-serif" fontWeight="800" fontSize="21" letterSpacing="-0.5" fill="#eef1f6">tcs</text>
    </svg>
  );
}

export default function CompanyLogo({ name }: { name: LogoName }) {
  return (
    <span className="company-logo" aria-hidden="true">
      {name === 'meta' ? <MetaMark /> : name === 'cisco' ? <CiscoMark /> : <TcsMark />}
    </span>
  );
}
