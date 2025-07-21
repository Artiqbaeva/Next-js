import NotFound from "@/app/not-found";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Recipe Detail",
  description: "Detail page for each recipe",
};

interface RecipesDetailProps {
  params: {
    recipeId: string;
  };
}

const RecipeDetailPage = async ({ params }: RecipesDetailProps) => {
  const { recipeId } = params;

  const res = await fetch(`https://dummyjson.com/recipes/${recipeId}`, { cache: "force-cache" });

  if (!res.ok) {
    return <NotFound />
   
  }

  const recipe = await res.json();

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-4">{recipe.name}</h1>
      <img
        src={recipe.image}
        alt={recipe.name}
        className="w-full max-w-md object-contain rounded mb-4"
      />
      <p className="text-gray-600 mb-2">Cuisine: {recipe.cuisine}</p>
      <p className="text-gray-600 mb-2">Difficulty: {recipe.difficulty}</p>
      <p className="text-gray-600 mb-2">Prep Time: {recipe.prepTimeMinutes} minutes</p>
      <p className="text-gray-600 mb-2">Cook Time: {recipe.cookTimeMinutes} minutes</p>
      <p className="text-gray-600 mb-2">Servings: {recipe.servings}</p>
      <p className="text-gray-600 mb-2">Calories per Serving: {recipe.caloriesPerServing}</p>
    </div>
  );
};

export default RecipeDetailPage;
