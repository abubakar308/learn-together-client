import { useEffect, useState } from "react";
import { FcNext } from "react-icons/fc";
import { Link } from "react-router-dom";


const Languagecategory = () => {
    const [categories, setCategories] = useState([]);
    useEffect(()=>{
        fetch(`${import.meta.env.VITE_API_URL}/category`)
        .then(res=> res.json())
        .then(data=>setCategories(data));
    },[])
    return (
        <div className="container mx-auto p-5">
        <h2 className="text-4xl text-center font-bold mb-8 text-primary">Language Categories</h2>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {
            categories.map(category => (
              <Link 
                to={`tutor/${category.category}`} 
                key={category._id} 
                className="flex justify-between items-center bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-600 rounded-xl p-5 hover:shadow-lg transition duration-300 ease-in-out transform hover:scale-105"

              >
                <div className="flex items-center space-x-4">
                 <img 
  className="w-14 h-14 sm:w-16 sm:h-16 object-cover rounded-full border border-gray-300 dark:border-gray-600" 
  src={category.icon} 
  alt={`${category.name} icon`} 
/>

                  <div className="text-left">
                    <h3 className="text-2xl font-semibold text-primary ">{category.name}</h3>
<p className="text-gray-500 dark:text-gray-300">{category.teachers} teachers</p>

                  </div>
                </div>
                <FcNext className="text-2xl text-secondary" />
              </Link>
            ))
          }
        </div>
      </div>
    );
};

export default Languagecategory;