/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
}

module.exports = nextConfig


module.exports = {
  webpack: (config) => {
    config.resolve.fallback = {
      ...config.resolve.fallback,
      dns: require.resolve('isomorphic-dns'),
    };
    return config;
  },
};


module.exports = {
  future: {
    webpack5: true, // by default, if you customize webpack config, they switch back to version 4. 
      // Looks like backward compatibility approach.
  },
  webpack(config) {
    config.resolve.fallback = {
      ...config.resolve.fallback, // if you miss it, all the other options in fallback, specified
        // by next.js will be dropped. Doesn't make much sense, but how it is
      fs: false, // the solution
      dns: false,
      net: false,
      tls: false,
    };

    return config;
  },
};


module.exports = {
  async redirects() {
    return [
      {
        source: '/',
        destination: '/my-courses',
        permanent: true,
      },
    ];
  },
};


module.exports = {
  // Other configuration options...

  exportPathMap: async function (defaultPathMap, { dev, dir, outDir, distDir, buildId }) {
    // Exclude the '/team-details' path from export
    return {
      ...defaultPathMap,
      '/team-details': { page: '/404' }, // Replace with your desired fallback page
    };
  },
};

