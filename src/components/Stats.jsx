import { useEffect, useMemo, useState } from "react";


const Stats = () => {
    const [categories, setCategories] = useState([]);
    const [tutors, setTutors] = useState([]);

    const [users, setUsers] = useState([]);
  
    // Fetch categories
   useEffect(() => {
  const fetchData = async () => {
    try {
      const [categoryRes, tutorsRes, usersRes] = await Promise.all([
        fetch(`${import.meta.env.VITE_API_URL}/category`),
        fetch(`${import.meta.env.VITE_API_URL}/tutors`),
        fetch(`${import.meta.env.VITE_API_URL}/bookedtutors`)
      ]);

      const [categoryData, tutorsData, usersData] = await Promise.all([
        categoryRes.json(),
        tutorsRes.json(),
        usersRes.json()
      ]);

      setCategories(categoryData);
      setTutors(tutorsData);
      setUsers(usersData);
    } catch (error) {
      console.error("Error fetching stats data:", error);
    }
  };

  fetchData();
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
      <div className="w-11/12 mx-auto grid grid-cols-2 md:grid-cols-4 gap-6 my-10 px-4 text-center">
      <div className="bg-background p-6 rounded-lg shadow-lg hover:scale-105 transition-transform">
        <h2 className="text-4xl md:text-5xl font-bold text-primary">{uniqueTutors.length}+</h2>
        <p className="text-gray-700">Experienced Tutors</p>
      </div>
      
      <div className="bg-background p-6 rounded-lg shadow-lg hover:scale-105 transition-transform">
        <h2 className="text-4xl md:text-5xl font-bold text-secondary">{totalReviews}+</h2>
        <p className="text-gray-700">Total Reviews</p>
      </div>
      
      <div className="bg-background p-6 rounded-lg shadow-lg hover:scale-105 transition-transform">
        <h2 className="text-4xl md:text-5xl font-bold text-accent">{categories?.length}+</h2>
        <p className="text-gray-700">Total Languages</p>
      </div>
      
      <div className="bg-background p-6 rounded-lg shadow-lg hover:scale-105 transition-transform">
        <h2 className="text-4xl md:text-5xl font-bold text-primary">{totalUser.length}+</h2>
        <p className="text-gray-700">Total Users</p>
      </div>
    </div>
    
    );
};

export default Stats;