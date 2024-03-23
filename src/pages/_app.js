import { storyblokInit, apiPlugin } from "@storyblok/react";
import Feature from "../components/Feature";
import Grid from "../components/Grid";
import Page from "../components/Page";
import Teaser from "../components/Teaser";

const components = {
  feature: Feature,
  grid: Grid,
  teaser: Teaser,
  page: Page,
};


storyblokInit({
  accessToken: process.env.NEXT_PUBLIC_STORYBLOK_ACCESS_TOKEN,
  use: [apiPlugin],
  apiOptions: {
    region: "us",
  },
  components
});


export default function MyApp({ Component, pageProps }) {
  console.log(process.env.NEXT_PUBLIC_STORYBLOK_ACCESS_TOKEN)
  return <Component {...pageProps} />
}