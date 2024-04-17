import { FaUser,FaUserSlash,FaRegUserCircle } from 'react-icons/fa';

import { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../provider/AuthProvider";




const Header = () => {
  const [open,setOpen]=useState(false);  
  const {user,logOut}=useContext(AuthContext);
  const logOutUser=()=>{
    logOut();
    
  }
    const links=
    <>
      <li>
        <Link to="/">Home</Link>
      </li>
      <li>
        <Link to="/contact">Contact</Link>
      </li>
      
      <li>
           <Link to="/agents">Our Agents</Link>
      </li>
      
    </>
    return (
        <div className=''>
            <div className="navbar bg-base-100">
  <div className="navbar-start">
    <div className="dropdown z-50">
      <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
      </div>
      <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
        {links}
        
      </ul>
    </div>
    <a className="btn btn-ghost lg:text-3xl md:text-xl text-xl lg:ml-0 md:ml-5 ml-5">DreamDwellings</a>
  </div>
  <div className="navbar-center hidden lg:flex">
    <ul className="menu menu-horizontal px-1 md:mr-20">
      {links}
      
    </ul>
  </div>
  <div className="navbar-end pr-10 flex items-center">

      <div className='z-50'>
      <div onClick={()=>setOpen(!open)} className='container mx-auto lg:hidden'>
      <p className=''>
      {open?<FaUserSlash></FaUserSlash>:<FaUser></FaUser>}
      </p>
    </div> 
    
      
    
    <ul className={`${open ?'top-12 block':'-top-80'} flex lg:flex-row flex-col px-2 py-5 absolute lg:static ${user?'bg-blue-950':''} rounded-lg text-white -ms-20 duration-1000`}>
      {
      user ? 
           <div className="flex items-center lg:flex-row flex-col">
              
              <Link to="/updateProfile">
                  <button className="btn btn-ghost">Update Profile</button>
              </Link>
              <Link to="/userProfile">
                  <button className="btn btn-ghost">User Profile</button>
              </Link>
              
              
              <div className="tooltip tooltip-bottom" data-tip={user.displayName}>
  

              
                     
                      {
                        user.photoURL?
                        <img className="h-12 w-12 rounded-[50%]" src={user.photoURL} alt="" />
                        :
                        <FaRegUserCircle className='text-2xl'></FaRegUserCircle>
                      }
                      


                     
                     
                     
              </div>
              
              <button onClick={logOutUser} className="btn bg-black text-white font-bold ml-4">Log Out</button>
              </div>

          
             :
            <Link to="/login">
                    <button className="btn btn-primary font-bold ml-4 text-white">Login</button>
            </Link>
    }
    </ul>
        </div>
    
    
  </div>
  
</div>
            
        </div>
    );
};

export default Header;