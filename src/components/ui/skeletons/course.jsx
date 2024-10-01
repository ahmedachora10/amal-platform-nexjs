import Skeleton from "../skeleton";

export default function CourseSkeleton() {
    return (
        <div className="min-w-[300px] min-h-[400px] flex flex-col relative">
            <Skeleton className="grow w-full h-full bg-gray-200 flex items-end justify-center absolute top-0 left-0 rounded-md"></Skeleton>
            <Skeleton className="grow w-full h-3/4 bg-gray-200 flex items-end justify-center absolute top-0 left-0 rounded-md"></Skeleton>

            <div className="w-full min-h-16 gap-3 flex absolute bottom-0 left-0 p-4">
                <Skeleton className="grow min-h-16 bg-slate-100 rounded-lg"></Skeleton>
                <Skeleton className="grow min-h-16 bg-slate-100 rounded-lg"></Skeleton>
            </div>
        </div>
    )
}