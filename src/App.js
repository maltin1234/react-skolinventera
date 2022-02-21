import "./App.css";
import FilterableTable from "./components/FilterableTable";

import NavBar from "./components/NavBar";
import SideBar from "./components/SideBar";

function App() {
  return (
    <div
      className="
    "
    >
      <NavBar />
      <div
        className="container
    "
      >
        <SideBar />
        <FilterableTable></FilterableTable>
      </div>
    </div>
  );
}

export default App;
