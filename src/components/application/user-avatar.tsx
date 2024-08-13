import { cn, generateAvatarFallback } from "@/lib/utils";
import { CldImage } from "./cloudinary-image";

type UserAvatarProps = {
  avatarId: string | null;
  name: string;
  lastName: string;
  className?: string;
};

export default function UserAvatar({
  avatarId,
  name,
  lastName,
  className,
}: UserAvatarProps) {
  const fallback = generateAvatarFallback(name, lastName);

  return (
    <AvatarContainer className={className}>
      {avatarId ? (
        <CldImage
          src={avatarId}
          alt={`${name} ${lastName} avatar`}
          fill
          sizes="6rem"
          className="object-conver aspect-square h-full w-full"
        />
      ) : (
        <AvatarFallback>{fallback}</AvatarFallback>
      )}
    </AvatarContainer>
  );
}

function AvatarContainer({
  className,
  children,
}: {
  className?: string;
  children: React.ReactNode;
}) {
  return (
    <div
      className={cn(
        "relative flex h-10 w-10 shrink-0 overflow-hidden rounded-full border-2 border-white text-xl",
        className,
      )}
    >
      {children}
    </div>
  );
}

function AvatarFallback({
  className,
  children,
}: {
  className?: string;
  children: React.ReactNode;
}) {
  return (
    <div
      className={cn(
        "flex h-full w-full items-center justify-center rounded-full bg-app-greyish-blue",
        className,
      )}
    >
      {children}
    </div>
  );
}
