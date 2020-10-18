import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

import {
  getProducts,
  deleteProduct,
  createProduct,
} from "../../redux/reducers/product/product.actions";

import { PRODUCT_CREATE_RESET } from "../../redux/reducers/product/product.types";

import Spinner from "../../components/spinner/spinner.component";
import Pagination from "../../components/pagination/pagination.component";

const ProductListPage = ({ history, match }) => {
  const pageNumber = match.params.pageNumber || 1;

  const dispatch = useDispatch();

  const userLogin = useSelector((state) => state.userLogin);
  const { userInfo } = userLogin;

  const productList = useSelector((state) => state.productList);
  const { loading, error, products, page, pages } = productList;

  const productDelete = useSelector((state) => state.productDelete);
  const {
    loading: loadingDelete,
    error: errorDelete,
    success: successDelete,
  } = productDelete;

  const productCreate = useSelector((state) => state.productCreate);
  const {
    loading: loadingCreate,
    error: errorCreate,
    success: successCreate,
    product: createdProduct,
  } = productCreate;

  useEffect(() => {
    dispatch({ type: PRODUCT_CREATE_RESET });

    if (!userInfo.isAdmin) {
      history.push("/login");
    }
    if (successCreate) {
      history.push(`/admin/product/${createdProduct._id}/edit`);
    } else {
      dispatch(getProducts("", pageNumber));
    }
  }, [
    dispatch,
    history,
    userInfo,
    successDelete,
    successCreate,
    createdProduct,
    pageNumber,
  ]);

  const deleteProductHandler = (id) => {
    if (window.confirm(`Are you sure you want to delete this user`)) {
      dispatch(deleteProduct(id));
    }
  };

  const createProductHandler = () => {
    dispatch(createProduct());
  };

  return (
    <>
      <div className="flex">
        <aside className="relative bg-sidebar h-screen w-64 hidden sm:block shadow-xs admin-sidebar">
          <div className="p-6">
            <Link
              to="/profile"
              className="text-black text-3xl font-semibold uppercase hover:text-gray-300"
            >
              Dashboard
            </Link>
            {userInfo && userInfo.isAdmin ? (
              <button
                className="w-full bg-white cta-btn font-semibold py-2 mt-5 rounded-br-lg rounded-bl-lg rounded-tr-lg shadow-md hover:shadow-lg hover:bg-gray-300 flex items-center justify-center"
                onClick={createProductHandler}
              >
                <i className="fas fa-plus mr-3"></i> Add Product
              </button>
            ) : null}
          </div>
          <nav className="text-black text-base font-semibold pt-3">
            <Link
              to="/profile"
              className="flex items-center text-black opacity-75 hover:opacity-100 py-4 pl-6 nav-item"
            >
              <i class="fas fa-shopping-basket mr-3"></i>
              Orders
            </Link>
            <Link
              to="/profile/update"
              className="flex items-center text-black opacity-75 hover:opacity-100 py-4 pl-6 nav-item"
            >
              <i className="fas fa-align-left mr-3"></i>
              Update Your Info
            </Link>
          </nav>
        </aside>
        {loadingDelete && <Spinner />}
        {loadingCreate && <Spinner />}
        {loading ? (
          <Spinner />
        ) : (
          <div class="w-full overflow-scroll border-t flex flex-col min-h-screen">
            <table class="min-w-full leading-normal">
              <thead>
                <tr>
                  <th class="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
                    Id
                  </th>
                  <th class="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
                    Name
                  </th>
                  <th class="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
                    Price
                  </th>
                  <th class="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
                    Category
                  </th>
                  <th class="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
                    Brand
                  </th>
                </tr>
              </thead>
              <tbody>
                {products.map((product) => (
                  <tr key={product._id}>
                    <td class="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                      <div class="flex items-center">
                        <p class="text-gray-900 whitespace-no-wrap">
                          # {product._id}
                        </p>
                      </div>
                    </td>
                    <td class="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                      <p class="text-gray-900 whitespace-no-wrap">
                        {product.name}
                      </p>
                    </td>
                    <td class="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                      <p class="text-gray-900 whitespace-no-wrap">
                        {product.price}
                      </p>
                    </td>
                    <td class="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                      <p class="text-gray-900 whitespace-no-wrap">
                        {product.category}
                      </p>
                    </td>
                    <td class="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                      <p class="text-gray-900 whitespace-no-wrap">
                        {product.brand}
                      </p>
                    </td>
                    <td class="px-5 flex py-5 border-b border-gray-200 bg-white text-sm">
                      <Link to={`/admin/product/${product._id}/edit`}>
                        <button class="flex mx-auto text-white bg-gray-900 border-0 py-2 px-8 focus:outline-none hover:bg-gray-700 rounded text-lg">
                          Edit
                        </button>
                      </Link>
                      <button
                        class="flex mx-auto text-red border-0 py-2 px-8 focus:outline-none rounded text-lg"
                        onClick={() => deleteProductHandler(product._id)}
                      >
                        <i class="fas fa-trash-alt"></i>
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
            <Pagination pages={pages} page={page} isAdmin={true} />
          </div>
        )}
      </div>
    </>
  );
};

export default ProductListPage;
