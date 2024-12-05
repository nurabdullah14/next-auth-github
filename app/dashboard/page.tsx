import Dashboard from "@/app/components/Dashboard/E-commerce";
import { Metadata } from "next";
import DefaultLayout from "@/app/components/Layouts/DefaultLayout";

export const metadata: Metadata = {
    title: "Next.js Admin Dashboard | TailAdmin - Next.js Dashboard Template",
    description: "This is Next.js Signin Page TailAdmin Dashboard Template",
  };

export default function dashboard() {
  return (
    <>
      <DefaultLayout>
        <Dashboard />
      </DefaultLayout>
    </>
  );
}
