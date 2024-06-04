import React from 'react'
// import Hrms from './hrms';
import '../comp/form.css';
import Hrms from './employeeDetails/employeeList';
import RowEditingDemo from './employeeAttendance/employeeAtt';
import Emppayslip from './employeePayslip/employeePayslip';
import EmployeeCertificate from './employeeCertificate/employeeCertificate';
import { PrimeReactProvider } from 'primereact/api';
// import CellEditingDemo from './employeeCertificate/employeeCertificate';


const Navtab1 = () => {
  return (
  <div>
  <ul class="nav nav-pills m-3" id="pills-tab" role="tablist">
  <li class="nav-item" role="presentation">
    <button class="nav-link active" id="pills-hrmsemp-tab" data-bs-toggle="pill" data-bs-target="#pills-hrmsemp" type="button" role="tab" aria-controls="pills-hrmsemp" aria-selected="true">EMPLOYEE</button>
  </li>
  <li class="nav-item ms-3" role="presentation">
    <button class="nav-link" id="pills-emplist-tab" data-bs-toggle="pill" data-bs-target="#pills-emplist" type="button" role="tab" aria-controls="pills-emplist" aria-selected="false">ATTENDANCE</button>
  </li>
  <li class="nav-item ms-3" role="presentation">
    <button class="nav-link" id="pills-emppayslip-tab" data-bs-toggle="pill" data-bs-target="#pills-emppayslip" type="button" role="tab" aria-controls="pills-emppayslip" aria-selected="false">PAYSLIP</button>
  </li>
  <li class="nav-item ms-3" role="presentation">
    <button class="nav-link" id="pills-empcertificate-tab" data-bs-toggle="pill" data-bs-target="#pills-empcertificate" type="button" role="tab" aria-controls="pills-empcertificate" aria-selected="false">CERTIFICATE</button>
  </li>
</ul>
<div class="tab-content"  id="pills-tabContent">
  <div class="tab-pane fade show active" id="pills-hrmsemp" role="tabpanel" aria-labelledby="pills-hrmsemp-tab" tabindex="0"><Hrms/></div>
  <div class="tab-pane fade" id="pills-emplist" role="tabpanel" aria-labelledby="pills-emplist-tab" tabindex="0"><PrimeReactProvider><RowEditingDemo/></PrimeReactProvider></div>
  <div class="tab-pane fade" id="pills-emppayslip" role="tabpanel" aria-labelledby="pills-emppayslip-tab" tabindex="0"><Emppayslip/></div>
  <div class="tab-pane fade" id="pills-empcertificate" role="tabpanel" aria-labelledby="pills-empcertificate-tab" tabindex="0"><EmployeeCertificate/></div>

</div>
    </div>
  )
}

export default Navtab1;