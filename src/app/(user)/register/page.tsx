import RegisterForm from "./RegisterForm";
import { redirect } from "next/navigation";
import { cookies } from "next/headers";
import Image from "next/image";

const RegisterPage = async () => {
  const token = (await cookies()).get("jwtToken")?.value;
  if (token) redirect("/");

  return (
    <section className="min-h-screen bg-gradient-to-r from-blue-400 to-blue-100 flex items-center justify-center px-4 sm:px-6 md:px-8 lg:px-10">
      <div className="w-full max-w-lg space-y-6 mt-2">
        {/* النص والشعار بجانب بعضهما */}
        <div className="flex flex-col items-center sm:flex-row sm:items-center justify-center sm:justify-start text-center sm:text-left mb-4">
          <Image
            className="h-12 sm:h-16 md:h-20 w-auto mb-4 sm:mb-0 sm:mr-4 rounded-full border-2 border-blue-700"
            src="/logo.jpg"
            alt="شعار الشركة"
            width={80} // عرض الصورة
            height={80} // ارتفاع الصورة
            priority // تحسين تحميل الصورة
          />
          <div>
            <h1 className="text-lg sm:text-2xl md:text-3xl font-extrabold text-blue-700 leading-tight">
              مرحبًا بكم في البوابة الإلكترونية
            </h1>
            <p className="text-base sm:text-lg md:text-xl font-semibold text-blue-800 mt-2">
              شركة الاسكندرية لاستخلاص الزيوت النباتية
            </p>
          </div>
        </div>
        {/* صندوق التسجيل */}
        <div className="bg-white py-6 sm:py-8 px-4 sm:px-6 shadow-lg rounded-lg sm:px-10 relative">
          <h2 className="text-xl sm:text-2xl md:text-3xl font-extrabold text-blue-800 text-center mb-6">
            إنشاء حساب جديد
          </h2>
          <RegisterForm />
        </div>
      </div>
    </section>
  );
};

export default RegisterPage;
