
import { useRef } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { Float, PerspectiveCamera } from "@react-three/drei";
import { motion } from "framer-motion";
import * as THREE from "three";

const ORANGE = "#F0440A";
const DARK = "#242424";

function WireFrame({ position, size, rotation = [0, 0, 0] }) {
  const edges = new THREE.EdgesGeometry(
    new THREE.BoxGeometry(...size)
  );

  return (
    <lineSegments
      geometry={edges}
      position={position}
      rotation={rotation}
    >
      <lineBasicMaterial
        color={DARK}
        transparent
        opacity={0.65}
      />
    </lineSegments>
  );
}

function Architecture() {
  const group = useRef();
  const mouse = useRef({ x: 0, y: 0 });

  useFrame((state, delta) => {
    if (!group.current) return;

    mouse.current.x = THREE.MathUtils.lerp(
      mouse.current.x,
      state.pointer.x,
      Math.min(delta * 2, 1)
    );

    mouse.current.y = THREE.MathUtils.lerp(
      mouse.current.y,
      state.pointer.y,
      Math.min(delta * 2, 1)
    );

    group.current.rotation.y = mouse.current.x * 0.12;
    group.current.rotation.x = -mouse.current.y * 0.06;
  });

  return (
    <group ref={group}>
      {/* Orange sun */}
      <mesh position={[1.05, 0.95, -1.6]}>
        <circleGeometry args={[1.32, 96]} />
        <meshBasicMaterial color={ORANGE} />
      </mesh>

      {/* Soft orange halo */}
      <mesh position={[1.05, 0.95, -1.65]}>
        <circleGeometry args={[1.42, 96]} />
        <meshBasicMaterial
          color={ORANGE}
          transparent
          opacity={0.08}
          depthWrite={false}
        />
      </mesh>

      {/* Architectural building */}
      <group position={[-0.65, -0.2, 0]}>
        {Array.from({ length: 13 }).map((_, i) => {
          const x = -1.35 + i * 0.105;
          const height = 2.35 + Math.sin(i * 0.45) * 0.28;

          return (
            <group key={i} position={[x, 0, i * 0.025]}>
              {/* Solid vertical structure */}
              <mesh
                position={[0, height / 2 - 0.3, 0]}
                castShadow
              >
                <boxGeometry args={[0.065, height, 0.12]} />
                <meshStandardMaterial
                  color={i % 3 === 0 ? "#77766F" : "#292929"}
                  roughness={0.85}
                  metalness={0.05}
                />
              </mesh>

              {/* Thin architectural highlight */}
              <mesh
                position={[0.034, height / 2 - 0.3, 0.066]}
              >
                <boxGeometry args={[0.008, height, 0.006]} />
                <meshBasicMaterial color="#D7D5CC" />
              </mesh>
            </group>
          );
        })}

        {/* Building top edges */}
        <WireFrame
          position={[-0.7, 1.1, -0.08]}
          size={[1.4, 2.8, 0.18]}
        />
      </group>

      {/* Floating architectural frames */}
      <Float
        speed={1}
        rotationIntensity={0.08}
        floatIntensity={0.12}
      >
        <group position={[0.25, 0.15, 0.25]}>
          <WireFrame
            position={[-0.05, 0.35, 0]}
            size={[1.65, 2.9, 0.05]}
            rotation={[0, 0, -0.05]}
          />

          <WireFrame
            position={[0.15, 0.2, 0.12]}
            size={[1.7, 3.15, 0.05]}
            rotation={[0, 0, 0.02]}
          />

          <WireFrame
            position={[0.38, 0.05, 0.24]}
            size={[1.65, 3.3, 0.05]}
            rotation={[0, 0, 0.04]}
          />
        </group>
      </Float>

      {/* Base platform */}
      <mesh position={[-0.15, -1.85, 0]}>
        <boxGeometry args={[5.1, 0.12, 1.1]} />
        <meshStandardMaterial
          color="#D9D7CE"
          roughness={1}
        />
      </mesh>

      <mesh position={[-0.15, -1.77, 0]}>
        <boxGeometry args={[5.1, 0.025, 1.1]} />
        <meshBasicMaterial color="#333333" />
      </mesh>

      {/* Ground */}
      <mesh
        position={[0, -1.94, -0.2]}
        rotation={[-Math.PI / 2, 0, 0]}
      >
        <planeGeometry args={[200, 200]} />
        <meshStandardMaterial
          color="#F5F4EC"
          roughness={1}
        />
      </mesh>
    </group>
  );
}

function Scene() {
  return (
    <>
      <PerspectiveCamera
        makeDefault
        position={[0, 0.15, 8.2]}
        fov={36}
      />

      <ambientLight intensity={1.5} />

      <directionalLight
        position={[-3, 5, 6]}
        intensity={2}
        color="#FFFFFF"
      />

      <directionalLight
        position={[4, 2, 2]}
        intensity={0.7}
        color="#F0440A"
      />

      <Architecture />
    </>
  );
}

export default function HeroArtwork() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 1, ease: "easeOut" }}
      className="relative mx-auto w-full max-w-[620px]"
    >
      {/* 3D Canvas */}
      <div className="h-[390px] w-full sm:h-[480px] lg:h-[540px]">
        <Canvas
          dpr={[1, 1.5]}
          gl={{ antialias: true, alpha: true }}
          onCreated={({ gl }) => {
            gl.setClearColor("#F5F4EC", 0);
          }}
        >
          <Scene />
        </Canvas>
      </div>

      {/* Editorial caption */}
      <div className="absolute bottom-3 right-1 flex items-center gap-3 text-[9px] uppercase tracking-[0.2em] text-black/45">
        <span className="h-px w-8 bg-[#F0440A]" />
        Ideas into structures / 001
      </div>

      {/* Corner marker */}
      <span className="absolute left-2 top-8 text-[10px] tracking-widest text-black/35">
        FIG. 001
      </span>

      <span className="absolute right-2 top-8 text-[10px] tracking-widest text-[#F0440A]">
        SYNARCH®
      </span>
    </motion.div>
  );
}
