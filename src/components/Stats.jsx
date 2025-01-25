import { useEffect, useMemo, useState } from "react";


const Stats = () => {
    const [categories, setCategories] = useState([]);
    const [tutors, setTutors] = useState([]);

    const [users, setUsers] = useState([]);
  
    // Fetch categories
    useEffect(() => {
      fetch(`${import.meta.env.VITE_API_URL}/category`)
        .then((res) => res.json())
        .then((data) => setCategories(data))
        .catch((error) => console.error("Error fetching categories:", error));
    }, []);
  
    // Fetch tutors
    useEffect(() => {
      fetch(`${import.meta.env.VITE_API_URL}/bookedtutors`)
        .then((res) => res.json())
        .then((data) => setUsers(data))
        .catch((error) => console.error("Error fetching tutors:", error));
    }, []);

    useEffect(() => {
      fetch(`${import.meta.env.VITE_API_URL}/tutors`)
        .then((res) => res.json())
        .then((data) => setTutors(data))
        .catch((error) => console.error("Error fetching tutors:", error));
    }, []);
  
    // Unique tutor emails
    const uniqueTutors = useMemo(
      () => [...new Set(tutors.map((item) => item.email))],
      [tutors]
    );

    const totalUser = useMemo(
      () => [...new Set(users.map((item) => item.userEmail))],
      [users]
    );
  
    // Total reviews
    const totalReviews = useMemo(
      () => tutors.reduce((sum, tutor) => sum + tutor.review, 0),
      [tutors]
    );

    return (
        <div className="grid md:grid-cols-4 my-5">
            <div>
                <h2 className="text-5xl font-bold">{uniqueTutors.length}+</h2>
                <p>Experienced tutors</p>
            </div>
            <div>
            <h2 className="text-5xl font-bold">{totalReviews}+</h2>
            <p>Total Review</p>
            </div>
            <div>
            <h2 className="text-5xl font-bold">{categories?.length}+</h2>
            <p>Total Languages</p>
            </div>
            <div>
            <h2 className="text-5xl font-bold">{totalUser.length}+</h2>
            <p>Total users</p>
            </div>
        </div>
    );
};

export default Stats;