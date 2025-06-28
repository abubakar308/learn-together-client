import { FaChalkboardTeacher } from "react-icons/fa";
import { Link } from "react-router-dom";

const BecomeATutor = () => {
    return (
      <section className=" py-14 text-center">
      <div className="max-w-4xl mx-auto px-4">
        <div className="flex flex-col items-center gap-4">
          <FaChalkboardTeacher className="text-5xl text-accent" />
          <h2 className="text-4xl font-bold text-primary">Become a Tutor</h2>
          <p className="text-lg max-w-xl">
            Share your skills and earn by teaching students across the globe. Join our network of passionate educators today!
          </p>
          <Link
            to="/addtutorials"
            className="mt-4 inline-block px-6 py-3 bg-secondary text-white rounded-lg hover:bg-amber-500 transition"
          >
            Start Teaching
          </Link>
        </div>
      </div>
    </section>
    );
};

export default BecomeATutor;