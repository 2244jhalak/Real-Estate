import { useLoaderData,useParams } from 'react-router-dom';
import { FaMapMarkerAlt,FaRulerCombined } from 'react-icons/fa';

 
import 'animate.css/animate.css' 
const PropertyDetails = () => {
    const properties=useLoaderData();
    const {id}=useParams();
    const idInt=parseInt(id);
    const property=properties.find(property=>property.id===idInt);

    console.log(property);
  
    return (
        <div className='px-20 my-16'>
            <div className='animate__animated animate__backInDown animate__delay-0s'>
            <div className="card lg:card-side bg-base-100 shadow-xl">
  <figure><img className='h-[400px]' src={property.image} alt="Album"/></figure>
  <div className="p-5 space-y-3">
    <h2 className="text-3xl font-bold">{property.estate_title}</h2>
    <p>{property.description}</p>
    <p className='font-bold'>#{property.segment_name}</p>
    <p className='text-xl font-semibold'>{property.price}</p>
    <div className='flex items-center'>
        
        <FaRulerCombined></FaRulerCombined>
        <p className='ml-2'>{property.area}</p>
    </div> 
    <div className='flex items-center'>
        <FaMapMarkerAlt></FaMapMarkerAlt>
        <p className='ml-2'>{property.location}</p>
        

    </div>
    <div className='flex items-center'>
        <p className='bg-green-600 text-white rounded-xl mr-3 px-3 py-1'>{property.facilities[0]}</p>
        <p className='bg-green-600 text-white rounded-xl mr-3 px-3 py-1'>{property.facilities[1]}</p>
        <p className='bg-green-600 text-white rounded-xl mr-3 px-3 py-1'>{property.facilities[2]}</p>
    </div>
    
  </div>
</div>
            </div>
        </div>
    );
};

export default PropertyDetails;