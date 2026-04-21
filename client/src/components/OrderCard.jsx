export default function OrderCard({ onClick }) {
  return (
    <div style={styles.card} onClick={onClick}>
      <h3>Pedido #123</h3>
      <p>Recife → São Paulo</p>
      <p>Status: Em trânsito</p>
    </div>
  );
}

const styles = {
  card: {
    background: "#1e293b",
    padding: "20px",
    borderRadius: "10px",
    cursor: "pointer",
    marginTop: "20px",
  },
};