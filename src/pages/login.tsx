import { signIn, useSession } from "next-auth/react";
import Head from "next/head";

const Login = () => {
  const { status } = useSession();

  if (status === "loading") {
    return (
      <div className="absolute right-1/2 bottom-1/2  transform translate-x-1/2 translate-y-1/2 ">
        <div className="border-t-transparent border-solid animate-spin  rounded-full border-neutral-700 border-8 h-[100px] w-[100px]"></div>
      </div>
    )
  }

  // if (status === "authenticated") {
  //   router.push("/");
  // }

  const handleLogin = () => {
    signIn("discord").catch((err) => console.error(err));
  }

  console.log(status);

  return (
    <>
      <Head>
        <title>Login {'|>'} Dict</title>

      </Head>

      <main>
        <div className="relative flex min-h-screen flex-col justify-center overflow-hidden bg-stone-300 py-6 sm:py-12">
          <div className="relative w-full gap-y-10 items-center justify-center flex flex-col sm:mx-auto sm:max-w-lg sm:rounded-lg text-start sm:px-10">
            <div className="text-gray-900 text-4xl font-mono font-semibold border-r-2 border-black w-[34ch] whitespace-nowrap overflow-hidden animate-typing">
              Dict
            </div>
            <button onClick={() => handleLogin()} className="px-8 py-4 font-extrabold border-2 border-gray-600 hover:text-white hover:bg-orange-600 hover:transition duration-100 ease-in-out rounded">
              Login with Discord
            </button>
          </div>
        </div>
      </main>
    </>
  )
}

export default Login;