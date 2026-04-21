const NotFound = () => {
  return (
    <div className="flex items-center justify-center h-screen flex-col">
      <h1 className="text-6xl font-bold text-green-500">404</h1>
      <p className="text-gray-500 mt-2">Halaman tidak ditemukan</p>
      
      <a
        href="/"
        className="mt-4 px-4 py-2 bg-green-500 text-white rounded-lg"
      >
        Kembali ke Dashboard
      </a>
    </div>
  );
};

export default NotFound;