import Post from "@/components/Post";
import React from "react";

const PostsPage = async () => {
  const data = await fetch("https://dummyjson.com/posts", {cache: "force-cache"});
  const posts = await data.json();

  return <div><Post data={posts}/></div>;
};

export default PostsPage;
