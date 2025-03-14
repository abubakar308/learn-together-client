import { Link, useLoaderData } from "react-router-dom";

const Findturtors = () => {
    // const [tutors, setTutors] = useState([data]);

const  {tutors, category }= useLoaderData();

    return (
      <div className="w-11/12 mx-auto mt-20">
      <h2 className="text-2xl text-center py-3 text-primary">
        {category ? `${category} Tutor` : 'All Tutor'}: {tutors?.length}
      </h2>
    
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {
          tutors.map(tutor => (
            <div className="flex gap-4 items-center p-4 border border-gray-300 rounded-lg shadow-sm hover:shadow-lg" key={tutor._id}>
              <img className="h-14 w-14 rounded-2xl" src={tutor.image} alt={tutor.displayName} />
              <div className="flex flex-col">
                <p className="font-semibold text-gray-800">{tutor.displayName}</p>
                <p className="text-gray-600">{tutor.category}</p>
              </div>
              <p className="text-gray-600">{tutor?.review}</p>
              <button className="bg-primary text-white px-4 py-2 rounded-lg hover:bg-blue-700">
                <Link to={`/findtutors/${tutor._id}`} className="text-white">Details</Link>
              </button>
            </div>
          ))
        }
      </div>
    </div>
    
    );
};

export default Findturtors;