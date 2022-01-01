module.exports = {
  images: {
    domains: [process.env.NEXT_IMAGE_HOST1],
  },

  webpack(config) {
    config.module.rules.push({
      test: /\.svg$/,
      use: ["@svgr/webpack"],
    });

    return config;
  },
};
