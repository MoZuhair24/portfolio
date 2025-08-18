"use client";
import { useCallback } from "react";
import Particles from "react-tsparticles";
import type { Engine } from "tsparticles-engine";
import { loadFull } from "tsparticles";

export default function ParticlesFancy() {
  const initParticles = useCallback(async (engine: Engine) => {
    await loadFull(engine);
  }, []);

  return (
    <Particles
      id="tsparticles"
      init={initParticles}
      options={{
        background: { color: "transparent" },
        fullScreen: { enable: true, zIndex: -1 },
        particles: {
          number: { value: 120 },
          size: { value: { min: 1, max: 3 } },
          opacity: { value: 0.8 },
          move: { enable: true, speed: 1.2 },
          links: {
            enable: true,
            distance: 120,
            color: "#00ffff",
            opacity: 0.4,
            width: 1,
          },
          color: { value: "#00ffff" },
        },
      }}
    />
  );
}
