import groupclass from '../assets/groupclass.jpeg'
import community from '../assets/community-support.avif'
const WeOffer = () => {
    return (
        <div>
            <section className="bg-gray-50 py-16">
      <div className="max-w-7xl mx-auto px-6">
        <h2 className="text-4xl font-bold text-center text-gray-800 mb-12">
          What Else We Offer
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          {/* Group Class Section */}
          <div className="flex flex-col items-center md:items-start">
            <div className="relative">
              <img
                src={groupclass}
                alt="Group Class"
                className="rounded-full shadow-lg"
              />
            
            </div>
            <h3 className="text-xl font-semibold text-gray-800 mt-6">
              Group Class
            </h3>
            <p className="text-gray-600 mt-4 text-center md:text-left">
              Engaging online classes led by expert teachers with 2-6 students worldwide.
            </p>
          </div>

          {/* Community Section */}
          <div className="flex flex-col items-center md:items-start">
            <div className="relative">
              <img
                src={community}
                alt="Community"
                className="rounded-full shadow-lg"
              />
            </div>
            <h3 className="text-xl font-semibold text-gray-800 mt-6">
              Learn Together Community
            </h3>
            <p className="text-gray-600 mt-4 text-center md:text-left">
              Find engaging podcasts, quizzes, and articles to make learning fun and collaborative.
            </p>
          </div>
        </div>
      </div>
    </section>
        </div>
    );
};

export default WeOffer;