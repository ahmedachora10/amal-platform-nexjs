'use client';

import useAuth from "@/app/_hook/useAuth";
import { useRouter } from "next/navigation";
import { useEffect } from "react";

export default function LoggedInOnly({ children }) {
    const { user, isLoading } = useAuth();
    const router = useRouter();

    useEffect(() => {
        if (!isLoading && !user) {
            router.replace("/login");
        }
    });

    return isLoading ? <></> : user ? (
        <>
            {children}
        </>
    ) : <></>
}