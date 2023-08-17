import GithubProvider from "next-auth/providers/github";
import GoogleProvider from "next-auth/providers/google";
import AzureADProvider from "next-auth/providers/azure-ad";
import { AuthOptions } from "next-auth";

import { getProviders } from "next-auth/react";
import { getServerSession } from "next-auth/next";
import type { GetServerSidePropsContext } from "next";
export const authOptions: AuthOptions = {
  // Configure one or more authentication providers
  providers: [
    GithubProvider({
      clientId: process.env.GITHUB_ID!,
      clientSecret: process.env.GITHUB_SECRET!,
    }),
    GoogleProvider({
      clientId: process.env.GOOGLE_ID!,
      clientSecret: process.env.GOOGLE_SECRET!,
    }),
    //microsoft account
    AzureADProvider({
      clientId: process.env.AZURE_AD_CLIENT_ID!,
      clientSecret: process.env.AZURE_AD_CLIENT_SECRET!,
      tenantId: process.env.AZURE_AD_TENANT_ID!,
    }),
  ],
  callbacks: {
    async signIn({
      user,
      account,
      profile,
      email,
      credentials,
      ...others
    }: any) {
      console.log(
        "this function should be called in for every login function",
        user,
        account,
        profile,
        email,
        credentials,
        others
      );

      return true;
    },
  },

  secret: process.env.JWT_SECRET,
};

export async function getServerSideProps(context: GetServerSidePropsContext) {
  const session = await getServerSession(context.req, context.res, authOptions);

  // If the user is already logged in, redirect.
  // Note: Make sure not to redirect to the same page
  // To avoid an infinite loop!
  if (session) {
    return { redirect: { destination: "/" } };
  }

  const providers = await getProviders();

  return {
    props: { providers: providers ?? [] },
  };
}