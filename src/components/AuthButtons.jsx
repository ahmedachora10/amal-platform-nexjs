import Link from "next/link";
import { Button } from "./ui/button";
import useAuth from "@/app/_hook/useAuth";

export default function AuthButtons() {
    const { isLoading, user } = useAuth();

    return (
        (isLoading || user) ? <></> : (
            <>
                <Button variant="outline" className="px-6">
                    <Link href="/login">Sign In</Link>
                </Button>
                <Button variant="outline" className="bg-primary text-white ms-2 px-6">
                    <Link href="/register">Sign Up</Link>
                </Button>
            </>
        )
    )
}