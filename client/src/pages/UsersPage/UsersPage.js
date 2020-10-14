import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from 'react-redux';

import { listUsers, deleteUser } from '../../redux/reducers/auth/auth.actions'

import Spinner from "../../components/spinner/spinner.component";
import SideBar from "../../components/sidebar/sidebar.component";

const UsersPage = ({ history }) => {
    const dispatch = useDispatch();

    const userLogin = useSelector((state) => state.userLogin);
    const { userInfo } = userLogin;

    const userList = useSelector((state) => state.userList);
    const { loading, error, users } = userList;

    const userDelete = useSelector((state) => state.userDelete);
    const { success: successDelete } = userDelete;

    useEffect(() => {
        if (userInfo && userInfo.isAdmin) {
            dispatch(listUsers())
        } else {
            history.push('/login')
        }

    }, [dispatch, history, successDelete]);

    const deleteHandler = (id) => {
        if (window.confirm(`Are you sure you want to delete this user`)) {
            dispatch(deleteUser(id))
        }

    }


    return (
        <>
            <div className="flex">
                <SideBar />
                {loading ? <Spinner /> : (
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
                                        Email
                </th>
                                    <th class="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
                                        Admin
                </th>
                                    <th class="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
                                    </th>
                                </tr>
                            </thead>
                            <tbody>
                                {users.map(user => (
                                    <tr key={user._id}>
                                        <td class="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                                            <div class="flex items-center">
                                                <p class="text-gray-900 whitespace-no-wrap">
                                                    # {user._id}
                                                </p>
                                            </div>
                                        </td>
                                        <td class="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                                            <p class="text-gray-900 whitespace-no-wrap">{user.name}</p>
                                        </td>
                                        <td class="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                                            <p class="text-gray-900 whitespace-no-wrap">{user.email}</p>
                                        </td>
                                        <td class="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                                            <p class="text-gray-900 whitespace-no-wrap">{user.isAdmin ? `yes` : `No`}</p>
                                        </td>
                                        <td class="px-5 flex py-5 border-b border-gray-200 bg-white text-sm">
                                            <Link to={`/admin/user/${user._id}/edit`}>
                                                <button class="flex mx-auto text-white bg-gray-900 border-0 py-2 px-8 focus:outline-none hover:bg-gray-700 rounded text-lg">Edit</button>
                                            </Link>
                                            <button class="flex mx-auto text-red border-0 py-2 px-8 focus:outline-none rounded text-lg" onClick={() => deleteHandler(user._id)} >
                                                <i class="fas fa-trash-alt"></i>
                                            </button>
                                        </td>
                                    </tr>
                                ))}

                            </tbody>
                        </table>
                    </div>
                )
                }

            </div >
        </>
    )
}

export default UsersPage
