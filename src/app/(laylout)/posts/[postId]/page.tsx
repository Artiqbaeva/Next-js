import NotFound from "@/app/not-found";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Posts Detail",
  description: "Detail page for each post",
};

interface PostsDetailProps {
  params: { postId: string };
}

const PostsDetailPage = async ({ params }: PostsDetailProps) => {
  const { postId } = params;

  const res = await fetch(`https://dummyjson.com/posts/${postId}`, {
    cache: "force-cache",
  });

  if (!res.ok) {
    return <NotFound />
  }

  const post = await res.json();

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-4">{post.title}</h1>
      <p className="text-gray-600 mb-2">{post.body}</p>
    </div>
  );
};

export default PostsDetailPage;
