import Agent from "../../../src/assets/images/agent.png"
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from "react";
import { Link } from "react-router-dom";

const Report = () => {
    useEffect(() => {
        AOS.init(); // Initialize AOS
    }, []);
    useEffect(() => {
        AOS.init({
          duration: 1000,
          easing: 'ease-in-out',
        });
    }, []);
      
    return (
        <div className=" bg-blue-950 rounded-lg space-y-2 flex lg:flex-row md:flex-col flex-col justify-between px-8 lg:mx-20 my-16">
            <div className="lg:py-16">
                <h3 className="text-xl text-orange-500">Are you selling?</h3>
              
                <div className="text-white text-3xl">
                  <p>We deliver accurate</p>
                  <p>property valuation</p>
                  <p>reports</p>
                </div>

            </div>
            <div>
                <div className="flex lg:flex-row md:flex-col flex-col items-center">
                    <Link to="/reportChart">
                        <button className="bg-orange-500 btn text-white border-0">Request a valuation</button>
                    </Link>
                    <div data-aos="fade-left" data-aos-duration="4000" data-aos-delay="5000">
                            <img className="h-64" src={Agent} alt="" />
                    </div>
                       
  
                </div>
            

            </div>          
        </div>
    );
};

export default Report;