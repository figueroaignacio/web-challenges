export function Cta() {
  return (
    <section className="w-full px-4 sm:px-6 lg:px-8 mt-12 md:mt-24">
      <div className="max-w-7xl mx-auto relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-purple-600 via-violet-700 to-indigo-800 opacity-90 rounded-2xl"></div>
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-[url('/placeholder.svg?height=100&width=100')] bg-repeat opacity-5"></div>
        </div>
        <div className="relative py-16 md:py-20 px-6 md:px-12 flex flex-col md:flex-row items-center justify-between gap-8 rounded-2xl">
          <div className="md:max-w-xl">
            <h2 className="text-3xl md:text-4xl font-bold text-white leading-tight">
              Ready To Build Your{" "}
              <span className="text-yellow-300">Community</span>?
            </h2>
            <p className="mt-4 text-purple-100 text-lg max-w-md">
              Join thousands of creators who are already building their audience
              with our platform.
            </p>
          </div>
          <div className="flex flex-col sm:flex-row gap-4 md:gap-6">
            <button
              className="bg-white text-violet-800 font-semibold rounded-full py-4 px-8 text-lg shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-violet-700"
              aria-label="Get Started For Free"
            >
              Get Started For Free
            </button>
            <button
              className="bg-transparent border-2 border-white/70 text-white font-medium rounded-full py-4 px-8 text-lg hover:bg-white/10 transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-violet-700"
              aria-label="Learn More"
            >
              Learn More
            </button>
          </div>
        </div>
        <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-purple-500 rounded-full opacity-30 blur-xl"></div>
        <div className="absolute -top-8 -left-8 w-40 h-40 bg-indigo-600 rounded-full opacity-20 blur-xl"></div>
      </div>
    </section>
  );
}
