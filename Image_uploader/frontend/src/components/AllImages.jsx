import React, { useEffect, useState } from "react";

const AllImages = () => {
  const [apiData, setApiData] = useState([]);

  const fetchData = async () => {
    try {
      const response = await fetch("/api/show-image");
      const result = await response.json();
      setApiData(result.data);
    } catch (error) {
      console.error("Error fetching images:", error);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div className="bg-gradient-to-tr from-cyan-100 to-cyan-500 min-h-screen py-10 px-5">
      <h2 className="text-center text-4xl font-bold text-zinc-800 mb-8">📸 Image Gallery</h2>

      {apiData.length === 0 ? (
        <p className="text-center text-lg text-zinc-700">No images found.</p>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6">
          {apiData.map((item, idx) => (
            <div
              key={idx}
              className="bg-white shadow-md rounded-lg overflow-hidden flex flex-col items-center p-4 hover:scale-105 transition-transform duration-300"
            >
              <img
                className="w-full h-48 object-cover rounded-md mb-3 border border-zinc-300"
                src={`/uploads/${item.Image}`}
                alt={item.Title}
              />
              <p className="text-center font-medium text-zinc-700">{item.Title}</p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default AllImages;
