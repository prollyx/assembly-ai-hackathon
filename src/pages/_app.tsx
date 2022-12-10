import "../styles/globals.css";
import type { AppProps } from "next/app";
import { UserProvider } from "@auth0/nextjs-auth0/client";
import { NotificationProvider } from "../context/notification.provider";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <UserProvider>
      <NotificationProvider>
        <Component {...pageProps} />
      </NotificationProvider>
    </UserProvider>
  );
}
