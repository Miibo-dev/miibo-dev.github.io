'use client';
import { Suspense, useEffect, useRef, useState } from 'react';
import { Canvas, useFrame, useLoader } from '@react-three/fiber';
import { OrbitControls, PerspectiveCamera, useProgress, Html } from '@react-three/drei';
import { STLLoader } from 'three/addons/loaders/STLLoader.js';
import * as THREE from 'three';

function RobotModel() {
  const meshRef = useRef<THREE.Mesh>(null);
  const [rotationY, setRotationY] = useState(0); // 45 degrees initial rotation

  // Load STL model
  const geometry = useLoader(STLLoader, '/models/robot/Kassow.stl');

  // Center the geometry with rotation point at bottom
  useEffect(() => {
    if (geometry) {
      geometry.computeBoundingBox();
      geometry.computeVertexNormals();

      // Center horizontally (X and Z), but keep bottom at origin (Y)
      const boundingBox = geometry.boundingBox!;
      const centerX = (boundingBox.max.x + boundingBox.min.x) / 2;
      const centerZ = (boundingBox.max.z + boundingBox.min.z) / 2;
      const minY = boundingBox.min.y;

      // Translate so bottom is at origin
      geometry.translate(-centerX, -minY, -centerZ);
    }
  }, [geometry]);

  // Update rotation based on OrbitControls
  useFrame(() => {
    if (meshRef.current) {
      // The Y rotation will be controlled by OrbitControls azimuth angle
      // This keeps the base rotation but allows spinning around Y-axis
    }
  });

  return (
    <mesh ref={meshRef} geometry={geometry} rotation={[-90 * Math.PI / 180, rotationY, 8 * Math.PI / 7]} scale={0.043} position={[0, 0, 0]}>
      <meshStandardMaterial
        color="#e0e0e0"
        metalness={0.6}
        roughness={0.3}
        emissive="#8b5cf6"
        emissiveIntensity={0.15}
      />
    </mesh>
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

export default function Robot3D() {
  const [showHint, setShowHint] = useState(true);

  // Hide hint after 5 seconds
  useEffect(() => {
    const timer = setTimeout(() => setShowHint(false), 5000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="w-full h-full relative">
      <Canvas
        className="robot-canvas cursor-grab active:cursor-grabbing"
        gl={{
          alpha: true,
          antialias: true,
          powerPreference: 'high-performance'
        }}
        shadows
      >
        <PerspectiveCamera makeDefault position={[0, 0, 8]} fov={45} />

        {/* Enhanced Lighting setup for maximum brightness */}
        <ambientLight intensity={2.0} />
        <directionalLight position={[10, 10, 5]} intensity={2.5} castShadow />
        <directionalLight position={[-10, 10, 5]} intensity={2.0} />
        <directionalLight
          position={[0, -10, 5]}
          intensity={1.5}
        />
        <pointLight
          position={[5, 5, 5]}
          intensity={2.5}
          color="#ffffff"
        />
        <pointLight
          position={[-5, 5, 5]}
          intensity={2.5}
          color="#ffffff"
        />
        <spotLight
          position={[0, 10, 10]}
          intensity={2.0}
          angle={0.6}
          penumbra={0.5}
          color="#ffffff"
        />

        {/* Robot Model */}
        <Suspense fallback={<LoadingFallback />}>
          <RobotModel />
        </Suspense>

        {/* Orbit Controls - Only horizontal rotation around Y-axis */}
        <OrbitControls
          enableDamping
          dampingFactor={0.05}
          enableZoom={false}
          enablePan={false}
          minPolarAngle={Math.PI / 2}
          maxPolarAngle={Math.PI / 2}
          enableRotate={true}
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
