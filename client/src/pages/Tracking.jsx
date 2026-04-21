import "../styles/Tracking.css";

export default function Tracking() {
  return (
    <div className="tracking">
      <h2>Rastreamento de Entrega</h2>
      <div className="map">
        {/* Aqui você pode integrar um mapa real (Leaflet, Google Maps, etc.) */}
      </div>
      <div className="details">
        <p><strong>Pedido:</strong> #H62J46983210A</p>
        <p><strong>Status:</strong> <span className="status">Em trânsito</span></p>
        <p><strong>Origem:</strong> Brooklyn, NY</p>
        <p><strong>Destino:</strong> Delawanna, NY</p>
        <p><strong>Previsão de chegada:</strong> 3h 29m</p>
      </div>
    </div>
  );
}
