
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';

const Contact = () => {
  return (
    <div className="w-full h-96 lg:h-screen">
      <MapContainer center={[34.0522, -118.2437]} zoom={10} className="h-full">
        <TileLayer
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        />
        <Marker position={[34.0522, -118.2437]}>
          <Popup>
            Los Angeles
          </Popup>
        </Marker>
      </MapContainer>
    </div>
  );
};

export default Contact;



