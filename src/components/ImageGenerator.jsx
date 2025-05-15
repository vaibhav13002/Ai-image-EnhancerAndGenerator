import React, { useState } from "react";

const ImageGenerator = () => {
  const [images, setImages] = useState([]);
  const [loading, setLoading] = useState(false);
  const [page, setPage] = useState(1);

  const handleGenerate = async () => {
    setLoading(true);
    try {
      // Fetch a new page each time for different images
      const res = await fetch(`https://picsum.photos/v2/list?page=${page}&limit=30`);
      const data = await res.json();
      setImages(data);
      setPage(page + 1); // Next time, fetch a new page
    } catch (err) {
      setImages([]);
    }
    setLoading(false);
  };

  return (
    <div className="flex flex-col items-center min-h-screen bg-gray-100 py-8 px-4">
      <button
        className="bg-green-600 text-white text-2xl font-semibold py-3 px-8 rounded-lg shadow-lg hover:bg-green-700 transition mb-8"
        onClick={handleGenerate}
        disabled={loading}
        style={{ alignSelf: 'center' }}
      >
        {loading ? 'Generating...' : 'Generate'}
      </button>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 w-full max-w-5xl">
        {images.map((img) => (
          <div key={img.id} className="bg-white rounded-lg shadow p-4 flex flex-col items-center">
            <img src={img.download_url} alt={img.author} className="w-full h-64 object-cover rounded mb-2" />
            <span className="text-gray-700 text-sm">{img.author}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ImageGenerator;
