import React from "react";
import useSWR from "swr";
import { PageLayout } from "../components/page-layout";
import { withPageAuthRequired } from "@auth0/nextjs-auth0";
import { ViewAllProjectsPage } from "../components/projects/view-all-projects-page";

export default function DashboardPage() {
  const fetcher = (url: string) =>
    fetch(url)
      .then((res) => res.json())
      .catch((e) => console.log(e));

  const { data, error, isLoading } = useSWR("/api/projects", fetcher);

  if (isLoading) return <div>loading...</div>;

  if (error) return <div>failed to load</div>;

  return (
    <PageLayout>
      <ViewAllProjectsPage />
    </PageLayout>
  );
}

export const getServerSideProps = withPageAuthRequired();
