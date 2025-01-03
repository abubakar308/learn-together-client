
import { useLoaderData, useNavigate } from "react-router-dom";

const TutorDetails = () => {
  
   const  data  = useLoaderData();
   const {displayName , image, price , review, description, language} = data
   console.log(displayName);
    const navigate = useNavigate();

  
    const handleBook = () => {
      const bookingData = {
        // tutorId: tutor._id,
        // image: tutor.image,
        // language: tutor.language,
        // price: tutor.price,
        // tutorEmail: tutor.email,
        // email: user.email,
      };
      console.log("Booking Data:", bookingData);
      navigate("/my-booked-tutors");
    };
  
    return (
        <div>
      <h2>{displayName}</h2>
      <img src={image} alt='' />
      <p>Language: {language}</p>
      <p>Description: {description}</p>
      <p>Price: {price}</p>
      <p>Review: {review}</p>
      <button onClick={handleBook}>Book</button>
    </div>
    );
};

export default TutorDetails;