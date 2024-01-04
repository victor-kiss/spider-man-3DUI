import React, { useEffect, useState } from "react";
import { useProgress } from "@react-three/drei";

export default function Loading() {
  let { progress } = useProgress();

  useEffect(() => {
    document.body.style.overflow = "hidden";
    if (progress == 100) {
      document.body.style.overflow = "visible";
    }
  }, [progress]);

  return (
    <div
      className={`h-screen w-full bg-neutral-900  ${
        progress == 100
          ? "opacity-0 absolute"
          : "block "
      }`}
    >
      <div className="h-screen w-full flex flex-col justify-center items-center p-6 ">
        <div>
          <h1 className="text-white font-bold block lg:text-6xl text-4xl my-2 text-center">
            SPIDER-MAN <br /> <b className="text-3d"> 3D </b>UI
          </h1>
          <div className="flex justify-center mt-10">
            {progress < 100 ? (
              <>
                <span className="loading loading-spinner text-red-800 mr-4"></span>
                <span className="text-gray-200 text-xl ">Loading Files...</span>
              </>
            ) : (
              ""
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
