// app/department/Human-Resources/page.tsx
"use client";

import React, { useState } from 'react';
import Footer from '../../../components/Footer/Footer'; // تأكد من المسار الصحيح

const InstructionsForm: React.FC = () => {
  const [instructions, setInstructions] = useState('');
  const [submittedInstructions, setSubmittedInstructions] = useState('');

  const handleChange = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
    setInstructions(event.target.value);
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setSubmittedInstructions(instructions); // تحديث التعليمات المدخلة
    setInstructions(''); // إعادة تعيين الحقل (يمكنك ترك هذه السطر إذا كنت تريد الاحتفاظ بالقيمة في الحقل)
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
        <label htmlFor="instructions">أدخل التعليمات:</label>
        <textarea
          id="instructions"
          value={instructions}
          onChange={handleChange}
          rows={4}
          cols={50}
        />
        <button type="submit">إرسال</button>
      </form>
      <Footer instructions={submittedInstructions} /> {/* تمرير التعليمات إلى Footer */}
    </>
  );
};

export default InstructionsForm;
