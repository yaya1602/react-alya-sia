export default function PageHeader() {
    return (
        <div className="flex items-center justify-between p-4">
            <div className="flex flex-col">
                <span className="text-3xl font-semibold">
                    Dashboard
                </span>

                <div className="flex items-center space-x-2 mt-2 text-gray-500">
                    <span>Dashboard</span>
                    <span>/</span>
                    <span>Order List</span>
                </div>
            </div>

            <button className="bg-green-500 text-white px-4 py-2 rounded-lg">
                Add Button
            </button>
        </div>
    );
}