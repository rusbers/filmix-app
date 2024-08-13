import Logo from "@/components/marketing/logo";
import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function Home() {
  return (
    <>
      <header className="container absolute left-0 right-0 top-0 flex justify-between gap-2 py-5">
        <div className="flex items-center gap-2">
          <Logo isCustomSize className="h-[1.625rem] w-[2.0313rem]" />
          <span className="text-2xl font-semibold text-white">Filmix</span>
        </div>

        <Button className="app-button" asChild size="lg">
          <Link href="/login">Log In</Link>
        </Button>
      </header>

      <main className="flex min-h-screen flex-col items-center justify-center bg-popsignup bg-cover bg-center bg-no-repeat">
        <div className="container flex w-full flex-col items-center justify-center text-center">
          <h1 className="mb-6 text-3xl font-semibold md:text-5xl">
            Unlimited films, TV programmes and more
          </h1>
          <p className="mb-6 text-xl md:text-2xl">
            Watch anywhere. Cancel at any time.
          </p>
          <Button className="app-button w-full max-w-[25rem]" asChild size="lg">
            <Link href="/signup">Get Started</Link>
          </Button>
        </div>
      </main>
    </>
  );
}
