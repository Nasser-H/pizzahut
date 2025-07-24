'use client'
import { useQuery } from "@tanstack/react-query";

export default function useGetProducts(category: string) {
    async function getProducts(){
        const response = await fetch(`/api/products?cat=${category}`);
        const data = await response.json();
        return data;
    }
    const response = useQuery({
        queryKey: ['Products', category],
        queryFn: getProducts,
        enabled: !!category,
        refetchOnWindowFocus:false,
        refetchOnReconnect: false,
        staleTime: 1000000
    });
    return response;
}
