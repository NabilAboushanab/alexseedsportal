import React from 'react'

const EditArticlePage = () => {
    const token = cookies().get("jwtToken")?.value;

    // Redirect to homepage if no token is found
    if (!token) redirect("/");
  
    const payload = verifyTokenForPage(token);
    if (payload?.isAdmin === false) redirect("/");
  return (
    <div>EditArticlePage</div>
  )
}

export default EditArticlePage