// src/app/departments/Human-Resources/page.tsx
"use client"; // إضافة هذا السطر

import InstructionsForm from '@/components/InstructionsForm'; // تأكد من أن المسار صحيح

const HumanResourcesPage: React.FC = () => {
  return (
    <div>
      <h1>إدارة الموارد البشرية</h1>
      <InstructionsForm />
    </div>
  );
};

export default HumanResourcesPage;
