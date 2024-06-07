import {
  RegisterLink,
  LoginLink,
} from "@kinde-oss/kinde-auth-nextjs/components";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <h1 className="text-2xl font-semibold">My Kinde App</h1>
      <div className="flex gap-3 items-center">
        <LoginLink className="bg-blue-600 text-white p-3 rounded-lg hover:bg-blue-400">
          Sign in
        </LoginLink>
        <RegisterLink className="bg-blue-600 text-white p-3 rounded-lg hover:bg-blue-400">
          Sign up
        </RegisterLink>
      </div>
    </main>
  );
}
