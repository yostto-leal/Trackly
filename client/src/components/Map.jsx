import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";

export default function Map({ position }) {
  return (
    <MapContainer center={position} zoom={13} style={{ height: "400px" }}>
      <TileLayer
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      <Marker position={position}>
        <Popup>Localização atual</Popup>
      </Marker>
    </MapContainer>
  );
}