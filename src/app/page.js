"use client";




import Image from "next/image";
import Link from "next/link";
import Experience from "./models/experience";
export default function Home() {

  return (
    <>
    <Experience/>
      <section
        className="h-screen p-6 flex justify-center items-center align-center content-center  w-full"
        id="discovery"
      >
        <div className="w-[40em]">
          <h1 className="font-bold text-gray-100 sm:text-3xl text-2xl p-4">
            Bitten by a radioactive spider, Peter Parker&apos;s arachnid abilities
            give him amazing powers he uses to help others, while his personal
            life continues to offer plenty of obstacles. With amazing
            spider-like abilities, teenage science whiz Peter Parker fights
            crime and dreams of becoming an Avenger as Spider-Man.
          </h1>
        </div>
      </section>
      <section className="h-screen flex flex-col justify-center  items-center  w-client items-center  p-6">
        <h2 className="font-bold text-gray-300 text-4xl text-center mb-4">
         FRIST  APPEARANCE
        </h2>
        <Image
          src="/images/frist_comic.jpg"
          width={300}
          height={500}
          className="my-4"
          alt="AMAZING FANTASY (1962) #15 Thumb"
          priority={true}
        />
        <span className="text-gray-400 font-bold text-lg">
          AMAZING FANTASY (1962) #15
        </span>
      </section>
      <section className="sm:h-screen">
        <div className="sm:h-screen">
          <h2 className="font-bold text-gray-100 text-4xl text-center">
            LAST GAMES:
          </h2>
          <div className="flex justify-center align-center w-client items-center max-[820px]:flex-col">
            <div className="bg-[#202028] sm:w-[30em] rounded-lg sm:h-[40em] my-8 shadow-xl mx-8 relative">
              <Image
                src="/images/spider_man2.png"
                width={300}
                height={300}
                className="w-full h-[15em] rounded-lg"
                priority={true}
                alt="spider-man 2 thumb"
              />
              <div className="w-full p-4" alt="spider-man 2">
                <span className="font-bold text-gray-300 text-xl my-2">
                  Marvel&apos;s Spider-Man 2
                </span>
                <span className="text-gray-300 my-2 block">released: 2023</span>
                <p className=" text-gray-400 mt-10">
                  Spider-Men, Peter Parker and Miles Morales, return for an
                  exciting new adventure in the critically acclaimed
                  Marvel&apos;s Spider-Man. Swing, jump and utilize the new Web
                  Wings to travel across Marvel&apos;s New York.
                </p>
              </div>
              <div className="sm:absolute bottom-0 p-4 bg-[#161616] w-full">
                <span className="block text-gray-200 text-center mb-4 text-sm">
                  Avaliable on
                </span>
                <div className="w-full flex justify-center">
                  <Link href="https://www.playstation.com/en-ca/games/marvels-spider-man-2/" rel="noreferrer" target="_blank">
                    <Image
                      src="/images/playstation.svg"
                      width={24}
                      height={24}
                      alt="playstation display icon"
                      className="mx-2"
                      priority={true}
                    />
                  </Link>
                </div>
              </div>
            </div>
            <div className="bg-[#202028] sm:w-[30em] rounded-lg sm:h-[40em] my-8 shadow-xl mx-8 relative">
              <Image
                src="/images/spider_man_remaster.jpg"
                width={300}
                height={300}
                className="w-full h-[15em] rounded-lg"
                alt="spider-man remastered"
                priority={true}
              />
              <div className="w-full p-4">
                <span className="font-bold text-gray-300 text-xl my-2">
                  Marvel&apos;s Spider-Man Remastered
                </span>
                <span className="text-gray-300 my-2 block">released: 2022</span>
                <p className=" text-gray-400 mt-10">
                  This isn&apos;t the Spider-Man you&apos;ve met or ever seen
                  before. In Marvel&apos;s Spider-Man Remastered, we meet an
                  experienced Peter Parker who&apos;s more masterful at fighting
                  big crime in New York City. At the same time, he&apos;s
                  struggling to balance his chaotic personal life and career
                  while the fate of Marvel&apos;s New York rests upon his
                  shoulders.
                </p>
              </div>
              <div className="sm:absolute bottom-0 p-4 bg-[#161616] w-full ">
                <span className="block text-gray-200 text-center mb-4 text-sm">
                  Avaliable on
                </span>

                <div className="bg-[#161616] w-full flex justify-center">
                  <Link href="https://www.playstation.com/en-ca/games/marvels-spider-man-remastered/" rel="noreferrer" target="_blank">
                    <Image
                      src="/images/playstation.svg"
                      width={24}
                      height={24}
                      alt="playstation display icon"
                      className="mx-2"
                      priority={true}
                    />
                  </Link>
                
                  <Link href="https://store.steampowered.com/app/1817070/Marvels_SpiderMan_Remastered/" rel="noreferrer" target="_blank">
                    <Image
                      src="/images/pc.svg"
                      width={24}
                      height={24}
                      alt="pc display icon"
                      className="mx-2"
                      priority={true}
                    />
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
