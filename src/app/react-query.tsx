'use client'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import React, { useState } from 'react'

export default function QueryProvider({children}: {children: React.ReactNode}) {
    const [query] = useState(()=> new QueryClient());
  return <>
    <QueryClientProvider client={query}>
        {children}
    </QueryClientProvider>
  </>
}
