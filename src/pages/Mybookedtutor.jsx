import { useContext, useEffect, useState } from "react";
import { Authcontext } from "../authprovider/Authprovider";


const Mybookedtutor = () => {

    const [tutors, setTutors] = useState([]);
    console.log(tutors);

        const {user} = useContext(Authcontext);
        useEffect(()=>{
            fetch(`${import.meta.env.VITE_API_URL}/bookedtutors/${user.email}`)
            .then(res=>res.json())
            .then(data=>{
                console.log(data)
                setTutors(data)
            })
        },[user.email]);

        const handleReview = (tutorId) =>{
          fetch(`${import.meta.env.VITE_API_URL}/bookedtutor/${ tutorId}`,{
            method: "PATCH",
            headers: {
              'content-type': 'application/json'
            },
            body: JSON.stringify({   
              tutorId: tutorId
            })
          })
          .then(res=>res.json())
          .then(data=>console.log(data))
        }
    return (
      <div className="p-6 w-11/12 mx-auto mt-20">
      <h1 className="text-3xl font-bold text-center mb-6 text-primary">
        Booked Tutors
      </h1>
      <div className="grid gap-6 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
        {tutors.map((tutor) => (
          <div
            key={tutor?._id}
            className="bg-background dark:bg-darkBackground shadow-lg rounded-xl overflow-hidden hover:shadow-xl transition"
          >
            <img
              src={tutor?.image}
              alt={tutor?.displayName}
              className="w-full h-48 object-cover"
            />
            <div className="p-4">
              {/* Tutor's Name */}
              <h2 className="text-xl font-bold text-gray-800 dark:text-white">
                {tutor.displayName}
              </h2>
    
              {/* Language */}
              <p className="text-gray-600 dark:text-gray-300 mt-2">
                <span className="font-medium text-primary">Language:</span>{" "}
                {tutor?.language}
              </p>
    
              {/* Price */}
              <p className="text-gray-600 dark:text-gray-300 mt-2">
                <span className="font-medium text-primary">Price:</span> BDT{" "}
                {tutor?.price}
              </p>
    
    
              {/* Review Button */}
              <button
                onClick={() => handleReview(tutor.tutorId)}
                 className="mt-4 w-full bg-secondary hover:bg-amber-600 text-white py-2 px-4 rounded-lg font-semibold transition"
              >
                Leave Review
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
    
    );
};

export default Mybookedtutor;