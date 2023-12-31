import ForumList from "@/components/forum/ForumCardList";
import React from "react";

export default async function Home() {
  return (
    <main className="px-5 lg:px-32 md:px-24">
      <div className="flex flex-col items-center text-center">
        <h1 className="mt-8 text-4xl font-extrabold text-black md:text-5xl lg:text-7xl">
          Contribute Your <br />{" "}
          <span className="text-blue-600">Knowledge and Skills</span>
        </h1>
        <div className="flex flex-col gap-3 mt-8 sm:flex-row">
          <a href="/forum/create" className="text-white">
            <button className="px-6 py-2 text-white bg-blue-500 rounded-full hover:bg-blue-400 transition-colors duration-300 ease-in-out">
              Get Started
            </button>
          </a>
          <a href="forum">
            <button className="px-6 py-2 text-blue-500 border border-blue-500 rounded-full hover:bg-blue-100 transition-colors duration-300 ease-in-out">
              Explore Now
            </button>
          </a>
        </div>
      </div>
      <div className="mt-8">
        <h1 className="text-lg font-semibold text-black md:text-xl lg:text-2xl">
          What is zenith?
        </h1>
        <p className="mt-4 text-lg text-gray-600">
          <span className="text-blue-500">
            the point in the sky directly above an observer.
          </span>{" "}
          your intellectual zenith, is a knowledge-sharing space where the
          collective wisdom of diverse minds converges, creating an elevated
          space for collaborative learning and insightful discussions.
        </p>
      </div>
      <div>
        <ForumList />
      </div>
    </main>
  );
}
