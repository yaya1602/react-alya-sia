import { FaHome, FaClipboardList, FaFileAlt } from "react-icons/fa";
import { NavLink } from "react-router-dom";
import { FaExclamationTriangle } from "react-icons/fa";
const Sidebar = () => {

  const menuClass = ({ isActive }) =>
    `flex cursor-pointer items-center rounded-xl p-4 space-x-2
    ${isActive
      ? "text-hijau bg-green-200 font-extrabold"
      : "text-gray-600 hover:text-hijau hover:bg-green-200 hover:font-extrabold"
    }`;

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
          <NavLink to="/" className={menuClass}>
            <FaHome /> Dashboard
          </NavLink>
        </li>

        <li>
          <NavLink to="/orders" className={menuClass}>
            <FaClipboardList /> Orders
          </NavLink>
        </li>

        <li>
          <NavLink to="/customers" className={menuClass}>
            <FaFileAlt /> Customers
          </NavLink>
        </li>

        <li>
          <NavLink to="/error-400" className={menuClass}>
            <FaExclamationTriangle /> Error 400
          </NavLink>
        </li>

        <li>
          <NavLink to="/error-401" className={menuClass}>
            <FaExclamationTriangle /> Error 401
          </NavLink>
        </li>

        <li>
          <NavLink to="/error-403" className={menuClass}>
            <FaExclamationTriangle /> Error 403
          </NavLink>
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