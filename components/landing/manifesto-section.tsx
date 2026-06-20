export function ManifestoSection() {
  return (
    <section className="relative overflow-hidden bg-white px-5 py-24 sm:px-8 sm:py-32 lg:px-12 lg:py-40">
      <div className="absolute right-[-120px] top-1/2 h-80 w-80 -translate-y-1/2 rotate-[-12deg] rounded-[70px] border-[40px] border-[#17caa8]/[0.055]" />
      <div className="relative mx-auto grid max-w-[1400px] gap-10 lg:grid-cols-[.32fr_1fr]">
        <div className="flex items-start gap-3 pt-2">
          <span className="mt-1 h-2 w-2 rounded-full bg-[#11b798]" />
          <p className="section-label text-[#087a68]">Our point of view</p>
        </div>
        <div>
          <p className="max-w-5xl text-4xl font-medium leading-[1.13] tracking-[-0.04em] text-[#0a1714] sm:text-5xl lg:text-[66px]">
            We do not just build software. <span className="text-[#80908b]">We design the systems that keep your business moving.</span>
          </p>
          <div className="mt-12 grid max-w-4xl gap-6 border-t border-black/10 pt-8 sm:grid-cols-2 sm:gap-12">
            <p className="text-base leading-7 text-[#4e5d58]">The right technology should make work clearer, handoffs faster, and decisions easier to trust.</p>
            <p className="text-base leading-7 text-[#4e5d58]">That is why we begin with how the business actually runs—then design, connect, and improve from there.</p>
          </div>
        </div>
      </div>
    </section>
  );
}
