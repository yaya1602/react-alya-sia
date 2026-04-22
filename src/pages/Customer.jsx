import { useState } from "react";
import PageHeader from "../components/PageHeader";
import customers from "../data/customers";

export default function Customers() {

    const [dataCustomers, setDataCustomers] = useState(customers);

    // ✅ TAMBAHAN STATE (tidak mengubah yang lama)
    const [showForm, setShowForm] = useState(false);

    const [form, setForm] = useState({
        name: "",
        email: "",
        phone: "",
        loyalty: "Bronze"
    });

    return (
        <div>

            <PageHeader 
                title="Customers"
                breadcrumb={["Dashboard", "Customers"]}
            >
                {/* ✅ TAMBAH onClick saja */}
                <button 
                    onClick={() => setShowForm(true)}
                    className="bg-green-500 text-white px-4 py-2 rounded-lg"
                >
                    Add Customer
                </button>
            </PageHeader>

            {/* ✅ TAMBAHAN FORM (tidak ganggu kode lama) */}
            {showForm && (
                <div className="bg-white p-4 rounded shadow mb-4">

                    <input
                        placeholder="Name"
                        className="border p-2 w-full mb-2"
                        onChange={(e) => setForm({...form, name: e.target.value})}
                    />

                    <input
                        placeholder="Email"
                        className="border p-2 w-full mb-2"
                        onChange={(e) => setForm({...form, email: e.target.value})}
                    />

                    <input
                        placeholder="Phone"
                        className="border p-2 w-full mb-2"
                        onChange={(e) => setForm({...form, phone: e.target.value})}
                    />

                    <select
                        className="border p-2 w-full mb-2"
                        onChange={(e) => setForm({...form, loyalty: e.target.value})}
                    >
                        <option>Bronze</option>
                        <option>Silver</option>
                        <option>Gold</option>
                    </select>

                    <button
                        onClick={() => {
                            const newCustomer = {
                                id: "CUST" + (dataCustomers.length + 1),
                                ...form
                            };

                            setDataCustomers([...dataCustomers, newCustomer]);
                            setShowForm(false);

                            // reset form (bonus)
                            setForm({
                                name: "",
                                email: "",
                                phone: "",
                                loyalty: "Bronze"
                            });
                        }}
                        className="bg-blue-500 text-white px-4 py-2 rounded"
                    >
                        Save
                    </button>

                </div>
            )}

            {/* ✅ KODE LAMA TIDAK DIUBAH */}
            <table className="w-full mt-4 bg-white rounded shadow">
                <thead>
                    <tr className="bg-gray-200">
                        <th className="p-2">ID</th>
                        <th className="p-2">Name</th>
                        <th className="p-2">Email</th>
                        <th className="p-2">Phone</th>
                        <th className="p-2">Loyalty</th>
                    </tr>
                </thead>

                <tbody>
                    {dataCustomers.map((c) => (
                        <tr key={c.id} className="border-t">
                            <td className="p-2">{c.id}</td>
                            <td className="p-2">{c.name}</td>
                            <td className="p-2">{c.email}</td>
                            <td className="p-2">{c.phone}</td>
                            <td className="p-2">{c.loyalty}</td>
                        </tr>
                    ))}
                </tbody>
            </table>

        </div>
    )
}