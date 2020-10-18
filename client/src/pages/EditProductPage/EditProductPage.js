import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import axios from "axios";

import Spinner from "../../components/spinner/spinner.component";
import SideBar from "../../components/sidebar/sidebar.component";

import {
  getProductDetails,
  updateProduct,
} from "../../redux/reducers/product/product.actions";

import { PRODUCT_UPDATE_RESET } from "../../redux/reducers/product/product.types";

const EditProductPage = ({ match, history }) => {
  const productId = match.params.id;

  const [productData, setProductData] = useState({
    name: "",
    price: 0,
    image: "",
    brand: "",
    category: "",
    countInStock: 0,
    description: "",
  });

  const [uploading, setUploading] = useState(false);

  const {
    name,
    price,
    image,
    brand,
    category,
    countInStock,
    description,
  } = productData;

  const onChange = (e) =>
    setProductData({ ...productData, [e.target.name]: e.target.value });

  const dispatch = useDispatch();

  const productDetails = useSelector((state) => state.productDetails);
  const { loading, error, product } = productDetails;

  const productUpdate = useSelector((state) => state.productUpdate);
  const {
    loading: loadingUpdate,
    error: errorUpdate,
    success: successUpdate,
  } = productUpdate;

  useEffect(() => {
    if (successUpdate) {
      dispatch({ type: PRODUCT_UPDATE_RESET });
      history.push("/admin/productlist");
    } else {
      if (!product.name || product._id !== productId) {
        dispatch(getProductDetails(productId));
      } else {
        setProductData({
          ...productData,
          name: product.name,
          price: product.price,
          image: product.image,
          brand: product.brand,
          category: product.category,
          countInStock: product.countInStock,
          description: product.description,
        });
      }
    }
  }, [dispatch, history, productId, product, successUpdate]);

  const uploadFileHandler = async (e) => {
    const file = e.target.files[0];
    const formData = new FormData();
    formData.append("image", file);
    setUploading(true);

    try {
      const config = {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      };

      const { data } = await axios.post("/api/upload", formData, config);

      setProductData({
        ...productData,
        image: data,
      });
      setUploading(false);
    } catch (error) {
      console.error(error);
      setUploading(false);
    }
  };

  const onSubmit = (e) => {
    e.preventDefault();
    dispatch(
      updateProduct({
        _id: productId,
        name,
        price,
        image,
        brand,
        category,
        countInStock,
        description,
      })
    );
  };

  return (
    <>
      <div className="flex">
        <SideBar />
        <main class="w-full flex-grow p-6">
          <div class="w-full lg:w-1/2 my-6 pr-0 lg:pr-2">
            <p class="text-xl pb-6 flex items-center">
              <i class="fas fa-list mr-3"></i> Edit Product
            </p>
            {loadingUpdate && <Spinner />}
            {loading ? (
              <Spinner />
            ) : (
              <div class="leading-loose">
                <form
                  class="p-10 bg-white rounded shadow-sm"
                  onSubmit={(e) => onSubmit(e)}
                >
                  <div class="">
                    <label class="block text-sm text-gray-600" for="name">
                      Name
                    </label>
                    <input
                      class="w-full px-5 py-1 text-gray-700 bg-gray-200 rounded"
                      id="name"
                      type="text"
                      placeholder="Your Name"
                      aria-label="Name"
                      name="name"
                      value={name}
                      onChange={(e) => onChange(e)}
                    />
                  </div>
                  <div class="mt-2">
                    <label class="block text-sm text-gray-600" for="price">
                      Price
                    </label>
                    <input
                      class="w-full px-5  py-1 text-gray-700 bg-gray-200 rounded"
                      id="price"
                      type="number"
                      placeholder="Your price"
                      aria-label="price"
                      name="price"
                      value={price}
                      onChange={(e) => onChange(e)}
                    />
                  </div>

                  <div class="mt-2">
                    <label class="block text-sm text-gray-600" for="image">
                      Image
                    </label>
                    <input
                      class="w-full px-5  py-1 text-gray-700 bg-gray-200 rounded"
                      id="image"
                      type="text"
                      placeholder="Your image"
                      aria-label="image"
                      name="image"
                      value={image}
                      onChange={(e) => onChange(e)}
                    />
                  </div>

                  <div class="mt-2">
                    <label class="block text-sm text-gray-600" for="image">
                      Choose Image
                    </label>
                    <input
                      class="w-full px-5  py-1 text-gray-700 bg-gray-200 rounded"
                      id="image-file"
                      type="file"
                      label="Choose File"
                      custom
                      onChange={uploadFileHandler}
                    />
                    {uploading && <Spinner />}
                  </div>

                  <div class="mt-2">
                    <label class="block text-sm text-gray-600" for="brand">
                      Brand
                    </label>
                    <input
                      class="w-full px-5  py-1 text-gray-700 bg-gray-200 rounded"
                      id="brand"
                      type="text"
                      placeholder="Your brand"
                      aria-label="brand"
                      name="brand"
                      value={brand}
                      onChange={(e) => onChange(e)}
                    />
                  </div>

                  <div class="mt-2">
                    <label class="block text-sm text-gray-600" for="category">
                      Category
                    </label>
                    <input
                      class="w-full px-5  py-1 text-gray-700 bg-gray-200 rounded"
                      id="category"
                      type="text"
                      placeholder="Your category"
                      aria-label="category"
                      name="category"
                      value={category}
                      onChange={(e) => onChange(e)}
                    />
                  </div>

                  <div class="mt-2">
                    <label
                      class="block text-sm text-gray-600"
                      for="countInStock"
                    >
                      Count in Stock?
                    </label>
                    <input
                      class="w-full px-5 py-1 text-gray-700 bg-gray-200 rounded"
                      id="countInStock"
                      type="number"
                      placeholder="Your countInStock"
                      aria-label="countInStock"
                      name="countInStock"
                      value={countInStock}
                      onChange={(e) => onChange(e)}
                    />
                  </div>

                  <div class="mt-2">
                    <label
                      class="block text-sm text-gray-600"
                      for="description"
                    >
                      Description
                    </label>
                    <input
                      class="w-full px-5  py-1 text-gray-700 bg-gray-200 rounded"
                      id="description"
                      type="text"
                      placeholder="Your description"
                      aria-label="description"
                      name="description"
                      value={description}
                      onChange={(e) => onChange(e)}
                    />
                  </div>

                  <div class="mt-6">
                    <button
                      class="px-4 py-1 text-white font-light tracking-wider bg-gray-900 rounded"
                      type="submit"
                    >
                      Submit
                    </button>
                  </div>
                </form>
              </div>
            )}
          </div>
        </main>
      </div>
    </>
  );
};

export default EditProductPage;
