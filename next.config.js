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
    {
      source: '/johncena',
      destination: 'https://drive.google.com/file/d/1CwD5SABZWwF21IbX8LuCYloP90yuvU6L/view?usp=sharing',
      permanent: true,
    },
    {
      source: '/youcantseeme',
      destination: 'https://drive.google.com/file/d/1lin1s-YRuCQ28x7rI9zQbJUDU5WprHrC/view?usp=sharing',
      permanent: true,
    },
  ];
};

const config = {
  async headers() {
    return await headers();
  },
  async redirects() {
    return await redirects();
  },
};

export default config;
