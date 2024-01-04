import React from "react";
import { Canvas } from "@react-three/fiber";
import dynamic from "next/dynamic";

export default function Experience() {
  const Loading = dynamic(() => import("./loading"));
  const Scene = dynamic(() => import("./scene"));
  return (
    <>
      <Loading />
      <div>
        <Canvas position={[0, 0, 2]} className="sm:h-screen" fov={42}>
          <Scene />
        </Canvas>
      </div>
    </>
  );
}
