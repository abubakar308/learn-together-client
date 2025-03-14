import { useState } from "react";
import { Link, useLoaderData } from "react-router-dom";

const FindTutors = () => {
  const { tutors, category } = useLoaderData();

  const [searchTerm, setSearchTerm] = useState("");
  const [sortBy, setSortBy] = useState("name");

  // Filter and sort tutors
  const filteredTutors = tutors
    .filter((tutor) =>
      tutor.displayName.toLowerCase().includes(searchTerm.toLowerCase())
    )
    .sort((a, b) => {
      if (sortBy === "name") return a.displayName.localeCompare(b.displayName);
      if (sortBy === "category") return a.category.localeCompare(b.category);
      if (sortBy === "review") return b.review - a.review;
      return 0;
    });

  return (
    <div className="w-11/12 mx-auto mt-24">
      {/* Search and Sort Controls */}
      <div className="flex flex-col md:flex-row items-center justify-between gap-4 mb-6">
        <input
          type="text"
          placeholder="Search by name..."
          className="w-full md:w-1/3 px-4 py-2 border rounded-lg focus:outline-none focus:ring focus:ring-primary dark:bg-gray-800 dark:text-white"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />

        <select
          className="w-full md:w-1/4 px-4 py-2 border rounded-lg focus:outline-none focus:ring focus:ring-primary dark:bg-gray-800 dark:text-white"
          value={sortBy}
          onChange={(e) => setSortBy(e.target.value)}
        >
          <option value="name">Sort by Name</option>
          <option value="category">Sort by Category</option>
          <option value="review">Sort by Review</option>
        </select>
      </div>

      {/* Title */}
      <h2 className="text-2xl text-center py-3 text-primary dark:text-indigo-300">
        {category ? `${category} Tutors` : "All Tutors"}: {filteredTutors.length}
      </h2>

      {/* Tutor Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {filteredTutors.map((tutor) => (
          <div
            key={tutor._id}
            className="flex flex-col items-center p-5 border border-gray-300 dark:border-gray-700 rounded-lg shadow-md hover:shadow-lg transition-all dark:bg-gray-900"
          >
            {/* Tutor Image */}
            <img
              className="h-24 w-24 rounded-full object-cover border-2 border-primary"
              src={tutor.image}
              alt={tutor.displayName}
            />

            {/* Tutor Info */}
            <div className="mt-3 text-center w-44">
              <p className="text-lg font-semibold truncate text-gray-800 dark:text-white">
                {tutor.displayName}
              </p>
              <p className="text-sm mt-1 text-gray-600 dark:text-gray-400">
                {tutor.category}
              </p>
              <p className="text-sm mt-1 text-gray-500 dark:text-gray-400">
                ⭐ {tutor.review} Reviews
              </p>
            </div>

            {/* Details Button */}
            <Link
              to={`/findtutors/${tutor._id}`}
              className="mt-4 bg-primary text-white px-5 py-2 rounded-lg hover:bg-blue-700 transition-all"
            >
              View Profile
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FindTutors;
