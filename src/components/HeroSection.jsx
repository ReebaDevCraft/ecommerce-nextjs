const HeroSection = () => {
  return (
    <section className="bg-gradient-to-r from-[#134e4a] to-[#0f766e] text-white py-16 px-6">
      <div className="container mx-auto flex flex-col md:flex-row items-center space-y-8 md:space-y-0">
        <div className="flex-1 text-center md:text-left space-y-6">
          <h1 className="text-4xl md:text-5xl font-bold mb-6 leading-snug hover:scale-105 transition-transform duration-500">
            Discover Your Perfect Style
          </h1>
          <p className="text-xl md:text-2xl mb-4 leading-relaxed font-light">Shop The Latest Trends Now</p>
          <div className="flex justify-center md:justify-start items-center space-x-6">
            <button className="bg-white text-[#134e4a] px-3 py-2 rounded-full text-lg font-medium transition-all duration-300 transform hover:bg-[#ff6a00] hover:text-white hover:scale-110 shadow-lg">
              Discover Trends
            </button>
            <p className="text-lg font-light">Subscribe Get 25% Offer</p>
          </div>
        </div>

        <div className="flex-1 flex justify-center relative">
          <div className="rounded-full bg-gradient-to-tr from-[#245652] via-[#134e4a] to-transparent p-4 shadow-xl">
            <img
              src="/hero-image.png"
              alt="Hero Image"
              className="rounded-full shadow-lg transition-all duration-500 hover:scale-105 hover:shadow-2xl"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
