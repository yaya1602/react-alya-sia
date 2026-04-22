import { useState } from "react";
import PageHeader from "../components/PageHeader";
import orders from "../data/orders";

export default function Orders() {

    const [dataOrders, setDataOrders] = useState(orders);

    // ✅ TAMBAHAN STATE
    const [showForm, setShowForm] = useState(false);

    const [form, setForm] = useState({
        customerName: "",
        status: "Pending",
        totalPrice: "",
        orderDate: ""
    });

    return (
        <div>

            <PageHeader 
                title="Orders"
                breadcrumb={["Dashboard", "Orders"]}
            >
                {/* ✅ TAMBAH onClick saja */}
                <button 
                    onClick={() => setShowForm(true)}
                    className="bg-green-500 text-white px-4 py-2 rounded-lg"
                >
                    Add Orders
                </button>
            </PageHeader>

            {/* ✅ TAMBAHAN FORM */}
            {showForm && (
                <div className="bg-white p-4 rounded shadow mb-4">

                    <input
                        placeholder="Customer Name"
                        className="border p-2 w-full mb-2"
                        onChange={(e) => setForm({...form, customerName: e.target.value})}
                    />

                    <select
                        className="border p-2 w-full mb-2"
                        onChange={(e) => setForm({...form, status: e.target.value})}
                    >
                        <option>Pending</option>
                        <option>Completed</option>
                        <option>Cancelled</option>
                    </select>

                    <input
                        type="number"
                        placeholder="Total Price"
                        className="border p-2 w-full mb-2"
                        onChange={(e) => setForm({...form, totalPrice: e.target.value})}
                    />

                    <input
                        type="date"
                        className="border p-2 w-full mb-2"
                        onChange={(e) => setForm({...form, orderDate: e.target.value})}
                    />

                    <button
                        onClick={() => {
                            const newOrder = {
                                id: "ORD" + (dataOrders.length + 1),
                                ...form
                            };

                            setDataOrders([...dataOrders, newOrder]);
                            setShowForm(false);

                            // reset form
                            setForm({
                                customerName: "",
                                status: "Pending",
                                totalPrice: "",
                                orderDate: ""
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
                        <th className="p-2">Customer</th>
                        <th className="p-2">Status</th>
                        <th className="p-2">Total</th>
                        <th className="p-2">Date</th>
                    </tr>
                </thead>

                <tbody>
                    {dataOrders.map((o) => (
                        <tr key={o.id} className="border-t">
                            <td className="p-2">{o.id}</td>
                            <td className="p-2">{o.customerName}</td>
                            <td className="p-2">{o.status}</td>
                            <td className="p-2">Rp {o.totalPrice}</td>
                            <td className="p-2">{o.orderDate}</td>
                        </tr>
                    ))}
                </tbody>
            </table>

        </div>
    )
}