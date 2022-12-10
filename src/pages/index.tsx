import { useUser } from "@auth0/nextjs-auth0/client";
import Dashboard from "../components/dashboard";
import SignUp from "../components/signup";

export default function Home() {
  const { user, error, isLoading } = useUser();

  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>{error.message}</div>;

  if (user) {
    return <Dashboard />;
  }

  return <SignUp />;
}
