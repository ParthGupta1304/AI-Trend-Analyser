import Image from "next/image";

export default function Hero() {
  return (
    <section className="relative min-h-screen flex-col items-center justify-center bg-linear-to-b from-white to-gray-50 overflow-hidden">
      <div className="container mx-auto px-4 py-16">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="space-y-6 z-10">
            <h1 className="text-5xl font-serif lg:text-6xl  text-black leading-tight">
              AI-Powered
              <span className="block text-transparent bg-clip-text bg-linear-to-r from-blue-600 to-teal-400">
                Sentiment Analysis
              </span>
            </h1>
            <p className="text-xl text-gray-600 leading-relaxed">
              Turn traffic into revenue with intelligent AI that analyzes
              patterns, predicts customer actions, delivers personalized
              journeys, boosts conversions every single day.
            </p>
            <div className="flex gap-4">
              <button className="px-8 py-3 bg-blue-600 text-white rounded-lg font-semibold hover:bg-blue-700 transition">
                Get Started
              </button>
              <button className="px-8 py-3 border-2 border-gray-300 text-gray-700 rounded-lg font-semibold hover:border-gray-400 transition">
                Learn More
              </button>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-4 pt-8">
              <div>
                <div className="text-3xl font-bold text-blue-600">+85%</div>
                <div className="text-sm text-gray-600">Overall Sentiment</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-purple-600">4.5★</div>
                <div className="text-sm text-gray-600">Average Rating</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-green-600">4.2K</div>
                <div className="text-sm text-gray-600">Mentions</div>
              </div>
            </div>
          </div>

          {/* Right Image */}
          <div className="relative">
            <Image
              src="/images/hero-sentiment.png"
              alt="AI Sentiment Analysis Dashboard"
              width={800}
              height={600}
              priority
              className="w-full h-auto"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
