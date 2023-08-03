import {LogoutLink, getKindeServerSession} from "@kinde-oss/kinde-auth-nextjs/server";

export default async function Main() {
  const { getUser } = getKindeServerSession();
	const user = getUser();
  
  return (
    <main className="main">
      <h2>Main Page</h2>
      <div className="card">
        <p>Welcome, {user ? user.given_name : "User"}</p>
        <p> {user && user.email}</p>
          <LogoutLink>Log Out</LogoutLink>
      </div>
    </main>
  )
}