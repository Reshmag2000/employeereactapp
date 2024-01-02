import React, { useState } from 'react';

const EmployeeForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    designation: '',
    location: '',
    salary: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // You can add logic to handle form submission (e.g., send data to a server)
    console.log('Form submitted:', formData);
  };

  return (
    <div className="container mt-4">
      <h2>Employee Form</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label>Name:</label>
          <input
            type="text"
            className="form-control"
            name="name"
            value={formData.name}
            onChange={handleChange}
          />
        </div>

        <div className="form-group">
          <label>Designation:</label>
          <input
            type="text"
            className="form-control"
            name="designation"
            value={formData.designation}
            onChange={handleChange}
          />
        </div>

        <div className="form-group">
          <label>Location:</label>
          <input
            type="text"
            className="form-control"
            name="location"
            value={formData.location}
            onChange={handleChange}
          />
        </div>

        <div className="form-group">
          <label>Salary:</label>
          <input
            type="text"
            className="form-control"
            name="salary"
            value={formData.salary}
            onChange={handleChange}
          />
        </div>

        <button type="submit" className="btn btn-primary">Submit</button>
      </form>
    </div>
  );
};

export default EmployeeForm;
