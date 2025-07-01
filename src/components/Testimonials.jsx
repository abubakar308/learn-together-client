const Testimonials = () => {
    const testimonials = [
    {
      id: 1,
      name: "Amina Rahman",
      country: "Bangladesh",
      text: "Learn Together helped me improve my English fluency. My tutor was very patient and supportive!",
      image: "https://i.ibb.co/35yLrgYB/c-HJpdm-F0-ZS9sci9pb-WFn-ZXMvd2-Vic2l0-ZS8y-MDI0-LTA4-L3-Jhd3-Bpe-GVs-X29m-Zmlj-ZV8z-Ml9o-YXBwe-V9wb.jpg",
    },
    {
      id: 2,
      name: "Carlos Mendoza",
      country: "Mexico",
      text: "I loved learning French here. The platform is easy to use and my tutor was excellent.",
      image: "https://i.ibb.co/W47QDr2v/preview16.jpg",
    },
    {
      id: 3,
      name: "Sophie Dubois",
      country: "France",
      text: "A wonderful platform for language learning! I booked a Spanish tutor and it was a great experience.",
      image: "https://i.ibb.co/35yLrgYB/c-HJpdm-F0-ZS9sci9pb-WFn-ZXMvd2-Vic2l0-ZS8y-MDI0-LTA4-L3-Jhd3-Bpe-GVs-X29m-Zmlj-ZV8z-Ml9o-YXBwe-V9wb.jpg",
    },
  ];

  return (
    <section className="bg-background dark:bg-darkBackground py-16">
      <div className="max-w-6xl mx-auto px-4 text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-primary mb-10">
          Testimonials
        </h2>

        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map(({ id, name, country, text, image }) => (
            <div
              key={id}
              className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-md hover:shadow-lg transition"
            >
              <img
                src={image}
                alt={name}
                className="w-16 h-16 rounded-full mx-auto mb-4 border-2 border-secondary"
              />
              <h3 className="text-xl font-semibold text-primary">{name}</h3>
              <p className="text-sm text-gray-500 mb-2">{country}</p>
              <p className="text-gray-700 dark:text-gray-300 text-sm">
                “{text}”
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;