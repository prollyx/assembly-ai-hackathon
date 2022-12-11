import { useUser } from "@auth0/nextjs-auth0/client";
import { useRouter } from "next/router";
import Dashboard from "./dashboard";
import SignUp from "./signup";

export default function Home() {
  const { user, error, isLoading } = useUser();
  const router = useRouter();

  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>{error.message}</div>;

  if (user) {
    router.push("/dashboard");
  } else {
    router.push("/signup");
  }

  // router.push("/signup");
  return <></>;
}
