import "bootstrap/dist/css/bootstrap.min.css";
import Profile from "./profile/profile";
// import Emppayslip from './hrms/emppayslip';
// import { PrimeReactProvider } from 'primereact/api';
// import CellEditingDemo from './hrms/employeeCertificate/employeeCertificate';
// import EmployeeCertificate from './hrms/employeeCertificate/employeeCertificate';
// import Emppayslip from './hrms/employeePayslip/employeePayslip';
import "primereact/resources/themes/md-light-indigo/theme.css";
import "primereact/resources/primereact.min.css";
// import P1 from './practice/p1';
// import EmployeePayslipTable from './Dashborad/admin/admin';
// import RowEditingDemo from './hrms/employeeAttendance/employeeAtt';
// import { PrimeReactProvider } from 'primereact/api';
// import RowEditingDemo from './empattendance/empatt';
// import Hrms from './hrms/hrms';
// import './App.css';
import Demo from "./component/demo";
// import SimpleForm from './comp/form';
// import { BrowserRouter as Router, Route, Routes} from 'react-router-dom';
// import Navtab from './hrms/navtab';
import { BrowserRouter as Router, Route ,Routes } from "react-router-dom";
import MultiStepForm from "./Steppercomp/Main/main";
import SimpleForm from "./comp/form";
import VerticalStepperForm from "./Steppercomp/Stepper/Stepper";
import Practice from "./practice/Practice";
// import YourComponent from "./practice/p1";
// import Job from "./user/Job";

function App() {
  return (
   
    <div>
      {/* <Profile/> */}
     
      <Router>
        <Routes>
        <Route path="/" exact element={<Profile />} />
        <Route path="/demo" exact element={<Demo />} />
        <Route path="/Practice" exact element={<Practice />} />
        </Routes>
      </Router>
      {/* <YourComponent></YourComponent> */}
    </div>
  );
}
export default App;

