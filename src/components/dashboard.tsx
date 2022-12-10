import React from "react";
import useSWR from "swr";
import { PageLayout } from "../components/page-layout";

const Dashboard = () => {
  const fetcher = (url: string) =>
    fetch(url)
      .then((res) => res.json())
      .catch((e) => console.log(e));

  const { data, error, isLoading } = useSWR("/api/sample", fetcher);

  if (isLoading) return <div>loading...</div>;

  if (error) return <div>failed to load</div>;

  return (
    <PageLayout>
      <h1>dashboard</h1>
      <pre>{JSON.stringify({ data, error, message: "Hello" }, null, 2)}</pre>
    </PageLayout>
  );
};

export default Dashboard;
