import React, { useState, useEffect } from 'react';
import Modal from './../components/Modal.js'; 

const FormBlock = () => {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    message: ''
  });

  const [showSuccessModal, setShowSuccessModal] = useState(false);
  const [errors, setErrors] = useState({});

  const phonePattern = /^\d+$/;
  const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleSubmit = () => {
    const validationErrors = {};

    if (!formData.name.trim()) {
      validationErrors.name = 'Please enter your name';
    }

    if (!phonePattern.test(formData.phone)) {
      validationErrors.phone = 'Phone number can only contain digits';
    }

    if (!emailPattern.test(formData.email)) {
      validationErrors.email = 'Please enter a valid email address';
    }

    if (!formData.message.trim()) {
      validationErrors.message = 'Please enter a message';
    }

    setErrors(validationErrors);

    if (Object.keys(validationErrors).length === 0) {
      console.log('Form data submitted:', formData);

      setTimeout(() => {
        setShowSuccessModal(true);
      }, 4000);
    }
  };

  return (
    <section>
      <div className='FormBlock'>
        <div className='FormLeft'>
          <form>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleInputChange}
              placeholder="Your name"
            />
            <input
              type="text"
              name="phone"
              value={formData.phone}
              onChange={handleInputChange}
              placeholder="Phone number"
            />
            <input
              type="text"
              name="email"
              value={formData.email}
              onChange={handleInputChange}
              placeholder="Email"
            />
            <input
              className='message'
              type="text"
              name="message"
              value={formData.message}
              onChange={handleInputChange}
              placeholder="Message"
            />
            <button className='submitbtn' type="button" onClick={handleSubmit}>
              Submit
            </button>
          </form>
        </div>
        <div className='FormRight'>
          <h1 className='Help'>We help you</h1>
        </div>
      </div>
      <div className='footer'></div>

      {showSuccessModal && <Modal onClose={() => setShowSuccessModal(false)} />}
    </section>
  );
};

export default FormBlock;