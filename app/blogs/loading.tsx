export default function BlogsLoading() {
  return (
    <main aria-busy="true" aria-label="Loading blogs" className="px-5 pb-20 pt-28 sm:px-8 sm:pt-32 md:px-12 lg:px-16 lg:pt-40">
      <div className="mx-auto grid max-w-[1440px] animate-pulse gap-12 lg:grid-cols-[1.03fr_1fr] lg:gap-14">
        <div>
          <div className="aspect-[16/9] rounded-[28px] bg-[#EEEEEE] sm:rounded-[44px]" />
          <div className="mt-14 h-8 w-28 rounded-full bg-[#EEEEEE]" />
          <div className="mt-5 h-8 w-4/5 rounded-lg bg-[#EEEEEE]" />
          <div className="mt-5 h-5 w-full rounded bg-[#EEEEEE]" />
          <div className="mt-3 h-5 w-2/3 rounded bg-[#EEEEEE]" />
        </div>
        <div className="space-y-8">
          {[0, 1, 2, 3].map((i) => (
            <div key={i} className="grid grid-cols-[1fr_7.5rem] gap-6 sm:grid-cols-[1fr_16rem]">
              <div className="space-y-3">
                <div className="h-6 w-full rounded bg-[#EEEEEE]" />
                <div className="h-4 w-4/5 rounded bg-[#EEEEEE]" />
                <div className="h-4 w-3/5 rounded bg-[#EEEEEE]" />
              </div>
              <div className="aspect-[16/9] rounded-[20px] bg-[#EEEEEE]" />
            </div>
          ))}
        </div>
      </div>
    </main>
  );
}
