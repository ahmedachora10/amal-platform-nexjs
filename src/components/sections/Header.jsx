'use client'

import Link from "next/link";
import { Button } from "../ui/button";

export default function Header() {
    return (
        <header className="bg-white py-3">
            <div className="container mx-auto">
                <div className="flex items-center justify-between">
                    <div className="logo">Logo</div>
                    <div className="menu">
                        <ul className="flex items-center justify-center">
                            <li className="mx-3"><Link href="/">Home</Link></li>
                            <li className="mx-3"><Link href="/">Courses</Link></li>
                            <li className="mx-3"><Link href="/">About Us</Link></li>
                            <li className="mx-3"><Link href="/">Contact Us</Link></li>
                            <li className="mx-3"><Link href="/student/profile">Profile</Link></li>
                        </ul>
                    </div>
                    <div className="auth">
                        <div className="flex items-center justify-start">
                            <Button variant="outline" className="px-6">
                                <Link href="/login">Sign In</Link>
                            </Button>
                            <Button variant="outline" className="bg-primary text-white ms-2 px-6">
                                <Link href="/register">Sign Up</Link>
                            </Button>
                        </div>
                    </div>
                </div>
            </div>
        </header>
    );
}