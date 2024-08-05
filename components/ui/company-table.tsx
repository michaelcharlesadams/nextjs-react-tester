import {
    Table,
    TableBody,
    TableCaption,
    TableCell,
    TableFooter,
    TableHead,
    TableHeader,
    TableRow,
  } from './table';

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
  }
  
  const CompanyTable: React.FC<CompanyTableProps> = ({ companies }) => {
    // Calculate totals
    const totals = companies.reduce((acc, company) => {
      acc.employees += company.employees;
      acc.revenue += company.revenue;
      return acc;
    }, { employees: 0, revenue: 0 });
  
    return (
      <Table>
        <TableCaption>Comprehensive list of companies fetched from the server</TableCaption>
        <TableHeader>
          <TableRow>
            <TableHead>Name</TableHead>
            <TableHead>Description</TableHead>
            <TableHead>Location</TableHead>
            <TableHead>Website</TableHead>
            <TableHead>Revenue</TableHead>
            <TableHead>Employees</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {companies.map((company) => (
            <TableRow key={company.id}>
              <TableCell>{company.name}</TableCell>
              <TableCell>{company.description}</TableCell>
              <TableCell>{company.location}</TableCell>
              <TableCell>{company.website}</TableCell>
              <TableCell>${company.revenue.toLocaleString()}</TableCell>
              <TableCell>{company.employees}</TableCell>
            </TableRow>
          ))}
        </TableBody>
        <TableFooter className="bg-gray-800 text-white uppercase font-semibold">
          <TableRow>
            <TableCell>Total</TableCell>
            <TableCell></TableCell>
            <TableCell></TableCell>
            <TableCell></TableCell>
            <TableCell>${totals.revenue.toLocaleString()}</TableCell>
            <TableCell>{totals.employees}</TableCell>
          </TableRow>
        </TableFooter>
      </Table>
    );
  };
  
  export default CompanyTable;
  