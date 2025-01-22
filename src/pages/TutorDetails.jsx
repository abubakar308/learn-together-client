
import { useContext, useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { Authcontext } from "../authprovider/Authprovider";

const TutorDetails = () => {
  
  const {id} = useParams();
  const {user} = useContext(Authcontext);
  const [tutorial, setTutorial] = useState(null);
      useEffect(()=>{
          fetch(`${import.meta.env.VITE_API_URL}/tutors/${id}`)
          .then(res=>res.json())
          .then(data=>{
            console.log(data)
              setTutorial(data)
          })
      },[id]);

      // console.log(tutorial)
 
    const navigate = useNavigate();

  
    const handleBook = () => {
      const bookingData = {
        // tutorId: tutor._id,
        // image: tutor.image,
        // language: tutor.language,
        // price: tutor.price,
        // tutorEmail: tutor.email,
        // email: user.email,
      };
      console.log("Booking Data:", bookingData);
      navigate("/my-booked-tutors");
    };
  
    return (
      <div className="">
      <div className="max-w-md mx-auto p-3 bg-white shadow-lg rounded-lg overflow-hidden border border-gray-200">
        <img
          src={tutorial?.image}
          alt={tutorial?.displayName}
          className="w-full h-full object-cover"
        />
        <div className="p-6">
          {/* Tutor's Name */}
          <h2 className="text-2xl font-semibold text-gray-800">{tutorial?.displayName}</h2>
    
          {/* Language */}
          <p className="text-gray-600 mt-2">
            <span className="font-medium text-gray-700">Language:</span> {tutorial?.category}
          </p>
    
          {/* Description */}
          <p className="text-gray-600 mt-2">
            <span className="font-medium text-gray-700">Description:</span> {tutorial?.description}
          </p>
    
          {/* Price */}
          <p className="text-gray-600 mt-2">
            <span className="font-medium text-gray-700">Price:</span> BDT {tutorial?.price}
          </p>
    
          {/* Review */}
          <p className="text-gray-600 mt-2">
            <span className="font-medium text-gray-700">Review:</span> {tutorial?.review} ★
          </p>
    
          {/* Book Button */}
          <button
            onClick={handleBook}
            className="mt-4 w-full bg-blue-600 text-white py-2 px-4 rounded-md text-center font-medium hover:bg-blue-700"
          >
            Book Now
          </button>
        </div>
      </div>
    </div>
    );
};

export default TutorDetails;