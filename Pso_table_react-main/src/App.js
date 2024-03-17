
import "./App.css";
import CourseObjectiveTable from "./Screens/CourseObjectiveTable";
import CourseOutcome from "./Screens/CourseOutcomeTable";


import PsoTable from "./Screens/Psotable";
import Header from "./components/Header";


function AppPso() {
  return (
    <>
      <div className="bg-light vh-100 vw-100 container-fluid">
        <Header />
        <CourseObjectiveTable />
        <CourseOutcome />
      </div>
    
    
    </>
  );
}

export default AppPso;
