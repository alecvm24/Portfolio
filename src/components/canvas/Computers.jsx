import { extend } from "@react-three/fiber";
import React, { Suspense, useEffect, useState } from "react";
import { Canvas } from "@react-three/fiber";
// extend({ OrbitControls, Preload, useGLTF, TransformControls });
import {
  OrbitControls,
  TransformControls,
  Preload,
  useGLTF,
} from "@react-three/drei";

import CanvasLoader from "../CanvasLoader";
import { complex } from "framer-motion";

const Computers = () => {
  const computer = useGLTF("./desktop_pc/scene.gltf");

  return (
    <mesh>
      <hemisphereLight intensity={0.15} groundColor="black" />
      <pointLight intensity={1} />
      <primitive object={computer.scene} />
    </mesh>
  );
};

const ComputersCanvas = () => {
  return (
    <>
      <Canvas
        frameloop="demand"
        shadows
        camera={{ position: [20, 3, 5], fov: 25 }}
        gl={{ preserveDrawingBuffer: true }}
      >
        <Suspense fallback={<CanvasLoader />}>
          <OrbitControls
            enableZoom={false}
            maxPolarAngle={Math.PI / 2}
            minPolarAngle={Math.PI / 2}
          />
          <Computers />
        </Suspense>

        <Preload all />
      </Canvas>
    </>
  );
};

export default ComputersCanvas;
