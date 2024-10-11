import Skeleton from "../skeleton";

export default function HeaderRightBarSkeleton() {
  return (
    <div className="relative flex items-center justify-center gap-2 p-1">
      <Skeleton className="absolute top-0 left-0 w-full h-full bg-white" />
      <Skeleton className="w-8 h-8" />
    </div>
  );
}
