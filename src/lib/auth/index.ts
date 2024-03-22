import { getServerSession } from "next-auth/next";
import { NextAuthOptions } from "./auth";

export interface Session {
  user: {
    email: string;
    id: string;
    name: string;
    image?: string;
  };
}

export const getSession = async () => {
  return getServerSession(NextAuthOptions) as Promise<Session>;
};
