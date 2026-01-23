import type { NextConfig } from "next";

import createMDX from '@next/mdx';

// Create the MDX handler with desired options
// Here, we specify that both .md and .mdx files should be treated as MDX
const withMDX = createMDX({
  extension: /\.mdx?$/,
  options: {
    // MDX options can be added here
  },
})


const nextConfig: NextConfig = {
  // This option ensures that the project will be 100% static
  // https://nextjs.org/docs/pages/building-your-application/deploying/static-exports
  output: "export",
  pageExtensions: ['ts', 'tsx', 'md', 'mdx'],
};

export default withMDX(nextConfig);
