import React, { useState } from 'react';
import './Contact.css';

function ContactForm() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });


  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };


  const handleSubmit = (e) => {
    e.preventDefault();

    console.log('Form data:', formData);
  };

  return (
    <div className='back'>
      <div className='firstdiv'>
        <div className='form_cont'>
          <h2 className='us'>Help & Support</h2>
          <form onSubmit={handleSubmit}>
            <div>

              <input
                placeholder='Enter your Name '
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleInputChange}
                required
              />
            </div>
            <div>

              <input
                placeholder='Email'
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleInputChange}
                required
              />

              <input
                placeholder='Subject'
                type="text"
                id="subject"
                name="subject"
                value={formData.subject}
                onChange={handleInputChange}
                required
              />
            </div>

            <div>

              <textarea
                placeholder='Message'
                id="message"
                name="message"
                value={formData.message}
                onChange={handleInputChange}
                required
              ></textarea>
            </div>
            <button className="buttoncon" type="submit">Submit</button>
          </form>
        </div>
        <div>
          <img className='custom' src='https://static.wixstatic.com/media/9be400_457e1609536042398548c52937e04b27~mv2.gif' />
        </div>
      </div>
    </div>

  );
}

export default ContactForm;
