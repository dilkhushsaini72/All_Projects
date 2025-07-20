import React from "react";
import { useState } from "react";
import toast from "react-hot-toast";
import { Link } from "react-router-dom";

const Home = () => {
  const [imgData, setImgData] = useState({
    Title: "",
    Image: null,
  });

  const handleChange = (e) => {
    const { name, value, files } = e.target;

    if (name === "Image") {
      setImgData({ ...imgData, Image: files[0] });
    } else {
      setImgData({ ...imgData, [name]: value });
    }
  };
  const { Title, Image } = imgData;

  const handleSubmit = async (e) => {
    e.preventDefault();

    const formData = new FormData();
    formData.append("Title", Title);
    formData.append("Image", Image);
    try {
      const response = await fetch("/api/upload-image", {
        method: "POST",
        body: formData,
      });

      const result = await response.json();
      if (response.ok) {
        toast.success(result.message);
        setImgData({
          Title: "",
          Image: null,
        });
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="h-screen bg-zinc-800 text-white">
      <h2 className="text-center py-5 text-3xl font-bold">Image Uploader 📷</h2>
      <div className="w-full max-w-lg p-4 bg-white mx-auto rounded-2xl">
        <form onSubmit={handleSubmit} className="text-black flex flex-col">
          <label className="font-semibold " htmlFor="title">
            Title For Image
          </label>
          <input
            className="border border-zinc-300 rounded px-2"
            type="text"
            placeholder="title"
            name="Title"
            value={imgData.Title}
            onChange={handleChange}
          />
          <input
            className="file:bg-gray-300 mt-4 file:px-2 file:rounded file:py-1 file:font-semibold"
            type="file"
            name="Image"
            onChange={handleChange}
          />
          {imgData.Image && (
            <img
            
              src={URL.createObjectURL(imgData.Image)}
              alt="Preview"
              className="w-40 object-cover mt-4 mx-auto rounded"
            />
          )}

          <button className="bg-green-500 mt-5 py-1 rounded font-extrabold text-white hover:bg-green-600 cursor-pointer">
            Upload
          </button>
        </form>
      </div>
      <Link className="flex justify-center mt-10" to={"/image"}>
        <button className="bg-purple-500 px-2 py-1 font-bold rounded hover:bg-purple-600 cursor-pointer">
          Go to Image Gallery
        </button>
      </Link>
    </div>
  );
};

export default Home;
