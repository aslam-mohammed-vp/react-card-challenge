import Head from "next/head";
import Link from "next/link";

import { api } from "~/utils/api";

export default function Home() {
  const hello = api.post.hello.useQuery({ text: "from tRPC" });

  return (
    <>
      <Head>
        <title>Card Challene</title>
        <meta name="description" content="Generated by create-t3-app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="flex min-h-screen flex-col items-center justify-center bg-pale-blue">
        <div className="flex h-[300px] w-[440px] rounded-3xl bg-white">
          <aside className="from-slate-blue flex w-1/2 flex-col items-center justify-between gap-4 rounded-3xl bg-gradient-to-b to-royal-blue px-4 py-8">
            <div className=" text-pale-blue">Your Results</div>
            <div className="from-violet-blue to-slate-blue flex h-24 w-24 flex-col items-center justify-center gap-2 rounded-full bg-gradient-to-b text-white">
              <span className="text-4xl">76</span>
              <span className="text-xs">of 100</span>
            </div>
            <div className="text-white">Great</div>
            <div className="text-center text-xs text-pale-blue">
              You scored higher than 65% of the people who have taken these
              tests.
            </div>
          </aside>
          <div className="flex w-1/2 flex-col justify-between gap-2 px-4 py-8">
            <h1 className="text-lg">Summary</h1>
            <ul className="flex flex-col gap-2">
              <li className="bg-light-red-light flex justify-between rounded-lg p-2 text-sm">
                <div className="flex gap-1">
                  <img src="/images/icon-reaction.svg" />
                  <span className="text-light-red-default">Reaction</span>
                </div>
                <div>
                  80 <span className="text-gray-400">/100</span>
                </div>
              </li>
              <li className="bg-orangey-yellow-light flex justify-between rounded-lg p-2 text-sm">
                <div className="flex gap-1">
                  <img src="/images/icon-memory.svg" />
                  <span className="text-orangey-yellow-default">Reaction</span>
                </div>

                <div>
                  70 <span className="text-gray-400">/100</span>
                </div>
              </li>
              <li className="bg-green-teal-light flex justify-between rounded-lg p-2 text-sm ">
                <div className="flex gap-1">
                  <img src="/images/icon-verbal.svg" />
                  <span className="text-green-teal-default">Reaction</span>
                </div>

                <div>
                  80 <span className="text-gray-400">/100</span>
                </div>
              </li>
              <li className="bg-cobalt-blue-light flex justify-between rounded-lg p-2 text-sm ">
                <div className="flex gap-1">
                  <img src="/images/icon-visual.svg" />
                  <span className="text-cobalt-blue-default">Reaction</span>
                </div>

                <div>
                  80 <span className="text-gray-400">/100</span>
                </div>
              </li>
            </ul>
            <button className="bg-dark-gray-blue rounded-3xl px-4 py-2 py-2 text-pale-blue">
              Continue
            </button>
          </div>
        </div>
      </main>
    </>
  );
}
