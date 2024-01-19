import ProductList from "./components/ProductList";
import CartButton from "./components/CartButton";

function App() {
  return (
    <div className="App">
      <header className="flex justify-between items-center border-solid border-b-2 mb-8 p-2">
        <h1 className="text-2xl font-semibold">TIMETAM MART</h1>
        <CartButton width="w-8" />
      </header>
      <div className="w-full flex justify-center">
        <ProductList />
      </div>
    </div>
  );
}

export default App;
