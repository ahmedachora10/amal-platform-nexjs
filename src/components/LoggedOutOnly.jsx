'use client';

import useAuth from "@/app/_hook/useAuth";
import { useRouter } from "next/navigation";
import { useEffect } from "react";

export default function LoggedOutOnly({ children, noRedirect = false, skeleton = null }) {
    const { user, isLoading } = useAuth();
    const router = useRouter();

    useEffect(() => {
        if (!isLoading && user && !noRedirect) {
            router.replace("/");
        }
    });

    return isLoading ? <>{skeleton}</> : !user ? (
        <>
            {children}
        </>
    ) : <></>
}