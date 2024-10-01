'use client'
/**
 * 
 * @param {import("react").HTMLAttributes<HTMLDivElement>} props 
 */
export default function Skeleton(props) {
    return (
        <div {...props} className={"animate-pulse " + props.className + (props.className.indexOf("bg-") !== -1 ? "" : " bg-slate-200")}>
        </div>
    )
}