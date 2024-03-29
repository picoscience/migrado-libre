import { IModel } from "@/types";
import { useState } from "react";
import ListCategories from "./ListCategories";

export default function Category({
  categories,
}: {
  categories: IModel.ValueAvailableFilter[];
}) {
  const [flag, setFlag] = useState([""]);
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
          <li
            key={id}
            className="cursor-pointer"
            onClick={() => handleClick(id)}
          >
            {name}
          </li>
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
