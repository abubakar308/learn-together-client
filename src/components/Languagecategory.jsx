import { useEffect, useState } from "react";
import { FcNext } from "react-icons/fc";
import { Link } from "react-router-dom";


const Languagecategory = () => {
    const [categories, setCategories] = useState([]);
    console.log(categories)
    useEffect(()=>{
        fetch("http://localhost:5000/tutorials")
        .then(res=> res.json())
        .then(data=>setCategories(data));
    },[])
    return (
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-3">
           {
            categories.map(category=> <Link to={`category/${category.name}`} key={category._id} className="flex justify-between border rounded-xl p-5 items-center"> 
            <img className="w-12 h-12" src={category.icon} alt="" />
            <div>
            <h3 className="text-3xl font-bold">{category.name}</h3>
            <p>{category.teachers}</p>
            </div>
            <FcNext />
            </Link>)
           }
        </div>
    );
};

export default Languagecategory;