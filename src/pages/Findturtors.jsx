import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";



const Findturtors = () => {
    const [tutors, setTutors] = useState([]);
    const {language} = useParams();
    console.log(tutors);

     
  useEffect(() => {
    if (!language) return;

    const fetchCategoryTutors = async () => {
      try {
        const response = await fetch(
          `http://localhost:5000/addtutorials?language=${language}`
        );
        if (response.ok) {
          const categoryData = await response.json();
          setTutors(categoryData);
        }
      } catch (error) {
        console.error("Error fetching category-specific tutors:", error);
      }
    };

    fetchCategoryTutors();
  }, [language]);

    return (
        <div>
           {
            tutors.map(tutor=> <div className="flex gap-4" key={tutor._id}>
                <img className="h-14 w-14" src={tutor.image} alt="" />
                <p>{tutor.displayName}</p>
                <p>{tutor.language}</p>
                <p>{tutor.review}</p>
                <button><Link>Details</Link></button>
            </div>)
           }
        </div>
    );
};

export default Findturtors;