import { Suspense } from "react";

export default function CoursesLayout({ children }) {
    return (
        <Suspense>
            {children}
        </Suspense>
    )
}