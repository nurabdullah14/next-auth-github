import Login from "@/app/components/Login/Login";
import { Metadata } from "next";
import FullLayout from "@/app/components/Layouts/FullLayout";

export const metadata: Metadata = {
  title: "Next.js SignIn Page | TailAdmin - Next.js Dashboard Template",
  description: "This is Next.js Signin Page TailAdmin Dashboard Template",
};

export default function Home() {
  return (
    <>
      <FullLayout>
        <Login />
      </FullLayout>
    </>
  );
}