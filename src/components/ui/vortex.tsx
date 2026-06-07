"use client";

import { cn } from "@/lib/utils";
import { motion } from "motion/react";
import React, { useEffect, useRef } from "react";
import { createNoise3D } from "simplex-noise";

interface VortexProps {
  children?: React.ReactNode;
  className?: string;
  containerClassName?: string;
  particleCount?: number;
  rangeY?: number;
  baseHue?: number;
  baseSpeed?: number;
  rangeSpeed?: number;
  baseRadius?: number;
  rangeRadius?: number;
  backgroundColor?: string;
}

export function Vortex({
  children,
  className,
  containerClassName,
  particleCount = 520,
  rangeY = 120,
  baseHue = 205,
  baseSpeed = 0,
  rangeSpeed = 1.35,
  baseRadius = 0.8,
  rangeRadius = 1.8,
  backgroundColor = "#020617",
}: VortexProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const animationFrameId = useRef<number>();

  useEffect(() => {
    const canvas = canvasRef.current;
    const container = containerRef.current;
    const ctx = canvas?.getContext("2d");
    if (!canvas || !container || !ctx) return;

    const particlePropCount = 9;
    const particlePropsLength = particleCount * particlePropCount;
    const baseTTL = 50;
    const rangeTTL = 150;
    const rangeHue = 95;
    const noiseSteps = 3;
    const xOff = 0.00125;
    const yOff = 0.00125;
    const zOff = 0.0005;
    const tau = 2 * Math.PI;
    const noise3D = createNoise3D();
    let tick = 0;
    let center: [number, number] = [0, 0];
    let particleProps = new Float32Array(particlePropsLength);

    const rand = (n: number) => n * Math.random();
    const randRange = (n: number) => n - rand(2 * n);
    const fadeInOut = (t: number, m: number) => {
      const hm = 0.5 * m;
      return Math.abs(((t + hm) % m) - hm) / hm;
    };
    const lerp = (n1: number, n2: number, speed: number) => (1 - speed) * n1 + speed * n2;

    const resize = () => {
      const rect = container.getBoundingClientRect();
      const dpr = Math.min(window.devicePixelRatio || 1, 2);
      canvas.width = Math.max(1, Math.floor(rect.width * dpr));
      canvas.height = Math.max(1, Math.floor(rect.height * dpr));
      canvas.style.width = `${rect.width}px`;
      canvas.style.height = `${rect.height}px`;
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
      center = [rect.width * 0.5, rect.height * 0.5];
    };

    const initParticle = (i: number) => {
      const width = canvas.width / Math.min(window.devicePixelRatio || 1, 2);
      particleProps.set(
        [
          rand(width),
          center[1] + randRange(rangeY),
          0,
          0,
          0,
          baseTTL + rand(rangeTTL),
          baseSpeed + rand(rangeSpeed),
          baseRadius + rand(rangeRadius),
          baseHue + rand(rangeHue),
        ],
        i,
      );
    };

    const initParticles = () => {
      tick = 0;
      particleProps = new Float32Array(particlePropsLength);
      for (let i = 0; i < particlePropsLength; i += particlePropCount) initParticle(i);
    };

    const drawParticle = (
      x: number,
      y: number,
      x2: number,
      y2: number,
      life: number,
      ttl: number,
      radius: number,
      hue: number,
    ) => {
      ctx.save();
      ctx.lineCap = "round";
      ctx.lineWidth = radius;
      ctx.strokeStyle = `hsla(${hue},100%,62%,${fadeInOut(life, ttl)})`;
      ctx.beginPath();
      ctx.moveTo(x, y);
      ctx.lineTo(x2, y2);
      ctx.stroke();
      ctx.closePath();
      ctx.restore();
    };

    const updateParticle = (i: number) => {
      const width = canvas.width / Math.min(window.devicePixelRatio || 1, 2);
      const height = canvas.height / Math.min(window.devicePixelRatio || 1, 2);
      const i2 = i + 1;
      const i3 = i + 2;
      const i4 = i + 3;
      const i5 = i + 4;
      const i6 = i + 5;
      const i7 = i + 6;
      const i8 = i + 7;
      const i9 = i + 8;

      const x = particleProps[i];
      const y = particleProps[i2];
      const n = noise3D(x * xOff, y * yOff, tick * zOff) * noiseSteps * tau;
      const vx = lerp(particleProps[i3], Math.cos(n), 0.5);
      const vy = lerp(particleProps[i4], Math.sin(n), 0.5);
      const life = particleProps[i5];
      const ttl = particleProps[i6];
      const speed = particleProps[i7];
      const radius = particleProps[i8];
      const hue = particleProps[i9];
      const x2 = x + vx * speed;
      const y2 = y + vy * speed;

      drawParticle(x, y, x2, y2, life, ttl, radius, hue);

      particleProps[i] = x2;
      particleProps[i2] = y2;
      particleProps[i3] = vx;
      particleProps[i4] = vy;
      particleProps[i5] = life + 1;

      if (x > width || x < 0 || y > height || y < 0 || life > ttl) initParticle(i);
    };

    const draw = () => {
      tick++;
      const width = canvas.width / Math.min(window.devicePixelRatio || 1, 2);
      const height = canvas.height / Math.min(window.devicePixelRatio || 1, 2);

      ctx.clearRect(0, 0, width, height);
      ctx.fillStyle = backgroundColor;
      ctx.fillRect(0, 0, width, height);

      for (let i = 0; i < particlePropsLength; i += particlePropCount) updateParticle(i);

      ctx.save();
      ctx.filter = "blur(8px) brightness(180%)";
      ctx.globalCompositeOperation = "lighter";
      ctx.drawImage(canvas, 0, 0, width, height);
      ctx.restore();

      ctx.save();
      ctx.globalCompositeOperation = "lighter";
      ctx.drawImage(canvas, 0, 0, width, height);
      ctx.restore();

      animationFrameId.current = window.requestAnimationFrame(draw);
    };

    resize();
    initParticles();
    draw();

    const observer = new ResizeObserver(() => {
      resize();
      initParticles();
    });
    observer.observe(container);

    return () => {
      observer.disconnect();
      if (animationFrameId.current) cancelAnimationFrame(animationFrameId.current);
    };
  }, [
    backgroundColor,
    baseHue,
    baseRadius,
    baseSpeed,
    particleCount,
    rangeRadius,
    rangeSpeed,
    rangeY,
  ]);

  return (
    <div ref={containerRef} className={cn("relative h-full w-full", containerClassName)}>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        className="absolute inset-0 z-0 h-full w-full bg-transparent"
        aria-hidden="true"
      >
        <canvas ref={canvasRef} className="h-full w-full" />
      </motion.div>
      <div className={cn("relative z-10", className)}>{children}</div>
    </div>
  );
}
