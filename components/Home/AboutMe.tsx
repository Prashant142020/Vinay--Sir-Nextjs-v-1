import Image from "next/image";
import React from "react";

const AboutMe = () => {
  return (
    <div className="mt-[-60px] h-screen w-full">
      <div className="flex flex-col">
        <div className="text-center">About me</div>
        <div className="flex flex-row">
          <div className="w-1/4 rounded-3xl">
            <Image
              src="/hero.jpg"
              alt="hero image"
              width={1920}
              height={1080}
            />
          </div>
          <div>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut et massa
            mi. Aliquam in hendrerit urna. Pellentesque sit amet sapien
            fringilla, mattis ligula consectetur, ultrices mauris. Maecenas
            vitae mattis tellus. Nullam quis imperdiet augue. Vestibulum auctor
            ornare leo, non suscipit magna interdum eu. Curabitur pellentesque
            nibh nibh, at maximus ante fermentum sit amet. Pellentesque commodo
            lacus at sodales sodales. Quisque sagittis orci ut diam condimentum,
            vel euismod erat placerat. In iaculis arcu eros, eget tempus orci
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutMe;
