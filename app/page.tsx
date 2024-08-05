'use client'

import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import useCompanies from "@/lib/useCompanies";
import CompanyTable from "@/components/ui/company-table"; // Adjust the path as needed

export default function Home() {
  const { companies, error } = useCompanies();

  if (error) {
    return <div>Error loading data: {error}</div>;
  }

  return (
    <div className="min-h-screen min-w-screen bg-gradient-to-tl from-blue-400 to-blue-700 text-white space-y-6">
      <div className="bg-white/10 p-4">
        <div className="container">
          <h2 className="font-ornate text-2xl font-semibold tracking-tighter">
            React Next.js Tester
          </h2>
        </div>
      </div>
      <div className="container">
        <Card>
          <CardHeader className="px-7">
            <CardTitle>List of Companies</CardTitle>
            <CardDescription>Overview of active companies with basic details.</CardDescription>
          </CardHeader>
          <CardContent>
            <CompanyTable companies={companies} />
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
