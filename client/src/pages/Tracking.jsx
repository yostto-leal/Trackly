import { useEffect, useState } from "react";
import Map from "../components/Map";

export default function Tracking() {
  const [position, setPosition] = useState([-8.0476, -34.8770]);

  useEffect(() => {
    const interval = setInterval(() => {
      setPosition((prev) => [
        prev[0] + 0.001,
        prev[1] + 0.001,
      ]);
    }, 2000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div style={styles.container}>
      <h2>Tracking</h2>
      <Map position={position} />
    </div>
  );
}

const styles = {
  container: {
    padding: "20px",
    background: "#0f172a",
    minHeight: "100vh",
    color: "#fff",
  },
};