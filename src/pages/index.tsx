import { type NextPage } from "next";
import Head from "next/head";
import Navbar from "../components/navbar";
import Search from "../components/search";
import Result from "../components/result";
import { useStore } from "../utils/store";

const Home: NextPage = () => {
  const { font } = useStore();

  const fnts = {
    "Sans Serif": "font-ss",
    "Serif": "font-s",
    "Mono": "font-m"
  };

  return (
    // <div className={`${font && fnts[font as keyof typeof fnts]} flex justify-center flex-col bg-stone-300 dark:bg-stone-900 dark:text-gray-300`}>
    //   <Head>
    //     <title>
    //       Dict
    //     </title>
    //     <link rel="shortcut icon" href="/icon.png" type="image/x-icon" />
    //   </Head>
    //
    //   <main className="mn-w-[750px] mx-w-[750px] min-h-screen">
    //     <Navbar />
    //     <Search />
    //     <Result />
    //   </main>
    // </div>
    <div
      className={`${font && fnts[font as keyof typeof fnts]} bg-stone-300 dark:bg-stone-900 dark:text-gray-300 flex justify-center h-screen`}>
      <Head>
        <title>Dict</title>
        <link rel="shortcut icon" href="/icon.png" type="image/x-icon" />
      </Head>
      <main className="md:min-w-[750px] md:max-w-[750px] w-full">
        <Navbar />
        <Search />
        <Result />
      </main>
    </div>
  );
};

export default Home;