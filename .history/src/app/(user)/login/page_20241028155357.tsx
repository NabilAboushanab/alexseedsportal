import LoginForm from "./LoginForm";
import { redirect } from "next/navigation"
import { cookies } from "next/headers"

const LoginPage = async () => {
  const token=(await cookies()).get("jwtToken")?.value;
  if (token) redirect("/");
  
    return (
      <section className="pt-4 fix-height container m-auto px-7 flex items-center justify-center">
<div className="m-auto bg-white rounded-lg p-5 w-full md:w-2/3">
<h1 className="text-3xl font-bold text-gray-800 mb-5 text-center">تسجيل الدخول</h1>
<LoginForm />
</div>
      </section>
    )
  }
  
  export default LoginPage