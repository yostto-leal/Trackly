import { useNavigate } from "react-router-dom";
import OrderCard from "../components/OrderCard";

export default function Dashboard() {
  const navigate = useNavigate();

  return (
    <div style={styles.container}>
      <h2>Dashboard</h2>

      <OrderCard onClick={() => navigate("/tracking")} />

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