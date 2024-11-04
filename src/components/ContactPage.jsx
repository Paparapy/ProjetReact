import React from "react";

const ContactPage = () => {
  return (
    <div className="flex items-center justify-center w-full min-h-screen py-8 bg-gradient-to-r from-black via-orange-600 to-black">
      <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
        <div className="text-center md:text-left md:pr-8">
          <h1 className="w-full p-1 mb-4 text-3xl font-bold text-white rounded-lg shadow-lg shadow-black animated-text md:text-5xl lg:text-6xl">
            Contactez Nous
          </h1>
        </div>
        <div>
          <form className="space-y-4">
            <div>
              <label htmlFor="name" className="block text-white">
                Nom
              </label>
              <input
                type="text"
                id="name"
                className="w-full p-2 border rounded-md shadow-lg outline-none shadow-black"
              />
            </div>
            <div>
              <label htmlFor="username" className="block text-white">
                Pseudo
              </label>
              <input
                type="text"
                id="username"
                className="w-full p-2 border rounded-md shadow-lg outline-none shadow-black"
              />
            </div>
            <div>
              <label htmlFor="email" className="block text-white">
                Email
              </label>
              <input
                type="email"
                id="email"
                className="w-full p-2 border rounded-md shadow-lg outline-none shadow-black"
              />
            </div>
            <div>
              <label htmlFor="comment" className="block text-white">
                Commentaire
              </label>
              <textarea
                id="comment"
                className="w-full p-2 border rounded-md shadow-lg outline-none shadow-black"
              ></textarea>
            </div>
            <button
              type="submit"
              className="w-[150px] p-2  text-white hover:bg-orange-700 bg-orange-800 border-2 border-white rounded-md hover:border-transparent"
            >
              Envoyer
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ContactPage;
