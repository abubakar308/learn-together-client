import { useContext, useState } from "react";
import { Authcontext } from "../authprovider/Authprovider";

const Addtutorials = () => {
    const {user,} = useContext(Authcontext)

    console.log(user)
    const [formData, setFormData] = useState({
      displayName: user?.displayName || "",
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
       
        fetch('http://localhost:5000/addtutorials',{
          method: "POST",
          headers: {
            'content-type': 'application/json'
          },
          body: JSON.stringify(formData)
        })
        .then(res=>res.json())
        .then(data=>{
          console.log(data)
        })
      
      };

    return (
        <div className="flex justify-center">
            <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
           <form onSubmit={handleSubmit} className="card-body">
     <label className="label">
     <input type="text" value={user.displayName} readOnly />
     </label>
     <label className="label">
     <input type="email" value={user.email} readOnly />
     </label>
      <label className="label">
      <input type="url" name="image" placeholder="Image URL" onChange={handleChange} required />
      </label>
     <label className="label">
     <select name="language"
              value={formData.language}
              onChange={handleChange} required>
                 <option value="">select</option>
      <option value="English tutors">English</option>
      <option value="Spanish tutors">Spanish</option>
      <option value="Franch tutor">Franch</option>
      <option value="German tutor">German</option>
      <option value="Itilian tutor">Italian</option>
      <option value="Chinese tutor">Chinese</option>
      <option value="Arabic tutor">Arabic</option>
      <option value="Japanese tutor">Japanese</option>
      <option value="Portuguese tutors">Portuguese</option>
     </select>
     </label>
      <label className="label">
      <input type="number" name="price" placeholder="Price" onChange={handleChange} required />
      </label>
     <label className="label">
     <textarea name="description" placeholder="Description" onChange={handleChange} required></textarea>
     </label>
      <button type="submit">Submit</button>
    </form>
        </div>
        </div>
    );
};

export default Addtutorials;