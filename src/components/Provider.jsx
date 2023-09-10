"use client";
import { SessionProvider } from "next-auth/react";

const Provider = ({ session, children }) => (
  <SessionProvider session={session}>{children}</SessionProvider>
);

export default Provider;
