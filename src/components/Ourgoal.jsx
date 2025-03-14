import goal from '../assets/goal.jpeg'
const Ourgoal = () => {
    return (
      <div>
      <section className="bg-background py-16">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <h2 className="text-4xl font-bold text-primary mb-6">Our Goal</h2>
          <p className="text-lg text-gray-600 leading-relaxed mb-8">
            At <span className="font-semibold text-primary">Learn Together</span>, our mission is to make high-quality education accessible to everyone, anywhere in the world. We aim to bridge the gap between learners and expert tutors by providing a seamless, efficient, and personalized learning platform.
          </p>
          <img
            src={goal}
            alt="Our Goal"
            className="rounded-lg shadow-lg w-full mx-auto"
          />
        </div>
      </section>
    </div>
    );
};

export default Ourgoal;