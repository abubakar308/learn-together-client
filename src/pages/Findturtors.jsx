import { Link, useLoaderData } from "react-router-dom";

const Findturtors = () => {
    // const [tutors, setTutors] = useState([data]);

const  {tutors, category }= useLoaderData();

    return (
      <div>
        <h2 className="text-2xl text-center py-3">{category? `${category} Tutor` : 'All Tutor'}: {tutors?.length}</h2>

          <div className="grid grid-cols-3 gap-3">
           {
            tutors.map(tutor=> <div className="flex gap-4" key={tutor._id}>
                <img className="h-14 w-14 rounded-2xl" src={tutor.image} alt="" />
                <div>
                <p>{tutor.displayName}</p>
                <p>{tutor.language}</p>
                </div>
                <p>{tutor.review}</p>
                <button><Link to={`/findtutors/${tutor._id}`}>Details</Link></button>
            </div>)
           }
        </div>
      </div>
    );
};

export default Findturtors;