import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

import Spinner from "../../components/spinner/spinner.component";

import { getTopRatedProducts } from "../../redux/reducers/product/product.actions";

const ProductCarousel = () => {
  const dispatch = useDispatch();

  const topRatedProducts = useSelector((state) => state.topRatedProducts);
  const { loading, error, products } = topRatedProducts;

  useEffect(() => {
    dispatch(getTopRatedProducts());
  }, [dispatch]);

  return loading ? (
    <Spinner />
  ) : (
    // <div class="carousel relative shadow-2xl bg-white">
    //   <div class="carousel-inner relative overflow-hidden w-full">
    //     {/* <!--Slide 1--> */}
    //     {products.map((product) => (
    //       <div key={product._id}>
    //         <Link to={`product/${product._id}`}>
    //           <div
    //             class="carousel-item absolute opacity-0"
    //             style={{ height: "50vh" }}
    //           >
    //             <div class="block h-full w-full bg-indigo-500 text-white text-5xl text-center">
    //               Slide 1
    //             </div>
    //           </div>
    //           <label
    //             for="carousel-3"
    //             class="prev control-1 w-10 h-10 ml-2 md:ml-10 absolute cursor-pointer hidden text-3xl font-bold text-black hover:text-white rounded-full bg-white hover:bg-blue-700 leading-tight text-center z-10 inset-y-0 left-0 my-auto"
    //           >
    //             ‹
    //           </label>
    //           <label
    //             for="carousel-2"
    //             class="next control-1 w-10 h-10 mr-2 md:mr-10 absolute cursor-pointer hidden text-3xl font-bold text-black hover:text-white rounded-full bg-white hover:bg-blue-700 leading-tight text-center z-10 inset-y-0 right-0 my-auto"
    //           >
    //             ›
    //           </label>
    //         </Link>
    //       </div>
    //     ))}

    //     {/* <!-- Add additional indicators for each slide--> */}
    //     <ol class="carousel-indicators">
    //       <li class="inline-block mr-3">
    //         <label
    //           for="carousel-1"
    //           class="carousel-bullet cursor-pointer block text-4xl text-white hover:text-blue-700"
    //         >
    //           •
    //         </label>
    //       </li>
    //       <li class="inline-block mr-3">
    //         <label
    //           for="carousel-2"
    //           class="carousel-bullet cursor-pointer block text-4xl text-white hover:text-blue-700"
    //         >
    //           •
    //         </label>
    //       </li>
    //       <li class="inline-block mr-3">
    //         <label
    //           for="carousel-3"
    //           class="carousel-bullet cursor-pointer block text-4xl text-white hover:text-blue-700"
    //         >
    //           •
    //         </label>
    //       </li>
    //     </ol>
    //   </div>
    // </div>
    <div class="container px-5 py-5 mx-auto flex flex-wrap">
      <div class="lg:w-full mx-auto">
        {products.map((product) => (
          <Link to={`product/${product._id}`}>
            <div
              class="flex flex-wrap w-full bg-gray-100 py-32 px-10 relative mb-4 border-2 border-gray-400"
              key={product._id}
            >
              <img
                alt="gallery"
                class="w-full object-contain h-full object-center block opacity-75 absolute inset-0"
                src={product.image}
              />
              <div class="text-center relative z-10 w-full">
                <h2 class="text-2xl text-gray-900 font-medium title-font mb-2">
                  {product.name}
                </h2>
                <p class="leading-relaxed">{product.price}</p>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default ProductCarousel;
