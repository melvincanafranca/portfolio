import React from "react";

const About = () => {
  return (
    <div className="w-full md:h-screen p-2 flex items-center py-16">
      <div className="max-w-[1240px] m-auto md:grid grid-cols-3 gap-8">
        <div className="col-span-2">
          <p>About</p>
          <h2>Who I am</h2>
          <p>
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
        </div>
        <div>
          <img src="https://source.unsplash.com/IKUYGCFmfw4" alt="/" />
        </div>
      </div>
    </div>
  );
};

export default About;
