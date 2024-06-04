import React from 'react'
import SimpleForm from '../comp/form'
// import Hrms from './hrms';
import '../comp/form.css';
import Demo from '../component/demo';
// import Hrmstab from './hrms';
import Navtab1 from './navtab1';
import Job from '../user/Job';

const Navtab = () => {
  return (
  <div>
  <ul class="nav nav-pills m-3" id="pills-tab" role="tablist">
    
  <li class="nav-item" role="presentation">
    <button class="nav-link active" id="pills-home-tab" data-bs-toggle="pill" data-bs-target="#pills-home" type="button" role="tab" aria-controls="pills-home" aria-selected="true">PROFILE</button>
  </li>

  <li class="nav-item ms-3" role="presentation">
    <button class="nav-link" id="pills-profile-tab" data-bs-toggle="pill" data-bs-target="#pills-profile" type="button" role="tab" aria-controls="pills-profile" aria-selected="false">HRMS</button>
  </li>
  
  <li class="nav-item ms-3" role="presentation">
    <button class="nav-link" id="pills-contact-tab" data-bs-toggle="pill" data-bs-target="#pills-contact" type="button" role="tab" aria-controls="pills-contact" aria-selected="false">USER PROFILE</button>
  </li>

</ul>
<div class="tab-content" id="pills-tabContent">
  <div class="tab-pane fade show active" id="pills-home" role="tabpanel" aria-labelledby="pills-home-tab" tabindex="0">
<SimpleForm/>
  </div>
  <div class="tab-pane fade" id="pills-profile" role="tabpanel" aria-labelledby="pills-profile-tab" tabindex="0"><Navtab1/></div>
  <div class="tab-pane fade" id="pills-contact" role="tabpanel" aria-labelledby="pills-contact-tab" tabindex="0"><Job/></div>
</div>
    </div>
  )
}

export default Navtab;