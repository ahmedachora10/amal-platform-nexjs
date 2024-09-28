import Link from "next/link";
export default function MainLinks({ noContainer = false }) {
    return (
        noContainer ? (
            <Links />
        ) : (
            <ul className={"flex items-center justify-center"}>
                <Links />
            </ul>
        )
    )
}

function Links() {
    return (
        <>
            <li className="mx-3"><Link href="/">Home</Link></li>
            <li className="mx-3"><Link href="/courses">Courses</Link></li>
            <li className="mx-3"><Link href="/about">About Us</Link></li>
            <li className="mx-3"><Link href="/contact">Contact Us</Link></li>
            <li className="mx-3"><Link href="/student/profile">Profile</Link></li>
        </>
    )
}