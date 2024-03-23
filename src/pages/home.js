import { getStoryblokApi, StoryblokComponent } from "@storyblok/react";


export default function Home(props) {
  const story = props.story
  return (
    <div >
      {/* <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head> */}

      <header>
        <h1>
          test
        </h1>
      </header>

      <main>
        <StoryblokComponent blok={story.content} />
      </main>
    </div>
  )
}

export async function getStaticProps() {
  // home is the default slug for the homepage in Storyblok
  let slug = "home";

  // load the draft version
  let sbParams = {
    version: "draft", // or 'published'
  };

  const storyblokApi = getStoryblokApi();
  let { data } = await storyblokApi.get(`cdn/stories/${slug}`, sbParams);
  console.log(data.story);
  return {
    props: {
      story: data ? data.story : false,
      key: data ? data.story.id : false,
    }
  };
}