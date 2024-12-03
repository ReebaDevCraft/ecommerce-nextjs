const TestimonialSection = () => {
    return (
      <section id="testimonials" className="h-screen bg-white flex justify-center items-center">
        <div className="text-center">
          <h2 className="text-3xl font-bold mb-6">Customer Testimonials</h2>
          <p className="text-lg text-gray-700">See what our customers are saying about us!</p>
  
          {/* Example Testimonials */}
          <div className="mt-10">
            <div className="max-w-md mx-auto bg-gray-100 p-6 rounded-lg shadow-md">
              <p className="text-xl italic">"Amazing products! Fast delivery and great quality."</p>
              <h3 className="mt-4 font-semibold">John Doe</h3>
              <p className="text-gray-500">Verified Customer</p>
            </div>
  
            <div className="max-w-md mx-auto bg-gray-100 p-6 mt-6 rounded-lg shadow-md">
              <p className="text-xl italic">"I loved my purchase. Excellent customer service too!"</p>
              <h3 className="mt-4 font-semibold">Jane Smith</h3>
              <p className="text-gray-500">Verified Customer</p>
            </div>
          </div>
        </div>
      </section>
    );
  };
  
  export default TestimonialSection;
  