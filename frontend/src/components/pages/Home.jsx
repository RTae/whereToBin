import React from "react";
import LoadingAni from "../../static/animation/SLoading";

const Home = ({ Upload, onChange, Done }) => {
  return (
    <section className="px-2 py-12 bg-white md:px-0" id="home">
      <div className="container items-center max-w-6xl px-8 mx-auto xl:px-5">
        <div className="flex flex-wrap items-center sm:-mx-3">
          <div className="w-full md:w-1/2 md:px-3">
            <div className="w-full pb-6 space-y-6 sm:max-w-md lg:max-w-lg md:space-y-4 lg:space-y-8 xl:space-y-9 sm:pr-5 lg:pr-0 md:pb-0">
              <h1 className="text-3xl font-extrabold tracking-tight text-gray-900 sm:text-4xl md:text-3xl lg:text-4xl xl:text-5xl text-left">
                <span className="block">Zero Waste Together,</span>
                <span className="block text-green-500 xl:inline" id="">
                  Just Waste Separate.
                </span>
              </h1>
              <p
                className="mx-auto text-base text-gray-500 sm:max-w-md lg:text-xl md:max-w-3xl text-left"
                id=""
              >
                human society sustains itself by transforming nature into
                garbage.
              </p>
              <form onSubmit={Upload}>
                <div className="relative flex flex-col sm:flex-row sm:space-x-4">
                  <label
                    className="flex items-center w-full px-6 py-3 mb-3 text-lg text-white bg-green-500 rounded-md sm:mb-0 hover:bg-green-700 sm:w-auto cursor-pointer"
                    htmlFor="capture-photo"
                  >
                    Camera
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="w-5 h-5 ml-1"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <line x1="5" y1="12" x2="19" y2="12"></line>
                      <polyline
                        points="12 5 19 12 12 19"
                        className=""
                      ></polyline>
                    </svg>
                  </label>
                  <input
                    className="hidden"
                    type="file"
                    accept="image/*"
                    capture="user"
                    onChange={onChange}
                    id="capture-photo"
                  />
                  <label
                    className="flex items-center px-6 py-3 text-gray-500 bg-gray-100 rounded-md hover:bg-gray-200 hover:text-gray-600 cursor-pointer"
                    htmlFor="upload-photo"
                  >
                    Upload photo
                  </label>
                  <input
                    className="hidden"
                    type="file"
                    accept="image/*"
                    onChange={onChange}
                    id="upload-photo"
                  />
                </div>
              </form>
            </div>
          </div>
          <div className="w-full md:w-1/2">
            <div className="w-full h-auto overflow-hidden rounded-md sm:rounded-xl">
              <img
                src="https://res.cloudinary.com/khaokruacooking/image/upload/v1613128958/SVG/Recycling_Waste_ddzoby.svg"
                className=""
                id=""
                alt="home-chibli"
              />
            </div>
          </div>
        </div>
        <div>{Done ? null : <LoadingAni w={300} h={300} />}</div>
      </div>
    </section>
  );
};

export default Home;
