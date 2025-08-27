import { SignIn } from "@clerk/nextjs";

export default function Page() {
  return (
    <section className="bg-white">
      <div className="lg:grid lg:min-h-screen lg:grid-cols-12">
        {/* Left Section (Image + Overlay) */}
        <section className="relative flex h-32 items-end bg-gray-900 lg:col-span-5 lg:h-full xl:col-span-6">
          <img
            alt="AI interview mock"
            src="https://images.unsplash.com/photo-1617195737496-bc30194e3a19?ixlib=rb-1.2.1&auto=format&fit=crop&w=870&q=80"
            className="absolute inset-0 h-full w-full object-cover opacity-80"
          />

          <div className="absolute bottom-0 left-0 right-0 px-12 py-10 bg-gradient-to-t from-black/80 to-transparent">
            <h2 className="text-3xl font-bold text-white sm:text-4xl md:text-5xl">
              Welcome to SmartMock 🧠
            </h2>
            <p className="mt-4 text-white/90 text-lg">
              Practice mock interviews powered by AI. Improve. Analyze. Succeed.
              Your smart step toward cracking real interviews.
            </p>
          </div>
        </section>

        {/* Right Section (Sign In + Content) */}
        <main className="flex items-center justify-center px-8 py-8 sm:px-12 lg:col-span-7 lg:px-16 lg:py-12 xl:col-span-6">
          <div className="max-w-xl lg:max-w-3xl">
            {/* Mobile logo + heading */}
            <div className="relative -mt-16 block lg:hidden">
              <a
                className="inline-flex size-16 items-center justify-center rounded-full bg-white text-blue-600 sm:size-20"
                href="#"
              >
                <span className="sr-only">Home</span>
                🧠
              </a>

              <h1 className="mt-2 text-3xl font-bold text-gray-900 sm:text-4xl">
                Welcome to SmartMock
              </h1>

              <p className="mt-4 text-gray-500">
                Mock interviews made smarter with AI. Get real-time insights,
                performance analytics, and feedback to level up your game.
              </p>
            </div>

            {/* Clerk SignIn */}
            <SignIn />
          </div>
        </main>
      </div>
    </section>
  );
}
