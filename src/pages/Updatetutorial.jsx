import { useContext, useState } from "react";
import { Authcontext } from "../authprovider/Authprovider";
import { useNavigate, useParams } from "react-router-dom";
import Swal from "sweetalert2";

const Updatetutorial = () => {
    const {user,} = useContext(Authcontext)

    const {id} = useParams();
    
    const navigate = useNavigate();
    
        const [formData, setFormData] = useState({
          displayName: user?.displayName || "",
            email: user?.email || "",
            image: "",
            category: "",
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
           
            fetch(`${import.meta.env.VITE_API_URL}/mytutorials/${id}`,{
              method: "PATCH",
              headers: {
                'content-type': 'application/json'
              },
              body: JSON.stringify(formData)
            })
            .then(res=>{
              if (res.ok) {
                Swal.fire({
                    title: "Product updated successful",
                    icon: "success",
                    draggable: true
                  });
                  navigate('/mytutorials')
            } else {
                Swal.fire({
                    title: "Sumthing is wrong",
                    icon: "error",
                    draggable: true
                  });
            }
            })
          
          };
    return (
        <div className="flex justify-center py-12 bg-gray-50">
      <div className="card bg-white w-full max-w-md shadow-xl rounded-lg p-8">
        <form onSubmit={handleSubmit} className="space-y-6">
          <h2 className="text-2xl font-semibold text-center text-gray-800">Tutor Profile</h2>
    
          {/* Display Name */}
          <div>
            <label htmlFor="displayName" className="block text-gray-700 font-medium">Name</label>
            <input
              type="text"
              id="displayName"
              value={user.displayName}
              readOnly
              className="mt-2 w-full p-3 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
    
          {/* Email */}
          <div>
            <label htmlFor="email" className="block text-gray-700 font-medium">Email</label>
            <input
              type="email"
              value={user.email}
              readOnly
              className="mt-2 w-full p-3 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
    
          {/* Image URL */}
          <div>
            <label htmlFor="image" className="block text-gray-700 font-medium">Image URL</label>
            <input
              type="url"
              name="image"
              placeholder="Enter image URL"
              onChange={handleChange}
              required
              className="mt-2 w-full p-3 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
    
          {/* Language Select */}
          <div>
            <label htmlFor="category" className="block text-gray-700 font-medium">Language</label>
            <select
              name="category"
              value={formData.category}
              onChange={handleChange}
              required
              className="mt-2 w-full p-3 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
            >
              <option value="">Select language</option>
              <option value="english">English</option>
              <option value="spanish">Spanish</option>
              <option value="french">French</option>
              <option value="german">German</option>
              <option value="italian">Italian</option>
              <option value="chinese">Chinese</option>
              <option value="arabic">Arabic</option>
              <option value="japanese">Japanese</option>
              <option value="portuguese">Portuguese</option>
            </select>
          </div>
    
          {/* Price */}
          <div>
            <label htmlFor="price" className="block text-gray-700 font-medium">Price</label>
            <input
              type="number"
              name="price"
              placeholder="Price"
              onChange={handleChange}
              required
              className="mt-2 w-full p-3 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
    
          {/* Description */}
          <div>
            <label htmlFor="description" className="block text-gray-700 font-medium">Description</label>
            <textarea
              name="description"
              placeholder="Describe your services"
              onChange={handleChange}
              required
              className="mt-2 w-full p-3 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
            ></textarea>
          </div>
    
          {/* Submit Button */}
          <div className="flex justify-center">
            <button
              type="submit"
              className="w-full py-3 bg-blue-600 text-white font-semibold rounded-lg shadow-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
            >
              Update
            </button>
          </div>
        </form>
      </div>
    </div>
    );
};

export default Updatetutorial;