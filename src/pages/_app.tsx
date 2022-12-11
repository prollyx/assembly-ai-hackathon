import "../styles/globals.css";
import type { AppProps } from "next/app";
import { UserProvider } from "@auth0/nextjs-auth0/client";
import { NotificationProvider } from "../context/notification.provider";
import {ProjectProvider} from "../context/project.provider";
import {SessionProvider} from "../context/session.context";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <NotificationProvider>
      <UserProvider>
        <SessionProvider>
          <ProjectProvider>
            <Component {...pageProps} />
          </ProjectProvider>
        </SessionProvider>
      </UserProvider>
    </NotificationProvider>
  );
}
