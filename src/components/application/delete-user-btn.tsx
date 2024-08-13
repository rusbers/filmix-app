"use client";

import { Button } from "@/components/ui/button";
import { logOut } from "@/lib/actions/authentication";
import { deleteUser } from "@/lib/actions/user";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";

export default function DeleteUserBtn() {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button className="p-0 text-app-red underline-offset-2" variant="link">
          Delete my account
        </Button>
      </DialogTrigger>
      <DialogContent className="border-app-dark-blue bg-app-semidark-blue">
        <DialogHeader>
          <DialogTitle className="text-xl">
            Are you absolutely sure?
          </DialogTitle>
          <DialogDescription className="text-base text-stone-300">
            This action cannot be undone. This will permanently delete your
            account and remove your data from our servers.
          </DialogDescription>
        </DialogHeader>
        <DialogFooter>
          <Button
            variant="destructive"
            onClick={async () => {
              await deleteUser();
              await logOut();
            }}
          >
            Yes, delete my account
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}
