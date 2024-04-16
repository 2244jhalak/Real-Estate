import PropTypes from 'prop-types';  

const Agent = ({agent}) => {
    const {name,image,job,phone_no,office_no,fax_no} = agent;
    return (
        <div>
            <div className="card w-full bg-base-100 shadow-xl">
  <figure className="px-10 pt-10">
    <img src={`${image}`} alt="Shoes" className="rounded-xl" />
  </figure>
  <div className="card-body items-center text-center">
    <h2 className="card-title">{name}</h2>
    <p className='font-semibold'>{job}</p>
    <p>Mobile : {phone_no}</p>
    <p>Office : {office_no}</p>
    <p>Fax : {fax_no}</p>
    
  </div>
</div>
            
        </div>
    );
};
Agent.propTypes = {
    
    agent: PropTypes.object,
    
}


export default Agent;