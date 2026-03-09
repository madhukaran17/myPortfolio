import { StrictMode, useState, useEffect } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.tsx";
import "./index.css";
import gsap from "gsap";

// @ts-ignore
gsap.config({
  trialWarn: false
});

const ErrorOverlay = () => {
  const [errorMsg, setErrorMsg] = useState("");
  useEffect(() => {
    window.onerror = (message) => {
      setErrorMsg((prev) => prev + "\n" + message);
    };
    window.onunhandledrejection = (event) => {
      const reason = event.reason instanceof Error ? event.reason.message : JSON.stringify(event.reason);
      setErrorMsg((prev) => prev + "\nPromise Rejection: " + reason);
    };
  }, []);

  if (!errorMsg) return null;
  return (
    <div style={{ position: "fixed", zIndex: 99999, background: "rgba(0,0,0,0.9)", color: "red", inset: 0, padding: 20, whiteSpace: "pre-wrap", overflow: "auto" }}>
      <h2>Runtime Error:</h2>
      {errorMsg}
    </div>
  );
};

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <ErrorOverlay />
    <App />
  </StrictMode>
);
