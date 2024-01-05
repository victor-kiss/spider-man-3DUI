import React, { useRef } from "react";

import {
  Preload,
  Environment,
  AdaptiveDpr,
  MeshReflectorMaterial,
  Html,
} from "@react-three/drei";
import Link from "next/link";
import dynamic from "next/dynamic";
import { useFrame } from "@react-three/fiber";

export default function Scene() {
  const Text = dynamic(() => import("../models/text"));
  const SpiderMan = dynamic(() => import("../models/spiderman"));

  let textRef = useRef();
  let spiderManRef = useRef();
  let buttonRef = useRef();

  useFrame((state) => {
    let windowWidth = window.innerWidth;

    if (windowWidth < 576) {
      state.camera.position.set(0, 2, 6.5);
      state.camera.updateProjectionMatrix();
      textRef.current.position.x = 2;
      spiderManRef.current.position.x = 0;
      spiderManRef.current.position.y = 4.6;
      buttonRef.current.position.x = 0;
    }

    if (windowWidth > 576 && windowWidth <= 820) {
      spiderManRef.current.position.x = -1;
      buttonRef.current.position.x = -0.8;
      buttonRef.current.position.z = -1;
      state.camera.position.set(0, 1, 11);
      state.camera.updateProjectionMatrix();
    }
  });
  return (
    <>
      <ambientLight intensity={1} color="#fff" />
      <Environment preset="city" />
      <group ref={spiderManRef}>
        <SpiderMan position={[4.6, -4.5, -3.2]} />
      </group>
      <group ref={textRef}>
        <Text position-x={-2} />
        <mesh position-x={-3} rotation-x={-Math.PI / 2} position-y={-0.36}>
          <planeGeometry args={[7, 7.7]} />
          <MeshReflectorMaterial
            transparent
            color="#171720"
            blur={[0, 0]}
            mixBlur={1}
            mixStrength={10}
            resolution={2056}
            mirror={1}
            opacity={0.3}
            depthScale={1}
            minDepthThreshold={0.4}
            maxDepthThreshold={1}
          />
        </mesh>
      </group>
      <group ref={buttonRef}>
        <Html position={[-1, -2, 0]}>
          <Link href="#discovery" className="discovery-button">
            <span className="">Discovery</span>
          </Link>
        </Html>
      </group>
      <Preload all />
      <AdaptiveDpr pixelated />
    </>
  );
}
