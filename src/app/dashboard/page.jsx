import React from "react";
import { getKindeServerSession } from "@kinde-oss/kinde-auth-nextjs/server";
import { LogoutLink } from "@kinde-oss/kinde-auth-nextjs/components";

const Page = async () => {
  const { getUser, isAuthenticated } = getKindeServerSession();

  console.log(await isAuthenticated());

  return (
    <div>
      <h1 className="mb-4">Dashboard</h1>
      <LogoutLink className="bg-blue-600 p-2 rounded-lg hover:bg-blue-400">
        Log out
      </LogoutLink>
    </div>
  );
};

export default Page;
