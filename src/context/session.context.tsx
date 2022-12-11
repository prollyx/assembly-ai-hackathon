import React, { createContext, FC, PropsWithChildren, useEffect } from "react";
import { useRouter } from "next/router";
import { useUser } from "@auth0/nextjs-auth0/client";

const sesssionContext = createContext(undefined);

const SessionProvider: FC<PropsWithChildren> = ({ children }) => {
  const { push } = useRouter();

  const { user, isLoading } = useUser();

  // useEffect(() => {
  //     if (!isLoading) {
  //         if (!user) {
  //             push("/login")
  //         } else {
  //             push("/projects")
  //         }
  //     }
  // // eslint-disable-next-line react-hooks/exhaustive-deps
  // }, [isLoading, user])

  return (
    <sesssionContext.Provider value={undefined}>
      {children}
    </sesssionContext.Provider>
  );
};

export { SessionProvider };
