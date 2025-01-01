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
        <div className="flex justify-center">
            <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
           <form onSubmit={handleLogin} className="card-body">
        <h3 className="text-2xl">Login You Account</h3>
      <div className="form-control">
        <label className="label">
          <span className="label-text">Email</span>
        </label>
        <input type="email"  placeholder="email" name="email" className="input input-bordered" required />
      </div>
      <div className="form-control relative">
        <label className="label">
          <span className="label-text">Password</span>
        </label>
        <input placeholder="password" type={togglePass? "text": "password"} name="password" className="input input-bordered" required />
        <label className="label"> 
          <span onClick={()=>setTogglePass(!togglePass)} className="absolute top-[45%] right-4"> {togglePass? <FaEyeSlash />: <FaEye />} </span>
        </label>
        {/* <span onClick={() => navigate("/forget-password")} className="label-text-alt link link-hover">Forgot password?</span> */}
      </div>
      <div className="form-control mt-6">
        <button type="submit" className="btn btn-primary">Login</button>
      </div>
    </form>
    <button className="bg-gray-400 btn text-xl" onClick={handleGoogleSignin}><FcGoogle /> Signinwith Google</button>
    <p className="text-center"> Dont&lsquo;t Have An Account?  <Link to="/register" className="text-red-500"> Register</Link></p>
        </div>
        </div>
    );
};

export default Login;