'use client';
import { Canvas } from '@react-three/fiber';
import { Suspense } from 'react';
import Model from './CubeScene'; 
import { OrbitControls } from '@react-three/drei';

export default function CubeCanvas() {
    return (
        <div className="h-screen w-full fixed top-0 left-0 z-10" id="model-canvas">
            <Canvas camera={{ position: [0, 0, 10], fov: 30 }}>
                <ambientLight intensity={1} />
                <Suspense fallback={null}>
                    <Model />
                </Suspense>
                <OrbitControls enableZoom={false} enablePan={false} enableRotate={false} />
            </Canvas>
        </div>
    );
}
