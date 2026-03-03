import { Canvas } from "@react-three/fiber";
import { useProgress } from "@react-three/drei";
import { Boy } from "./models/Boy";
import { useLoading } from "../context/LoadingContext";
import { useEffect } from "react";

function ProgressReporter() {
  const { progress, total } = useProgress();
  const { setLoadingDone, setProgress } = useLoading();

  useEffect(() => {
    setProgress(Math.floor(progress));
  }, [progress, setProgress]);

  useEffect(() => {
    if (total > 0 && progress >= 100) {
      setLoadingDone(true);
    }
  }, [progress, total, setLoadingDone]);

  return null;
}

const HeroExperience = () => {
  return (
    <Canvas>
      <ambientLight />
      <directionalLight position={[-2, 0, 3]} intensity={3} color={"#FF28D5"} />
      <directionalLight position={[2, 0, 3]} intensity={3} color={"#1C34FF"} />
      <ProgressReporter />

      <group>
        <Boy scale={9} position={[0, -15, 0]} />
      </group>
    </Canvas>
  );
};

export default HeroExperience;
