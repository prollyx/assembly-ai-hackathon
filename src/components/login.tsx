import styled from "@emotion/styled";
import Link from "next/link";

interface LoginProps {
  fullWidth?: boolean;
}

export default function Login({ fullWidth }: LoginProps) {
  return (
    <Button
      className=" shadow-gray-50 drop-shadow-md"
      color="primary"
      data-width={fullWidth}
    >
      <Link href="/api/auth/login">Sign In</Link>
    </Button>
  );
}

const Button = styled.button`
  &[data-width="true"] {
    width: 100%;
  }
`;
