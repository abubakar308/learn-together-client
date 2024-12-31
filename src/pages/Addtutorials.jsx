import { useContext, useState } from "react";
import { Authcontext } from "../authprovider/Authprovider";

const Addtutorials = () => {
    const {user} = useContext(Authcontext)

    const [formData, setFormData] = useState({
        name: user?.name || "",
        email: user?.email || "",
        image: "",
        language: "",
        price: "",
        description: "",
        review: 0,
      });
    
      const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
      };
    
      const handleSubmit = (e) => {
        e.preventDefault();
        console.log("Submitted:", formData);
        // Add API call to save data in the database
      };
    return (
        <div className="flex justify-center">
            <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
           <form onSubmit={handleSubmit} className="card-body">
     <label className="label">
     <input type="text" value={formData.name} readOnly />
     </label>
     <label className="label">
     <input type="email" value={formData.email} readOnly />
     </label>
      <label className="label">
      <input type="url" name="image" placeholder="Image URL" onChange={handleChange} />
      </label>
     <label className="label">
     <select>
      <option value="">English tutors</option>
      <option value=""></option>
      <option value=""></option>
      <option value=""></option>
      <option value=""></option>
      <option value=""></option>
      <option value=""></option>
      <option value=""></option>
      <option value=""></option>
     </select>
     </label>
      <label className="label">
      <input type="number" name="price" placeholder="Price" onChange={handleChange} />
      </label>
     <label className="label">
     <textarea name="description" placeholder="Description" onChange={handleChange}></textarea>
     </label>
      <button type="submit">Submit</button>
    </form>
        </div>
        </div>
    );
};

export default Addtutorials;