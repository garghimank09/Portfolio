import { createContext, useContext, useState } from "react";

const LoadingContext = createContext(null);

export const LoadingProvider = ({ children }) => {
  const [loadingDone, setLoadingDone] = useState(false);
  const [progress, setProgress] = useState(0);
  return (
    <LoadingContext.Provider value={{ loadingDone, setLoadingDone, progress, setProgress }}>
      {children}
    </LoadingContext.Provider>
  );
};

export const useLoading = () => {
  const ctx = useContext(LoadingContext);
  if (!ctx) throw new Error("useLoading must be used within LoadingProvider");
  return ctx;
};
