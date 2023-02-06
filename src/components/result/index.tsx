import { api } from "../../utils/api";
import { useStore } from "../../utils/store";
import { IoPlayCircleSharp } from "react-icons/io5";
import { type MutableRefObject, useRef } from "react";

const Result = () => {
  const { query } = useStore();
  const audioRef = useRef<HTMLAudioElement>(null);
  const queryReq = api.word.findData.useQuery({ word: query });
  let res, phonetic, audio, meanings;
  if (queryReq.isLoading && query) {
    return (
      <div className="absolute right-1/2 bottom-1/2  transform translate-x-1/2 translate-y-1/2 ">
        <div className="border-t-transparent border-solid animate-spin  rounded-full border-2 border-orange-500 dark:border-blue-500 h-[50px] w-[50px]"></div>
      </div>
    )
  } else if (!query) {
    return (
      <div className="flex items-center justify-center p-32 text-4xl font-light italic">
        Looking for something?
      </div>
    )
  }
  if (queryReq.isFetched) {
    if (queryReq.data) {
      res = queryReq.data[0];
      const phoneticFind = res?.phonetic || res?.phonetics?.find((ele) => {
        const x = Object.entries(ele).find((k) => {
          if (k[0] === "text") {
            return k[1];
          }
        });
        if (x) {
          return x[1];
        }
      })
      const audioFind = res?.phonetics?.find((ele) => {
        const x = Object.entries(ele).find((k) => {
          if (k[0] === "audio") {
            return k[1];
          }
        });
        if (x) {
          return x[1];
        }
      });
      // if (typeof phoneticFind === "object") {
      //   Object.entries(phoneticFind).find((ele) => (
      //     Object.entries(ele).map((x)=>{
      //       console.log(x[1]);
      //     })
      //   ));
      // } else {
      //   phonetic = phoneticFind;
      // }
      audio = audioFind?.audio;
      meanings = res?.meanings;
    }
  }

  function handleAudioPlay() {
    if (audioRef.current !== null) {
      audioRef.current.play()
        .catch((err) => console.error(err));
    }
  }

  return (
    <div>
      <div className="p-3 flex items-center justify-between">
        <div className="gap-y-5">
          <h1 className="text-5xl font-bold">{res?.word}</h1>
          {/* <h3 className="p-2 text-2xl"></h3> */}
        </div>
        <div className={`p-4`}>
          <IoPlayCircleSharp onClick={() => handleAudioPlay()} className="text-7xl cursor-pointer hover:text-orange-500 dark:hover:text-blue-500 transition ease-in-out duration-500" />
          <audio ref={audioRef as MutableRefObject<any>} autoPlay={false} src={audio || ""}>
          </audio>
        </div>
      </div>
      <div className="">
        {meanings?.map((mean, idx) => (
          <div key={idx} className="border-2 mb-2 border-orange-500 rounded dark:border-blue-500">
            <section className="p-3">
              <h4 className="font-bold italic text-xl">{mean.partOfSpeech}</h4>
              <div className="pl-6">
                <ul className="list-disc">
                  {mean.definitions?.map((def, idx: number) => (
                    <li key={idx} className="break-word mb-2">
                      {def.definition}
                    </li>
                  ))}
                </ul>
              </div>
            </section>
          </div>
        ))}
      </div>
    </div >
  )
}

export default Result;