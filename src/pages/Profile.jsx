import { useAuth } from '../context/AuthContext';
import { useEffect, useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const Profile = () => {
  const { user, login } = useAuth();
  const [form, setForm] = useState({ name: '', email: '' });
  const [feesPaid, setFeesPaid] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchProfile = async () => {
      try {
        const token = localStorage.getItem('token');
        const res = await axios.get('http://localhost:8080/user/me', {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });
        setForm({ name: res.data.name, email: res.data.email });
        setFeesPaid(res.data.feesPaid);
      } catch (error) {
        console.error("Failed to fetch profile:", error);
      }
    };

    fetchProfile();
  }, []);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSave = async () => {
    try {
      const token = localStorage.getItem('token');
      const res = await axios.put('http://localhost:8080/user/update', { ...form, feesPaid }, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      login(res.data, token);
      alert('Profile updated');
    } catch (error) {
      alert("Failed to update profile");
      console.error(error);
    }
  };

  return (
    <div className="max-w-md mx-auto mt-8 space-y-4">
      <h2 className="text-2xl font-bold mb-4">My Profile</h2>
      <input
        type="text"
        name="name"
        value={form.name}
        onChange={handleChange}
        className="w-full border p-2 rounded"
      />
      <input
        type="email"
        name="email"
        value={form.email}
        onChange={handleChange}
        className="w-full border p-2 rounded"
      />
      <p className="font-medium">
        Fees Paid: <span className={feesPaid ? 'text-green-600' : 'text-red-600'}>
          {feesPaid ? 'Yes' : 'No'}
        </span>
      </p>
      {!feesPaid && (
        <button
          onClick={() => navigate('/pay')}
          className="bg-green-600 text-white py-2 px-4 rounded hover:bg-green-700 m-0.5"
        >
          Pay Fees
        </button>
      )}
      <button
        onClick={handleSave}
        className="bg-blue-600 text-white py-2 px-4 rounded hover:bg-blue-700"
      >
        Save Changes
      </button>
    </div>
  );
};

export default Profile;

