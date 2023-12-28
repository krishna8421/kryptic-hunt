import "./src/env.js";

const headers = () => [
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
];

const redirects = async () => [
  {
    source: '/hakenkreuz',
    destination: 'https://medium.com/msackiit/2022-and-thats-a-wrap-393def75a4f0',
    permanent: true,
  },
];

export default {
  headers,
  redirects,
};