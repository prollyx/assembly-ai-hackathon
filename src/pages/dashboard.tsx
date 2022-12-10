import React from "react";
import useSWR from "swr";

const DashboardPage = () => {
  const fetcher = (url: string) =>
    fetch(url)
      .then((res) => res.json())
      .catch((e) => console.log(e));

  const { data, error } = useSWR("/api/sample", fetcher);

  return (
    <>
      <h1>dashboard</h1>
      <pre>{JSON.stringify({ data, error, message: "Hello" }, null, 2)}</pre>
    </>
  );
};

export default DashboardPage;
