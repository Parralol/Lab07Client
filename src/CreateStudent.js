import React, { useState } from 'react';
import axios from 'axios';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';

const CreateStudent = () => {
  const [correo, setCorreo] = useState('');
  const [nombre, setNombre] = useState('');
  const [edad, setEdad] = useState(null);
  const [programa, setPrograma] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    const formattedEdad = edad ? edad.toISOString().split('T')[0] : null;
    const newstudent = { correo, nombre, edad: formattedEdad, programa };
    try {
      await axios.post('http://ec2-44-211-206-231.compute-1.amazonaws.com:8080/students', newstudent);
      alert('student created successfully');
    } catch (error) {
      console.error('There was an error creating the student!', error);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label>Correo:</label>
        <input type="email" value={correo} onChange={(e) => setCorreo(e.target.value)} required />
      </div>
      <div>
        <label>Nombre:</label>
        <input type="text" value={nombre} onChange={(e) => setNombre(e.target.value)} required />
      </div>
      <div>
        <label>Edad:</label>
        <DatePicker
          selected={edad}
          onChange={(date) => setEdad(date)}
          dateFormat="yyyy-MM-dd"
          placeholderText="Select a date"
          required
        />
      </div>
      <div>
        <label>Programa:</label>
        <input type="text" value={programa} onChange={(e) => setPrograma(e.target.value)} required />
      </div>
      <button type="submit">Create Student</button>
    </form>
  );
};

export default CreateStudent;