import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';

const PayFees = () => {
  const navigate = useNavigate();
  const { login } = useAuth();

  const handlePayment = async () => {
    const res = await axios.put('http://localhost:8080/user/update', { feesPaid: true });
    login(res.data, localStorage.getItem('token'));
    alert("Fees Paid Successfully");
    navigate('/profile');
  };

  return (
    <div className="max-w-md mx-auto mt-10 text-center">
      <h2 className="text-2xl font-bold mb-4">Pay Fees</h2>
      <p className="mb-6">This is a simulated payment form.</p>
      <button
        onClick={handlePayment}
        className="bg-green-600 text-white py-2 px-6 rounded hover:bg-green-700"
      >
        Pay Now
      </button>
    </div>
  );
};

export default PayFees;
