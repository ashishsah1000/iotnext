import NextAuth from "next-auth";

import { authOptions } from "@/next-auth/nextAuth";

const handler = NextAuth(authOptions);
export { handler as GET, handler as POST };