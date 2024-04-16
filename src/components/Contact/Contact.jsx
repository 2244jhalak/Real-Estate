
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import { Link } from 'react-router-dom';

const Contact = () => {
  return (
    <div className="w-full">
      <div className='text-center lg:my-10 md:my-20 my-16 space-y-3'>
         <h3 className='text-4xl font-bold'>Welcome to our location</h3>
         <p>You will find an overview of our office locations, designed to help you easily locate and reach us.</p>
      </div>
      <MapContainer center={[34.0522, -118.2437]} zoom={10} className="h-96 md:h-80 lg:h-96">
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
      <div className='mb-20 bg-gray-200 py-5 px-12 grid lg:grid-cols-2 md:grid-cols-2 grid-cols-1'>
        <div className='space-y-3'>
          <h3 className='text-2xl font-semibold'>Our Address</h3>
          <p className='font-semibold'>321 Sunset Avenue, Apt 3B</p>
          <p className='font-semibold'>Los Angeles, CA 90046</p>

        </div>
        <div>
          <div className="space-y-3">
            <h3 className='text-2xl font-semibold'>Contact Info</h3>
          <p className='font-semibold'>Phone: (555) 123-4567</p>
          <p className='font-semibold'>Email: info@dreamdwellings.com</p>
          <p className='font-semibold'>Website: <Link className='text-blue-800 hover:text-blue-400' to="/">www.dreamdwellings.com</Link></p>
            
          </div>

        </div>
      </div>
      
    </div>
  );
};

export default Contact;






