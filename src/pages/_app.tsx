import "../styles/globals.css";
import type { AppProps } from "next/app";
import { NotificationProvider } from "../context/notification.provider";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <NotificationProvider>
      <Component {...pageProps} />
    </NotificationProvider>
  );
}
