import React, { ReactNode } from "react";
import { useRouter } from "next/router";
// import useUser from "@/hooks/useUser";
import { useSession, signIn, signOut } from "next-auth/react"


export default function AuthHOC(
  ProtectedComponent: React.FC<any>,
) {
  //
  return function AuthComp() {
    const session = useSession()
    // console.log("session", session)
    const router = useRouter();

    // const user = useUser({
    //   tryOnce: true,
    // });

    if (session.status === "loading") {
      return (
        <div>
          <p>Loading...</p>
        </div>
      );
    }

    if (!session.data) {
      signIn()
      return null;
    }

    return <ProtectedComponent user={session} />;
  };
}