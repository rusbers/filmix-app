import { Button } from "@/components/ui/button";
import { useFormStatus } from "react-dom";

export function SubmitButton() {
  const { pending } = useFormStatus();

  return (
    <Button
      className="w-full active:opacity-50 min-[600px]:mx-auto min-[600px]:w-auto"
      type="submit"
      variant="secondary"
      disabled={pending}
    >
      {pending ? "Updating your details" : "Update details"}
    </Button>
  );
}
