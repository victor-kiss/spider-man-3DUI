"use client"

import React from "react";
import { Text } from "@react-three/drei";
export default function TextModel(props) {
  return (
    <mesh>
      <Text
        {...props}
        font={"/fonts/Poppins-Black.ttf"}
        lineHeight={1.6}
        textAlign="left"
        fontSize={0.8}
      >
        SPIDER-MAN
        <meshBasicMaterial color="#cecece" toneMapped={false} />
      </Text>
    </mesh>
  );
}
