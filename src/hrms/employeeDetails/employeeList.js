import React, { useState, useRef } from "react";
// import profilebg from "../hrms/hrmsprofile.jpg";
import "../../hrms/hrms.css";
// import { faShareAlt } from '@fortawesome/free-solid-svg-icons';
// import Navtab1 from "../hrms/navtab1";
const Hrms = () => {
  const fileInputRef = useRef(null);
  const [empId, setEmpId] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [gender, setGender] = useState("");
  const [dob, setDOB] = useState("");
  const [maritalStatus, setMaritalStatus] = useState("");
  const [contactNumber, setContactNumber] = useState("");
  const [email, setEmail] = useState("");
  const [address, setAddress] = useState("");
  const [empIdError, setEmpIdError] = useState("");
  const [firstNameError, setFirstNameError] = useState("");
  const [lastNameError, setLastNameError] = useState("");
  const [contactNumberError, setContactNumberError] = useState("");
  const [emailError, setEmailError] = useState("");
  const [addressError, setAddressError] = useState("");
  const [position, setPosition] = useState("");
  const [department, setDepartment] = useState("");
  const [joiningDate, setJoiningDate] = useState("");
  const [employmentStatus, setEmploymentStatus] = useState("");
  const [salary, setSalary] = useState("");
  const [manager, setManager] = useState("");
  const [employeeType, setEmployeeType] = useState("");
  const [probationEndDate, setProbationEndDate] = useState("");
  const [positionError, setPositionError] = useState("");
  const [departmentError, setDepartmentError] = useState("");
  const [joiningDateError, setJoiningDateError] = useState("");
  const [employmentStatusError, setEmploymentStatusError] = useState("");
  const [salaryError, setSalaryError] = useState("");
  const [managerError, setManagerError] = useState("");
  const [employeeTypeError, setEmployeeTypeError] = useState("");
  const [probationEndDateError, setProbationEndDateError] = useState("");
  const [emergencyContactName, setEmergencyContactName] = useState("");
  const [relationship, setRelationship] = useState("");
  const [emergencyContactNo, setEmergencyContactNo] = useState("");
  const [emergencyContactNameError, setEmergencyContactNameError] = useState("");
  const [relationshipError, setRelationshipError] = useState("");
  const [emergencyContactNoError, setEmergencyContactNoError] = useState("");
  const [bankName, setBankName] = useState("");
  const [accountNumber, setAccountNumber] = useState("");
  const [routingNumber, setRoutingNumber] = useState("");
  const [bankNameError, setBankNameError] = useState("");
  const [accountNumberError, setAccountNumberError] = useState("");
  const [routingNumberError, setRoutingNumberError] = useState("");
  const validateEmpId = () => {
    if (!empId) {
      setEmpIdError("EMP ID is required");
    } else {
      setEmpIdError("");
    }
  };

  const validateFirstName = () => {
    if (!firstName) {
      setFirstNameError("First Name is required");
    } else {
      setFirstNameError("");
    }
  };
  

  const validateLastName = () => {
    if (!lastName) {
      setLastNameError("Last Name is required");
    } else {
      setLastNameError("");
    }
  };

  const validateContactNumber = () => {
    const contactNumberRegex = /^\d{10}$/;
    if (!contactNumber.match(contactNumberRegex)) {
      setContactNumberError("Invalid Contact Number");
    } else {
      setContactNumberError("");
    }
  };

  const validateEmail = () => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!email.match(emailRegex)) {
      setEmailError("Invalid Email Address");
    } else {
      setEmailError("");
    }
  };

  const validateAddress = () => {
    if (!address) {
      setAddressError("Address is required");
    } else {
      setAddressError("");
    }
  };

  const validatePosition = () => {
    if (!position) {
      setPositionError("Position is required");
    } else {
      setPositionError("");
    }
  };

  const validateDepartment = () => {
    if (!department) {
      setDepartmentError("Department is required");
    } else {
      setDepartmentError("");
    }
  };

  const validateJoiningDate = () => {
    if (!joiningDate) {
      setJoiningDateError("Joining Date is required");
    } else {
      setJoiningDateError("");
    }
  };

  const validateEmploymentStatus = () => {
    if (!employmentStatus) {
      setEmploymentStatusError("Employment Status is required");
    } else {
      setEmploymentStatusError("");
    }
  };

  const validateSalary = () => {
    if (!salary) {
      setSalaryError("Salary field is required");
    } else {
      setSalaryError("");
    }
  };

  const validateManager = () => {
    if (!manager) {
      setManagerError("Manager is required");
    } else {
      setManagerError("");
    }
  };

  const validateEmployeeType = () => {
    if (!employeeType) {
      setEmployeeTypeError("Employee Type is required");
    } else {
      setEmployeeTypeError("");
    }
  };

  const validateProbationEndDate = () => {
    if (!probationEndDate) {
      setProbationEndDateError("Probation End Date is required");
    } else {
      setProbationEndDateError("");
    }
  };

  const validateEmergencyContactName = () => {
    if (!emergencyContactName) {
      setEmergencyContactNameError("Emergency Contact Name is required");
    } else {
      setEmergencyContactNameError("");
    }
  };

  const validateRelationship = () => {
    if (!relationship) {
      setRelationshipError("Relationship is required");
    } else {
      setRelationshipError("");
    }
  };

  const validateEmergencyContactNo = () => {
    const contactNumberRegex = /^\(\d{3}\) \d{3}-\d{4}$/;
    if (!emergencyContactNo.match(contactNumberRegex)) {
      setEmergencyContactNoError("Invalid Emergency Contact Number");
    } else {
      setEmergencyContactNoError("");
    }
  };

  const validateEmergencyContact = () => {
    validateEmergencyContactName();
    validateRelationship();
    validateEmergencyContactNo();
  };

  const validateBankName = () => {
    if (!bankName) {
      setBankNameError("Bank Name is required");
    } else {
      setBankNameError("");
    }
  };

  const validateAccountNumber = () => {
    const accountNumberRegex = /^\d+$/;
    if (!accountNumber.match(accountNumberRegex)) {
      setAccountNumberError("Invalid Account Number");
    } else {
      setAccountNumberError("");
    }
  };

  const validateRoutingNumber = () => {
    const routingNumberRegex = /^\d+$/;
    if (!routingNumber.match(routingNumberRegex)) {
      setRoutingNumberError("Invalid Routing Number");
    } else {
      setRoutingNumberError("");
    }
  };

  
  const handleSubmit = (e) => {
    e.preventDefault();
    validateEmpId();
    validateFirstName();
    validateLastName();
    validateContactNumber();
    validateEmail();
    validateAddress();
    validatePosition();
    validateDepartment();
    validateJoiningDate();
    validateEmploymentStatus();
    validateSalary();
    validateManager();
    validateEmployeeType();
    validateProbationEndDate();
    validateEmergencyContactName();
    validateRelationship();
    validateEmergencyContactNo();
    validateBankName();
    validateAccountNumber();
    validateRoutingNumber();
    
    if (
      !empIdError &&
      !firstNameError &&
      !lastNameError &&
      !contactNumberError &&
      !emailError &&
      !addressError &&
      !positionError &&
      !departmentError &&
      !joiningDateError &&
      !employmentStatusError &&
      !salaryError &&
      !managerError &&
      !employeeTypeError &&
      !probationEndDateError &&
      !emergencyContactNameError &&
      !relationshipError &&
      !emergencyContactNoError
    ) {
      console.log("Form submitted successfully!");
    } else {
      console.log("Form submission failed. Please check the errors.");
    }
  };

  // const handleFileChange = (e) => {
  //   const file = e.target.files[0];
  //   console.log("Selected file:", file);
  // };

  // const handleImageClick = () => {
  //   fileInputRef.current.click();
  // };
  return (
    <div>
      <form className="form_container" onSubmit={handleSubmit}>
        {/* <h1 className="label-bi text-center">HRMS FORM</h1> */}
        {/* <div className="logo_container">
          <div className="row my-4 text-center">
            <div className="logo_subCont col-12">
              <img
                onClick={handleImageClick}
                src={profilebg}
                className="logo_profile"
                alt="Description of the profile"
              />
              <input
                type="file"
                id="fileInput"
                ref={fileInputRef}
                style={{ display: "none" }}
                onChange={handleFileChange}
              />
            </div>
            <div className="col-12">
              <label className="upload-button">
                Click here to upload profile
              </label>
            </div>
          </div>
        </div> */}

        {/* BASIC INFO */}

        {/* <Navtab1/> */}

        <label className="label-bi px-3">EMPLOYEE INFORMATION :</label>
        <div className="row my-5 px-3">
          <div className="col-12 col-md-3 pb-4">
            <label className="pb-2 label">First Name</label>
            <input
              className="header_company"
              type="text"
              value={firstName}
              onChange={(e) => setFirstName(e.target.value)}
              onBlur={validateFirstName}/>
          </div>
          <div className="col-12 col-md-3 pb-4">
            <label className="pb-2 label">Last Name</label>
            <input
              className="header_company"
              type="text"
              value={lastName}
              onChange={(e) => setLastName(e.target.value)}
              onBlur={validateLastName}/>
          </div>
         
          <div className="col-12 col-md-3 pb-4">
            <label className="pb-2 label">DOB</label>
            <input
              className="header_company"
              type="date"
              value={dob}
              onChange={(e) => setDOB(e.target.value)}
            />
          </div>
          <div className="col-12 col-md-3 pb-4">
            <label className="pb-2 label">Gender</label>
            <select
              className="header_company"
              value={gender}
              onChange={(e) => setGender(e.target.value)}>
              <option value="">Select gender</option>
              <option value="male">Male</option>
              <option value="female">Female</option>
            </select>
          </div>
          <div className="col-12 col-md-3 pb-4">
            <label className="pb-2 label">Marital Status</label>
            <select
              className="header_company"
              value={maritalStatus}
              onChange={(e) => setMaritalStatus(e.target.value)}
            >
              <option value="">Select</option>
              <option value="single">Single</option>
              <option value="married">Married</option>
            </select>
          </div>
          <div className="col-12 col-md-3 pb-4">
            <label className="pb-2 label">Contact Number</label>
            <input
              className="header_company"
              type="text"
              value={contactNumber}
              onChange={(e) => setContactNumber(e.target.value)}
              onBlur={validateContactNumber}
            />
          </div>
          <div className="col-12 col-md-3 pb-4">
            <label className="pb-2 label">Email ID</label>
            <input
              className="header_company"
              type="text"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              onBlur={validateEmail}
            />
          </div>
          <div className="col-12 col-md-3 pb-4">
            <label className="pb-2 label">Address</label>
            <input
              className="header_company"
              type="text"
              value={address}
              onChange={(e) => setAddress(e.target.value)}
              onBlur={validateAddress}
            />
          </div>
        </div>
        
        {/* EMPLOYMENT DETAILS */}

        <label className="label-bi px-3">EMPLOYMENT DETAILS :</label>
        <div className="row my-5 px-3">
          <div className="col-12 col-md-3 pb-4">
            <label className="pb-2 label">EMP ID</label>
            <input
              className="header_company"
              type="text"
              value={empId}
              onChange={(e) => setEmpId(e.target.value)}
              onBlur={validateEmpId}
            />
          </div>
          <div className="col-12 col-md-3 pb-4">
            <label className="pb-2 label">Position</label>
            <input
              className="header_company"
              type="text"
              value={position}
              onChange={(e) => setPosition(e.target.value)}
              onBlur={validatePosition}
            />
            {positionError && (
              <span className="error-text">{positionError}</span>
            )}
          </div>
          <div className="col-12 col-md-3 pb-4">
            <label className="pb-2 label">Department</label>
            <input
              className="header_company"
              type="text"
              value={department}
              onChange={(e) => setDepartment(e.target.value)}
              onBlur={validateDepartment}
            />
            {departmentError && (
              <span className="error-text">{departmentError}</span>
            )}
          </div>
          <div className="col-12 col-md-3 pb-4">
            <label className="pb-2 label">Joining Date</label>
            <input
              className="header_company"
              type="date"
              value={joiningDate}
              onChange={(e) => setJoiningDate(e.target.value)}
              onBlur={validateJoiningDate}
            />
            {joiningDateError && (
              <span className="error-text">{joiningDateError}</span>
            )}
          </div>
          
          <div className="col-12 col-md-3 pb-4">
            <label className="pb-2 label">Employment Status</label>
            <select
              className="header_company"
              value={employmentStatus}
              onChange={(e) => setEmploymentStatus(e.target.value)}
              onBlur={validateEmploymentStatus}
            >
              <option value="">Select</option>
              <option value="fullTime">Full Time</option>
              <option value="partTime">Part Time</option>
            </select>
            {employmentStatusError && (
              <span className="error-text">{employmentStatusError}</span>
            )}
          </div>
          <div className="col-12 col-md-3 pb-4">
            <label className="pb-2 label">Salary</label>
            <input
              className="header_company"
              type="text"
              value={salary}
              onChange={(e) => setSalary(e.target.value)}
              onBlur={validateSalary}
            />
            {salaryError && <span className="error-text">{salaryError}</span>}
          </div>
          <div className="col-12 col-md-3 pb-4">
            <label className="pb-2 label">Manager</label>
            <input
              className="header_company"
              type="text"
              value={manager}
              onChange={(e) => setManager(e.target.value)}
              onBlur={validateManager}
            />
            {managerError && <span className="error-text">{managerError}</span>}
          </div>
          <div className="col-12 col-md-3 pb-4">
            <label className="pb-2 label">Employee Type</label>
            <select
              className="header_company"
              value={employeeType}
              onChange={(e) => setEmployeeType(e.target.value)}
              onBlur={validateEmployeeType}
            >
              <option value="">Select</option>
              <option value="permanent">Permanent</option>
              <option value="contract">Contract</option>
            
            </select>
            {employeeTypeError && (
              <span className="error-text">{employeeTypeError}</span>
            )}
          </div>
          <div className="col-12 col-md-3 pb-4">
            <label className="pb-2 label">Probation End Date</label>
            <input
              className="header_company"
              type="date"
              value={probationEndDate}
              onChange={(e) => setProbationEndDate(e.target.value)}
              onBlur={validateProbationEndDate}
            />
            {probationEndDateError && (
              <span className="error-text">{probationEndDateError}</span>
            )}
          </div>
        </div>

        {/*EMERGENCY CONTACT SECTION */}

        <label className="label-bi px-3">EMERGENCY CONTACT :</label>
        <div className="row my-5 px-3">
          <div className="col-12 col-md-4 pb-4">
            <label className="pb-2 label">Emergency Contact Name</label>
            <input
              className="header_company"
              type="text"
              value={emergencyContactName}
              onChange={(e) => setEmergencyContactName(e.target.value)}
              onBlur={validateEmergencyContactName}
            />
            {emergencyContactNameError && (
              <span className="error-text">{emergencyContactNameError}</span>
            )}
          </div>
          <div className="col-12 col-md-4 pb-4">
            <label className="pb-2 label">Relationship</label>
            <input
              className="header_company"
              type="text"
              value={relationship}
              onChange={(e) => setRelationship(e.target.value)}
              onBlur={validateRelationship}
            />
            {relationshipError && (
              <span className="error-text">{relationshipError}</span>
            )}
          </div>
          <div className="col-12 col-md-4 pb-4">
            <label className="pb-2 label">Emergency Contact No</label>
            <input
              className="header_company"
              type="text"
              value={emergencyContactNo}
              onChange={(e) => setEmergencyContactNo(e.target.value)}
              onBlur={validateEmergencyContactNo}
            />
            {emergencyContactNoError && (
              <span className="error-text">{emergencyContactNoError}</span>
            )}
          </div>
        </div>
            {/* BANK DETAILS */}

        <label className="label-bi px-3">BANK INFORMATION:</label>
        <div className="row my-5 px-3">
          <div className="col-12 col-md-4 pb-4">
            <label className="pb-2 label">Bank Name</label>
            <input
              className="header_company"
              type="text"
              value={bankName}
              onChange={(e) => setBankName(e.target.value)}
              onBlur={validateBankName}
            />
          </div>
          <div className="col-12 col-md-4 pb-4">
            <label className="pb-2 label">Account Number</label>
            <input
              className="header_company"
              type="text"
              value={accountNumber}
              onChange={(e) => setAccountNumber(e.target.value)}
              onBlur={validateAccountNumber}
            />
            {/* Add corresponding error handling */}
          </div>
          <div className="col-12 col-md-4 pb-4">
            <label className="pb-2 label">IFSC Code</label>
            <input
              className="header_company"
              type="text"
              value={routingNumber}
              onChange={(e) => setRoutingNumber(e.target.value)}
              onBlur={validateRoutingNumber}/>
          </div>
        </div>
        <div className="text-center">
          <input className="btn btn-primary" type="submit" value="Submit" />
        </div>
      </form>
    </div>
  );
};

export default Hrms;