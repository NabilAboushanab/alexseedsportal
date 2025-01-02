'use client'; // تأكد من إضافة هذا السطر في أعلى الملف
import React, { useState } from 'react';

const HumanResources = () => {
  const [instructions, setInstructions] = useState('برجاء اعتماد الاجازات المعلقة');

  const handleInputChange = (e) => {
    setInstructions(e.target.value);
  };

  return (
    <div>
      <h2>الموارد البشرية</h2>
      <form>
        <label htmlFor="instructions">إدخال التعليمات:</label>
        <textarea
          id="instructions"
          value={instructions}
          onChange={handleInputChange}
          rows="4"
          cols="50"
          style={{ marginBottom: '10px', padding: '10px', display: 'block' }}
        />
      </form>
      
      <div style={{ marginTop: '20px', padding: '10px', backgroundColor: '#f0f0f0' }}>
        <h3>التعليمات المدخلة:</h3>
        <strong>{instructions}</strong>
      </div>
    </div>
  );
};

export default HumanResources;
