import { RegisterLink } from "@kinde-oss/kinde-auth-nextjs/server";

export default function Home() {
  return (
    <main className="main">
      <h2>Kinde - Passwordless Auth Demo Application</h2>
      <div className="card">
        <p>A simple demo Next.js 13 application that integrates Kinde's passwordless authentication</p>
        <RegisterLink>Create Account</RegisterLink>
      </div>
    </main>
  )
}