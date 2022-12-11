import { withPageAuthRequired } from "@auth0/nextjs-auth0";
import { PageLayout } from "../../components/page-layout";
import { ViewAllProjectsPage } from "../../components/projects/view-all-projects-page";

export default function ProjectsPage() {
  return (
    <PageLayout>
      <ViewAllProjectsPage />
    </PageLayout>
  );
}

export const getServerSideProps = withPageAuthRequired();
