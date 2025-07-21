import NotFound from "@/app/not-found";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Product Detail",
  description: "Detail page for each product",
};

interface ProductDetailProps {
  params: {
    productId: string;
  };
}

const ProductDetailPage = async ({ params }: ProductDetailProps) => {
  const { productId } = params;

  const res = await fetch(`https://dummyjson.com/products/${productId}`, { cache: "force-cache" });

  if (!res.ok) {
    return <NotFound />;
  }

  const product = await res.json();

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-4">{product.title}</h1>
      <img
        src={product.thumbnail}
        alt={product.title}
        className="w-full max-w-md object-cover rounded mb-4"
      />
      <p className="text-gray-600 mb-2">Category: {product.category}</p>
      <p className="text-gray-600 mb-2">Brand: {product.brand}</p>
      <p className="text-green-600 text-xl font-bold mb-4">${product.price}</p>
      <p className="text-gray-800">{product.description}</p>
    </div>
  );
};

export default ProductDetailPage;
