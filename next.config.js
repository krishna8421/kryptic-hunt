import "./src/env.js";

const headers = async () => {
  return [
    {
      source: "/(.*)",
      headers: [
        {
          key: "X-Content-Type-Options",
          value: "nosniff",
        },
        {
          key: "X-Frame-Options",
          value: "SAMEORIGIN",
        },
        {
          key: "X-XSS-Protection",
          value: "1; mode=block",
        },
      ],
    },
  ];
};

const redirects = async () => {
  return [
    {
      source: '/hakenkreuz',
      destination: 'https://medium.com/msackiit/2022-and-thats-a-wrap-393def75a4f0',
      permanent: true,
    },
  ];
};

export default {
  async headers() {
    return await headers();
  },
  async redirects() {
    return await redirects();
  },
};