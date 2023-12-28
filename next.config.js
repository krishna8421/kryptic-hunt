
import "./src/env.js";

/** @type {import("next").NextConfig} */
const config = {
    async redirects() {
        return [
            {
                source: '/hakenkreuz',
                destination: 'https://medium.com/msackiit/2022-and-thats-a-wrap-393def75a4f0',
                permanent: true,
            },
        ]
    },
}

export default config;