/* app/department/Human-Resources/page.tsx */
import React, { useState } from 'react';

const FactoryInstructions = () => {
  const [inputValue, setInputValue] = useState(''); // المتغير لحفظ البيانات المدخلة

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(e.target.value); // تحديث المتغير عند إدخال النص
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log(inputValue); // معالجة البيانات المدخلة هنا
    // يمكنك تنفيذ تعليمات أخرى بناءً على البيانات المدخلة
  };

  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="factoryInput">إدخال تعليمات المصنع:</label>
      <input
        type="text"
        id="factoryInput"
        value={inputValue}
        onChange={handleChange}
        placeholder="أدخل تعليمات المصنع"
      />
      <button type="submit">إرسال</button>
    </form>
  );
};

export default FactoryInstructions;
