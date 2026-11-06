export default function BlogDetailLoading() {
  return (
    <main aria-busy="true" aria-label="Loading article" className="bg-[#F4F4F4] px-5 pb-20 pt-28 sm:px-8 sm:pt-32 md:px-12 lg:px-16 lg:pt-40">
      <div className="mx-auto max-w-[1240px] animate-pulse">
        <div className="h-12 w-4/5 max-w-[820px] rounded-xl bg-black/[0.06]" />
        <div className="mt-4 h-12 w-3/5 max-w-[620px] rounded-xl bg-black/[0.06]" />
        <div className="mt-12 grid gap-10 lg:grid-cols-[0.95fr_1fr] lg:gap-14">
          <div className="order-2 space-y-3 lg:order-1 lg:py-12">
            <div className="h-5 w-full max-w-[540px] rounded bg-black/[0.06]" />
            <div className="h-5 w-5/6 max-w-[480px] rounded bg-black/[0.06]" />
            <div className="h-5 w-2/3 max-w-[400px] rounded bg-black/[0.06]" />
          </div>
          <div className="order-1 aspect-[16/9] rounded-[28px] bg-black/[0.06] sm:rounded-[40px] lg:order-2 lg:aspect-[1.8/1]" />
        </div>
      </div>
    </main>
  );
}
