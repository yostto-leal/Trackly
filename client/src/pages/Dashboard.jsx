import "../styles/Dashboard.css";

export default function Dashboard() {
  return (
    <div className="dashboard">
      <h1>Bem-vindo ao Truck System</h1>
      <div className="card">
        <h2>Pedidos Ativos</h2>
        <p>Você não possui pedidos ativos no momento.</p>
      </div>
      <div className="card">
        <h2>Histórico</h2>
        <p>Última entrega concluída em 15/04/2026.</p>
      </div>
    </div>
  );
}
