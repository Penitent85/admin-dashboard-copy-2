import React from "react";

const CreateDoctorButton = () => {
    return (
        <div className="flex flex-row-reverse items-center gap-x-4 mb-4">
            <button
                className="flex items-center gap-x-2 rounded-b-3xl bg-blue-500 px-4 py-2 font-bold text-white"
                onClick={() => (window.location.href = "/doctors/create")}
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
    );
};

export default CreateDoctorButton;
