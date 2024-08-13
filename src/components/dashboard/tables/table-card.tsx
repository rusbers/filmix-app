import { cn } from "@/lib/utils";

type CardCommonProps = {
  children: React.ReactNode;
  className?: string;
};

export function Container({ className, children }: CardCommonProps) {
  return (
    <div
      className={cn(
        "rounded-lg border border-slate-800 bg-app-semidark-blue text-slate-50 shadow-sm",
        className,
      )}
    >
      {children}
    </div>
  );
}

export function Header({ className, children }: CardCommonProps) {
  return (
    <div
      className={cn("flex flex-col space-y-1.5 p-6 pb-0 max-sm:p-4", className)}
    >
      {children}
    </div>
  );
}

export function Title({ className, children }: CardCommonProps) {
  return (
    <div
      className={cn(
        "text-2xl font-semibold leading-none tracking-tight",
        className,
      )}
    >
      {children}
    </div>
  );
}

export function Subtitle({ className, children }: CardCommonProps) {
  return (
    <div className={cn("text-sm text-slate-400", className)}>{children}</div>
  );
}

export function ContentWrapper({ className, children }: CardCommonProps) {
  return <div className={cn("p-6 pb-0 max-sm:p-4", className)}>{children}</div>;
}

export function Footer({ className, children }: CardCommonProps) {
  return (
    <div
      className={cn(
        "flex w-full items-center justify-between p-6 pt-0 max-sm:p-4",
        className,
      )}
    >
      {children}
    </div>
  );
}

const TableCard = {
  Container,
  Header,
  Title,
  Subtitle,
  ContentWrapper,
  Footer,
};

export default TableCard;
