import React, { useState, useEffect } from 'react';

const HumanResourcesPage = () => {
  const [id, setId] = useState<number | null>(null);
  const [instructions, setInstructions] = useState('');

  useEffect(() => {
    // توليد رقم مسلسل تلقائي (بافتراض أنك ستجلب الرقم التالي من قاعدة البيانات أو تقوم بتوليد عشوائي)
    const generateAutoNumber = () => {
      // على سبيل المثال، توليد رقم عشوائي للمسلسل، يمكنك تغييره حسب الحاجة
      const newId = Math.floor(Math.random() * 10000);
      setId(newId);
    };

    generateAutoNumber();
  }, []);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
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
            value={id || ''} 
            readOnly 
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
