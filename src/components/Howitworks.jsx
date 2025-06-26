import { FaBookOpen, FaChalkboardTeacher, FaSearch, FaUserPlus } from "react-icons/fa";

const Howitworks = () => {
    const steps = [
    {
      icon: <FaUserPlus className="text-4xl text-secondary mb-4" />,
      title: "Sign Up",
      desc: "Create your free account to start learning and booking tutors."
    },
    {
      icon: <FaSearch className="text-4xl text-secondary mb-4" />,
      title: "Search Tutor",
      desc: "Browse through various language experts to find your perfect match."
    },
    {
      icon: <FaBookOpen className="text-4xl text-secondary mb-4" />,
      title: "Book",
      desc: "Securely book your preferred tutor for a convenient time slot."
    },
    {
      icon: <FaChalkboardTeacher className="text-4xl text-secondary mb-4" />,
      title: "Learn",
      desc: "Join your live sessions and begin your learning journey!"
    }
  ];

  return (
    <section className="bg-background dark:bg-darkBackground py-16">
      <div className="text-center mb-12">
        <h2 className="text-4xl font-bold text-primary">How It Works</h2>
        <p className="text-gray-600 dark:text-gray-300 mt-2 text-lg">Get started in just four easy steps</p>
      </div>

      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 max-w-7xl mx-auto px-6">
        {steps.map((step, idx) => (
          <div
            key={idx}
            className="bg-white dark:bg-gray-800 rounded-xl p-6 text-center shadow-lg hover:shadow-xl transition hover:scale-105"
          >
          <div className="flex items-center justify-center mb-4">
      {step.icon}
    </div>
            <h3 className="text-xl font-semibold text-primary mb-2">{step.title}</h3>
            <p className="text-gray-700 dark:text-gray-300 text-sm">{step.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Howitworks;