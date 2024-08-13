import { Smile } from "lucide-react";

export function PageUnderDevelopment() {
  return (
    <div className="py-16">
      <div className="mb-atu space-y-4 text-center text-lg">
        <h1 className="mb-2 text-2xl font-semibold">
          🚧 We’re Still Getting Things Ready!
        </h1>

        <p>
          Our site is currently under construction, but we’re working on it!{" "}
          <span className="font-semibold text-green-600">
            Thanks for hanging out!
          </span>
        </p>
        <div className="flex items-center justify-center gap-2">
          <p>Check back later for updates!</p>
          <Smile className="stroke-yellow-400" />
        </div>
      </div>
    </div>
  );
}
