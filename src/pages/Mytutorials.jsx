import { useContext, useEffect, useState } from "react";
import { Authcontext } from "../authprovider/Authprovider";
import { Link } from "react-router-dom";
import Swal from "sweetalert2";
import { MdDelete } from "react-icons/md";
import { FaEdit } from "react-icons/fa";

const Mytutorials = () => {
    const [tutorials, setTutorials] = useState([]);
    const {user } = useContext(Authcontext);
    useEffect(()=>{
        fetch(`${import.meta.env.VITE_API_URL}/mytutorials?email=${user.email}`)
        .then(res=>res.json())
        .then(data=>{
            setTutorials(data);
        })
    },[user.email]);

    const handleDelete = _id =>{
        Swal.fire({
            title: "Are you sure?",
            text: "You want to delete this",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!"
          }).then((result) => {
            if (result.isConfirmed) {
        fetch(`${import.meta.env.VITE_API_URL}/mytutorials/${_id}`,{
            method: 'DELETE'
        })
        .then(res=>res.json())
        .then(data=>{
            console.log(data);
        })
        Swal.fire({
            title: "Deleted!",
            text: "Your your has been deleted.",
            icon: "success"
          });
        }
      });

    }
    return (
        <div className="w-11/12 mx-auto mt-20">
        {tutorials.map(tutor => (
          <div className="flex items-center justify-between gap-5 p-4 border-b border-gray-300" key={tutor._id}>
            {/* Tutor Image */}
            <img className="w-20 h-20 rounded-xl object-cover" src={tutor.image} alt={tutor.displayName} />
      
            {/* Tutor Details */}
            <div className="flex-1">
              <p className="font-semibold">Name: {tutor.displayName}</p>
              <p className="text-gray-600">Language: {tutor.category}</p>
            </div>
      
            {/* Price and Review */}
            <div className="flex flex-col items-end">
              <p className="font-semibold">Price: ${tutor.price}</p>
              <p className="text-gray-600">Review: {tutor.review}</p>
            </div>
      
            {/* Description */}
            <div className="flex-1">
              <p className="text-gray-600">Description:</p>
              <p className="text-sm">{tutor.description}</p>
            </div>
      
            {/* Edit and Delete Buttons */}
            <div className="flex gap-4">
              <Link 
                to={`/tutorial/${tutor._id}`} 
                className="text-primary text-2xl hover:text-primary-dark"
              >
                <FaEdit />
              </Link>
              <button 
                className="text-secondary text-2xl hover:text-secondary-dark"
                onClick={() => handleDelete(tutor._id)}
              >
                <MdDelete />
              </button>
            </div>
          </div>
        ))}
      </div>
      
    );
};

export default Mytutorials;