// src/app/page.tsx أو src/pages/index.tsx
import { redirect } from "next/navigation";
import { cookies } from "next/headers";
import DepartmentsLayoutLayout from "./departments/layout";
import FilledOil from "./departments/page";


const HomePage = async () => {
  const token = (await cookies()).get("jwtToken")?.value;
  if (!token) {
    redirect("/login");
  }

  return (
    <section>
      
      <DepartmentsLayoutLayout>
        {/* يمكن وضع محتوى آخر هنا مثل Hero أو مكونات أخرى */}
        
        <FilledOil />
      </DepartmentsLayoutLayout>

    </section>
  );
};

export default HomePage;
