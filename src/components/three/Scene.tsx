"use client";

import { Suspense, useRef } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { EffectComposer, Bloom } from "@react-three/postprocessing";
import { Float, OrbitControls } from "@react-three/drei";
import { Group } from "three";
import { FloatingParticles } from "./FloatingParticles";

function HeroGeometry() {
  const mesh = useRef<Group>(null);

  useFrame(({ clock, pointer }) => {
    if (!mesh.current) return;
    mesh.current.rotation.x = clock.getElapsedTime() * 0.18 + pointer.y * 0.25;
    mesh.current.rotation.y = clock.getElapsedTime() * 0.28 + pointer.x * 0.35;
  });

  return (
    <group ref={mesh}>
      <Float speed={1.8} rotationIntensity={1.2} floatIntensity={1.5}>
        <mesh>
          <icosahedronGeometry args={[1.15, 0]} />
          <meshStandardMaterial
            color="#6c63ff"
            emissive="#2a1fbf"
            emissiveIntensity={1.5}
            metalness={0.35}
            roughness={0.2}
            wireframe
          />
        </mesh>
      </Float>
      <mesh scale={1.8} rotation={[0.8, 0.2, 0]}>
        <torusGeometry args={[1.4, 0.03, 16, 100]} />
        <meshBasicMaterial color="#00d4ff" transparent opacity={0.55} toneMapped={false} />
      </mesh>
    </group>
  );
}

export function Scene({ interactive = false }: { interactive?: boolean }) {
  return (
    <Canvas camera={{ position: [0, 0, 4.5], fov: 50 }} dpr={[1, 1.5]}>
      <color attach="background" args={["#0a0a0a"]} />
      <ambientLight intensity={0.75} />
      <pointLight position={[3, 3, 3]} intensity={16} color="#6c63ff" />
      <pointLight position={[-3, -1, 2]} intensity={10} color="#00d4ff" />
      <Suspense fallback={null}>
        <FloatingParticles count={interactive ? 70 : 45} />
        <HeroGeometry />
      </Suspense>
      <EffectComposer>
        <Bloom luminanceThreshold={0.15} luminanceSmoothing={0.9} intensity={0.9} />
      </EffectComposer>
      {interactive ? (
        <OrbitControls enablePan={false} enableZoom={false} autoRotate autoRotateSpeed={0.8} />
      ) : null}
    </Canvas>
  );
}
