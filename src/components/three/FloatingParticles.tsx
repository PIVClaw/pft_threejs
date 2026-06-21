"use client";

import { useMemo, useRef } from "react";
import { useFrame } from "@react-three/fiber";
import { Color, Group } from "three";

export function FloatingParticles({ count = 90 }: { count?: number }) {
  const group = useRef<Group>(null);

  const particles = useMemo(
    () =>
      Array.from({ length: count }, (_, index) => ({
        position: [
          (Math.random() - 0.5) * 10,
          (Math.random() - 0.5) * 6,
          (Math.random() - 0.5) * 8,
        ] as [number, number, number],
        scale: Math.random() * 0.12 + 0.04,
        speed: Math.random() * 0.5 + 0.2,
        color: index % 2 === 0 ? new Color("#6c63ff") : new Color("#00d4ff"),
      })),
    [count],
  );

  useFrame(({ clock }) => {
    const elapsed = clock.getElapsedTime();

    if (group.current) {
      group.current.rotation.y = elapsed * 0.08;
      group.current.rotation.x = Math.sin(elapsed * 0.2) * 0.08;
    }
  });

  return (
    <group ref={group}>
      {particles.map((particle, index) => (
        <mesh
          key={index}
          position={particle.position}
          scale={particle.scale}
          rotation={[index, index * 0.3, 0]}
        >
          <sphereGeometry args={[1, 12, 12]} />
          <meshBasicMaterial
            color={particle.color}
            transparent
            opacity={0.75}
            toneMapped={false}
          />
        </mesh>
      ))}
    </group>
  );
}
