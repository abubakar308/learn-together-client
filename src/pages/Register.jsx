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
      <div className="flex mt-20 justify-center">
      <div className="card bg-base-100 dark:bg-gray-800 w-full max-w-sm shrink-0 shadow-2xl">
      <form onSubmit={handleRegister} className="card-body">
  <h3 className="text-2xl text-primary">Create New Account</h3>
  <div className="form-control">
    <label className="label">
      <span className="label-text text-primary">Name</span>
    </label>
    <input
      type="name"
      placeholder="Name"
      name="name"
      className="input text-gray-700 input-bordered dark:bg-gray-700 dark:text-white dark:focus:ring-2 dark:focus:ring-primary"
      required
    />
  </div>
  <div className="form-control">
    <label className="label">
      <span className="label-text text-primary">PhotoURL</span>
    </label>
    <input
      type="photo"
      placeholder="PhotoURL"
      name="photo"
      className="input text-gray-700 input-bordered dark:bg-gray-700 dark:text-white dark:focus:ring-2 dark:focus:ring-primary dark:focus:bg-gray-800"
      required
    />
  </div>
  <div className="form-control">
    <label className="label">
      <span className="label-text text-primary">Email</span>
    </label>
    <input
      type="email"
      placeholder="email"
      name="email"
      className="input text-gray-700 input-bordered dark:bg-gray-700 dark:text-white dark:focus:ring-2 dark:focus:ring-primary dark:focus:bg-gray-800"
      required
    />
  </div>
  <div className="form-control relative">
    <label className="label">
      <span className="label-text text-primary">Password</span>
    </label>
    <input
      placeholder="password"
      type={togglePass ? "text" : "password"}
      name="password"
      className="input text-gray-700 input-bordered dark:bg-gray-700 dark:text-white dark:focus:ring-2 dark:focus:ring-primary dark:focus:bg-gray-800"
      required
    />
    <label className="label">
      <span
        onClick={() => setTogglePass(!togglePass)}
        className="absolute top-[45%] right-4 text-primary"
      >
        {togglePass ? <FaEyeSlash /> : <FaEye />}
      </span>
    </label>
  </div>
  <div className="form-control mt-6">
    <button
      type="submit"
      className="btn btn-primary dark:bg-primary dark:hover:bg-indigo-600"
    >
      Register
    </button>
  </div>
</form>

        <span className="text-center -mt-5 text-2xl font-bold text-gray-600 dark:text-gray-400">Or</span>
        <button className="mb-2 -mt btn bg-gray-400 text-xl dark:bg-gray-600 dark:text-white" onClick={handleGoogleSignin}>
          <FcGoogle /> Signin with Google
        </button>
        <p className="text-center text-white">Already Have An Account? <Link to="/login" className="text-red-500 text-xl">Login</Link></p>
      </div>
    </div>
    
    );
};

export default Register;