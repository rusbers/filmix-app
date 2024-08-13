"use client";

import { CldUploadWidget, CloudinaryUploadWidgetInfo } from "next-cloudinary";
import { toast } from "sonner";
import { cn } from "@/lib/utils";
import { updateUserAvatar } from "@/lib/actions/user";

type UserDetailsFormProps = {
  isAvatar: boolean;
};

export function UserAvatarWidget({ isAvatar }: UserDetailsFormProps) {
  return (
    <CldUploadWidget
      uploadPreset="avatars"
      signatureEndpoint="/api/sign-image"
      onSuccess={async (result) => {
        const info = result.info as CloudinaryUploadWidgetInfo;
        await updateUserAvatar(info.public_id);

        toast.success("Your avatar was successfully updated!");
      }}
      onError={(error, widget) => {
        toast.error("Oops! Could not upload you image!");
        console.error(error);
        widget.close();
      }}
      options={{
        sources: ["local", "camera"],
        maxFileSize: 3000000,
        cropping: true,
        multiple: true,
        croppingShowBackButton: true,
        showSkipCropButton: true,
        styles: {
          palette: {
            window: "#161D2F",
            windowBorder: "#90A0B3",
            tabIcon: "#FFFFFF",
            menuIcons: "#5A616A",
            textDark: "#000000",
            textLight: "#FFFFFF",
            link: "#fff",
            action: "#20B832",
            inactiveTabIcon: "#5A698F",
            error: "#FC4747",
            inProgress: "#0078FF",
            complete: "#20B832",
            sourceBg: "#4B546A",
          },
        },
      }}
    >
      {({ open }) => {
        return (
          <button
            className={cn(
              "b mr-4 cursor-pointer rounded-full border-2 border-solid bg-app-semidark-blue px-4 py-2 text-sm font-semibold transition-colors hover:border-stone-300 hover:text-stone-300 active:opacity-50",
            )}
            onClick={() => open()}
          >
            {isAvatar ? "Update your avatar" : "Upload an image"}
          </button>
        );
      }}
    </CldUploadWidget>
  );
}
