import Link from "next/link";
export default function MainLinks() {
    return (
        <ul className="flex items-center justify-center">
            <li className="mx-3"><Link href="/">Home</Link></li>
            <li className="mx-3"><Link href="/courses">Courses</Link></li>
            <li className="mx-3"><Link href="/about">About Us</Link></li>
            <li className="mx-3"><Link href="/contact">Contact Us</Link></li>
            <li className="mx-3"><Link href="/student/profile">Profile</Link></li>
        </ul>
    )
}