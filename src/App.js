import Menu from "./components/menu/Menu";
import Header from "./components/header/Header";
import Main from "./components/main/Main";

function App() {
  return (
    <div className="grid grid-cols-5 gap-0">
      <div>
        <Menu />
      </div>
      <div className="col-span-4 h-screen bg-gray-100">
        <Header />
        <Main />
      </div>
    </div>
  );
}

export default App;
