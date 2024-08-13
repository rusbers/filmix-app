import UserDetailsForm from "@/components/application/user-details-form";
import { UserAvatarWidget } from "@/components/application/user-avatar-widget";
import UserAvatarWrapper from "@/components/application/user-avatar-wrapper";
import { DeleteAvatarBtn } from "@/components/application/delete-avatar-btn";
import DeleteUserBtn from "@/components/application/delete-user-btn";
import { fetchUser } from "@/lib/services/users";

export default async function AccountPage() {
  const { user, isAdmin } = await fetchUser();

  const isAvatar = !!user?.userDetails?.avatarId;

  return (
    <>
      <h1 className="heading-L mb-4">
        Your Account{" "}
        {isAdmin && <span className="text-green-600">(admin)</span>}
      </h1>
      <div className="space-y-8">
        <section className="md:w-10/12 lg:w-1/2">
          <h2 className="heading-M mb-2">Details</h2>
          <UserDetailsForm userDetails={user?.userDetails!} />
        </section>
        <section>
          <h2 className="heading-M mb-2">Profile photo</h2>
          <div className="space-y-4 min-[500px]:flex min-[500px]:items-center min-[500px]:space-x-4 min-[500px]:space-y-0">
            <UserAvatarWrapper className="h-20 w-20 text-4xl" />
            <div className="flex gap-3">
              <UserAvatarWidget isAvatar={isAvatar} />
              <DeleteAvatarBtn
                isAvatar={isAvatar}
                avatarId={user?.userDetails?.avatarId!}
              />
            </div>
          </div>
        </section>
        {!isAdmin && <DeleteUserBtn />}
      </div>
    </>
  );
}
