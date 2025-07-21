import NotFound from "@/app/not-found";

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
    <div>
      <h1>{product.title}</h1>
      <p>{product.description}</p>
    </div>
  );
};

export default ProductDetailPage;
