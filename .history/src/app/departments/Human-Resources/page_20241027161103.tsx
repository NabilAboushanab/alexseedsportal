import React, { useState } from 'react';


const HumanResourcesPage = () => {
  const [id, setId] = useState('');
  const [instructions, setInstructions] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // تنفيذ عملية الحفظ أو الإرسال هنا
    console.log(`ID: ${id}, تعليمات الإدارة: ${instructions}`);
  };

  return (
    <div>
      <h1>صفحة الموارد البشرية</h1>
      <form onSubmit={handleSubmit}>
        <label>
          رقم مسلسل:
          <input 
            type="text" 
            value={id} 
            onChange={(e) => setId(e.target.value)} 
            required 
          />
        </label>
        <br />
        <label>
          تعليمات الإدارة:
          <textarea 
            value={instructions} 
            onChange={(e) => setInstructions(e.target.value)} 
            required 
          />
        </label>
        <br />
        <button type="submit">إرسال</button>
      </form>
    </div>
  );
}

export default HumanResourcesPage;
