"use client";
import CardProduct from "@/components/CardProduct";
import ListCategories from "@/components/ListCategories";
import { useProducts } from "@/hooks/useProducts";

export default function Home() {
  const { products, categories } = useProducts();
  console.log(categories?.values);
  return (
    <main className="p-20 flex justify-center items-start xl:px-40 lg:px-24 px-10">
      <div className="w-2/12">{<ListCategories />}</div>
      <div className="flex flex-wrap justify-center gap-6 flex-1">
        {products &&
          products.map((product) => (
            <CardProduct key={product.id} product={product} />
          ))}
      </div>
    </main>
  );
}
