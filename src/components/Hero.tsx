export default function Hero() {
  return (
    <section className="relative h-screen flex items-center justify-center bg-gradient-to-r from-gray-900 to-gray-700">
      <div className="absolute inset-0 bg-black opacity-50"></div>
      <div className="relative z-10 text-center text-white px-6 max-w-4xl">
        <h1 className="text-5xl md:text-6xl font-bold mb-8 leading-tight">
          36 years of putting the
          <br />
          <span className="text-blue-400">Entrepreneur first</span>
        </h1>
        <p className="text-xl md:text-2xl text-gray-300">
          Highland Capital Partners
        </p>
      </div>
    </section>
  )
}