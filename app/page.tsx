"use client";
import CardProduct from "@/components/CardProduct";
import { useProducts } from "@/hooks/useProducts";

export default function Home() {
  const { products } = useProducts();
  return (
    <div className="flex flex-wrap justify-center gap-6 flex-1">
      {products &&
        products.map((product) => (
          <CardProduct key={product.id} product={product} />
        ))}
    </div>
  );
}
