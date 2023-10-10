import React from "react";
import Image from "next/image";

const AboutMe = () => {
  return (
    <div className=" py-14 border-t-2 flex md:flex-row flex-col-reverse gap-5 items-center justify-between px-3 container mx-auto">
      <div className="flex-1">
        <h1 className="text-4xl">So Who am I?</h1>
        <p className="text-gray-500 mt-3">
          Welcome to my About page, where I invite you to explore the person
          behind the digital presence. "So Who am I?" is not just a question;
          it's an invitation to delve into the unique journey that has shaped
          me. I am more than a name and a face on the screen. <br />I am the
          accumulation of experiences, passions, and aspirations that have led
          me to this point. On this page, you'll discover the story of my life,
          the values that guide me, and the vision that fuels my endeavors. From
          my early influences to my present-day pursuits, I'll take you on a
          journey through the chapters of my life.
          <br /> You'll get a glimpse of my professional background, my
          interests, and the causes that matter most to me. But "So Who am I?"
          is not just about me; it's also about the connections we can forge.
          It's an opportunity for you to get to know me better and to see if our
          paths align, whether it's through shared interests, aspirations, or
          collaborations.
          <br />
          So, let's embark on this introspective journey together. Join me as I
          open the pages of my life and share my story, aspirations, and the
          reasons why I do what I do. Thank you for taking the time to explore
          "So Who am I?" — I look forward to getting to know you as well.
        </p>
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

export default AboutMe;
