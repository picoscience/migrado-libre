import { BASE_URL, SELLER_ID } from "@/constants";
import { IModel } from "@/types";
import { AvailableFilter } from "@/types/models";
import { useEffect, useState } from "react";

export function useProducts(category?: string) {
  const [products, setProducts] = useState<IModel.Product[]>();
  const [categories, setCategories] = useState<AvailableFilter>();
  useEffect(() => {
    fetch(
      `${BASE_URL}${category ? "category" : "seller_id"}=${
        category ? category : SELLER_ID
      }`
    )
      .then(async (res) => (await res.json()) as Promise<IModel.Results>)
      .then((data) => {
        setProducts(data.results);
        setCategories(
          data.available_filters.find((filter) => filter.id === "category")
        );
      })
      .catch((error) =>
        console.log("Hubo un problema con la petición Fetch:" + error.message)
      );
  }, [category]);

  return { products, categories };
}
