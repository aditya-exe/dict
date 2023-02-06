import { type NextPage } from "next";
import Head from "next/head";
import { useRouter } from "next/router";
import Navbar from "../components/navbar";
import Search from "../components/search";
import Result from "../components/result";
import { useStore } from "../utils/store";

const Home: NextPage = () => {
  const { font } = useStore();

  const fnts = {
    "Sans Serif": "font-ss",
    "Serif": "font-s",
    "Mono": "font-m",
  }

  return (
    <div className={`${font && fnts[font as keyof typeof fnts]} font-ss flex justify-center bg-stone-300 dark:bg-stone-900 dark:text-gray-300`}>
      <Head>
        <title>
          Dict
        </title>
        <link rel="shortcut icon" href="/icon.png" type="image/x-icon" />
      </Head>

      <main className="min-w-[750px] max-w-[750px] min-h-screen">
        <Navbar />
        <Search />
        <Result />
      </main>
    </div>
  );
};

export default Home;