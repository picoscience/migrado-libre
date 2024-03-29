import useCategories from "@/hooks/useCategories";
import Category from "./Category";

export default function ListCategories({ category }: { category?: string }) {
  const { categories } = useCategories(category);
  return <>{categories && <Category categories={categories.values} />}</>;
}
