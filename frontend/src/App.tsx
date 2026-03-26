import { usePizzas } from "../hooks/usePizzas";

function App() {
  const { data: pizzaList, isLoading, error } = usePizzas();

  if (!pizzaList) {
    return <div>Pizzas not found! 404</div>;
  }
  return (
    <div>
      {pizzaList.map((pizza) => (
        <div key={pizza.id}>{pizza.name}</div>
      ))}
    </div>
  );
}

export default App;
