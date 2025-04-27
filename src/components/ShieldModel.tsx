
import { useRef } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { OrbitControls, Environment } from '@react-three/drei';
import * as THREE from 'three';

const Shield = ({ color = '#10B981', speed = 0.5, ...props }) => {
  const groupRef = useRef<THREE.Group>(null);
  const meshRef = useRef<THREE.Mesh>(null);
  
  useFrame((state) => {
    if (groupRef.current) {
      groupRef.current.rotation.y += speed * 0.01;
    }
    
    if (meshRef.current) {
      meshRef.current.position.y = Math.sin(state.clock.getElapsedTime()) * 0.1;
    }
  });
  
  return (
    <group ref={groupRef} {...props}>
      {/* Shield base */}
      <mesh ref={meshRef}>
        <cylinderGeometry args={[0.8, 1, 0.2, 32]} />
        <meshStandardMaterial color={color} metalness={0.6} roughness={0.2} />
      </mesh>
      
      {/* Shield body */}
      <mesh position={[0, 0.8, 0]}>
        <coneGeometry args={[0.8, 1.6, 32]} />
        <meshStandardMaterial color={color} metalness={0.7} roughness={0.3} />
      </mesh>
      
      {/* Shield emblem */}
      <mesh position={[0, 0.8, 0.4]}>
        <sphereGeometry args={[0.3, 16, 16]} />
        <meshStandardMaterial color="#ffffff" metalness={0.9} roughness={0.1} />
      </mesh>
    </group>
  );
};

const ShieldCanvas = ({ color = '#10B981', autoRotate = true }) => {
  return (
    <div className="w-full h-full">
      <Canvas camera={{ position: [0, 0, 5], fov: 45 }}>
        <ambientLight intensity={0.5} />
        <pointLight position={[10, 10, 10]} intensity={1} />
        <pointLight position={[-10, -10, -10]} intensity={0.5} />
        <Shield color={color} speed={autoRotate ? 0.5 : 0} position={[0, 0, 0]} />
        <Environment preset="city" />
        <OrbitControls enableZoom={false} enablePan={false} autoRotate={autoRotate} autoRotateSpeed={1} />
      </Canvas>
    </div>
  );
};

export default ShieldCanvas;
