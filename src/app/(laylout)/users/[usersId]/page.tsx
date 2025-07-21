import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Recipe Detail",
  description: "Detail page for each recipe",
};

interface UsersDetailProps {
  params: {
    userId: string;
  };
}

const RecipeDetailPage = async ({ params }: UsersDetailProps) => {
  const { userId } = params;

  const res = await fetch(`https://dummyjson.com/users/${userId}`, { cache: "force-cache" });

  if (!res.ok) {
    return <div>User not found</div>;
  }

  const user = await res.json();

  return (
    <div >
      <h1 className="text-3xl font-bold mb-4">{user.name}</h1>
      <p className="text-gray-600 text-sm mb-1">Username: {user.username}</p>
          <p className="text-gray-600 text-sm mb-1">Email: {user.email}</p>
          <p className="text-gray-600 text-sm mb-1">Gender: {user.gender}</p>
          <p className="text-gray-600 text-sm mb-1">Age: {user.age}</p>
          <p className="text-gray-600 text-sm mb-1">Phone: {user.phone}</p>
          <p className="text-gray-600 text-sm mb-1">City: {user.address?.city}</p>
    </div>
  );
};

export default RecipeDetailPage;
