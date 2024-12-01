'use client';
import Image from "next/image";
import { useState } from "react";
import products from "../data/products";

const ProductSection = () => {
  const [modalOpen, setModalOpen] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState(null);

  const openModal = (product) => {
    setSelectedProduct(product);
    setModalOpen(true);
  };

  const closeModal = () => {
    setModalOpen(false);
    setSelectedProduct(null);
  };

  const addToCart = () => {
    alert(`${selectedProduct.name} has been added to the cart for ${selectedProduct.price}!`);
    closeModal();
  };

  return (
    <section className="py-16 bg-gray-100">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-4xl font-semibold mb-8 text-center">Our Products</h2>

        {products.map((category, index) => (
          <div key={index} className="mb-12">
            <h3 className="text-2xl font-bold mb-6">{category.category}</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
              {category.items.map((product) => (
                <div
                  key={product.id}
                  className="relative rounded-lg overflow-hidden shadow-lg transform transition-transform duration-300 ease-in-out hover:scale-105 hover:shadow-2xl"
                >
                  <Image
                    src={product.image}
                    alt={product.name}
                    width={500}
                    height={500}
                    className="w-full h-64 object-cover transition-transform duration-300 ease-in-out cursor-pointer"
                    onClick={() => openModal(product)}
                  />
                  <div className="p-4 bg-white transition-all duration-300 ease-in-out opacity-90 hover:opacity-100">
                    <h4 className="text-lg font-semibold">{product.name}</h4>
                    <p className="text-gray-600">{product.price}</p>
                    <button
                      className="mt-4 w-full bg-[#134e4a] text-white py-2 rounded  hover:bg-[#ff6a00]"
                      onClick={() => openModal(product)}
                    >
                      View Details
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>

      {modalOpen && selectedProduct && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white p-8 rounded-lg max-w-lg w-full">
            <button
              className="absolute top-4 right-4 text-2xl font-semibold text-gray-600"
              onClick={closeModal}
            >
              &times;
            </button>
            <div className="flex flex-col items-center">
              <Image
                src={selectedProduct.image}
                alt={selectedProduct.name}
                width={800}  // Larger width for better modal image size
                height={800} // Maintain aspect ratio
                className="object-contain w-full max-h-96"
              />
              <h3 className="text-2xl font-semibold mt-4">{selectedProduct.name}</h3>
              <p className="text-lg text-gray-600 mt-2">{selectedProduct.price}</p>
              <p className="text-gray-500 mt-4">{selectedProduct.description}</p>
              <button
                className="mt-6 w-full bg-[#134e4a] text-white py-2 rounded  hover:bg-[#ff6a00]"
                onClick={addToCart}
              >
                Add to Cart
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default ProductSection;
