import React from "react";
import useSWR from "swr";

const DashboardPage = () => {
  const fetcher = (url: string) =>
    fetch(url)
      .then((res) => res.json())
      .catch((e) => console.log(e));

  const { data, error, isLoading } = useSWR("/api/sample", fetcher);

  if (isLoading) return <div>loading...</div>;

  if (error) return <div>failed to load</div>;

  return (
    <>
      <h1>dashboard</h1>
      <pre>{JSON.stringify(data, null, 2)}</pre>
    </>
  );
};

export default DashboardPage;
