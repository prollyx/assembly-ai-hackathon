import "../styles/globals.css";
import type { AppProps } from "next/app";
import { UserProvider } from "@auth0/nextjs-auth0/client";
import { NotificationProvider } from "../context/notification.provider";
import { ProjectProvider } from "../context/project.provider";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <NotificationProvider>
      <UserProvider loginUrl="/api/auth/login">
        <ProjectProvider>
          <Component {...pageProps} />
        </ProjectProvider>
      </UserProvider>
    </NotificationProvider>
  );
}
