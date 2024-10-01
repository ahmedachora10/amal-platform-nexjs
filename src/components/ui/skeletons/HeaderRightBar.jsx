import Skeleton from "../skeleton";

export default function HeaderRightBarSkeleton() {
    return (
        <div className="flex justify-center items-center gap-2 relative p-1">
            <Skeleton className="absolute w-full h-full top-0 left-0 bg-white" />
            <Skeleton className="w-8 h-8" />
            <Skeleton className="w-8 h-8" />
            <Skeleton className="w-8 h-8" />
        </div>
    )
}