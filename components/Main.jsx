import React from "react";
import { AiOutlineMail } from "react-icons/ai";
import { FaGithub, FaLinkedinIn } from "react-icons/fa";
import { BsFillPersonLinesFill } from "react-icons/bs";

const Main = () => {
  return (
    <div className="w-full h-screen text-center">
      <div className="max-w-[1240px] w-full h-full mx-auto p-2 flex justify-center items-center">
        <div>
          <p className="uppercase text-sm tracking-widest text-gray-600">
            Let us build something epic together!
          </p>
          <h1 className="py-4 text-gray-700">
            Hello! I am <span className="text-[#5651e5]">Melvin</span>
          </h1>
          <h1 className="py-2 text-gray-700">
            A Software Engineer and an Architect
          </h1>
          <p className="py-4 text-gray-600 max-w-[70%] m-auto">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis
            lobortis dui eu vestibulum laoreet. Donec et justo non orci
            pellentesque imperdiet vitae sit amet ante. Orci varius natoque
            penatibus et magnis dis parturient montes, nascetur ridiculus mus.
            Donec sagittis fermentum risus, ut finibus urna. Quisque fermentum
            leo sed urna lobortis, sit amet elementum nulla euismod. Donec id
            mauris non lacus ornare eleifend. Etiam congue, ipsum ut ornare
            imperdiet, leo erat ullamcorper orci, quis pharetra tellus tellus in
            turpis. Vestibulum tincidunt diam vitae ultricies dignissim.
            Pellentesque vestibulum orci ac sollicitudin condimentum. In hac
            habitasse platea dictumst. Maecenas finibus vulputate posuere. Nam
            suscipit eget arcu vel vehicula. Nullam auctor porta sem id feugiat.
            Aenean id enim nibh. Suspendisse potenti.
          </p>
          <div className="flex items-center justify-between max-w-[330px] m-auto py-4">
            <div className="rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-110 ease-in duration-300">
              <FaLinkedinIn />
            </div>
            <div className="rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-110 ease-in duration-300">
              <FaGithub />
            </div>
            <div className="rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-110 ease-in duration-300">
              <AiOutlineMail />
            </div>
            <div className="rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-110 ease-in duration-300">
              <BsFillPersonLinesFill />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Main;
