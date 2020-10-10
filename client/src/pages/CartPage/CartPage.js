import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { Row, Col, ListGroup, Image, Card, Button } from "react-bootstrap";

import {
  addToCart,
  removeFromCart,
} from "../../redux/reducers/cart/cart.actions";

const CartPage = ({ match, location, history }) => {
  const productId = match.params.id;

  const qty = location.search ? Number(location.search.split("=")[1]) : 1;

  const dispatch = useDispatch();

  const cart = useSelector((state) => state.cart);

  const { cartItems } = cart;

  useEffect(() => {
    if (productId) {
      dispatch(addToCart(productId, qty));
    }
  }, [dispatch, productId, qty]);

  const removeFromCartHandler = (id) => {
    dispatch(removeFromCart(id));
  };

  const checkOutHandler = (id) => {
    history.push("/login?redirect=shipping");
  };

  return (
    <>
      <div className="container px-5 py-24">
        <Row>
          <Col md={8}>
            <h1 class="text-3xl">Shopping Cart</h1>
            {cartItems.length === 0 ? (
              <h1>Your cart is empty.</h1>
            ) : (
              <ListGroup variant="flush">
                {cartItems.map((item) => (
                  <ListGroup.Item key={item.productId}>
                    <Row className="flex items-center">
                      <Col md={2}>
                        <Image src={item.image} alt={item.name} fluid rounded />
                      </Col>
                      <Col md={3}>{item.name}</Col>
                      <Col md={2}>{item.price}</Col>
                      <Col md={2}>
                        {" "}
                        <div class="relative">
                          <select
                            class="rounded border appearance-none border-gray-400 py-2 focus:outline-none focus:border-indigo-500 text-base pl-3 pr-10"
                            value={item.qty}
                            onChange={(e) =>
                              dispatch(
                                addToCart(
                                  item.productId,
                                  Number(e.target.value)
                                )
                              )
                            }
                          >
                            {[...Array(item.countInStock).keys()].map((x) => (
                              <option key={x + 1} value={x + 1}>
                                {x + 1}
                              </option>
                            ))}
                          </select>
                          <span class="absolute right-0 top-0 h-full w-10 text-center text-gray-600 pointer-events-none flex items-center justify-center">
                            <svg
                              fill="none"
                              stroke="currentColor"
                              stroke-linecap="round"
                              stroke-linejoin="round"
                              stroke-width="2"
                              class="w-4 h-4"
                              viewBox="0 0 24 24"
                            >
                              <path d="M6 9l6 6 6-6"></path>
                            </svg>
                          </span>
                        </div>
                      </Col>
                      <Col md={2}>
                        <button
                          type="button"
                          class="px-6 py-2 transition font-bold ease-in duration-200 uppercase rounded-full border-2 border-yellow-900 focus:outline-none add-to-cart"
                          onClick={() => removeFromCartHandler(item.productId)}
                        >
                          <i class="fas fa-trash"></i>
                        </button>
                      </Col>
                    </Row>
                  </ListGroup.Item>
                ))}
              </ListGroup>
            )}
          </Col>
          <Col md={4}>
            <Card>
              <ListGroup variant="flush">
                <ListGroup.Item>
                  <h2 className="text-gray-900 text-3xl title-font font-medium mb-1">
                    Subtotal (
                    {cartItems.reduce((total, item) => total + item.qty, 0)})
                  </h2>
                  ৳
                  {cartItems
                    .reduce((total, item) => total + item.qty * item.price, 0)
                    .toFixed(2)}
                  )
                </ListGroup.Item>
                <ListGroup.Item>
                  <Button
                    type="button"
                    class="block"
                    disabled={cartItems.length === 0}
                    onClick={checkOutHandler}
                  >
                    Proceed To Checkout
                  </Button>
                </ListGroup.Item>
              </ListGroup>
            </Card>
          </Col>
        </Row>
      </div>
    </>
  );
};

export default CartPage;
