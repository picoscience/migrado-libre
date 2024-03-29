import { BASE_URL, SELLER_ID } from "@/constants";
import { IModel } from "@/types";
import { useEffect, useState } from "react";

export default function useCategories(category?: string) {
  const [categories, setCategories] = useState<IModel.AvailableFilter>();
  useEffect(() => {
    fetch(
      `${BASE_URL}${category ? "category" : "seller_id"}=${
        category ? category : SELLER_ID
      }`
    )
      .then(async (res) => (await res.json()) as Promise<IModel.Results>)
      .then((data) => {
        setCategories(
          data.available_filters.find((filter) => filter.id === "category")
        );
      })
      .catch((error) =>
        console.log("Hubo un problema con la petición Fetch:" + error.message)
      );
  }, [category]);
  return { categories };
}
