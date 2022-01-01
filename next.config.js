/** 과제 실행 환경에서는 API_URL이 고정이므로 `.env.local`로 지정하지 않아도 동작하도록 fallback을 주입함.  */
const fallback = "usercontents-d.styleshare.io";

module.exports = {
  images: {
    domains: [process.env.NEXT_IMAGE_HOST1 ?? fallback],
  },

  webpack(config) {
    config.module.rules.push({
      test: /\.svg$/,
      use: ["@svgr/webpack"],
    });

    return config;
  },
};
