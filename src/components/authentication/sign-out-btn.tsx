"use client";

import { logOut } from "@/lib/actions/authentication";
import { Button } from "../ui/button";

export default function SignOutBtn() {
  return (
    <Button
      onClick={async () => await logOut()}
      variant="link"
      className="h-min w-full px-4 py-0 text-app-red"
    >
      Sign out of Filmix
    </Button>
  );
}
