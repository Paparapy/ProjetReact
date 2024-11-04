import { testimonials } from "../constants";

const Testimonial = () => {
  return (
    <div className="mt-20 tracking-wide">
      <h2 className="my-10 text-3xl font-semibold text-center text-orange-900 sm:text-4xl lg:text-6xl lg:my-20">
        <span className="dark:text-white">Ce que</span> les gens disent
      </h2>

      {/* integration testimonial */}

      <div className="flex flex-wrap justify-center">
        {testimonials.map((testimonial, index) => (
          <div key={index} className="w-full px-4 py-2 sm:w-1/2 lg:w-1/3">
            <div className="p-6 font-thin border rounded-md bg-neutral text-md border-neutral-800">
              <p className="lg:text-[12px] font-semibold sm:text-[10px] ">
                {testimonial.text}
              </p>

              {/* image testimonial */}

              <div className="flex items-start mt-8">
                <img
                  className="w-12 h-12 mr-6 border rounded-full border-neutral-300"
                  src={testimonial.image}
                  alt={testimonial.user}
                />
                <div>
                  {/* testimonial user */}

                  <h6 className="font-semibold text-gray-600">{testimonial.user}</h6>
                  <span className="text-sm italic font-normal text-neutral-600">
                    {testimonial.company}
                  </span>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Testimonial;
