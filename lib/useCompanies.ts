'use client'

import { useState, useEffect } from 'react';
import { Company } from '@/types';


const useCompanies = () => {
    const [companies, setCompanies] = useState<Company[]>([]);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        const fetchCompanies = async () => {
            try {
                const response = await fetch('/api/companies');
                if (!response.ok) throw new Error('Network response was not ok');
                const data: Company[] = await response.json();
                console.log(companies);
                setCompanies(data);
            } catch (err: any) {
                setError(err.message);
                //alert(`An error occurred: ${err.message}`);
            }
        };

        fetchCompanies();
    }, []); // Empty dependency array ensures this runs only once

    return { companies, error };
};

export default useCompanies;
