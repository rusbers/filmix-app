"use client";

import { deleteUserAvatar } from "@/lib/actions/user";
import { useTransition } from "react";
import { toast } from "sonner";

type DeleteAvatarBtnProps = {
  isAvatar: boolean;
  avatarId: string;
};

export function DeleteAvatarBtn({ isAvatar, avatarId }: DeleteAvatarBtnProps) {
  const [isPending, startTransition] = useTransition();

  const deleteAvatarAction = () =>
    startTransition(async () => {
      const error = await deleteUserAvatar(avatarId);

      if (error) {
        toast.error(error.message);
      } else {
        toast.success("Your avatar was successfully deleted!");
      }
    });

  return (
    <button
      disabled={isPending || !isAvatar}
      className="-order-1 rounded-full border-2 border-solid border-app-red bg-app-semidark-blue px-4 py-2 text-sm font-semibold text-app-red transition hover:border-red-600 hover:text-red-600 active:opacity-50 disabled:pointer-events-none disabled:opacity-50 md:order-1"
      type="button"
      onClick={deleteAvatarAction}
    >
      {isPending ? "Deleting" : "Delete"}{" "}
      <span className="sr-only">you profile photo</span>
    </button>
  );
}
