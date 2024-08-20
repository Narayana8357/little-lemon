import React, { useState } from 'react';

const BookingForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    date: '',
    time: '',
    guests: 1,
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Add form validation and submission logic here
    console.log(formData);
  };

  return (
    <form onSubmit={handleSubmit} aria-label="Booking Form">
      <label htmlFor="name">Name:</label>
      <input type="text" id="name" name="name" value={formData.name} onChange={handleChange} required aria-required="true" />
      
      <label htmlFor="email">Email:</label>
      <input type="email" id="email" name="email" value={formData.email} onChange={handleChange} required aria-required="true" />
      
      <label htmlFor="date">Date:</label>
      <input type="date" id="date" name="date" value={formData.date} onChange={handleChange} required aria-required="true" />
      
      <label htmlFor="time">Time:</label>
      <input type="time" id="time" name="time" value={formData.time} onChange={handleChange} required aria-required="true" />
      
      <label htmlFor="guests">Number of Guests:</label>
      <input type="number" id="guests" name="guests" value={formData.guests} onChange={handleChange} min="1" required aria-required="true" />
      
      <button type="submit">Book Table</button>
    </form>
  );
};

export default BookingForm;
