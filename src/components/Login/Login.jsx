import { Link } from "react-router-dom";


const Login = () => {
    return (
        <div>
            <div className="hero my-10">
  <div className="hero-content flex-col">
    <div className="text-center lg:text-left">
      <h1 className="text-5xl font-bold">Login now!</h1>
      
    </div>
    <div className="card shrink-0 w-[300px] shadow-2xl bg-base-100">
      <form className="card-body">
        <div className="form-control">
          <label className="label">
            <span className="label-text">Email</span>
          </label>
          <input type="email" placeholder="email" className="input input-bordered" required />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Password</span>
          </label>
          <input type="password" placeholder="password" className="input input-bordered" required />
         
        </div>
        <div className="form-control mt-6">
          <button className="btn btn-primary font-bold text-white">Login</button>
        </div>
      </form>
      <p className="ml-8 mb-4">New to website? Please <Link className="underline" to="/register">Register</Link></p>
    </div>
    
  </div>
</div>
            
        </div>
    );
};

export default Login;