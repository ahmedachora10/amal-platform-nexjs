'use client';
import { usePathname } from "next/navigation";
import { Button } from "./ui/button";
import Link from "next/link";

export default function StudentLinks() {
    const pathname = usePathname();
    return (
        <ul>
            <li className="my-5">
                <Button variant="ghost" className="bg-blue-400 text-blue-950 px-[3rem] rounded-full hover:bg-transpirent">
                    My Profile
                </Button>
            </li>
            <li className="my-5">
                <Button variant="ghost" className={"hover:text-blue-950 hover:bg-transpirent " + (pathname == "/student/profile" ? "text-[#0D45C5]" : "")}>
                    <Link href='/student/profile'> Personal Information</Link>
                </Button>
            </li>
            <li className="my-5">
                <Button variant="ghost" className={"hover:text-blue-950 hover:bg-transpirent " + (pathname == "/student/password" ? "text-[#0D45C5]" : "")}>
                    <Link href='/student/password'> Password</Link>
                </Button>
            </li>
            <li className="my-5">
                <Button variant="ghost" className={"hover:text-blue-950 hover:bg-transpirent " + (pathname == "/student/courses" ? "text-[#0D45C5]" : "")}>
                    <Link href='/student/courses'> My Courses</Link>
                </Button>
            </li>
            <li className="my-5">
                <Button variant="ghost" className={"hover:text-blue-950 hover:bg-transpirent " + (pathname == "/student/tests" ? "text-[#0D45C5]" : "")}>
                    <Link href='/student/tests'> My Tests</Link>
                </Button>
            </li>
        </ul>
    )
}