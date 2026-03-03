import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { useLoading } from "../context/LoadingContext";
import { useEffect } from "react";

const LOADER_TIMEOUT_MS = 4000;

const Loader = () => {
  const { loadingDone, setLoadingDone, progress } = useLoading();

  useGSAP(() => {
    if (loadingDone) {
      gsap.to(".loader-screen", {
        y: "-100%",
        duration: 1,
        ease: "power2.inOut",
      });
    }
  }, [loadingDone]);

  useEffect(() => {
    const fallback = setTimeout(() => {
      setLoadingDone(true);
    }, LOADER_TIMEOUT_MS);
    return () => clearTimeout(fallback);
  }, [setLoadingDone]);

  return (
    <div className="loader-screen bg-black-100 w-screen h-dvh fixed top-0 left-0 z-[100]">
      <div className="flex-center w-full h-full">
        <img src="/images/loader.gif" alt="loader" />
      </div>
      <div className="text-white-50 font-bold text-7xl leading-none gradient-title absolute bottom-10 right-10">
        {progress}%
      </div>
    </div>
  );
};

export default Loader;
