'use client'

import { useState, useEffect } from 'react';

 type Company = {
    id: string;
    name: string;
    description: string;
    location: string;
    website: string;
    revenue: number;
    employees: number;
};


const useCompanies = () => {
    const [companies, setCompanies] = useState<Company[]>([]);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch('/api/companies');
                if (!response.ok) throw new Error('Network response was not ok');
                const data: Company[] = await response.json();
                console.log(companies);
                setCompanies(data);
            } catch (err: any) {
                setError(err.message);
                alert(`An error occurred: ${err.message}`);
            }
        };

        fetchData();
    }, []); // Empty dependency array ensures this runs only once

    return { companies, error };
};

export default useCompanies;
