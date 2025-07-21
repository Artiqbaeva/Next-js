import NotFound from "@/app/not-found";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Product Detail",
  description: "Detail page for each product",
};

const ProductDetailPage = async ({ params }: { params: { productId: string } }) => {
  const { productId } = params;

  const res = await fetch(`https://dummyjson.com/products/${productId}`, {
    cache: "force-cache",
  });

  if (!res.ok) {
    return <NotFound />;
  }

  const product = await res.json();

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-4">{product.title}</h1>
      <p className="text-gray-600 mb-2">{product.description}</p>
      <p className="text-gray-600 mb-2">Price: ${product.price}</p>
    </div>
  );
};

export default ProductDetailPage;
