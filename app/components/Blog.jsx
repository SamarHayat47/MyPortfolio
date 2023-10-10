import React from "react";
import blogData from "../utils/blogData.json";
import Heading from "./Heading";

function Blog() {
  return (
    <section>
      <Heading heading="Blog" />
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3  gap-3">
        {blogData.map((post) => (
          <div
            key={post.id}
            className="p-3 hover:shadow-blue-100 hover:shadow-md group border flex flex-col justify-between rounded-lg"
          >
            <h2 className="text-center mb-3 font-semibold">{post.title}</h2>
            <p>{post.content}</p>
            <p>
              <strong>Author:</strong> {post.author}
            </p>
            <p>
              <strong>Date:</strong> {post.date}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Blog;
