import type { Pizza } from "../types/types";

function PizzaCard({ pizza }: { pizza: Pizza }) {

  const API_BASE = "http://localhost:5131"

  return (
    <div className="flex flex-col justify-center border-black border-2 shadow-xl rounded-xl bg-amber-100 backdrop-blur">
      <img src={`${API_BASE}${pizza.pizzaImage}`} alt={`${pizza.name} Pizza`} />
      <h1 className="font-bold text-center py-1">{pizza.name}</h1>
      <p className="text-md text-center py-1">
        {pizza.isGlutenFree ? "Gluten free" : "Contains gluten"}
      </p>
    </div>
  );
}

export default PizzaCard;
