import { useContext, useState } from "react";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { Authcontext } from "../authprovider/Authprovider";
import { Link, useNavigate } from "react-router-dom";
import { FcGoogle } from "react-icons/fc";
import Swal from "sweetalert2";


const Register = () => {
  const [togglePass, setTogglePass] = useState(false);
  const { user, setUser, signUpNewUser, updateUserprofile, googleSignIn} = useContext(Authcontext);
  const navigate = useNavigate();

  const handleRegister = e =>{
    console.log(user);
    e.preventDefault();
   
    const name = e.target.name.value;
    const photo =e.target.photo.value;
    const email =e.target.email.value;
    const password =e.target.password.value;

    const validatePassword = (password) => {
      const lengthCheck = password.length >= 6;
      const upperCaseCheck = /[A-Z]/.test(password);
      const numberCheck = /[0-9]/.test(password);
      const specialCharCheck = /[!@#$%^&*]/.test(password);
  
      if (!lengthCheck) return "Password must be at least 6 characters long.";
      if (!upperCaseCheck) return "Password must contain at least one uppercase letter.";
      if (!numberCheck) return "Password must contain at least one number.";
      if (!specialCharCheck) return "Password must contain at least one special character (!@#$%^&*).";
      return "";
    };

    const validationError = validatePassword(password);

    if (validationError) {
      Swal.fire({
        icon: "error",
        title: "Invalid Password",
        text: validationError,
      });
      return;
    } 
    signUpNewUser(email,password)
    .then(result =>{
      const user = result.user
      setUser(user);
     
      updateUserprofile({
        displayName: name, 
        photoURL: photo,
        })
        .then(()=>{
          Swal.fire({
            icon: "success",
            title: "Register successfull",
          });
            navigate('/');
        })
        .catch((Error)=>{
          console.log(Error);
        })
    })
    .catch(Error => {
     console.log(Error)
    
    });
};

const handleGoogleSignin = () =>{
  googleSignIn()
.then((result)=>{
    Swal.fire({
    icon: "success",
    title: "Login Successfull",
  });
  navigate('/');
  const user = result.user;
  setUser(user);
})
.catch((error)=>console.log(error.message));
};
    return (
        <div className="flex justify-center">
            <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
           <form onSubmit={handleRegister} className="card-body">
        <h3 className="text-2xl">Login You Account</h3>
        <div className="form-control">
            <label className="label">
              <span className="label-text">Name</span>
            </label>
            <input type="name" placeholder="Name" name="name" className="input input-bordered" required />
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text">PhotoURL</span>
            </label>
            <input type="photo" placeholder="PhonoURl" name="photo" className="input input-bordered" required />
          </div>
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
        <input placeholder="password" type={togglePass ? "text" : "password"}  name="password" className="input input-bordered" required />
        <label className="label"> 
          <span onClick={()=>setTogglePass(!togglePass)} className="absolute top-[45%] right-4"> {togglePass? <FaEyeSlash />: <FaEye />} </span>
        </label>
        {/* <span onClick={() => navigate("/forget-password")} className="label-text-alt link link-hover">Forgot password?</span> */}
      </div>
      <div className="form-control mt-6">
        <button type="submit" className="btn btn-primary">Register</button>
      </div>
    </form>
    <span className="text-center -mt-5 text-2xl font-bold text-gray-600">Or</span>
        <button className="mb-2 -mt btn bg-gray-400 text-xl" onClick={handleGoogleSignin}><FcGoogle /> Signinwith Google</button>
        <p className="text-center">Already Have An Account? <Link to="/login" className="text-red-500 text-xl"> Login</Link></p>
        </div>
        </div>
    );
};

export default Register;