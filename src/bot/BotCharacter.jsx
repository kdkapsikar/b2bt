import { useEffect, useRef } from 'react';

export default function BotCharacter({ size, waving = false, holding = false, tracking = true }) {
  const svgRef = useRef(null);
  const pupilsRef = useRef(null);

  useEffect(() => {
    if (!tracking || window.matchMedia('(prefers-reduced-motion: reduce)').matches) return undefined;
    let frame = 0;
    const onMove = (e) => {
      cancelAnimationFrame(frame);
      frame = requestAnimationFrame(() => {
        const svg = svgRef.current;
        const pupils = pupilsRef.current;
        if (!svg || !pupils) return;
        const r = svg.getBoundingClientRect();
        const dx = e.clientX - (r.left + r.width / 2);
        const dy = e.clientY - (r.top + r.height / 2);
        const dist = Math.hypot(dx, dy) || 1;
        const k = Math.min(1, dist / 180) * 2.6;
        pupils.setAttribute('transform', `translate(${(dx / dist) * k} ${(dy / dist) * k})`);
      });
    };
    window.addEventListener('mousemove', onMove);
    return () => {
      window.removeEventListener('mousemove', onMove);
      cancelAnimationFrame(frame);
    };
  }, [tracking]);

  const dims = size ? { width: size, height: size } : undefined;

  return (
    <svg
      ref={svgRef}
      className={'rivet' + (waving ? ' rivet-waving' : '') + (holding ? ' rivet-hold' : '') + (size ? '' : ' rivet-fluid')}
      {...dims}
      viewBox="0 0 80 80"
      aria-hidden="true"
      focusable="false"
    >
      <ellipse className="rivet-shadow" cx="40" cy="76" rx="18" ry="3" fill="#16233B" opacity="0.22" />
      <g className="rivet-body">
        <g transform="translate(4 0)">
          {/* antenna */}
          <line x1="36" y1="10" x2="36" y2="18" stroke="#16233B" strokeWidth="3" strokeLinecap="round" />
          <circle className="rivet-bulb" cx="36" cy="7" r="4.2" fill="#D89A55" stroke="#16233B" strokeWidth="1.5" />

          {/* ears */}
          <rect x="2" y="35" width="7" height="15" rx="3.5" fill="#D89A55" stroke="#16233B" strokeWidth="1.5" />
          <rect x="63" y="35" width="7" height="15" rx="3.5" fill="#D89A55" stroke="#16233B" strokeWidth="1.5" />

          {/* arms: resting at the sides, waving, or raised to hold the chat panel */}
          {[
            ['arm-rest arm-rest-l', 'M5 46 C-1 50 -3 56 -1 62', -1, 63.5],
            ['arm-rest arm-rest-r', 'M67 46 C73 50 75 56 73 62', 73, 63.5],
            ['arm-wave', 'M69 47 C75 45 77 39 75 32', 75, 29],
            ['arm-hold', 'M67 44 C73 32 75 16 73 4', 73, 3],
          ].map(([cls, d, hx, hy]) => (
            <g key={cls} className={'rivet-arm ' + cls}>
              <path d={d} fill="none" stroke="#16233B" strokeWidth="5" strokeLinecap="round" />
              <path d={d} fill="none" stroke="#FFFFFF" strokeWidth="2.4" strokeLinecap="round" />
              <circle cx={hx} cy={hy} r="3.6" fill="#D89A55" stroke="#16233B" strokeWidth="1.5" />
            </g>
          ))}

          {/* head */}
          <rect x="8" y="17" width="56" height="52" rx="17" fill="#FFFFFF" stroke="#16233B" strokeWidth="2" />
          <path d="M16 30 C17 24 21 21 26 20" fill="none" stroke="#FFFFFF" strokeWidth="2.5" strokeLinecap="round" opacity="0.9" />

          {/* face plate */}
          <rect x="14" y="25" width="44" height="31" rx="12" fill="#16233B" />

          {/* eyes */}
          <g className="rivet-eyes">
            <g ref={pupilsRef}>
              <circle cx="28" cy="38" r="5.6" fill="#D89A55" />
              <circle cx="44" cy="38" r="5.6" fill="#D89A55" />
              <circle cx="29.6" cy="36.2" r="1.7" fill="#FFF6E8" />
              <circle cx="45.6" cy="36.2" r="1.7" fill="#FFF6E8" />
            </g>
          </g>

          {/* cheeks + mouth */}
          <circle cx="21" cy="48" r="2.4" fill="#D89A55" opacity="0.35" />
          <circle cx="51" cy="48" r="2.4" fill="#D89A55" opacity="0.35" />
          <path d="M31 47.5 C34 51.5 38 51.5 41 47.5" fill="none" stroke="#D89A55" strokeWidth="2.2" strokeLinecap="round" />

          {/* rivets */}
          <circle cx="18" cy="62" r="1.9" fill="#B6752D" stroke="#16233B" strokeWidth="0.8" />
          <circle cx="54" cy="62" r="1.9" fill="#B6752D" stroke="#16233B" strokeWidth="0.8" />
        </g>
      </g>
    </svg>
  );
}
