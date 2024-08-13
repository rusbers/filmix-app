import ShowInfoPage from "@/components/application/show-info-page";
import { checkAuth } from "@/lib/services/users";
import { Suspense } from "react";

type PageProps = {
  params: { showId: string };
};

export default async function Page({ params: { showId } }: PageProps) {
  const { session, isAdmin } = await checkAuth();

  return (
    <Suspense fallback={<p>Loading content...</p>}>
      <ShowInfoPage
        showId={showId}
        userId={session.user.id}
        isAdmin={isAdmin}
      />
    </Suspense>
  );
}
