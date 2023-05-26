import React, { useState } from 'react';
import axios from 'axios';
import './style.css'

function DataEditing() {
  const [studentName, setStudentName] = useState('');
  const [studentEmail, setStudentEmail] = useState('');
  const [successMessage, setSuccessMessage] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post('/api/update-student-data', {
        name: studentName,
        email: studentEmail,
      });

      setSuccessMessage(response.data.message);
      setStudentName('');
      setStudentEmail('');
    } catch (error) {
      console.log(error.response.data);
    }
  };

  return (
    <div>
      <h2>Data Editing</h2>
      <form onSubmit={handleSubmit}>
        <label>
          Name:
          <input
            type="text"
            value={studentName}
            onChange={(e) => setStudentName(e.target.value)}
          />
        </label>
        <label>
          Email:
          <input
            type="email"
            value={studentEmail}
            onChange={(e) => setStudentEmail(e.target.value)}
          />
        </label>
        <button type="submit">Update</button>
      </form>
      {successMessage && <p>{successMessage}</p>}
    </div>
  );
}

export default DataEditing;
