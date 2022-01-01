const env = {
  /** 과제 실행 환경에서는 API_URL이 고정이므로 `.env`로 지정하지 않아도 동작하도록 fallback을 주입함.  */
  get API_URL_FOR_POPULARITY() {
    const fallback =
      "https://gist.githubusercontent.com/styleshare-frontend/18089356186790c942c75e6dd5f90b90/raw/40517fc4a027233a03c6b220a2b069e1be7c7c39/goods-response-1.json";
    return process.env.NEXT_PUBLIC_API_URL_FOR_POPULARITY ?? fallback;
  },
  get API_URL_FOR_LATEST() {
    const fallback =
      "https://gist.githubusercontent.com/styleshare-frontend/1cd2be4351cd7efe64aab3d015f2bf27/raw/7bf95b3d4833a52cdb8fa78efe8b28f278891e30/goods-response-date-1.json";
    return process.env.NEXT_PUBLIC_API_URL_FOR_LATEST ?? fallback;
  },
  get API_URL_FOR_REVIEW_SECTION() {
    const fallback =
      "https://gist.githubusercontent.com/styleshare-frontend/ddc456ec9b9486b6097b61d409edc534/raw/cca24042520fab95fd6e80412eee36cc87da5c2e/goods-review-components.json";
    return process.env.NEXT_PUBLIC_API_URL_FOR_REVIEW_SECTION ?? fallback;
  },
  get IMAGE_BASE_URL() {
    const fallback = "https://usercontents-d.styleshare.io/images";
    return process.env.NEXT_PUBLIC_IMAGE_BASE_URL ?? fallback;
  },
} as const;

export default env;
