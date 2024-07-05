import React, { useEffect, useState } from 'react';
import axios from 'axios';

const DisplayStudents = () => {
  const [students, setStudents] = useState([]);

  useEffect(() => {
    const fetchStudents = async () => {
      try {
        const response = await axios.get('http://ec2-44-211-206-231.compute-1.amazonaws.com:8080/students');
        setStudents(response.data);
      } catch (error) {
        console.error('There was an error fetching the students!', error);
      }
    };
    fetchStudents();
  }, []);

  return (
    <div>
      <h1>Student List</h1>
      <table>
        <thead>
          <tr>
            <th>Correo  </th>
            <th>Nombre  </th>
            <th>Fecha Nacimiento  </th>
            <th>Programa  </th>
          </tr>
        </thead>
        <tbody>
          {students.map((student) => (
            <tr key={student.correo}>
              <td>{student.correo}</td>
              <td>{student.nombre}</td>
              <td>{student.edad}</td>
              <td>{student.programa}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};


export default DisplayStudents;