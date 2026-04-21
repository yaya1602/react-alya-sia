import { FaHome, FaClipboardList, FaFileAlt } from "react-icons/fa";
import { useState } from "react";
import { Link } from "react-router-dom";

const Sidebar = () => {
  const [active, setActive] = useState("dashboard");

  return (
    <div className="w-64 bg-white min-h-screen shadow p-4">

      {/* LOGO */}
      <div className="mb-6">
        <h1 className="text-3xl font-bold">
          Sedap<span className="text-green-500">.</span>
        </h1>
        <p className="text-gray-400 text-sm">Modern Admin Dashboard</p>
      </div>

      {/* MENU */}
      <ul className="space-y-4">
        
        <li>
          <Link
          onClick={() => setActive("dashboard")}
          to="/"
          className={`flex items-center gap-2 cursor-pointer ${
            active === "dashboard"
              ? "text-green-500 font-semibold"
              : "text-gray-500"
          }`}
        >
          <FaHome /> Dashboard
          </Link>
        </li>

        <li>
          <Link
          onClick={() => setActive("order")}
          to="/orders"
          className={`flex items-center gap-2 cursor-pointer ${
            active === "order"
              ? "text-green-500 font-semibold"
              : "text-gray-500"
          }`}
        >
          <FaClipboardList /> Order List
          </Link>
        </li>

        <li>
          <Link
          onClick={() => setActive("detail")}
          to="/customers"
          className={`flex items-center gap-2 cursor-pointer ${
            active === "detail"
              ? "text-green-500 font-semibold"
              : "text-gray-500"
          }`}
        >
          <FaFileAlt /> Order Detail
          </Link>
        </li>

      </ul>

      {/* CARD */}
      <div className="mt-10 bg-green-500 text-white p-4 rounded-lg">
        <p className="text-sm mb-3">
          Please organize your menus through button below!
        </p>
        <button className="bg-white text-green-500 px-3 py-1 rounded">
          + Add Menu
        </button>
      </div>

    </div>
  );
};

export default Sidebar;