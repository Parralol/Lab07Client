import React from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import CreateCustomer from './CreateStudent';
import DisplayCustomers from './DisplayStudents';

function App() {
  return (
    <Router>
      <div>
        <nav>
          <ul>
            <li>
              <Link to="/createStudent" target="_blank">Create Customer</Link>
            </li>
            <li>
              <Link to="/displayStudent" target="_blank">Display Customers</Link>
            </li>
          </ul>
        </nav>
        <Routes>
          <Route path="/createStudent" element={<CreateCustomer />} />
          <Route path="/displayStudent" element={<DisplayCustomers />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
