import React from "react";
import Image from "next/image";

const Main = () => {
  return (
    <div className=" py-14 border-t-2 flex md:flex-row flex-col-reverse gap-5 items-center justify-between px-3">
      <div className="flex-1">
        <span className="text-3xl">Hi There!</span>
        <h1 className="text-4xl">
          I'M <span className="text-blue-500">Samar Hayat</span>
        </h1>
        <p className="text-gray-500 mt-3">
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quis
          necessitatibus autem cum assumenda vel laborum natus, aspernatur
          perferendis! Eius soluta officiis recusandae adipisci excepturi
          cupiditate possimus maxime inventore minus exercitationem?
        </p>
        <div className="flex gap-2 my-5">
          <button className="bg-blue-500 rounded-full py-3 px-4 text-white">
            Contact Me
          </button>
          <button className="hover:bg-blue-500 rounded-full py-3 px-4 hover:text-white transition-all border-blue-500 border-2">
            Download Resume
          </button>
        </div>
      </div>
      <div className="flex items-center justify-center flex-1">
        <Image
          src="/assets/me.jpg"
          width={300}
          height={300}
          className=" rounded-lg rotate-2"
          alt="Picture of the author"
        />
      </div>
    </div>
  );
};

export default Main;
