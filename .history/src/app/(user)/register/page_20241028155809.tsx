import RegisterForm from "./RegisterForm"
import { redirect } from "next/navigation"
import { cookies } from "next/headers"

const RegisterPage = async () => {
  const token=(await cookies()).get("jwtToken")?.value;
  if (token) redirect("/");
  
    return (
      <section className="pt-4 marker:fix-height container m-auto px-7 flex items-center justify-center ">
<div className="m-auto bg-white rounded-lg p-5 w-full md:w-2/3">
<h1 className="text-3xl font-bold text-gray-800 mb-5 text-">
  فتح حساب حديد
  </h1>
<RegisterForm />
</div>
      </section>
    )
  }
  
  export default RegisterPage