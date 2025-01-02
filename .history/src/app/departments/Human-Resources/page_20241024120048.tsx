// app/department/Human-Resources/page.tsx

import React, { useState } from 'react';

const InstructionsForm: React.FC = () => {
  const [instructions, setInstructions] = useState('');

  const handleChange = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
    setInstructions(event.target.value);
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    // هنا يمكنك إضافة الكود لمعالجة التعليمات المدخلة
    console.log('التعليمات المدخلة:', instructions);
    // يمكنك إظهار رسالة تأكيد أو أي إجراء آخر
  };

  return (
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
  );
};

export default InstructionsForm;
