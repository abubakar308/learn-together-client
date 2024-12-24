

const Register = () => {
    return (
        <div className="flex justify-center">
            <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
           <form className="card-body">
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
        <input placeholder="password" name="password" className="input input-bordered" required />
        {/* <label className="label"> 
          <span onClick={()=>setTogglePass(!togglePass)} className="absolute top-[45%] right-4"> {togglePass? <FaEyeSlash />: <FaEye />} </span>
        </label> */}
        {/* <span onClick={() => navigate("/forget-password")} className="label-text-alt link link-hover">Forgot password?</span> */}
      </div>
      <div className="form-control mt-6">
        <button type="submit" className="btn btn-primary">Login</button>
      </div>
    </form>
        </div>
        </div>
    );
};

export default Register;