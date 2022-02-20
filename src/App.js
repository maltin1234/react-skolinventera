import './App.css';
import FilterableTable from './components/FilterableTable';
import InventoryList from './components/InventoryList';



import NavBar from './components/NavBar';
import SideBar from './components/SideBar';


function App() {
  return (
    <div className="
    ">
      <NavBar />
 <div className="container
    ">
        <SideBar />
        <FilterableTable></FilterableTable>
      <InventoryList/>
     </div>
    </div>
  );
}

export default App;
