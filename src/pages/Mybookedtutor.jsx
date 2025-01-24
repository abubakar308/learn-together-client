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
    return (
        <div className="p-6">
        <h1 className="text-3xl font-bold text-center mb-6">
          Booked Tutors
        </h1>
        <div className="grid gap-6 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
          {tutors.map((tutor) => (
            <div
              key={tutor?._id}
              className="bg-white shadow-md rounded-lg overflow-hidden"
            >
              <img
                src={tutor?.image}
                alt={tutor?.displayName}
                className="w-full h-48 object-cover"
              />
              <div className="p-4">
                {/* Tutor's Name */}
                <h2 className="text-xl font-bold text-gray-800">
                  {tutor.displayName}
                </h2>
  
                {/* Language */}
                <p className="text-gray-600 mt-2">
                  <span className="font-medium">Language:</span>{" "}
                  {tutor?.language}
                </p>
  
                {/* Price */}
                <p className="text-gray-600 mt-2">
                  <span className="font-medium">Price:</span> BDT{" "}
                  {tutor?.price}
                </p>
  
                {/* Review */}
                <p className="text-gray-600 mt-2">
                  <span className="font-medium">Review Count:</span>{" "}
                  {tutor?.review}
                </p>
  
                {/* Review Button */}
                <button
                //   onClick={() => handleReview(tutor._id)}
                  className="mt-4 w-full bg-blue-600 text-white py-2 px-4 rounded-md font-medium hover:bg-blue-700"
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