import React, { useEffect, useState } from "react";
import axios from "axios";
import { Eye, UserPen, Trash, Star, PlusCircle } from "lucide-react";

const TopDoctors = () => {
    const [page, setPage] = useState(0);
    const [rowsPerPage, setRowsPerPage] = useState(5);
    const [doctors, setDoctors] = useState([]);
    const [searchQuery, setSearchQuery] = useState("");

    const fetchDoctors = async () => {
        try {
            const { data } = await axios.get(
                "https://f98b-83-244-8-231.ngrok-free.app/api/doctors",
                {
                    headers: {
                        "ngrok-skip-browser-warning": "sss",
                    },
                }
            );
            if (data) setDoctors(data.data);
        } catch (error) {
            console.error("Error fetching doctors:", error);
        }
    };

    useEffect(() => {
        fetchDoctors();
    }, []);

    const handleChangePage = (event, newPage) => {
        setPage(newPage);
    };

    const handleChangeRowsPerPage = (event) => {
        setRowsPerPage(parseInt(event.target.value, 10));
        setPage(0);
    };

    const handleActiveToggle = async (id, isActive) => {
        try {
            const data = { is_active: !isActive };
            await axios.put(
                `https://f98b-83-244-8-231.ngrok-free.app/api/doctors/${id}`,
                data
            );
            fetchDoctors();
        } catch (error) {
            console.error("Error updating doctor status:", error);
        }
    };

    const filteredDoctors = doctors.filter((doctor) =>
        doctor.ar_full_name.toLowerCase().includes(searchQuery.toLowerCase())
    );

    const doctorPage = filteredDoctors.slice(
        page * rowsPerPage,
        (page + 1) * rowsPerPage
    );

    return (
        <div className="card">

            <div className="card-header flex justify-between items-center">
                <div className="flex items-center gap-x-4">
                    <div className="relative">
                        <input
                            type="text"
                            placeholder="Search..."
                            className="input input-bordered pl-10"
                            value={searchQuery}
                            onChange={(e) => setSearchQuery(e.target.value)}
                        />
                        <span className="absolute inset-y-0 left-3 flex items-center">
        <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-5 w-5 text-gray-400"
            viewBox="0 0 20 20"
            fill="currentColor"
        >
          <path
              fillRule="evenodd"
              d="M12.9 14.32a8 8 0 111.414-1.414l4.387 4.386a1 1 0 01-1.415 1.415l-4.386-4.387zM8 14a6 6 0 100-12 6 6 0 000 12z"
              clipRule="evenodd"
          />
        </svg>
      </span>
                    </div>
                </div>
                <div className="flex items-center gap-x-4">
                    <button
                        className="bg-blue-500 text-white font-bold py-2 px-4 rounded-b-3xl flex items-center gap-x-2"
                        onClick={() => window.location.href = '/doctors/create'}
                    >
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-5 w-5"
                            viewBox="0 0 20 20"
                            fill="currentColor"
                        >
                            <path
                                fillRule="evenodd"
                                d="M10 5a1 1 0 011 1v3h3a1 1 0 110 2h-3v3a1 1 0 11-2 0v-3H6a1 1 0 110-2h3V6a1 1 0 011-1z"
                                clipRule="evenodd"
                            />
                        </svg>
                        Add Doctor
                    </button>

                </div>
            </div>

            <div className="p-4">
                <div className="relative h-[500px] w-full flex-shrink-0 overflow-auto">
                    <table className="table">
                        <thead className="table-header">
                        <tr className="table-row">
                            <th className="table-head">Avatar</th>
                            <th className="table-head">Name</th>
                            <th className="table-head">Specialty</th>
                            <th className="table-head">Rating</th>
                            <th className="table-head">ID Number</th>
                            <th className="table-head">Phone</th>
                            <th className="table-head">Status</th>
                            <th className="table-head">Action</th>
                        </tr>
                        </thead>
                        <tbody className="table-body">
                        {doctorPage.map((doctor) => (
                            <tr key={doctor.id} className="table-row">
                                <td className="table-cell">
                                    <img
                                        src={doctor.avatar}
                                        alt={doctor.ar_full_name || "Doctor"}
                                        className="size-14 rounded-lg object-cover"
                                    />
                                </td>
                                <td className="table-cell">
                                    <div className="flex flex-col">
                                        <p>{doctor.ar_full_name}</p>
                                        <p className="font-normal text-slate-600 dark:text-slate-400">
                                            {doctor.about?.overview || "N/A"}
                                        </p>
                                    </div>
                                </td>
                                <td className="table-cell">{doctor.speciality}</td>
                                <td className="table-cell">
                                    <div className="flex items-center gap-x-2">
                                        <Star
                                            size={18}
                                            className="fill-yellow-600 stroke-yellow-600"
                                        />
                                        {doctor.rating}
                                    </div>
                                </td>
                                <td className="table-cell">{doctor.id_number}</td>
                                <td className="table-cell">{doctor.phone}</td>
                                <td className="table-cell">
                                    {doctor.is_active ? (
                                        <span className="bg-green-100 text-green-800 text-xs font-medium me-2 px-2.5 py-0.5 rounded-full dark:bg-green-900 dark:text-green-300">
                        Active
                      </span>
                                    ) : (
                                        <span className="bg-red-100 text-red-800 text-xs font-medium me-2 px-2.5 py-0.5 rounded-full dark:bg-red-900 dark:text-red-300">
                        Inactive
                      </span>
                                    )}
                                </td>
                                <td className="table-cell">
                                    <div className="flex items-center gap-x-4">
                                        <button
                                            className="flex items-center text-gray-500 dark:text-gray-400 gap-x-2"
                                        >
                                            <Eye size={16} /> View
                                        </button>
                                        <button
                                            className="flex items-center text-blue-500 dark:text-blue-600 gap-x-2"
                                        >
                                            <UserPen size={16} /> Edit
                                        </button>
                                    </div>
                                </td>
                            </tr>
                        ))}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
};

export default TopDoctors;
