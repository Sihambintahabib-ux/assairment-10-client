import React from "react";
import MyContainer from "./MyContainer";

const Slider = ({ datas }) => {
  const {
    // _id,
    productName,
    productImage,
    // price,
    // originCountry,
    // rating,
    // availableQuantity,
    // description,
    // category,
    // createdAt,
  } = datas;
  return (
    <MyContainer>
      {/* <div className=" w-full flex gap-5  items-center ">
        <div className="flex-1 space-y-5">
          <h1 className="text-8xl"> Products - latest trandy</h1>
          <button className="btn btn-ghost rounded-full text-lg bg-orange-400 text-white p-5 ">
          
            Get started
          </button>
        </div>
        <div className=" flex-1  ">
          <div className="carousel w-full">
            <div id="slide1" className="carousel-item relative w-full ">
              <img
                src="https://images.unsplash.com/photo-1558642452-9d2a7deb7f62?fm=jpg&q=60&w=3000&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8bWFudWthJTIwaG9uZXl8ZW58MHx8MHx8fDA%3D"
                className="w-full"
              />
              <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
                <a href="#slide4" className="btn btn-circle">
                  ❮
                </a>
                <a href="#slide2" className="btn btn-circle">
                  ❯
                </a>
              </div>
            </div>
            <div id="slide2" className="carousel-item relative w-full">
              <img
                src="https://images.unsplash.com/photo-1514432324607-a09d9b4aefdd?w=500&h=500&fit=crop"
                className="w-full"
              />
              <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
                <a href="#slide1" className="btn btn-circle">
                  ❮
                </a>
                <a href="#slide3" className="btn btn-circle">
                  ❯
                </a>
              </div>
            </div>
            <div id="slide3" className="carousel-item relative w-full">
              <img
                src="https://images.unsplash.com/photo-1605812860427-4024433a70fd?w=500&h=500&fit=crop"
                className="w-full"
              />
              <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
                <a href="#slide2" className="btn btn-circle">
                  ❮
                </a>
                <a href="#slide4" className="btn btn-circle">
                  ❯
                </a>
              </div>
            </div>
            <div id="slide4" className="carousel-item relative w-full">
              <img
                src="https://images.unsplash.com/photo-1560076649-950a9ef4a860?fm=jpg&q=60&w=3000&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8c2FmZnJvbnxlbnwwfHwwfHx8MA%3D%3D"
                className="w-full"
              />
              <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
                <a href="#slide3" className="btn btn-circle">
                  ❮
                </a>
                <a href="#slide1" className="btn btn-circle">
                  ❯
                </a>
              </div>
            </div>
          </div>
        </div>
      
      </div> */}
      <div className="w-full flex flex-col lg:flex-row gap-5 sm:gap-8 lg:gap-10 items-center px-4 sm:px-6 lg:px-8 py-8 sm:py-12 lg:py-16">
        {/* Text Content */}
        <div className="flex-1 space-y-4 sm:space-y-6 text-center lg:text-left">
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl 2xl:text-8xl font-bold leading-tight">
            Products - latest trendy
          </h1>

          <button className="btn btn-ghost rounded-full text-base sm:text-lg md:text-xl bg-orange-400 hover:bg-orange-500 text-white px-6 sm:px-8 py-3 sm:py-4">
            Get started
          </button>
        </div>

        {/* Carousel */}
        <div className="flex-1 w-full">
          <div className="carousel w-full rounded-lg sm:rounded-xl overflow-hidden shadow-lg">
            <div id="slide1" className="carousel-item relative w-full">
              <img
                src="https://images.unsplash.com/photo-1558642452-9d2a7deb7f62?fm=jpg&q=60&w=3000&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8bWFudWthJTIwaG9uZXl8ZW58MHx8MHx8fDA%3D"
                className="w-full h-64 sm:h-80 md:h-96 lg:h-[500px] object-cover"
                alt="Product 1"
              />
              <div className="absolute left-2 right-2 sm:left-5 sm:right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
                <a href="#slide4" className="btn btn-circle btn-sm sm:btn-md">
                  ❮
                </a>
                <a href="#slide2" className="btn btn-circle btn-sm sm:btn-md">
                  ❯
                </a>
              </div>
            </div>

            <div id="slide2" className="carousel-item relative w-full">
              <img
                src="https://images.unsplash.com/photo-1514432324607-a09d9b4aefdd?w=500&h=500&fit=crop"
                className="w-full h-64 sm:h-80 md:h-96 lg:h-[500px] object-cover"
                alt="Product 2"
              />
              <div className="absolute left-2 right-2 sm:left-5 sm:right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
                <a href="#slide1" className="btn btn-circle btn-sm sm:btn-md">
                  ❮
                </a>
                <a href="#slide3" className="btn btn-circle btn-sm sm:btn-md">
                  ❯
                </a>
              </div>
            </div>

            <div id="slide3" className="carousel-item relative w-full">
              <img
                src="https://images.unsplash.com/photo-1605812860427-4024433a70fd?w=500&h=500&fit=crop"
                className="w-full h-64 sm:h-80 md:h-96 lg:h-[500px] object-cover"
                alt="Product 3"
              />
              <div className="absolute left-2 right-2 sm:left-5 sm:right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
                <a href="#slide2" className="btn btn-circle btn-sm sm:btn-md">
                  ❮
                </a>
                <a href="#slide4" className="btn btn-circle btn-sm sm:btn-md">
                  ❯
                </a>
              </div>
            </div>

            <div id="slide4" className="carousel-item relative w-full">
              <img
                src="https://images.unsplash.com/photo-1560076649-950a9ef4a860?fm=jpg&q=60&w=3000&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8c2FmZnJvbnxlbnwwfHwwfHx8MA%3D%3D"
                className="w-full h-64 sm:h-80 md:h-96 lg:h-[500px] object-cover"
                alt="Product 4"
              />
              <div className="absolute left-2 right-2 sm:left-5 sm:right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
                <a href="#slide3" className="btn btn-circle btn-sm sm:btn-md">
                  ❮
                </a>
                <a href="#slide1" className="btn btn-circle btn-sm sm:btn-md">
                  ❯
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </MyContainer>
  );
};

export default Slider;
