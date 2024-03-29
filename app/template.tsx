"use client";
import ListCategories from "@/components/ListCategories";
import { useProducts } from "@/hooks/useProducts";

export default function Template({ children }: { children: React.ReactNode }) {
  const { categories } = useProducts();
  console.log(categories?.values);
  return (
    <main className="p-20 flex justify-center items-start xl:px-40 lg:px-24 px-10">
      <div className="w-2/12">{<ListCategories />}</div>
      {children}
    </main>
  );
}
