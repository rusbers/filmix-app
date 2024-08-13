"use client";

import { updateUserDetails } from "@/lib/actions/user";
import { UserDetails } from "@prisma/client";
import { Input } from "./input-field";
import { SubmitButton } from "./submit-button";
import { useFormState } from "react-dom";
import { ErrorList } from "@/components/authentication/error-list";

type UserDetailsFormProps = {
  userDetails?: UserDetails;
};

export default function UserDetailsForm({ userDetails }: UserDetailsFormProps) {
  const [updateErrors, formAction] = useFormState(updateUserDetails, undefined);

  const { name, lastName } = userDetails!;

  return (
    <form className="space-y-3" action={formAction}>
      <div>
        <label className="block">
          <span className="sr-only">First Name</span>
          <Input
            type="text"
            name="name"
            placeholder="First Name"
            defaultValue={name}
          />
        </label>
        <ErrorList errors={updateErrors?.messages.name} />
      </div>
      <div>
        <label className="block">
          <span className="sr-only">Last Name</span>
          <Input
            type="text"
            name="lastName"
            placeholder="Last Name"
            defaultValue={lastName}
          />
        </label>
        <ErrorList errors={updateErrors?.messages.lastName} />
      </div>
      <SubmitButton />
    </form>
  );
}
