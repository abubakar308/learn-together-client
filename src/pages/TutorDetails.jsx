
import { useContext, useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { Authcontext } from "../authprovider/Authprovider";
import Swal from "sweetalert2";

const TutorDetails = () => {
  
  const {id} = useParams();
  const {user} = useContext(Authcontext);
  const [tutorial, setTutorial] = useState(null);
      useEffect(()=>{
          fetch(`${import.meta.env.VITE_API_URL}/tutors/${id}`)
          .then(res=>res.json())
          .then(data=>{
              setTutorial(data)
          })
      },[id]);

      // console.log(tutorial)
 
    const navigate = useNavigate();

  
    const handleBook = () => {
      const bookingData = {
        tutorId: tutorial?._id,
        image: tutorial?.image,
        language: tutorial?.category,
        price: tutorial?.price,
        tutorEmail: tutorial?.email,
        userEmail: user?.email,
      };
      if(user.email === bookingData.tutorEmail) return  Swal.fire({
                          title: "Acion failed",
                          icon: "error",
                          draggable: true
                        });
  
      fetch(`${import.meta.env.VITE_API_URL}/bookedtutors`,{
        method: "POST",
        headers: {
          'content-type': 'application/json'
        },
        body: JSON.stringify(bookingData)
      })
      .then(res=>res.json())
      .then(data=>{
        Swal.fire({
          title: `${bookingData?.language} tutor booked successful`,
          icon: "success",
          draggable: true
         });
      })

    };
  
    return (
      <div className="p-6 bg-background">
  <div className="max-w-md mx-auto my-10 p-3 bg-white shadow-lg rounded-lg overflow-hidden border border-gray-200">
    <img
      src={tutorial?.image}
      alt={tutorial?.displayName}
      className="w-full h-fit rounded-lg object-cover"
    />
    <div className="p-6">
      {/* Tutor's Name */}
      <h2 className="text-2xl font-semibold text-gray-800">{tutorial?.displayName}</h2>

      {/* Language */}
      <p className="text-gray-600 mt-2">
        <span className="font-medium text-primary">Language:</span> {tutorial?.category}
      </p>

      {/* Description */}
      <p className="text-gray-600 mt-2">
        <span className="font-medium text-primary">Description:</span> {tutorial?.description}
      </p>

      {/* Price */}
      <p className="text-gray-600 mt-2">
        <span className="font-medium text-primary">Price:</span> BDT {tutorial?.price}
      </p>

      {/* Review */}
      <p className="text-gray-600 mt-2">
        <span className="font-medium text-primary">Review:</span> {tutorial?.review} ★
      </p>

      {/* Book Button */}
      <button
        onClick={handleBook}
        className="mt-4 w-full bg-primary text-white py-2 px-4 rounded-md text-center font-medium hover:bg-primary-dark focus:outline-none focus:ring-2 focus:ring-primary"
      >
        Book Now
      </button>
    </div>
  </div>
</div>

    );
};

export default TutorDetails;