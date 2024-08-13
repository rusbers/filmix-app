import { fetchUser } from "@/lib/services/users";
import UserAvatar from "./user-avatar";

export default async function UserAvatarWrapper({
  className,
}: {
  className?: string;
}) {
  const { user } = await fetchUser();

  const { name, lastName, avatarId } = user?.userDetails!;

  return (
    <UserAvatar
      className={className}
      avatarId={avatarId}
      name={name}
      lastName={lastName}
    />
  );
}
