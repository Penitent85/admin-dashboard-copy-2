// import { DarkThemeToggle } from "flowbite-react";
import { useEffect } from "react";
import { useState } from "react";
import { Eye, UserPen, Trash, Star, PlusCircle } from "lucide-react";
import { AiFillDelete } from "react-icons/ai";
import Swal from "sweetalert2";
import axios from "axios";
import { useNavigate } from "react-router-dom";

// import {Flowbite} from "flowbite-react";

import { DataTable } from "simple-datatables";
import CreateDoctor from "./CreateDoctor";
import CreateDoctorButton from "./CreateDoctorButton";
import "flowbite/dist/flowbite.css";
import { Link } from "react-router-dom";
function App() {
    const [data, setData] = useState();
    const [deleteUser, setDeleteUser] = useState(false);

    const navigate = useNavigate();

    const handleDelete = async (id) => {
        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!",
        }).then((result) => {
            if (result.isConfirmed) {
                Swal.fire({
                    title: "Deleted!",
                    text: "Your file has been deleted.",
                    icon: "success",
                });

                const callFun = async () => {
                    try {
                        await axios.delete(`https://c15b-139-190-147-200.ngrok-free.app/api/doctors/${id}`, {
                            headers: {
                                "ngrok-skip-browser-warning": "sss",
                            },
                        });
                        fetchDoctors();
                        setDeleteUser(true);
                        fun();
                    } catch (error) {
                        console.error("Error fetching doctors:", error);
                    }
                };
                callFun();
            }
        });
    };

    function fun() {
        if (document.getElementById("default") && typeof DataTable !== "undefined") {
            const dataTable = new DataTable("#default", {
                tableRender: (_data, table, type) => {
                    if (type === "print") {
                        return table;
                    }
                    const tHead = table.childNodes[0];
                    const filterHeaders = {
                        nodeName: "TR",
                        attributes: {
                            class: "search-filtering-row",
                        },
                        childNodes: tHead.childNodes[0].childNodes.map((_th, index) => ({
                            nodeName: "TH",
                            childNodes: [
                                {
                                    nodeName: "INPUT",
                                    attributes: {
                                        class: "datatable-input w-full",
                                        type: "search",
                                        "data-columns": "[" + index + "]",
                                    },
                                },
                            ],
                        })),
                    };
                    tHead.childNodes.push(filterHeaders);
                    return table;
                },
            });
        }
    }
    useEffect(() => {
        async function fetchData() {
            const response = await fetch("https://c15b-139-190-147-200.ngrok-free.app/api/doctors", {
                headers: {
                    "ngrok-skip-browser-warning": "sss",
                },
            });
            const data = await response.json();
            setData(data.data);
            console.log(data);
        }
        fetchData();
        setTimeout(() => {
            fun();
        }, 100);
    }, [setDeleteUser, deleteUser]);
    return (
        <div>
            <CreateDoctorButton />
            <table id="default">
                <thead>
                    <tr>
                        <th>
                            <span class="flex items-center">
                                Image
                                <svg
                                    class="ms-1 h-4 w-4"
                                    aria-hidden="true"
                                    xmlns="http://www.w3.org/2000/svg"
                                    width="24"
                                    height="24"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                >
                                    <path
                                        stroke="currentColor"
                                        stroke-linecap="round"
                                        stroke-linejoin="round"
                                        stroke-width="2"
                                        d="m8 15 4 4 4-4m0-6-4-4-4 4"
                                    />
                                </svg>
                            </span>
                        </th>
                        <th>
                            <span className="flex items-center">
                                Name
                                <svg
                                    className="ms-1 h-4 w-4"
                                    aria-hidden="true"
                                    xmlns="http://www.w3.org/2000/svg"
                                    width="24"
                                    height="24"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                >
                                    <path
                                        stroke="currentColor"
                                        stroke-linecap="round"
                                        stroke-linejoin="round"
                                        stroke-width="2"
                                        d="m8 15 4 4 4-4m0-6-4-4-4 4"
                                    />
                                </svg>
                            </span>
                        </th>
                        <th>
                            <span class="flex items-center">
                                Specialty
                                <svg
                                    class="ms-1 h-4 w-4"
                                    aria-hidden="true"
                                    xmlns="http://www.w3.org/2000/svg"
                                    width="24"
                                    height="24"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                >
                                    <path
                                        stroke="currentColor"
                                        stroke-linecap="round"
                                        stroke-linejoin="round"
                                        stroke-width="2"
                                        d="m8 15 4 4 4-4m0-6-4-4-4 4"
                                    />
                                </svg>
                            </span>
                        </th>
                        <th>
                            <span class="flex items-center">
                                Rating
                                <svg
                                    class="ms-1 h-4 w-4"
                                    aria-hidden="true"
                                    xmlns="http://www.w3.org/2000/svg"
                                    width="24"
                                    height="24"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                >
                                    <path
                                        stroke="currentColor"
                                        stroke-linecap="round"
                                        stroke-linejoin="round"
                                        stroke-width="2"
                                        d="m8 15 4 4 4-4m0-6-4-4-4 4"
                                    />
                                </svg>
                            </span>
                        </th>
                        <th>
                            <span class="flex items-center">
                                ID Number
                                <svg
                                    class="ms-1 h-4 w-4"
                                    aria-hidden="true"
                                    xmlns="http://www.w3.org/2000/svg"
                                    width="24"
                                    height="24"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                >
                                    <path
                                        stroke="currentColor"
                                        stroke-linecap="round"
                                        stroke-linejoin="round"
                                        stroke-width="2"
                                        d="m8 15 4 4 4-4m0-6-4-4-4 4"
                                    />
                                </svg>
                            </span>
                        </th>
                        <th>
                            <span class="flex items-center">
                                Phone Number
                                <svg
                                    class="ms-1 h-4 w-4"
                                    aria-hidden="true"
                                    xmlns="http://www.w3.org/2000/svg"
                                    width="24"
                                    height="24"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                >
                                    <path
                                        stroke="currentColor"
                                        stroke-linecap="round"
                                        stroke-linejoin="round"
                                        stroke-width="2"
                                        d="m8 15 4 4 4-4m0-6-4-4-4 4"
                                    />
                                </svg>
                            </span>
                        </th>
                        <th>
                            <span class="flex items-center">
                                Status
                                <svg
                                    class="ms-1 h-4 w-4"
                                    aria-hidden="true"
                                    xmlns="http://www.w3.org/2000/svg"
                                    width="24"
                                    height="24"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                >
                                    <path
                                        stroke="currentColor"
                                        stroke-linecap="round"
                                        stroke-linejoin="round"
                                        stroke-width="2"
                                        d="m8 15 4 4 4-4m0-6-4-4-4 4"
                                    />
                                </svg>
                            </span>
                        </th>
                        <th>
                            <span class="flex items-center">
                                Edit
                                <svg
                                    class="ms-1 h-4 w-4"
                                    aria-hidden="true"
                                    xmlns="http://www.w3.org/2000/svg"
                                    width="24"
                                    height="24"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                >
                                    <path
                                        stroke="currentColor"
                                        stroke-linecap="round"
                                        stroke-linejoin="round"
                                        stroke-width="2"
                                        d="m8 15 4 4 4-4m0-6-4-4-4 4"
                                    />
                                </svg>
                            </span>
                        </th>
                    </tr>
                </thead>
                <tbody>
                    {data &&
                        data?.map((item, index) => (
                            <tr key={index}>
                                <td className="table-cell">
                                    <img
                                        src={item.avatar}
                                        className="size-14 rounded-lg object-cover"
                                    />
                                </td>
                                <td>{item.ar_full_name}</td>
                                <td>{item.speciality}</td>
                                <td>
                                    <div className="flex items-center gap-x-2">
                                        <Star
                                            size={18}
                                            className="fill-yellow-600 stroke-yellow-600"
                                        />
                                        {item.rating}
                                    </div>
                                </td>
                                <td>{item.id_number}</td>
                                <td>{item.phone}</td>
                                <td>
                                    {item.is_active ? (
                                        <span className="me-2 rounded-full bg-green-100 px-2.5 py-0.5 text-xs font-medium text-green-800 dark:bg-green-900 dark:text-green-300">
                                            Active
                                        </span>
                                    ) : (
                                        <span className="me-2 rounded-full bg-red-100 px-2.5 py-0.5 text-xs font-medium text-red-800 dark:bg-red-900 dark:text-red-300">
                                            Inactive
                                        </span>
                                    )}
                                </td>

                                <td>
                                    <div className="flex flex-row">
                                        <Link to={`/doctors/view/${item.id}`}>
                                            <button className="mx-2 flex items-center gap-x-2 text-gray-500 hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-300">
                                                <Eye size={16} /> View
                                            </button>
                                        </Link>
                                        <Link to={`/doctors/edit/${item.id}`}>
                                            <button className="mx-2 flex items-center gap-x-2 text-blue-500 dark:text-blue-600">
                                                <UserPen size={16} /> Edit
                                            </button>
                                        </Link>

                                        <button
                                            onClick={() => handleDelete(item.id)}
                                            className="mx-2 flex items-center gap-x-2 text-red-500 hover:text-red-900 dark:text-red-600 dark:hover:text-red-300"
                                        >
                                            <AiFillDelete size={24} />
                                        </button>
                                    </div>
                                </td>
                            </tr>
                        ))}
                </tbody>
            </table>
        </div>
    );
}

export default App;
