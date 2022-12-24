import Menu from "./components/menu/Menu";
import Header from "./components/header/Header";
import Main from "./components/main/Main";

function App() {
  return (
    <div className="grid md:grid-cols-3 lg:grid-cols-5 h-screen gap-0 overflow-x-hidden">
      <div>
        <Menu />
      </div>
      <div className="sm:col-span-1 md:col-span-3 lg:col-span-4 bg-gray-100">
        <Header />
        <Main />
      </div>
    </div>
  );
}

export default App;
