import { useContext, useEffect, useState } from "react";
import { Authcontext } from "../authprovider/Authprovider";

const Mytutorials = () => {
    const [tutorials, setTutorials] = useState([]);
    const {user} = useContext(Authcontext);
    console.log(tutorials)
    useEffect(()=>{
        fetch(`http://localhost:5000/mytutorials?email=${user.email}`)
        .then(res=>res.json())
        .then(data=>{
            setTutorials(data);
        })
    },[user.email])
    return (
        <div>
            <p>{tutorials.length}</p>
        </div>
    );
};

export default Mytutorials;