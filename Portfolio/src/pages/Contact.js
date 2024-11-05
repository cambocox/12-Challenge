import React, { useState } from 'react';

const Contact = () => {
   const [formData, setFormData] = useState({ name: '', email: '', message: '' });
   const [errors, setErrors] = useState({});

   const handleChange = (e) => {
      const { name, value } = e.target;
      setFormData({ ...formData, [name]: value });
   };

   const validateForm = () => {
      let formErrors = {};
      if (!formData.name) formErrors.name = 'Name is required';
      if (!formData.email || !/\S+@\S+\.\S+/.test(formData.email)) formErrors.email = 'Valid email is required';
      if (!formData.message) formErrors.message = 'Message is required';
      setErrors(formErrors);
      return Object.keys(formErrors).length === 0;
   };

   const handleSubmit = (e) => {
      e.preventDefault();
      if (validateForm()) {
         alert('Form submitted successfully!');
      }
   };

   return (
      <section>
         <h2>Contact</h2>
         <form onSubmit={handleSubmit}>
            <input type="text" name="name" placeholder="Name" value={formData.name} onChange={handleChange} />
            {errors.name && <span>{errors.name}</span>}
            <input type="email" name="email" placeholder="Email" value={formData.email} onChange={handleChange} />
            {errors.email && <span>{errors.email}</span>}
            <textarea name="message" placeholder="Message" value={formData.message} onChange={handleChange} />
            {errors.message && <span>{errors.message}</span>}
            <button type="submit">Send Message</button>
         </form>
      </section>
   );
};

export default Contact;