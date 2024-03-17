
import "./App.css";


import PsoTable from "./Screens/Psotable";
import Header from "./components/Header";


function AppPso() {
  return (
    <>
      <div className="overflow-hidden bg-light vh-100 vw-100 container-fluid">
        <Header />
        <PsoTable />
      </div>
    
    
    </>
  );
}

export default AppPso;
