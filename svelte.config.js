import preprocess from "svelte-preprocess";
import adapter from "@sveltejs/adapter-static"; // was adapter-auto

const dev = process.env.NODE_ENV === "development";

/** @type {import('@sveltejs/kit').Config} */
const config = {
  kit: {
    adapter: adapter({
      pages: "docs",
      assets: "docs",
      fallback: null
    }),
    prerender: {
      default: true
    },
    paths: {
      base: dev ? "" : "/resume",
    }
  },

  preprocess: [
    preprocess({
      postcss: true,
    }),
  ],
};

export default config;
