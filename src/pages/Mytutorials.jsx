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
        <div>
           {
            tutorials.map(tutor=> <div className="flex items-center justify-start gap-5 p-3" key={tutor._id}>
                <img className="w-20 h-20 rounded-xl" src={tutor.image} alt="" />
               <div>
               <p>Name: {tutor.displayName}</p>
               <p>Languge: {tutor.category}</p>
               </div>
              <div>
              <p>Price: {tutor.price}</p>
              <p>Review: {tutor.review}</p>
              </div>
                <p>Description: <br /> {tutor.description}</p>
                <button className="text-3xl"><Link to={`/tutorial/${tutor._id}`}><FaEdit></FaEdit></Link></button>
                <button className="text-red-600 text-3xl" onClick={()=> handleDelete(tutor._id)}><MdDelete></MdDelete></button>
            </div>)
           }
        </div>
    );
};

export default Mytutorials;