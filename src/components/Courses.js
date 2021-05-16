import { list } from "../services/apiService";
import { useEffect, useState } from "react";
import { Link } from 'react-router-dom';

const Courses = () => {
  const [courses, setCourses] = useState([]); //moramo napraviti kolekciju

  useEffect(() => {
    list("courses", (data) => {
      setCourses(data); //dobijamo podatke da su kursevi setovani na data
    });
  }, []); //hooks koji se pokrece na pocetku pri loadanju => kako doci do niza iznad

  

  return (
    <div className="container">
      <h1>Courses</h1>
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Points</th>
            <th><Link to='/courses/0'>Add New</Link></th>
          </tr>
        </thead>
        <tbody>
          {courses.map((c) => (
            <tr key={c._id}>
              <td>{c.name}</td>
              <td>{c.points}</td>
              <td>
                <Link to={`/courses/${c._id}`}>Edit</Link>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Courses;
