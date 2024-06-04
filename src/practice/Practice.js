import React, { useState } from "react";

const Practice = () => {
  const [form, setForm] = useState({
    name: "",
    email: "",
    number: "",
    class: "",
  });
  const [formData, setFormData] = useState([]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prevData) => ({ ...prevData, [name]: value }));
  };
  console.log(form);

  const handleSubmit = (e) => {
    e.preventDefault();

    console.log("submit", form);
    setFormData((preData) => [...preData, form]);
    setForm({
      name: "",
      email: "",
      number: "",
      class: "",
    });
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <h5>Form</h5>
        <div className="d-flex flex-column" style={{ width: "200px" }}>
          <input
            onChange={handleChange}
            type="text"
            className="mb-2"
            name="name"
            value={form.name}
          />
          <input
            onChange={handleChange}
            type="text"
            className="mb-2"
            name="email"
            value={form.email}
          />
          <input
            onChange={handleChange}
            type="text"
            className="mb-2"
            name="number"
            value={form.number}
          />
          <input
            onChange={handleChange}
            type="text"
            className="mb-2"
            name="class"
            value={form.class}
          />
          <button type="submit">submit</button>
        </div>
      </form>

      {formData.map((val, index) => (
        <div className="card" style={{ width: "500px" }} key={index}>
          <p>name:{val.name}</p>
          <p>email:{val.email}</p>
          <p>number:{val.number}</p>
          <p>class:{val.class}</p>
        </div>
      ))}

      {/* <div className="card">
        <p>name:chandralekha</p>
        <p>email:chandralekha@email.com</p>
        <p>number:7092236122</p>
        <p>class:b</p>
        </div> */}
    </div>
  );
};

export default Practice;
