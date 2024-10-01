'use client'
/**
 * 
 * @param {import("react").HTMLAttributes<HTMLDivElement>} props 
 */
export default function Skeleton(props) {
    const className = props.className || "";
    return (
        <div {...props} className={"animate-pulse " + className + (className.indexOf("bg-") !== -1 ? "" : " bg-slate-200")}>
        </div>
    )
}