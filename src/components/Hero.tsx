export default function Hero() {
  return (
    <section className="min-h-screen bg-white flex flex-col items-center justify-center px-8">
      <div className="text-center max-w-6xl">
        <h1 className="text-8xl md:text-9xl lg:text-[12rem] font-serif font-normal text-black mb-8 tracking-wide">
          HIGHLAND
        </h1>
        <div className="w-full h-px bg-black mb-16"></div>
        <p className="text-lg md:text-xl text-black mb-8 font-light">
          36 years of putting the Entrepreneur first
        </p>
        <div className="text-base md:text-lg text-black font-light">
          <span>200 Exits</span>
          <span className="mx-4">|</span>
          <span>50+ IPOs</span>
          <span className="mx-4">|</span>
          <span>40 Unicorns</span>
          <span className="mx-4">|</span>
          <span>$7B AUM</span>
        </div>
      </div>
    </section>
  )
}