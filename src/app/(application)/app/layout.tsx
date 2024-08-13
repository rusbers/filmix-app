import AppHeader from "@/components/application/app-header";
import { cn } from "@/lib/utils";
import { Toaster } from "sonner";

export default function Layout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className={cn("lg:container md:py-[1.5rem]")}>
      <AppHeader />
      <main
        className={cn(
          "container lg:container-none w-full overflow-x-hidden lg:pl-[6rem]",
        )}
      >
        {children}
      </main>
      <Toaster
        toastOptions={{
          unstyled: true,
          classNames: {
            toast:
              "bg-app-semidark-blue w-fit flex border-2 items-center min-h-[50px] px-4 rounded-lg space-x-2 text-white",
            success: "border-green-800",
            error: "border-app-red",
          },
        }}
      />
    </div>
  );
}
