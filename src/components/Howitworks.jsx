
const Howitworks = () => {
    return (
       // Components/HowItWorks.jsx
<section className="py-12 bg-background dark:bg-darkBackground text-center">
  <h2 className="text-3xl md:text-4xl font-bold text-primary mb-10">How It Works</h2>
  <div className="grid md:grid-cols-3 gap-8 w-11/12 mx-auto">
    {[
      { step: '1', title: 'Browse Tutors', desc: 'Explore tutors by category and skill.' },
      { step: '2', title: 'Book a Session', desc: 'Choose your preferred tutor and time.' },
      { step: '3', title: 'Start Learning', desc: 'Connect and learn through your dashboard.' }
    ].map((item) => (
      <div key={item.step} className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow hover:scale-105 transition-transform">
        <div className="text-4xl font-bold text-secondary mb-2">{item.step}</div>
        <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
        <p className="text-gray-600 dark:text-gray-300">{item.desc}</p>
      </div>
    ))}
  </div>
</section>

    );
};

export default Howitworks;