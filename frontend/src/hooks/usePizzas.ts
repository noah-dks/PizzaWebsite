import type { Pizza } from "../types/types.ts";
import { useQuery } from "@tanstack/react-query";
const pizzaApiUrl = "http://localhost:5131/pizza";

export const usePizzas = () =>
  useQuery({
    queryKey: ["pizzas"],
    queryFn: async () => {
      const res = await fetch(pizzaApiUrl);

      if (!res.ok) {
        throw new Error(await res.text());
      }

      const data = await res.json();
      return data as Pizza[];
    },
  });
