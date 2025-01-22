import { useContext, useEffect, useState } from "react";
import { Authcontext } from "../authprovider/Authprovider";
import { Link } from "react-router-dom";

const Mytutorials = () => {
    const [tutorials, setTutorials] = useState([]);
    const {user} = useContext(Authcontext);
    useEffect(()=>{
        fetch(`${import.meta.env.VITE_API_URL}/mytutorials?email=${user.email}`)
        .then(res=>res.json())
        .then(data=>{
            setTutorials(data);
        })
    },[user.email]);

    const handleDelete = _id =>{
        console.log(_id);
        fetch(`${import.meta.env.VITE_API_URL}/mytutorials/${_id}`,{
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
                <button><Link to={`/tutorial/${tutor._id}`}>Update</Link></button>
                <button onClick={()=> handleDelete(tutor._id)}>delete</button>
            </div>)
           }
        </div>
    );
};

export default Mytutorials;