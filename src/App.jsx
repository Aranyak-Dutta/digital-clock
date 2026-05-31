import { useState } from "react";
import DigitalClock from "./DigitalClock";

export default function App() {
  const [showClock, setShowClock] = useState(false);

  const rickroll = () => {
    window.open(
      "https://www.youtube.com/watch?v=dQw4w9WgXcQ",
      "_blank"
    );
  };

  if (showClock) {
    return <DigitalClock />;
  }

  return (
    <div
      style={{
        height: "100vh",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        background: "#000",
        color: "#fff",
        gap: "20px",
      }}
    >
      <h1>Loading Digital Clock...</h1>
      <p>Synchronizing with atomic time server...</p>

      <button
        onClick={rickroll}
        style={{
          padding: "12px 24px",
          fontSize: "18px",
          cursor: "pointer",
        }}
      >
        Continue
      </button>

      <button
        onClick={() => setShowClock(true)}
        style={{
          padding: "12px 24px",
          fontSize: "18px",
          cursor: "pointer",
        }}
      >
        I'm stupid
      </button>
    </div>
  );
}
