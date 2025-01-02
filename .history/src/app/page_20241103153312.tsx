// src/app/page.tsx أو src/pages/index.tsx
import { redirect } from "next/navigation";
import { cookies } from "next/headers";
import Hero from "@/components/home/Hero";

const HomePage = async () => {
  const token = (await cookies()).get("jwtToken")?.value;
  if (!token) {
    redirect("/login");
  }

  return (
    <section>
      <Hero />
      <h2 className="text-center mt-10 text-3xl font-bold">
        choose Your Web Hosting Plan
      </h2>
      {/* <div className="container m-auto flex justify-center items-center my-7 flex-wrap md:gap-7">
        <WebHostingPlan />
        <WebHostingPlan />
        <WebHostingPlan />
      </div> */}
    </section>
  );
};

export default HomePage;
