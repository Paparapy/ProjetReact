import { features } from "../constants";

const FeatureSection = () => {
  return (
    <div className="relative min-h-screen mt-10 border-b border-neutral-800">
      <div className="text-center">
        <span className="px-2 py-1 text-sm font-medium text-orange-500 uppercase rounded-full bg-neutral-900">
          Fonctionnalité
        </span>
        <h2 className="mt-10 text-3xl font-semibold tracking-wide sm:text-4xl lg:text-6xl lg:mt-20">
          Construisez facilement
          <span className="text-transparent bg-gradient-to-r from-orange-500 to-red-800 bg-clip-text">
            {" "}votre code
          </span>
        </h2>
      </div>

      <div className="flex flex-wrap sm:mt-10 lg:mt-20">
        {features.map((feature, index) => (
          <div key={index} className="w-full p-4 sm:w-1/2 lg:w-1/3">
            <div className="flex flex-col w-full p-4 h-[300px] border-2 border-orange-700 animated-border shadow-lg shadow-orange-500">
              <div className="flex items-center justify-center w-10 h-10 p-2 mx-auto mb-4 text-orange-700 rounded-full bg-neutral-900">
                {feature.icon}
              </div>
              <div className="text-center">
                <h5 className="mt-1 mb-4 text-xl font-semibold lg:text-[20px] sm:text-[15px]">{feature.text}</h5>
                <p className="p-2 text-justify text-md text-neutral-500 lg:text-[15px] sm:text-[12px]">
                  {feature.description}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FeatureSection;
