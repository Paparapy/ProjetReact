import { CheckCircle2, Link } from "lucide-react";
import { pricingOptions } from "../constants";

const Pricing = () => {
  return (
    <div className="mt-20">
      <h2 className="my-8 text-3xl font-semibold tracking-wide text-center sm:text-4xl lg:text-4xl">
        Tarification
      </h2>

      {/* intégration de la tarification */}

      <div className="flex flex-wrap">
        {pricingOptions.map((option, index) => (
          <div key={index} className="w-full p-2 sm:w-1/2 lg:w-1/3">
            <div className="p-10 border border-neutral-700 rounded-xl">
              <p className="mb-8 lg:text-4xl sm:text-2xl">
                {option.title}
                {option.title === "Pro" && (
                  <span className="mb-4 ml-2 text-xl text-transparent bg-gradient-to-r from-orange-500 to-red-800 bg-clip-text">
                    (Le plus populaire)
                  </span>
                )}
              </p>
              <p className="mb-8">
                <span className="mt-6 mr-2 lg:text-4xl sm:text-2xl">{option.price}</span>
                <span className="tracking-tight text-neutral-400">/mois</span>
              </p>

              <ul>
                {option.features.map((feature, index) => (
                  <li key={index} className="flex items-center mt-8">
                    <CheckCircle2 />
                    <span className="ml-2 lg:text-[20px] sm:text-[15px]">{feature}</span>
                  </li>
                ))}
              </ul>
              <a
                to="#"
                className="inline-flex items-center justify-center w-full p-5 lg:text-[20px] sm:text-[15px] tracking-tight text-center text-orange-800 transition duration-200 border border-orange-900 rounded-lg cursor-pointer lg:h-12 sm:h-8 lg:mt-20 sm:mt-6 hover:bg-yellow-900 hover:text-yellow-200"
              >
                S'abonner
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Pricing;
