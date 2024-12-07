import { Button } from "./Button";

export function CallToAction() {
  return (
    <div className="bg-gradient-to-r from-purple-600 to-indigo-600 text-white rounded-lg shadow-xl overflow-hidden my-12">
      <div className="px-6 py-12 sm:px-12 sm:py-16 md:p-20 lg:p-24 flex flex-col sm:flex-row items-center justify-between gap-8">
        <div className="text-center sm:text-left max-w-2xl">
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-4">
            Ready to build your community?
          </h2>
          <p className="text-lg text-purple-100 mb-6 sm:mb-0">
            Join thousands of creators and start growing your audience today.
          </p>
        </div>
        <Button>Get Started For Free</Button>
      </div>
    </div>
  );
}
