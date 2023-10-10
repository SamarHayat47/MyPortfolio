import React from "react";
import Heading from "./Heading";
import Image from "next/image";

const testimonialsData = [
  {
    id: 1,
    images: "/assets/companyone.jpg",
    author: "John Doe",
    company: "ABC Company",
    testimonial:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam eget tellus justo. Sed nec ex nec urna tincidunt hendrerit. Vestibulum non finibus nulla.",
  },
  {
    id: 2,
    images: "/assets/companytwo.jpg",
    author: "Jane Smith",
    company: "XYZ Inc.",
    testimonial:
      "Aenean interdum lorem a dui condimentum, at ullamcorper libero bibendum. Nullam eget tortor sit amet odio feugiat vehicula eget id urna.",
  },
  {
    id: 3,
    images: "/assets/companythree.jpg",
    author: "Alice Johnson",
    company: "LMN Solutions",
    testimonial:
      "Vivamus varius dolor vel lectus volutpat, vel euismod turpis aliquet. Sed nec ex nec urna tincidunt hendrerit. Nullam eget tortor sit amet odio feugiat vehicula eget id urna.",
  },
];

function TestimonialsSection() {
  return (
    <div className="testimonials-section pt-5 px-3">
      <Heading heading="What Our Clients Say" />
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3">
        {testimonialsData.map((testimonial) => (
          <div
            key={testimonial.id}
            className="p-3 hover:shadow-blue-100 hover:shadow-md group border flex flex-col justify-between rounded-lg"
          >
            <div className=" overflow-hidden w-full rounded-sm mb-3">
              <Image
                src={testimonial.images}
                width={999}
                height={100}
                className="group-hover:scale-105 transition duration-500 rounded-sm"
              />
            </div>
            <p className="text-gray-500 mb-2">{testimonial.testimonial}</p>
            <div className="flex items-center justify-between mt-3">
              <p className="testimonial-author">{testimonial.author}</p>
              <p className="font-semibold">{testimonial.company}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default TestimonialsSection;
