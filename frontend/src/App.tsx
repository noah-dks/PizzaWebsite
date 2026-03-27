import PizzaCard from "./components/PizzaCard";
import { usePizzas } from "./hooks/usePizzas";
import type { Pizza } from "./types/types";

function App() {
  const { data: pizzaList, isLoading, isError, isPending } = usePizzas();

  if (!pizzaList) {
    return <div>Pizzas not found! 404</div>;
  }

  if (isLoading || isPending) {
    return (
      <div className="flex justify-center items-center bg-grayCyan/70 p-10 h-dvh">
        <p className=" bg-amber-100 p-15 rounded-xl h-fit border-yellow-950 border-4 text-5xl font-bold">
          Loading...
        </p>
      </div>
    );
  }

  return (
    <div className="grid grid-cols-4 mx-15 gap-10 px-5 pb-10">
      {pizzaList.map((pizza: Pizza) => (
        <div key={pizza.id}>
          <PizzaCard pizza={pizza} />
        </div>
      ))}
    </div>
  );
}

export default App;
