import { IModel } from "@/types";
import Image from "next/image";

export default function CardProduct({ product }: { product: IModel.Product }) {
  return (
    <div className="flex flex-col w-40">
      <div className="w-full flex items-center justify-center">
        <Image
          src={product.thumbnail}
          width={1000}
          height={1000}
          alt="img"
          className="h-32 w-32 m-4 rounded-2xl border-bolid border-2 border-white-50"
        />
      </div>
      <div className="w-full flex flex-col items-start justify-start px-4">
        <h1>{product.title}</h1>
        <h1>
          {product.price.toLocaleString("es-AR", {
            style: "currency",
            currency: "ARS",
          })}
        </h1>
      </div>
    </div>
  );
}
