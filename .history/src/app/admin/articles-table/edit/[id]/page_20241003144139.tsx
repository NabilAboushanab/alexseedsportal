import { cookies } from 'next/headers';
import { redirect } from 'next/navigation';
import React from 'react'

const EditArticlePage = () => {
    const token = cookies().get("jwtToken")?.value;
    if (!token) redirect("/");
  
    const payload = verifyTokenForPage(token);
    if (payload?.isAdmin === false) redirect("/");
  return (
    <div>EditArticlePage</div>
  )
}

export default EditArticlePage