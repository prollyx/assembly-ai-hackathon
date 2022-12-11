import "../styles/globals.css";
import type { AppProps } from "next/app";
import { UserProvider } from "@auth0/nextjs-auth0/client";
import { NotificationProvider } from "../context/notification.provider";
import { ProjectProvider } from "../context/project.provider";
import { SessionProvider } from "../context/session.context";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <NotificationProvider>
      <UserProvider loginUrl="/api/auth/login">
        <SessionProvider>
          <ProjectProvider>
            <div className="text-center">
              Here is the link to the github repo:
              <a href="https://github.com/prollyx/assembly-ai-hackathon">
                https://github.com/prollyx/assembly-ai-hackathon
              </a>
            </div>
            <Component {...pageProps} />
          </ProjectProvider>
        </SessionProvider>
      </UserProvider>
    </NotificationProvider>
  );
}
