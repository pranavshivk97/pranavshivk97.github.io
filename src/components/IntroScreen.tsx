import { useEffect, useRef, useState } from 'react';
import { introCopy } from '../data/content';

interface Particle {
  x: number;
  y: number;
  dx: number;
  dy: number;
  tx: number;
  ty: number;
  size: number;
  phase: number;
}

interface IntroScreenProps {
  onDone: () => void;
  /** Fires the moment the exit transition begins (before onDone). */
  onExitStart?: () => void;
}

export default function IntroScreen({ onDone, onExitStart }: IntroScreenProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const commandRef = useRef<HTMLDivElement>(null);
  const roleRef = useRef<HTMLDivElement>(null);
  const noteRef = useRef<HTMLDivElement>(null);
  const [exiting, setExiting] = useState(false);
  const onDoneRef = useRef(onDone);
  onDoneRef.current = onDone;
  const onExitStartRef = useRef(onExitStart);
  onExitStartRef.current = onExitStart;

  useEffect(() => {
    const canvas = canvasRef.current;
    const role = roleRef.current;
    if (!canvas || !role) return;

    const reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let introRaf = 0;
    let introWidth = 0;
    let introHeight = 0;
    let introDpr = 1;
    let introStart = 0;
    let introFinished = false;
    let particles: Particle[] = [];
    let decodeTimer = 0;
    let finishTimer = 0;

    const finishIntro = (immediate = false) => {
      if (introFinished) return;
      introFinished = true;
      window.clearInterval(decodeTimer);
      window.clearTimeout(finishTimer);
      onExitStartRef.current?.();
      if (immediate) {
        cancelAnimationFrame(introRaf);
        onDoneRef.current();
        return;
      }
      setExiting(true);
      window.setTimeout(() => {
        cancelAnimationFrame(introRaf);
        onDoneRef.current();
      }, 620);
    };

    const seedParticles = () => {
      const count = Math.min(82, Math.max(48, Math.floor(introWidth / 16)));
      const spreadX = Math.min(introWidth * 0.42, 520);
      const spreadY = Math.min(introHeight * 0.34, 280);
      particles = Array.from({ length: count }, (_, i) => {
        const angle = (Math.PI * 2 * i) / count + (i % 3) * 0.22;
        const ring = 0.42 + (i % 4) * 0.17;
        const edge = i % 4;
        const startX = edge === 0 ? -30 : edge === 1 ? introWidth + 30 : Math.random() * introWidth;
        const startY = edge === 2 ? -30 : edge === 3 ? introHeight + 30 : Math.random() * introHeight;
        return {
          x: startX,
          y: startY,
          dx: startX,
          dy: startY,
          tx: introWidth * 0.5 + Math.cos(angle) * spreadX * ring,
          ty: introHeight * 0.5 + Math.sin(angle) * spreadY * ring,
          size: 0.7 + (i % 5) * 0.22,
          phase: i * 0.73,
        };
      });
    };

    const resizeIntro = () => {
      introDpr = Math.min(window.devicePixelRatio || 1, 2);
      introWidth = window.innerWidth;
      introHeight = window.innerHeight;
      canvas.width = introWidth * introDpr;
      canvas.height = introHeight * introDpr;
      canvas.style.width = introWidth + 'px';
      canvas.style.height = introHeight + 'px';
      ctx.setTransform(introDpr, 0, 0, introDpr, 0, 0);
      seedParticles();
    };

    const drawIntro = (time: number) => {
      if (!introStart) introStart = time;
      const elapsed = time - introStart;
      ctx.clearRect(0, 0, introWidth, introHeight);

      particles.forEach((particle, i) => {
        const settle = Math.min(1, elapsed / (980 + (i % 8) * 55));
        const ease = 1 - Math.pow(1 - settle, 3);
        particle.x += (particle.tx - particle.x) * (0.025 + ease * 0.045);
        particle.y += (particle.ty - particle.y) * (0.025 + ease * 0.045);
        const driftX = Math.cos(time * 0.00065 + particle.phase) * 4;
        const driftY = Math.sin(time * 0.0008 + particle.phase) * 3;
        particle.dx = particle.x + driftX;
        particle.dy = particle.y + driftY;
      });

      for (let i = 0; i < particles.length; i++) {
        const a = particles[i];
        for (let j = i + 1; j < particles.length; j++) {
          const b = particles[j];
          const dx = a.dx - b.dx;
          const dy = a.dy - b.dy;
          const distance = Math.sqrt(dx * dx + dy * dy);
          if (distance < 94) {
            ctx.beginPath();
            ctx.moveTo(a.dx, a.dy);
            ctx.lineTo(b.dx, b.dy);
            ctx.strokeStyle = `rgba(68,215,255,${(1 - distance / 94) * 0.18})`;
            ctx.lineWidth = 0.7;
            ctx.stroke();
          }
        }
      }

      particles.forEach((particle, i) => {
        ctx.beginPath();
        ctx.fillStyle = i % 7 === 0 ? 'rgba(234,255,247,.9)' : 'rgba(105,255,198,.68)';
        ctx.arc(particle.dx, particle.dy, particle.size, 0, Math.PI * 2);
        ctx.fill();
      });

      introRaf = requestAnimationFrame(drawIntro);
    };

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') finishIntro(false);
    };

    resizeIntro();
    window.addEventListener('resize', resizeIntro, { passive: true });
    window.addEventListener('keydown', onKeyDown);

    if (!reduced) {
      introRaf = requestAnimationFrame(drawIntro);

      // Every intro line runs: decode -> hold -> encode -> hold -> decode.
      const symbols = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789<>/{}[]';
      const intervalMs = 38;
      const lettersPerFrame = 3;
      const holdDecoded = 4;
      const holdScrambled = 3;
      const isFixed = (ch: string) => !/[A-Za-z0-9]/.test(ch);
      const randSym = () => symbols[(Math.random() * symbols.length) | 0];

      interface Line {
        el: HTMLDivElement | null;
        text: string;
        start: number;
      }
      const lines: Line[] = [
        { el: commandRef.current, text: introCopy.command, start: 0 },
        { el: roleRef.current, text: introCopy.target, start: 8 },
        { el: noteRef.current, text: introCopy.note, start: 16 },
      ];

      const phaseFrames = (len: number) => {
        const d = Math.ceil(len / lettersPerFrame);
        return { d, total: d + holdDecoded + d + holdScrambled + d };
      };

      const renderLine = (text: string, local: number): { str: string; done: boolean } => {
        const chars = text.split('');
        const len = chars.length;
        const { d, total } = phaseFrames(len);
        const t1 = d;
        const t2 = t1 + holdDecoded;
        const t3 = t2 + d;
        const t4 = t3 + holdScrambled;
        const scrambled = () =>
          chars.map((c) => (isFixed(c) ? c : randSym())).join('');
        const resolving = (resolved: number) =>
          chars.map((c, i) => (isFixed(c) || i < resolved ? c : randSym())).join('');
        const encoding = (scrambledCount: number) =>
          chars.map((c, i) => (isFixed(c) || i < len - scrambledCount ? c : randSym())).join('');
        if (local < 0) return { str: scrambled(), done: false };
        if (local < t1) return { str: resolving(Math.min(len, local * lettersPerFrame)), done: false };
        if (local < t2) return { str: text, done: false };
        if (local < t3)
          return { str: encoding(Math.min(len, (local - t2) * lettersPerFrame)), done: false };
        if (local < t4) return { str: scrambled(), done: false };
        if (local < total)
          return { str: resolving(Math.min(len, (local - t4) * lettersPerFrame)), done: false };
        return { str: text, done: true };
      };

      let frame = 0;
      let lastEnd = 0;
      lines.forEach((line) => {
        lastEnd = Math.max(lastEnd, line.start + phaseFrames(line.text.length).total);
      });

      decodeTimer = window.setInterval(() => {
        frame += 1;
        let allDone = true;
        for (const line of lines) {
          if (!line.el) continue;
          const { str, done } = renderLine(line.text, frame - line.start);
          line.el.textContent = str;
          if (!done) allDone = false;
        }
        if (allDone) window.clearInterval(decodeTimer);
      }, intervalMs);
      finishTimer = window.setTimeout(() => finishIntro(false), lastEnd * intervalMs + 280);
    } else {
      finishIntro(true);
    }

    return () => {
      cancelAnimationFrame(introRaf);
      window.clearInterval(decodeTimer);
      window.clearTimeout(finishTimer);
      window.removeEventListener('resize', resizeIntro);
      window.removeEventListener('keydown', onKeyDown);
    };
  }, []);

  return (
    <div
      className={`intro-screen${exiting ? ' exit' : ''}`}
      role="status"
      aria-live="polite"
      aria-label="Portfolio introduction"
    >
      <canvas className="intro-canvas" ref={canvasRef} aria-hidden="true" />
      <div className="intro-vignette" aria-hidden="true" />
      <div className="intro-frame" aria-hidden="true" />
      <div className="intro-copy">
        <div className="intro-command" ref={commandRef}>
          {introCopy.command}
        </div>
        <div className="intro-role" ref={roleRef}>
          {introCopy.target}
        </div>
        <div className="intro-note" ref={noteRef}>
          {introCopy.note}
        </div>
        <div className="intro-rule" aria-hidden="true">
          <span />
        </div>
      </div>
    </div>
  );
}
