import { useEffect } from "react";
import { useState } from "react";
import DisplayProperty from "../DisplayProperty/DisplayProperty";


const Properties = () => {
    const [properties,setProperties]=useState([]);
    useEffect(()=>{
        fetch('Residential.json')
        .then(res=>res.json())
        .then(data=>setProperties(data))
    },[])
    return (
        <div>
            <h2 className="text-4xl font-bold text-center">Properties For Rent</h2>
            <div className="grid grid-cols-3 my-10 gap-6">
                {
                   properties.map(property=><DisplayProperty key={property.id} property={property}></DisplayProperty>)
                }
                
            </div>
            
        </div>
    );
};

export default Properties;