import PropTypes from 'prop-types';
import { FaMapMarkerAlt,FaRulerCombined } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const DisplayProperty = ({property}) => {
    const {image,estate_title,location,status,area,price,id} =property;
    return (
        <div>
            <div className="card w-full h-[500px] bg-base-100 shadow-xl lg:mb-0 md:mb-0 mb-3">
  <figure>
    <img className='h-60 w-full relative' src={image} alt="Shoes" />
    <p className='absolute left-0 rounded-tl-lg top-0 bg-green-600 px-3 text-white font-semibold py-1'>{status}</p>
  </figure>
  <div className="px-5 space-y-4 pt-3">
    <h2 className="card-title">{estate_title}</h2>
    <p className='font-semibold'>{price}</p>
   
    
    <div className='flex items-center'>
        
        <FaRulerCombined></FaRulerCombined>
        <p className='ml-2'>{area}</p>
    </div> 
    <div className='flex items-center'>
        <FaMapMarkerAlt></FaMapMarkerAlt>
        <p className='ml-2'>{location}</p>
        

    </div>
         
  </div>
  <div className='text-right mx-4 my-3'>
  <Link to={`/details/${id}`}><button className='btn text-white btn-success'>View Property</button></Link>
    
  </div>
</div>
            
        </div>
    );
};
DisplayProperty.propTypes = {
    
    property: PropTypes.object,
    
}

export default DisplayProperty;