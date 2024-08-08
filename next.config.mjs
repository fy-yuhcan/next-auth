// const { withContentlayer } = require("next-contentlayer");
import { withContentlayer } from "next-contentlayer";

/** @type {import('next').NextConfig} */
const nextConfig = { reactStrictMode: true, swcMinify: true };

// module.exports = withContentlayer(nextConfig);
export default withContentlayer(nextConfig);
