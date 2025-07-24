'use client'
import React from "react";
import Loading from "./loading";
import useGetCategories from "../hooks/useGetCategories";

export default function LoadingProvider({children}: {children:React.ReactNode}) {
    let {isLoading} = useGetCategories();
 return <>
    {isLoading ? <Loading/>:children}
    </>
}
