/** @type {import('next').NextConfig} */
const nextConfig = {
  env: {
    KINDE_CLIENT_ID: "16041bcdfa4d4a0f842474025d0630bc",
    KINDE_CLIENT_SECRET: "l5VPJ4mr575ODVpuK1x6hOvSwif0JiCx2UBEn6C1cHpipLwyCJ5O",
    KINDE_ISSUER_URL: "https://ahmadthedev.kinde.com",
    KINDE_SITE_URL: "http://localhost:3000",
    KINDE_POST_LOGOUT_REDIRECT_URL: "http://localhost:3000",
    KINDE_POST_LOGIN_REDIRECT_URL: "http://localhost:3000/dashboard",
  },
};

export default nextConfig;
