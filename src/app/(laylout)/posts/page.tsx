import Posts from "@/components/Posts";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Posts Page",
  description: "List of all posts",
};

const PostsPage = async () => {
  const res = await fetch("https://dummyjson.com/posts", { cache: "force-cache" });
  const posts = await res.json();

  return <Posts data={posts} />;
};

export default PostsPage;
