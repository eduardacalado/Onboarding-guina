import { Skeleton } from "@/app/atomic";

export function BoardListSkeleton() {
  return (
    <>
      <div className="flex flex-wrap justify-start items-stretch gap-lg">
        {Array.from({ length: 10 }).map((_, index) => (
          <Skeleton
            key={index}
            className="flex-[0_0_265px] min-w-[247px] min-h-[124px]"
          />
        ))}
      </div>
      <div className="flex w-full justify-center gap-sm">
        {Array.from({ length: 3 }).map((_, index) => (
          <Skeleton key={index} className="w-3xl h-xxl p-sm rounded-md" />
        ))}
      </div>
    </>
  );
}
