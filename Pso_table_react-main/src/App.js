
import "./App.css";
import CourseObjectiveTable from "./Screens/CourseObjectiveTable";
import CourseOutcome from "./Screens/CourseOutcomeTable";
import ExamMarks from "./Screens/ExamMarks";
import ExamMarksTable from "./Screens/ExamMarksTable";


import PsoTable from "./Screens/Psotable";
import Temp from "./Screens/Temp";
import Temp2 from "./Screens/Temp2";
import Temp3 from "./Screens/Temp3";
import Header from "./components/Header";


function AppPso() {
  return (
    <>
      <div className="vh-100 vw-100 container-fluid">
        <Header />
        <Temp3 />
        {/* <ExamMarks />? */}
        {/* <ExamMarksTable /> */}
        {/* <CourseObjectiveTable />
        <CourseOutcome /> */}
        {/* <PsoTable /> */}
      </div>


    </>
  );
}

export default AppPso;
