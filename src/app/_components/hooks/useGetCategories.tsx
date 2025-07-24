'use client'
import { useQuery } from '@tanstack/react-query';

export default function useGetCategories() {
    async function getCategories(){
        const response = await fetch("/api/categories");
        const data = await response.json();
        return data;
    }
    const response = useQuery({
        queryKey: ['categories'],
        queryFn: getCategories,
        refetchOnMount: false,
        refetchOnWindowFocus:false,
        refetchOnReconnect: false,
        staleTime: 1000000
    });
    return response;
}
