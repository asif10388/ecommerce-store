import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Helmet } from "react-helmet";

import Product from "../../components/product/product.component";
import Spinner from "../../components/spinner/spinner.component";
import Pagination from "../../components/pagination/pagination.component";
import ProductCarousel from "../../components/product-carousel/product-carousel.component";

import { getProducts } from "../../redux/reducers/product/product.actions";

const Homepage = ({ match }) => {
  const keyword = match.params.keyword;

  const pageNumber = match.params.pageNumber || 1;

  const dispatch = useDispatch();

  const productList = useSelector((state) => state.productList);
  const { loading, products, page, pages } = productList;

  useEffect(() => {
    dispatch(getProducts(keyword, pageNumber));
  }, [dispatch, keyword, pageNumber]);

  return (
    <>
      <Helmet>
        <title>Welcome to my store</title>
      </Helmet>
      {!keyword && <ProductCarousel />}
      <section className="text-gray-700 body-font min-h-screen">
        <div className="container px-5 pt-24 pb-12 mx-auto flex flex-col items-center">
          <div className="flex flex-wrap">
            {loading ? (
              <Spinner />
            ) : (
              <>
                {products.map((product) => (
                  <Product key={product._id} product={product} />
                ))}
              </>
            )}
          </div>
          <Pagination
            pages={pages}
            page={page}
            keyword={keyword ? keyword : ""}
          />
        </div>
      </section>
    </>
  );
};

export default Homepage;
