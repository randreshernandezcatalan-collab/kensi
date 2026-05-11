"use client";

import { useEffect, useRef } from "react";
import { cn } from "@/lib/utils";

type SparklesProps = {
  className?: string;
  color?: string;
  baseDensity?: number;
  minSize?: number;
  maxSize?: number;
};

export function Sparkles({
  className,
  color = "#6FFF00",
  baseDensity = 160,
  minSize = 0.6,
  maxSize = 1.6,
}: SparklesProps) {
  const ref = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = ref.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const DPR = Math.min(window.devicePixelRatio || 1, 2);
    let w = 0;
    let h = 0;
    let raf = 0;
    let isVisible = true;
    let particles: {
      x: number;
      y: number;
      r: number;
      vx: number;
      vy: number;
      a: number;
      tDir: number;
      tSpd: number;
    }[] = [];

    function densityCount() {
      const base = (w * h) / (1440 * 900);
      return Math.round(baseDensity * Math.max(0.4, Math.min(2.2, base)));
    }

    function spawn() {
      return {
        x: Math.random() * w,
        y: Math.random() * h,
        r: minSize + Math.random() * (maxSize - minSize),
        vx: (Math.random() - 0.5) * 0.07,
        vy: (Math.random() - 0.5) * 0.07,
        a: Math.random(),
        tDir: Math.random() < 0.5 ? -1 : 1,
        tSpd: 0.004 + Math.random() * 0.012,
      };
    }

    function resize() {
      if (!canvas || !ctx) return;
      const rect = canvas.getBoundingClientRect();
      w = rect.width;
      h = rect.height;
      canvas.width = Math.floor(w * DPR);
      canvas.height = Math.floor(h * DPR);
      ctx.setTransform(DPR, 0, 0, DPR, 0, 0);
      const target = densityCount();
      if (particles.length < target) {
        while (particles.length < target) particles.push(spawn());
      } else if (particles.length > target) {
        particles.length = target;
      }
    }

    function tick() {
      if (!ctx) return;
      ctx.clearRect(0, 0, w, h);
      for (const p of particles) {
        p.x += p.vx;
        p.y += p.vy;
        if (p.x < -4) p.x = w + 4;
        else if (p.x > w + 4) p.x = -4;
        if (p.y < -4) p.y = h + 4;
        else if (p.y > h + 4) p.y = -4;
        p.a += p.tDir * p.tSpd;
        if (p.a <= 0.08) {
          p.a = 0.08;
          p.tDir = 1;
        } else if (p.a >= 1) {
          p.a = 1;
          p.tDir = -1;
        }
        ctx.globalAlpha = p.a;
        ctx.fillStyle = color;
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
        ctx.fill();
      }
      ctx.globalAlpha = 1;
      
      if (isVisible) {
        raf = requestAnimationFrame(tick);
      }
    }

    function initialResize(tries: number) {
      resize();
      if ((w < 50 || h < 50) && tries > 0) {
        return requestAnimationFrame(() => initialResize(tries - 1));
      }
      canvas?.classList.add("ready");
      raf = requestAnimationFrame(tick);
    }
    initialResize(20);

    let ro: ResizeObserver | undefined;
    if (typeof ResizeObserver !== "undefined") {
      ro = new ResizeObserver(() => resize());
      ro.observe(canvas);
    }
    let rTimer: ReturnType<typeof setTimeout>;
    const onResize = () => {
      clearTimeout(rTimer);
      rTimer = setTimeout(resize, 120);
    };
    window.addEventListener("resize", onResize);

    const observer = new IntersectionObserver((entries) => {
      isVisible = entries[0].isIntersecting;
      if (isVisible) {
        if (!raf) raf = requestAnimationFrame(tick);
      } else {
        if (raf) {
          cancelAnimationFrame(raf);
          raf = 0;
        }
      }
    });
    observer.observe(canvas);

    return () => {
      observer.disconnect();
      cancelAnimationFrame(raf);
      window.removeEventListener("resize", onResize);
      ro?.disconnect();
    };
  }, [color, baseDensity, minSize, maxSize]);

  return <canvas ref={ref} className={cn("sparkles", className)} aria-hidden="true" />;
}
