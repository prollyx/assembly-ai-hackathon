import { withPageAuthRequired } from "@auth0/nextjs-auth0";
import { PageLayout } from "../../components/page-layout";
import { CreateProject } from "../../components/projects/create-new-project-page";

export default function CreateProjectPage() {
  return (
    <PageLayout>
      <CreateProject />
    </PageLayout>
  );
}

export const getServerSideProps = withPageAuthRequired();
