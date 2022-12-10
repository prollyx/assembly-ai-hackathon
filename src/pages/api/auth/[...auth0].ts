import { handleAuth, Session, handleCallback } from "@auth0/nextjs-auth0";
import { UserProfile, useUser } from "@auth0/nextjs-auth0/client";
import { NextApiHandler, NextApiRequest, NextApiResponse } from "next";
import Error from "next/error";
import { addUser, getUserFromEmail } from "../../../api/prisma-queries";

const afterCallback = async (
  req: NextApiRequest,
  res: NextApiResponse,
  session: Session,
  state?: {}
) => {
  if (session) {
    getUserFromEmail(session.user.email).catch(async (e) => {
      // console.log(e);
      const newUser = await addUser({
        firstname: session.user.given_name,
        lastname: session.user.family_name,
        email: session.user.email,
      });
    });
  }
  return session;
};

export default handleAuth({
  async callback(req: NextApiRequest, res: NextApiResponse) {
    try {
      await handleCallback(req, res, { afterCallback });
    } catch (error: any) {
      console.log(error);
      res.status(error.status || 500).end();
    }
  },
});
