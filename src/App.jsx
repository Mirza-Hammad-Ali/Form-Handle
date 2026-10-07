import { useState } from "react";

function App() {
  // Form ka sara data ek object mein
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    age: "",
    date: "",
    time: "",
    gender: "",
    skills: [],
    country: "",
    experience: 50,
    color: "#000000",
    message: "",
    file: null,
  });
  const handleChange = (e) => {
    const { name, value, type, checked, files } = e.target;

    // Checkbox
    if (type === "checkbox") {
      setFormData((prev) => ({
        ...prev,
        skills: checked
          ? [...prev.skills, value]
          : prev.skills.filter((skill) => skill !== value),
      }));

      return;
    }

    // File
    if (type === "file") {
      setFormData((prev) => ({
        ...prev,
        file: files[0],
      }));

      return;
    }

    // Normal inputs
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  // Form submit
  const handleSubmit = (e) => {
    e.preventDefault();

    // File ko localStorage mein directly save nahi kar sakte.
    // Isliye file ko temporarily remove kar rahe hain.
    const dataToSave = {
      ...formData,
      file: formData.file ? formData.file.name : "",
    };

    localStorage.setItem("formData", JSON.stringify(dataToSave));

    alert("Form data saved!");
  };

  // LocalStorage se data delete
  const handleClear = () => {
    localStorage.removeItem("formData");

    setFormData({
      name: "",
      email: "",
      password: "",
      age: "",
      date: "",
      time: "",
      gender: "",
      skills: [],
      country: "",
      experience: 50,
      color: "#000000",
      message: "",
      file: null,
    });
  };

  return (
    <div>
      <h1>React Form Handling</h1>

      <form onSubmit={handleSubmit}>
        {/* TEXT */}
        <label>Name:</label>
        <input
          type="text"
          name="name"
          value={formData.name}
          onChange={handleChange}
          placeholder="Enter your name"
        />
        <br />
        <br />
        {/* EMAIL */}
        <label>Email:</label>
        <input
          type="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          placeholder="Enter your email"
        />
        <br />
        <br />
        {/* PASSWORD */}
        <label>Password:</label>
        <input
          type="password"
          name="password"
          value={formData.password}
          onChange={handleChange}
          placeholder="Enter password"
        />
        <br />
        <br />
        {/* NUMBER */}
        <label>Age:</label>
        <input
          type="number"
          name="age"
          value={formData.age}
          onChange={handleChange}
          min="1"
          max="100"
        />
        <br />
        <br />
        {/* DATE */}
        <label>Date:</label>
        <input
          type="date"
          name="date"
          value={formData.date}
          onChange={handleChange}
        />
        <br />
        <br />
        {/* TIME */}
        <label>Time:</label>
        <input
          type="time"
          name="time"
          value={formData.time}
          onChange={handleChange}
        />
        <br />
        <br />
        {/* RADIO */}
        <label>Gender:</label>
        <br />
        <input
          type="radio"
          name="gender"
          value="Male"
          checked={formData.gender === "Male"}
          onChange={handleChange}
        />
        Male
        <input
          type="radio"
          name="gender"
          value="Female"
          checked={formData.gender === "Female"}
          onChange={handleChange}
        />
        Female
        <br />
        <br />
        {/* CHECKBOX */}
        <label>Skills:</label>
        <br />
        <input
          type="checkbox"
          name="skills"
          value="HTML"
          checked={formData.skills.includes("HTML")}
          onChange={handleChange}
        />
        HTML
        <input
          type="checkbox"
          name="skills"
          value="CSS"
          checked={formData.skills.includes("CSS")}
          onChange={handleChange}
        />
        CSS
        <input
          type="checkbox"
          name="skills"
          value="JavaScript"
          checked={formData.skills.includes("JavaScript")}
          onChange={handleChange}
        />
        JavaScript
        <input
          type="checkbox"
          name="skills"
          value="React"
          checked={formData.skills.includes("React")}
          onChange={handleChange}
        />
        React
        <br />
        <br />
        {/* SELECT */}
        <label>Country:</label>
        <select name="country" value={formData.country} onChange={handleChange}>
          <option value="">Select Country</option>
          <option value="Pakistan">Pakistan</option>
          <option value="India">India</option>
          <option value="UK">UK</option>
          <option value="USA">USA</option>
        </select>
        <br />
        <br />
        {/* RANGE */}
        <label>Experience: {formData.experience} years</label>
        <input
          type="range"
          name="experience"
          min="0"
          max="20"
          value={formData.experience}
          onChange={handleChange}
        />
        <br />
        <br />
        {/* COLOR */}
        <label>Favorite Color:</label>
        <input
          type="color"
          name="color"
          value={formData.color}
          onChange={handleChange}
        />
        <br />
        <br />
        {/* FILE */}
        <label>Profile Picture:</label>
        <input type="file" name="file" onChange={handleChange} />
        <br />
        <br />
        {/* TEXTAREA */}
        <label>Message:</label>
        <textarea
          name="message"
          value={formData.message}
          onChange={handleChange}
          placeholder="Write something..."
        />
        <br />
        <br />
        {/* SUBMIT */}
        <button type="submit">Save Data</button>
        <button type="button" onClick={handleClear}>
          Clear Data
        </button>
      </form>
    </div>
  );
}

export default App;
