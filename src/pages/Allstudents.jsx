import { useEffect, useState } from 'react';
import axios from 'axios';

const AllStudents = () => {
  const [students, setStudents] = useState([]);

  useEffect(() => {
    axios.get('/user/all', { withCredentials: true }) 
      .then(res => setStudents(res.data))
      .catch(err => console.error('Error fetching students:', err));
  }, []);

  return (
    <div className="max-w-4xl mx-auto mt-6">
      <h2 className="text-2xl font-bold mb-4">All Students</h2>
      <div className="overflow-x-auto">
        <table className="w-full border">
          <thead className="bg-slate-200 text-slate-800">
            <tr>
              <th className="p-2 border">Name</th>
              <th className="p-2 border">Email</th>
              <th className="p-2 border">Fees Paid</th>
            </tr>
          </thead>
          <tbody>
            {students.map((s, i) => (
              <tr key={i} className="text-center">
                <td className="border p-2">{s.name}</td>
                <td className="border p-2">{s.email}</td>
                <td className="border p-2">
                  <span className={s.feesPaid ? 'text-green-600' : 'text-red-600'}>
                    {s.feesPaid ? 'Yes' : 'No'}
                  </span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default AllStudents;
