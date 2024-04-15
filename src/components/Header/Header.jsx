

import { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../provider/AuthProvider";




const Header = () => {
  const {user,logOut}=useContext(AuthContext);
  const logOutUser=()=>{
    logOut();
    localStorage.removeItem("updatedEmail")
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
        <div>
            <div className="navbar bg-base-100">
  <div className="navbar-start">
    <div className="dropdown">
      <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
      </div>
      <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
        {links}
        
      </ul>
    </div>
    <a className="btn btn-ghost text-xl">DreamDwellings</a>
  </div>
  <div className="navbar-center hidden lg:flex">
    <ul className="menu menu-horizontal px-1">
      {links}
      
    </ul>
  </div>
  <div className="navbar-end flex items-center">
    {
      user ? 
           <div className="flex items-center">
              <Link to="/updateProfile">
                  <button className="btn btn-ghost">Update Profile</button>
              </Link>
              <Link to="/userProfile">
                  <button className="btn btn-ghost">User Profile</button>
              </Link>
              
              
              <div className={` ${user.photoURL ? 'data-tip tooltip tooltip-bottom' : ''}`} data-tip={user.photoURL ? (user.displayName ? user.displayName : user.email) : ''}>
  

              
                     {
                      user.photoURL?
                      <img className="h-12 w-12 rounded-[50%]" src={user.photoURL} alt="" />
                      :
                      <p>{user.displayName?user.displayName:user.email}</p>


                     }
                     
                     
              </div>
              
              <button onClick={logOutUser} className="btn bg-black text-white font-bold ml-4">Log Out</button>

           </div>
             :
            <Link to="/login">
                    <button className="btn btn-primary font-bold ml-4 text-white">Login</button>
            </Link>
    }
    
    
  </div>
  
</div>
            
        </div>
    );
};

export default Header;