import React from "react";
import { FaLaptopCode, FaReact, FaNodeJs } from "react-icons/fa"; // Import the icons you want to use

function ServiceSection() {
  const servicesData = [
    {
      id: 1,
      icon: <FaLaptopCode />,
      heading: "Website Development",
      description:
        "We specialize in creating stunning and responsive websites tailored to your needs. Whether you need a personal blog or a full-fledged e-commerce site, we've got you covered.",
    },
    {
      id: 2,
      icon: <FaReact />,
      heading: "React Development",
      description:
        "Our team of experts excels in building dynamic web applications using React.js. We bring your ideas to life with interactive and user-friendly interfaces.",
    },
    {
      id: 3,
      icon: <FaNodeJs />,
      heading: "Next.js Development",
      description:
        "Next.js is our forte. We develop fast and SEO-friendly web applications that provide a seamless user experience. Let us take your project to the next level.",
    },
  ];

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3 ">
      {servicesData.map((service) => (
        <div
          key={service.id}
          className="p-3  border rounded-lg group hover:bg-blue-500 transition-all hover:shadow-blue-100 hover:shadow-md"
        >
          <div className=" text-white group-hover:text-blue-500  bg-blue-500 group-hover:bg-white inline-block p-3 rounded-full text-lg">
            {service.icon}
          </div>
          <h2 className="text-lg my-2 group-hover:text-white">
            {service.heading}
          </h2>
          <p className="text-gray-500 group-hover:text-white">
            {service.description}
          </p>
        </div>
      ))}
    </div>
  );
}

export default ServiceSection;
