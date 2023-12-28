import "./src/env.js";

/** @type {import("next").NextConfig} */
const config = {
  future: { webpack5: true },
  webpack: (config) => {
      config.resolve.alias.canvas = false
      config.resolve.alias.encoding = false
      return config
  },
  async redirects() {
    return [
      {
        source: '/hakenkreuz',
        destination: 'https://medium.com/msackiit/2022-and-thats-a-wrap-393def75a4f0',
        permanent: false,
      },
    ]
  },
}

export default config;