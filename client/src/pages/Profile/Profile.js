import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from 'react-redux';
import "./Profile.styles.scss";

import { getUserOrders } from '../../redux/reducers/order/order.actions'

import Spinner from "../../components/spinner/spinner.component";
import SideBar from "../../components/sidebar/sidebar.component";

const Profile = ({ history }) => {
  const dispatch = useDispatch();

  const userDetails = useSelector((state) => state.userDetails);
  const { loading, error, user } = userDetails;

  const userLogin = useSelector((state) => state.userLogin);
  const { userInfo } = userLogin;

  const orderList = useSelector((state) => state.orderList);
  const { error: errorOrders, loading: loadingOrders, orders } = orderList

  useEffect(() => {
    if (!userInfo) {
      history.push("/login");
    }
    dispatch(getUserOrders())
  }, [dispatch, history, userInfo]);

  return (
    <>
      <div className="flex">
        <SideBar />
        {loadingOrders ? <Spinner /> : (
          <div class="w-full overflow-scroll border-t flex flex-col min-h-screen">
            <table class="min-w-full leading-normal">
              <thead>
                <tr>
                  <th class="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
                    Id
                </th>
                  <th class="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
                    Date
                </th>
                  <th class="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
                    Total
                </th>
                  <th class="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
                    Paid
                </th>
                  <th class="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
                    Status
                </th>
                  <th class="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
                  </th>
                </tr>
              </thead>
              <tbody>
                {orders.map(order => (
                  <tr key={order._id}>
                    <td class="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                      <div class="flex items-center">
                        <p class="text-gray-900 whitespace-no-wrap">
                          # {order._id}
                        </p>
                      </div>
                    </td>
                    <td class="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                      <p class="text-gray-900 whitespace-no-wrap">{order.createdAt.substring(0, 10)}</p>
                    </td>
                    <td class="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                      <p class="text-gray-900 whitespace-no-wrap">{order.totalPrice}</p>
                    </td>
                    <td class="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                      <p class="text-gray-900 whitespace-no-wrap">{order.isPaid ? order.paidAt.substring(0, 10) : `No`}</p>
                    </td>
                    <td class="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                      <div class="bg-green-200 inline-block px-3 py-1 font-semibold text-green-900 leading-tight rounded-full">
                        <p>{order.isDelivered ? order.isDelivered.substring(0, 10) : `No`}</p>

                      </div>
                    </td>
                    <td class="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                      <Link to={`/order/${order._id}`}>
                        <button class="flex mx-auto text-white bg-gray-900 border-0 py-2 px-8 focus:outline-none hover:bg-gray-700 rounded text-lg">Details</button>

                      </Link>
                    </td>
                  </tr>
                ))}

              </tbody>
            </table>
          </div>
        )}

      </div>
    </>
  );
};

export default Profile;
