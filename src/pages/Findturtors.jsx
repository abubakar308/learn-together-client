import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";

const Findturtors = () => {
    const [tutors, setTutors] = useState([]);
    const {category} = useParams();

     console.log(category);
  useEffect(() => {
    fetch("https://tutor-booking-server-iembzkpnh.vercel.app/tutors")
    .then(res=>res.json())
    .then(data=>{
        setTutors(data);
    })
  }, [category]);

    return (
        <div className="grid grid-cols-3 gap-3">
           {
            tutors.map(tutor=> <div className="flex gap-4" key={tutor._id}>
                <img className="h-14 w-14 rounded-2xl" src={tutor.image} alt="" />
                <div>
                <p>{tutor.displayName}</p>
                <p>{tutor.language}</p>
                </div>
                <p>{tutor.review}</p>
                <button><Link to={`/tutor/${tutor._id}`}>Details</Link></button>
            </div>)
           }
        </div>
    );
};

export default Findturtors;