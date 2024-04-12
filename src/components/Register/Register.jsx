
import { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { FaEye,FaEyeSlash } from 'react-icons/fa';
import { AuthContext } from "../../provider/AuthProvider";



const Register = () => {
  const [success,setSuccess] = useState('');
  const [reegisterError,setRegisterError] = useState('');
  const [showPassword,setShowPassword]= useState(false);
  const {createUser} =useContext(AuthContext);
    
    const handleRegister=e=>{
      e.preventDefault();
      const name=e.target.name.value;
      const email=e.target.email.value;
      const photo=e.target.photo.value;
      const password=e.target.password.value;
      console.log(name,email,photo,password);
      setRegisterError('');
      setSuccess('');
      if(password.length<6){
        setRegisterError('Password should be at least 6 characters');
        return;
      }
      // else if(!/^(?=.*[a-z])(?=.*[A-Z])/.test(password)){
      //   setRegisterError('Password should have a uppercase and a lowercase');
      //   return;
      // }
      else if(!/[A-Z]/.test(password)){
        setRegisterError('Password should have a uppercase');
        return;
      }
      else if(!/[a-z]/.test(password)){
        setRegisterError('Password should have a lowercase');
        return;
      }
      
      createUser(email,password)
      .then(result=>{
        console.log(result.user);
        setSuccess('User created successfully');
      })
      
      .catch(error=>{
        console.log(error);
        setRegisterError('auth/email-already-in-use');
      })

    }
    
    return (
        <div>
            <div className="hero my-10">
  <div className="hero-content flex-col">
    <div className="text-center lg:text-left">
      <h1 className="text-5xl font-bold">Register now!</h1>
      
    </div>
    <div className="card shrink-0 w-[350px] shadow-2xl bg-base-100">
      <form onSubmit={handleRegister} className="card-body">
        <div className="form-control">
          <label className="label">
            <span className="label-text">Name</span>
          </label>
          <input type="text" placeholder="name" name="name" className="input input-bordered" required />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Email</span>
          </label>
          <input type="email" placeholder="email" name="email" className="input input-bordered" required />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Photo URL</span>
          </label>
          <input type="text" placeholder="photoURL" name="photo" className="input input-bordered" required />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Password</span>
          </label>
          <input type={showPassword ? 'text' : 'password'} placeholder="password" name="password" className="input input-bordered" required />
          <p className="absolute bottom-[166px] right-12" onClick={()=>setShowPassword(!showPassword)}>
            {
                showPassword ? <FaEyeSlash></FaEyeSlash> : <FaEye></FaEye>
            }
          </p>
         
        </div>
        <div className="form-control mt-6">
          <button className="btn btn-primary font-bold text-white">Register</button>
        </div>
      </form>
      <p className="ml-8 mb-4">Already have an account? Please <Link className="underline" to="/login">Login</Link></p>
    </div>
    {
            reegisterError && <p className="font-bold text-red-700">{reegisterError}</p>
    }
    {
            success && <p className="font-bold text-green-700">{success}</p>
    }
    
  </div>
</div>
            
        </div>
    );
};

export default Register;

