"use client";

import { useEffect, useRef, useCallback } from "react";

interface Bubble {
  x: number;
  y: number;
  vx: number;
  vy: number;
  size: number;
  baseX: number;
  baseY: number;
  color: string;
  speed: number;
}

const COLORS = [
  "rgba(244, 188, 208, 0.55)",
  "rgba(240, 160, 188, 0.45)",
  "rgba(170, 203, 238, 0.55)",
  "rgba(125, 176, 229, 0.45)",
  "rgba(230, 188, 208, 0.5)",
  "rgba(216, 230, 245, 0.5)",
];

function seededRandom(seed: number) {
  const x = Math.sin(seed * 9301 + 49297) * 49297;
  return x - Math.floor(x);
}

export default function HeroBubbles() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const bubblesRef = useRef<Bubble[]>([]);
  const mouseRef = useRef({ x: -1000, y: -1000, active: false });
  const rafRef = useRef<number>(0);

  const initBubbles = useCallback((w: number, h: number) => {
    const count = 12;
    bubblesRef.current = Array.from({ length: count }, (_, i) => ({
      x: seededRandom(i * 13 + 3) * w,
      y: seededRandom(i * 17 + 5) * h,
      vx: (seededRandom(i * 19 + 7) - 0.5) * 0.5,
      vy: (seededRandom(i * 23 + 11) - 0.5) * 0.5,
      size: 20 + seededRandom(i * 7 + 1) * 70,
      baseX: seededRandom(i * 13 + 3) * w,
      baseY: seededRandom(i * 17 + 5) * h,
      color: COLORS[Math.floor(seededRandom(i * 31 + 13) * COLORS.length)],
      speed: 0.3 + seededRandom(i * 37 + 17) * 0.7,
    }));
  }, []);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const resize = () => {
      const rect = canvas.getBoundingClientRect();
      canvas.width = rect.width;
      canvas.height = rect.height;
      if (bubblesRef.current.length === 0) {
        initBubbles(rect.width, rect.height);
      }
    };

    resize();
    window.addEventListener("resize", resize);

    // Écouter la souris au niveau window pour éviter les problèmes de z-index
    const handleMouse = (e: MouseEvent) => {
      const rect = canvas.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;
      const inside = x >= 0 && x <= rect.width && y >= 0 && y <= rect.height;
      mouseRef.current = { x, y, active: inside };
    };

    window.addEventListener("mousemove", handleMouse);

    const animate = () => {
      const w = canvas.width;
      const h = canvas.height;
      ctx.clearRect(0, 0, w, h);

      const mouse = mouseRef.current;

      for (const b of bubblesRef.current) {
        // Attraction vers la souris
        if (mouse.active) {
          const dx = mouse.x - b.x;
          const dy = mouse.y - b.y;
          const dist = Math.sqrt(dx * dx + dy * dy);

          if (dist < 300 && dist > 1) {
            const force = (300 - dist) / 300;
            const attraction = force * force * 1.2 * b.speed;
            b.vx += (dx / dist) * attraction;
            b.vy += (dy / dist) * attraction;
          }
        }

        // Retour lent vers la position de base
        b.vx += (b.baseX - b.x) * 0.003;
        b.vy += (b.baseY - b.y) * 0.003;

        // Friction
        b.vx *= 0.96;
        b.vy *= 0.96;

        // Dérive autonome
        b.vx += Math.sin(Date.now() * 0.001 * b.speed + b.baseX) * 0.08;
        b.vy += Math.cos(Date.now() * 0.0008 * b.speed + b.baseY) * 0.06;

        b.x += b.vx;
        b.y += b.vy;

        // Limites
        if (b.x < -b.size) b.x = -b.size;
        if (b.x > w + b.size) b.x = w + b.size;
        if (b.y < -b.size) b.y = -b.size;
        if (b.y > h + b.size) b.y = h + b.size;

        // Dessiner
        ctx.beginPath();
        ctx.arc(b.x, b.y, b.size, 0, Math.PI * 2);
        ctx.fillStyle = b.color;
        ctx.fill();
      }

      rafRef.current = requestAnimationFrame(animate);
    };

    rafRef.current = requestAnimationFrame(animate);

    return () => {
      cancelAnimationFrame(rafRef.current);
      window.removeEventListener("resize", resize);
      window.removeEventListener("mousemove", handleMouse);
    };
  }, [initBubbles]);

  return (
    <div className="absolute inset-0 pointer-events-none" aria-hidden="true">
      <canvas ref={canvasRef} className="absolute inset-0 w-full h-full" />
    </div>
  );
}
