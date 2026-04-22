import React from "react";
import { useNavigate } from "react-router-dom";
import { FaSearch } from "react-icons/fa";

const ErrorPage = ({
    code = "404",
    title = "Page not found",
    description = "A massa, interdum praesent, ut est, nec. Convallis tempus lorem lacus urna.",
    image,
}) => {
    const navigate = useNavigate();

    return (
        <div className="min-h-screen bg-gray-100 flex flex-col">

            {/* NAVBAR */}
            <div className="flex items-center justify-between px-10 py-5 bg-white shadow-sm rounded-b-2xl">

                {/* Logo */}
                <div className="flex items-center gap-2 font-bold text-red-500">
                    <span className="text-xl">✦</span>
                    Backup
                </div>

                {/* Menu */}
                <div className="flex gap-6 text-sm text-gray-600">
                    <button
                        onClick={() => navigate("/")}
                        className="hover:text-red-500"
                    >
                        Home
                    </button>
                </div>

                {/* Search Icon */}
                <FaSearch className="text-gray-500" />
            </div>

            {/* CONTENT */}
            <div className="flex flex-1 items-center justify-center px-10">

                <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">

                    {/* LEFT TEXT */}
                    <div>
                        <h2 className="text-2xl font-semibold text-gray-800">
                            Ooops...
                        </h2>

                        <h1 className="text-5xl font-bold text-gray-900 mt-2">
                            {code}
                        </h1>

                        <h3 className="text-xl font-medium text-gray-700 mt-1">
                            {title}
                        </h3>

                    <p className="text-gray-500 mt-4 max-w-md">
                            {description}
                        </p>

                        {/* 🔥 FIX: tombol back */}
                        <button
                            onClick={() => navigate(-1)}
                            className="mt-6 px-6 py-2 bg-red-500 text-white rounded-full hover:bg-red-600 transition"
                        >
                            Go Back →
                        </button>
                    </div>

                    {/* RIGHT IMAGE */}
                    <div className="flex justify-center">

                        {/* 🔥 FIX: biar tidak error kalau image kosong */}
                        {image ? (
                            <img
                                src={image}
                                alt="Error Illustration"
                                className="w-[350px]"
                            />
                        ) : (
                            <p className="text-gray-400">No Image</p>
                        )}

                    </div>

                </div>
            </div>
        </div>
    );
};

export default ErrorPage;