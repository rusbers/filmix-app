import { PageUnderDevelopment } from "@/components/application/page-under-development";
import Link from "next/link";

export default async function AdminDashboardPage() {
  return (
    <>
      <h1 className="heading-L mb-4">Admin Dashboard</h1>
      <nav className="rounded-lg bg-app-semidark-blue p-3">
        <ul className="flex space-x-6">
          <li>
            <Link
              className="text-slate-300 underline-offset-4 hover:underline active:opacity-50"
              href="/dashboard/shows"
            >
              Manage shows
            </Link>
          </li>
          <li>
            <Link
              className="text-slate-300 underline-offset-4 hover:underline active:opacity-50"
              href="/dashboard/users"
            >
              View users activity
            </Link>
          </li>
        </ul>
      </nav>
      <PageUnderDevelopment />
    </>
  );
}
