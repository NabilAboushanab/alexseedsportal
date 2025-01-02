// src/app/departments/Human-Resources/page.tsx
"use client"; // تأكد من إضافة هذا السطر

import React from 'react';
import InstructionsForm from '@/components/InstructionsForm'; // تأكد من المسار الصحيح

const HumanResourcesPage: React.FC = () => {
  return (
    <div>
      <h1>قسم الموارد البشرية</h1>
      <InstructionsForm /> {/* يجب أن تكون هنا */}
    </div>
  );
};

export default HumanResourcesPage;
