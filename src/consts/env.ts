const env = {
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
} as const;

export default env;
