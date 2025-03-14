import { useContext, useState } from "react";
import { Authcontext } from "../authprovider/Authprovider";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { FcGoogle } from "react-icons/fc";
import Swal from "sweetalert2";

const Login = () => {
  const [togglePass, setTogglePass] = useState(false);
    const { setUser, signInUser, googleSignIn } = useContext(Authcontext);
    const navigate = useNavigate();
    const location = useLocation();
    const handleLogin = e =>{
        e.preventDefault();
        const email = e.target.email.value;
        const password = e.target.password.value;
       
        signInUser(email,password)
        .then(res=>{
            setUser(res);
            navigate(location?.state ? location.state : "/" );
        })
        .catch(error=> {
          console.log(error.message);
         
        })  
    }
    const handleGoogleSignin = () =>{
        googleSignIn()
    .then((result)=>{
      Swal.fire({
        icon: "success",
        title: "Login successfull",
      });
      navigate(location?.state ? location.state : "/" );
        const user = result.user;
        setUser(user);
    
        
    })
    .catch((error)=>{
      console.log(error);
    });
    };
    return (
      <div className="flex pt-20 justify-center">
      <div className="card w-full max-w-sm shrink-0 shadow-2xl border border-gray-300 rounded-lg">
        <form onSubmit={handleLogin} className="card-body p-6">
          <h3 className="text-2xl text-center font-semibold text-primary">Login to Your Account</h3>
          
          <div className="form-control">
            <label className="label text-secondary">
              <span>Email</span>
            </label>
            <input 
  type="email" 
  placeholder="Email" 
  name="email" 
  className="input input-bordered bg-white text-gray-700 focus:ring-primary 
             dark:bg-gray-900 dark:text-white dark:border-gray-600"
  required 
/>
          </div>
          
          <div className="form-control relative">
            <label className="label text-secondary">
              <span>Password</span>
            </label>
            <input placeholder="Password" type={togglePass ? "text" : "password"} name="password" className="input input-bordered bg-white text-gray-700 focus:ring-primary 
             dark:bg-gray-900 dark:text-white dark:border-gray-600" required />
            <label className="label">
              <span onClick={() => setTogglePass(!togglePass)} className="absolute top-[45%] right-4 text-accent">
                {togglePass ? <FaEyeSlash /> : <FaEye />}
              </span>
            </label>
          </div>
          
          <div className="form-control mt-6">
            <button type="submit" className="btn bg-primary text-white hover:bg-indigo-700">Login</button>
          </div>
        </form>
        
        <button className="bg-secondary text-white btn text-xl w-full mt-4" onClick={handleGoogleSignin}>
          <FcGoogle /> Sign in with Google
        </button>
        
        <p className="text-center mt-4">
          Don&apos;t Have An Account? <Link to="/register" className="text-accent">Register</Link>
        </p>
      </div>
    </div>
    
    );
};

export default Login;