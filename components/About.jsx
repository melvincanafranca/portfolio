import React from "react";

const About = () => {
  return (
    <div className="w-full md:h-screen p-2 flex items-center py-16">
      <div className="max-w-[1240px] m-auto md:grid grid-cols-3 gap-8">
        <div className="col-span-2">
          <p className="uppercase text-xl tracking-widest text-[#5651e5]">
            About
          </p>
          <h2 className="py-4">Who I am</h2>
          <p className="py-2 text-gray-600"></p>
          <p className="py-2 text-gray-600">
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
          <p className="py-2 text-gray-600 underline cursor-pointer">
            Check out some of my projects.
          </p>
        </div>
        <div className="w-full h-auto m-auto shadow-xl shadow-gray-400 rounded-xl flex items-center justify-center p-4 hover:scale-105 ease-in duration-300">
          <img
            className="rounded-xl"
            src="https://source.unsplash.com/e_MdMMKrgdY"
            alt="/"
          />
        </div>
      </div>
    </div>
  );
};

export default About;
