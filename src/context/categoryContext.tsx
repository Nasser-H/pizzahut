'use client'
import React, { createContext, ReactNode, useState } from 'react'

type CategoryContextType = {
  category: string
  setCategory: React.Dispatch<React.SetStateAction<string>>
}

export const CategoryContext = createContext<CategoryContextType | null>(null);

export default function CategoryContextProvider({children} : {children:ReactNode}) {
      const [category, setCategory] = useState ('new');
    return <CategoryContext.Provider value={{category, setCategory}}>
        {children}
    </CategoryContext.Provider>
}
