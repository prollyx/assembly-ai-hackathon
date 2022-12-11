import { withPageAuthRequired } from "@auth0/nextjs-auth0";
import React from "react";

export default function settings() {
  return (
    <>
      <h1>settings</h1>
    </>
  );
}

export const getServerSideProps = withPageAuthRequired();
