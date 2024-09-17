import { useState } from 'react';
import axios from 'axios';

const Calculator = () => {
  const [expression, setExpression] = useState('');
  const [result, setResult] = useState(null);
  const [error, setError] = useState('');

  const handleCalculate = async () => {
    if (!expression.trim()) {
      setError('Please enter a valid expression');
      return;
    }

    try {
      const response = await axios.post(`http://localhost:3000/calculate`, { expression });
      setResult(response.data.result);
      setError('');
    } catch (error) {
      setError(`Error in performing the operation`);
      setResult(null);
    }
  };

  return (
    <div style={{ fontFamily: 'Arial, sans-serif', padding: 20 }}>
      <h1 style={{ backgroundColor: 'grey', textAlign: 'center', padding: 10, fontSize: 24, fontWeight: 'bold' }}>
        Calculator
      </h1>
      <input
        type="text"
        value={expression}
        onChange={(e) => setExpression(e.target.value)}
        placeholder="Enter the expression"
        style={{ width: 300, height: 30, padding: 10, fontSize: 18, borderRadius: 5 }}
      />
      <button
        onClick={handleCalculate}
        style={{ backgroundColor: '#4CAF50', color: 'white', padding: 10, fontSize: 18, borderRadius: 5, cursor: 'pointer' }}
      >
        Calculate Result
      </button>
      {result && (
        <div style={{ marginTop: 20 }}>
          <p style={{ fontSize: 18, fontWeight: 'bold' }}>Result: {result}</p>
        </div>
      )}
      {error && (
        <div style={{ marginTop: 20 }}>
          <p style={{ fontSize: 18, color: 'red' }}>{error}</p>
        </div>
      )}
    </div>
  );
};

export default Calculator;