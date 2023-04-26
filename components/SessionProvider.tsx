"use client";

import { Session } from "next-auth";
import { SessionProvider as Provider } from "next-auth/react";

/* React.ReactNode is everything wrapped in SessionProvider Component
    that is sidebar and main body
*/
type Props = {
  children: React.ReactNode;
  session: Session | null;
};
const SessionProvider = ({ children, session }: Props) => {
  return <Provider>{children}</Provider>;
};
export default SessionProvider;
