import { useEffect, useState } from "react";
import Agent from "../Agent/Agent";


const Agents = () => {
    const [agents,setAgents] = useState([]);
    useEffect(()=>{
        fetch('Agents.json')
        .then(res=>res.json())
        .then(data=>setAgents(data))
    },[])
    return (
        <div className="my-10 space-y-2">
            <h3 className="text-3xl font-bold text-center">Meet Our Agents</h3>
            <p className="text-center">Meet our team of professional agents, who will help you find your dream house</p>
            <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-5">
                {
                    agents.map(agent=><Agent key={agent.id} agent={agent}></Agent>)
                }
            </div>
            
        </div>
    );
};

export default Agents;