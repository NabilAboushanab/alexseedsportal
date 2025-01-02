// src/app/departments/Human-Resources/AddDirections/page.tsx
"use client"
import Link from "next/link";
import prisma from "@/utils/db";
import { useState } from "react";

async function createdirections(formData: FormData) {
  const Directions = formData.get("Directions")?.toString();

  if (!Directions) return console.log("required");

  // Create on Database
  await prisma.tblDirectionsAdd.create({
    data: {
      Directions,
    },
  });

  // حفظ التعليمات في الـ local storage بعد الإضافة الناجحة
  localStorage.setItem("latestDirections", Directions);
}

const HumanResourcesPage = () => {
  const [directions, setDirections] = useState("");

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const formData = new FormData(event.currentTarget);
    await createdirections(formData);

    setDirections(""); // إعادة تعيين حقل الإدخال بعد الإرسال
  };

  return (
    <section>
      <div className='w-auto mx-auto rounded-md p-5 bg-slate-400 border-2 border-gray-300'>
        <h1 className="mb-7 font-bold text-3xl">Add Directions</h1>

        <form onSubmit={handleSubmit} className="grid grid-cols-2 gap-6">
          <input
            type="text"
            name="Directions"
            placeholder="Directions"
            className="p-2 text-lg rounded-md text-gray-950 placeholder-blue-500 w-full"
            value={directions}
            onChange={(e) => setDirections(e.target.value)} 
          />

          <div className="col-span-2 flex justify-center">
            <button type="submit" className="bg-cyan-300 hover:bg-cyan-400 text-black font-semibold text-xl rounded-md p-3 transition-colors">
              Submit
            </button>
          </div>
        </form>
      </div>
    </section>
  );
}

export default HumanResourcesPage;
