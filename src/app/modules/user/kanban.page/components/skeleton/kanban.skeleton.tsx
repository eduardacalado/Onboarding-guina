import { Skeleton } from "@/app/atomic";

export function KanbanSkeleton() {
  return (
    <>
      <div className="flex pb-xl w-full justify-start">
        <Skeleton className="w-[300px] h-3xl" />
      </div>
      <div className="flex w-full gap-lg justify-between">
        {Array.from({ length: 4 }).map((_, index) => (
          <div
            key={index}
            className="flex flex-col gap-md justify-between bg-white h-[660px] w-[330px] p-lg rounded-md"
          >
            <Skeleton className="h-lg w-[96px] rounded mb-md" />
            <Skeleton className="flex flex-col gap-sm flex-1 p-sm rounded" />
            <div className="flex justify-center">
              <Skeleton className="h-xxl w-[128px] rounded mt-md" />
            </div>
          </div>
        ))}
      </div>
    </>
  );
}
