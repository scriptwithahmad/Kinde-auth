"use client";
import Loaders from "@/components/Loaders";
import {
  LogoutLink,
  useKindeBrowserClient,
} from "@kinde-oss/kinde-auth-nextjs";

const Page = () => {
  const {
    permissions,
    isLoading,
    user,
    accessToken,
    organization,
    userOrganizations,
    getPermission,
    getBooleanFlag,
    getIntegerFlag,
    getFlag,
    getStringFlag,
    getClaim,
    getAccessToken,
    getToken,
    getIdToken,
    getOrganization,
    getPermissions,
    getUserOrganizations,
  } = useKindeBrowserClient();

  console.log(getPermission("eat:chips"));
  console.log(getBooleanFlag("flag", false));
  console.log(getIntegerFlag("eat:chips", 1));
  console.log(getStringFlag("eat:chips", "ds"));
  console.log(getFlag("eat:chips", false, "b"));

  console.log("accessToken", accessToken);
  console.log(getClaim("aud"));
  if (isLoading) return <Loaders />;

  return (
    <div>
      {/* <Loaders /> */}
      {/* ... Client side code */}
      <div className="pt-20 max-w-[800px] m-auto">
        {getPermission("eat:chips").isGranted && <h2>YOU CAN EAT CHIPS</h2>}
        {/* <LoginLink postLoginRedirectURL="/dashboard">Login</LoginLink> */}
        <div className="mb-8">
          <div className="flex items-center justify-between mb-4">
            <h4 className="text-2xl font-bold dark:text-white mb-2">User</h4>
            <LogoutLink className="bg-blue-700 px-3 py-1.5 rounded-lg hover:bg-blue-800">
              Log out
            </LogoutLink>
          </div>

          <pre className="p-4 rounded bg-slate-950 text-green-400">
            {JSON.stringify(user, null, 2)}
          </pre>
        </div>

        <div className="mb-8">
          <h4 className="text-2xl font-bold dark:text-white mb-2">
            Permissions
          </h4>

          <pre className="p-4 rounded bg-slate-950 text-green-400">
            {JSON.stringify(permissions, null, 2)}
          </pre>
        </div>

        <div className="mb-8">
          <h4 className="text-2xl font-bold dark:text-white mb-2">
            Organization
          </h4>

          <pre className="p-4 rounded bg-slate-950 text-green-400">
            {JSON.stringify(organization, null, 2)}
          </pre>
        </div>

        <div className="mb-8">
          <h4 className="text-2xl font-bold dark:text-white mb-2">
            User organizations
          </h4>

          <pre className="p-4 rounded bg-slate-950 text-green-400">
            {JSON.stringify(userOrganizations, null, 2)}
          </pre>
        </div>

        <div className="mb-8">
          <h4 className="text-2xl font-bold dark:text-white mb-2">
            Access token
          </h4>

          <pre className="p-4 rounded bg-slate-950 text-green-400">
            {JSON.stringify(accessToken, null, 2)}
          </pre>
        </div>
      </div>
    </div>
  );
};

export default Page;
