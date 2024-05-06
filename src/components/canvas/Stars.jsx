import { useState, useRef, Suspense } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { Points, PointMaterial, Preload } from "@react-three/drei";
import * as random from "maath/random/dist";

const Stars = (props) => {
  return <div>Stars</div>;
};

const starsCanvas = () => {
  return (
    <div className="w-full h-full absolute inset-0 z-[-1]">
      <canvas camera={{ position: [0, 0, 1] }}>
        <Suspense fallback={null}>
          <Stars />
        </Suspense>
        <Preload all />
      </canvas>
    </div>
  );
};

export default starsCanvas;
