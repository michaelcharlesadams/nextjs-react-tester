'use client'

import { useState, useEffect } from 'react';
import { Company } from '@/lib/types';


const useCompanies = () => {
    const [companies, setCompanies] = useState<Company[]>([]);
    const [error, setError] = useState<string | null>(null);
    const [loading, setLoading] = useState(true); // Add loading state

    useEffect(() => {
        const fetchCompanies = async () => {
            
            try {
                const response = await fetch('/api/companies');
                if (!response.ok) throw new Error('Failed to fetch companies');
                const data: Company[] = await response.json();
                setCompanies(data);
            } catch (err: any) {
                setError(err.message);
                //alert(`An error occurred: ${err.message}`);
            } finally {
                setLoading(false); // Set loading to false when fetch completes
            }
        };

        fetchCompanies();
    }, []); // Empty dependency array ensures this runs only once

    return { companies, loading, error };
};

export default useCompanies;
