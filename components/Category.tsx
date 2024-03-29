import { IModel } from "@/types";
import { useState } from "react";
import ListCategories from "./ListCategories";
import { useRouter } from "next/navigation";

export default function Category({
  categories,
}: {
  categories: IModel.ValueAvailableFilter[];
}) {
  const [flag, setFlag] = useState([""]);
  const router = useRouter();
  const handleClick = (id: string) => {
    const isPresent = flag.includes(id);
    if (isPresent) {
      setFlag(flag.filter((item) => item !== id));
    } else {
      setFlag([...flag, id]);
    }
  };
  return (
    <div>
      {categories.map(({ name, id }) => (
        <>
          <div className="flex" key={id}>
            <span
              className="text-xl -translate-y-1 mr-1 cursor-pointer"
              onClick={() => handleClick(id)}
            >
              {!flag.includes(id) ? "+" : "-"}
            </span>
            <li
              className="list-none cursor-pointer"
              onClick={() => router.push(`/${id}`)}
            >
              {name}
            </li>
          </div>
          {flag.includes(id) && (
            <div className={`ml-5`}>
              <ListCategories category={id} />
            </div>
          )}
        </>
      ))}
    </div>
  );
}
