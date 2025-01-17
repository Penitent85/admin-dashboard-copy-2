// import { DarkThemeToggle } from "flowbite-react";
import { useEffect } from "react";
import { useState } from "react";
import { Eye, UserPen, Trash, Star, PlusCircle } from "lucide-react";
// import {Flowbite} from "flowbite-react";

import { DataTable } from "simple-datatables";

function App() {
    const [data, setData] = useState();
    const [mark, setMark] = useState(false);

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
            const response = await fetch("http://localhost:8000/api/clinics");
            const data = await response.json();
            setData(data.data);
            console.log(data);
        }
        fetchData();
        const t = document.getElementById("default");
        setTimeout(() => {
            fun();
        }, 1000);
    }, []);

    return (
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
                            Clinic Name
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
                            Clinics
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
                            Doctor Name
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
                            Clinic Phone
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
                            City
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
                                    src={item.doctor.avatar}
                                    className="size-14 rounded-lg object-cover"
                                />
                            </td>
                            <td>
                                {/* error */}
                                <div className="flex w-[100px] flex-col">
                                    <span>{item.ar_name}</span>
                                    <span>{item.en_name}</span>
                                </div>
                            </td>
                            <td>
                                <div className="flex flex-col">
                                    {Object.keys(item.address).map((key, index) => (
                                        <div>{item.address[key]}</div>
                                    ))}
                                </div>
                            </td>
                            <td>{item.doctor.ar_full_name}</td>

                            <td>{item.doctor.phone}</td>
                            <td>
                                <div className="flex flex-col">
                                    <span>{item.city.ar_name}</span> <span>{item.city.en_name}</span>
                                </div>
                            </td>
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
                                    <button className="mx-2 flex items-center gap-x-2 text-gray-500 dark:text-gray-400">
                                        <Eye size={16} /> View
                                    </button>

                                    <button className="mx-2 flex items-center gap-x-2 text-blue-500 dark:text-blue-600">
                                        <UserPen size={16} /> Edit
                                    </button>
                                </div>
                            </td>
                        </tr>
                    ))}
            </tbody>
        </table>
    );
}

export default App;
