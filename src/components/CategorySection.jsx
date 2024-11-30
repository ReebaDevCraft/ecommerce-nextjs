import Image from 'next/image';
import categories from '../data/categories';

const CategorySection = () => {
  return (
    <section className="py-16 bg-gray-100">
      <div className="container mx-auto text-center">
        <h2 className="text-4xl font-semibold mb-8">Shop by Categories</h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 md:gap-8 xl:gap-12">
          {categories.map((category, index) => (
            <div
              key={index}
              className="relative rounded-xl overflow-hidden shadow-lg group transform transition-all duration-300 ease-in-out hover:scale-105 hover:shadow-2xl bg-white p-4 fade-in"
            >
              <Image
                src={category.image}
                alt={category.name}
                width={500}
                height={500}
                className="w-full h-full object-cover rounded-xl transition-all duration-300 ease-in-out group-hover:scale-110"
              />
              <div className="absolute bottom-4 left-4 text-white font-bold text-lg bg-black bg-opacity-50 px-4 py-2 rounded opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                {category.name}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CategorySection;
