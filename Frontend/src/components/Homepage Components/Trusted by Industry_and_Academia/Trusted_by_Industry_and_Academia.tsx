// Trusted_by_Industry_and_Academia.tsx
const Trusted_by_Industry_and_Academia = () => {
  const logos = [
    {
      src: "/Images/industry_partner_logos/sarvatra_ai.jpeg",
      alt: "Sarvatra AI",
    },
    // Add more partner logos here
  ];

  return (
    <section className="bg-[#a5b6ae] py-16">
      <div className="max-w-screen-2xl mx-auto px-5 lg:px-[75px]">
        {/* Centered Title */}
        <h3 className="text-[#294b3c] text-3xl sm:text-4xl lg:text-5xl leading-snug text-center mb-12">
          Trusted by Industry & Academia
        </h3>

        {/* Static, Responsive Logo Grid */}
        <div className="flex flex-wrap items-center justify-center gap-12 md:gap-16 lg:gap-20">
          {logos.map((logo, idx) => (
            <img
              key={idx}
              src={logo.src}
              alt={logo.alt}
              className="h-16 sm:h-20 md:h-22 lg:h-24 object-contain transition-transform hover:scale-110"
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Trusted_by_Industry_and_Academia;