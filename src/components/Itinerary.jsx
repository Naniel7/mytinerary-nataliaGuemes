import React, { useState } from "react";

const Itineraries = ({ onSubmit }) => {
  const [formData, setFormData] = useState({
    authorName: "",
    price: "",
    duration: "",
    likes: 0,
    hashtags: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: name === "likes" ? parseInt(value, 10) : value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const { authorName, price, duration, likes, hashtags } = formData;

    const newItinerary = {
      authorName,
      price,
      duration,
      likes,
      hashtags: hashtags.split(",").map((tag) => tag.trim()),
    };

    if (onSubmit) {
      onSubmit(newItinerary);
    }

    // Limpia los campos del formulario después de enviarlo
    setFormData({
      authorName: "",
      price: "",
      duration: "",
      likes: 0,
      hashtags: "",
    });
  };

  return (
    <div className="itineraries">
      <h2>Create a New Itinerary</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Author Name:</label>
          <input
            type="text"
            name="authorName"
            value={formData.authorName}
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <label>Price:</label>
          <input
            type="number"
            name="price"
            value={formData.price}
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <label>Duration (in hours):</label>
          <input
            type="number"
            name="duration"
            value={formData.duration}
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <label>Likes:</label>
          <input
            type="number"
            name="likes"
            value={formData.likes}
            onChange={handleChange}
            min="0"
          />
        </div>
        <div>
          <label>Hashtags (comma-separated):</label>
          <input
            type="text"
            name="hashtags"
            value={formData.hashtags}
            onChange={handleChange}
          />
        </div>
        <button type="submit">Submit Itinerary</button>
      </form>
    </div>
  );
};

export default Itineraries;
