import { useContext, useEffect, useState } from "react";
import { Authcontext } from "../authprovider/Authprovider";

const Mytutorials = () => {
    const [tutorials, setTutorials] = useState([]);
    const {user} = useContext(Authcontext);
    console.log(tutorials)
    useEffect(()=>{
        fetch(`https://tutor-booking-server-ten.vercel.app/mytutorials?email=${user.email}`)
        .then(res=>res.json())
        .then(data=>{
            setTutorials(data);
        })
    },[user.email]);

    const handleDelete = _id =>{
        console.log(_id);
        fetch(`/mytutorial/${_id}`,{
            method: 'DELETE'
        })
        .then(res=>res.json())
        .then(data=>{
            console.log(data);
        })

    }
    return (
        <div>
           {
            tutorials.map(tutor=> <div className="flex gap-3" key={tutor._id}>
                <img className="w-14 h-14" src={tutor.image} alt="" />
                <p>{tutor.displayName}</p>
                <p>{tutor.language}</p>
                <p>{tutor.price}</p>
                <p>{tutor.description}</p>
                <p>{tutor.review}</p>
                <button>Update</button>
                <button onClick={()=> handleDelete(tutor._id)}>delete</button>
            </div>)
           }
        </div>
    );
};

export default Mytutorials;