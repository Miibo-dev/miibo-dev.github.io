'use client';
import { Suspense, useEffect, useRef, useState } from 'react';
import { Canvas, useFrame, useLoader } from '@react-three/fiber';
import { OrbitControls, PerspectiveCamera, useProgress, Html } from '@react-three/drei';
import { OBJLoader } from 'three/addons/loaders/OBJLoader.js';
import { MTLLoader } from 'three/addons/loaders/MTLLoader.js';
import * as THREE from 'three';

function GuitarModel() {
  const meshRef = useRef<THREE.Group>();

  // Load materials first, then object
  const materials = useLoader(MTLLoader, '/models/guitar/Gibson_ES335.mtl');
  const obj = useLoader(
    OBJLoader,
    '/models/guitar/Gibson_ES335.obj',
    (loader) => {
      materials.preload();
      loader.setMaterials(materials);
    }
  );

  // Apply custom materials with purple theme
  useEffect(() => {
    if (obj) {
      obj.traverse((child) => {
        if (child instanceof THREE.Mesh) {
          // Apply purple glow instead of green
          if (child.material) {
            child.material.emissive = new THREE.Color(0x8b5cf6); // purple-500
            child.material.emissiveIntensity = 0.3;
            child.material.color.multiplyScalar(1.1);

            // Fallback for black materials
            if (child.material.color.r < 0.1 && child.material.color.g < 0.1 && child.material.color.b < 0.1) {
              child.material.color.set(0x333333);
            }
          }
        }
      });
    }
  }, [obj]);

  return (
    <primitive
      ref={meshRef}
      object={obj}
      scale={0.045}
      position={[0, 0, 0]}
      rotation={[0, Math.PI / 4, -Math.PI / 6]}
    />
  );
}

function LoadingFallback() {
  const { progress } = useProgress();
  return (
    <Html center>
      <div className="text-white text-xl font-sans">
        {progress.toFixed(0)}% loaded
      </div>
    </Html>
  );
}

export default function Guitar3D() {
  const [showHint, setShowHint] = useState(true);

  // Hide hint after 5 seconds
  useEffect(() => {
    const timer = setTimeout(() => setShowHint(false), 5000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="w-full h-full relative">
      <Canvas
        className="guitar-canvas cursor-grab active:cursor-grabbing"
        gl={{
          alpha: true,
          antialias: true,
          powerPreference: 'high-performance'
        }}
        shadows
      >
        <PerspectiveCamera makeDefault position={[0, 0, 8]} fov={35} />

        {/* Lighting setup adapted to purple theme */}
        <ambientLight intensity={0.6} />
        <directionalLight position={[5, 5, 5]} intensity={0.8} castShadow />
        <directionalLight
          position={[-5, 3, -5]}
          intensity={0.5}
          color="#8b5cf6" // Purple instead of green
        />
        <pointLight
          position={[0, 5, -5]}
          intensity={0.8}
          color="#8b5cf6" // Purple rim light
        />

        {/* Guitar Model */}
        <Suspense fallback={<LoadingFallback />}>
          <GuitarModel />
        </Suspense>

        {/* Orbit Controls */}
        <OrbitControls
          enableDamping
          dampingFactor={0.05}
          enableZoom={false}
          enablePan={false}
          minPolarAngle={Math.PI / 4}
          maxPolarAngle={(3 * Math.PI) / 4}
        />
      </Canvas>

      {/* Rotate hint */}
      {showHint && (
        <div
          className="absolute bottom-4 left-1/2 -translate-x-1/2 text-white/60 text-sm pointer-events-none transition-opacity duration-300 font-sans"
        >
          Drag to rotate
        </div>
      )}
    </div>
  );
}
