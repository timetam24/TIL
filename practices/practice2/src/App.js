import ProductList from "./components/ProductList";

function App() {
  return (
    <div className="App">
      <header className="flex justify-center items-center border-solid border-2 mb-8 p-2">
        <h1 className="text-2xl">탐탐 마트</h1>
        <p className="absolute right-2">장바구니</p>
      </header>
      <div className="w-full flex justify-center">
        <ProductList />
      </div>
    </div>
  );
}

export default App;
