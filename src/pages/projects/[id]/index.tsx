import { PageLayout } from "../../../components/page-layout";
import { useRouter } from "next/router";
import { FeaturesPage } from "../../../components/features/features-page";
import { withPageAuthRequired } from "@auth0/nextjs-auth0";

export default function ProjectPage() {
  const router = useRouter();
  const { id } = router.query;

  if (id) {
    return (
      <PageLayout>
        <FeaturesPage projectId={id as string} />
      </PageLayout>
    );

    return null;
  }
}

export const getServerSideProps = withPageAuthRequired();
