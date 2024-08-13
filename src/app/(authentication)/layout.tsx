import Logo from "@/components/marketing/logo";

export default function Layout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <main>
      <div className="container flex min-h-screen flex-col items-center justify-center">
        <div className="mb-14 flex justify-center md:mb-20">
          <Logo />
        </div>
        {children}
      </div>
    </main>
  );
}
