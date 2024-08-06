export interface Company {
    id: string;
    name: string;
    description: string;
    location: string;
    website: string;
    revenue: number;
    employees: number;
  }
  
  export interface CompanyTableProps {
    companies: Company[];
    loading: boolean;
  }