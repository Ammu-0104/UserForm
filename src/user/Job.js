import React from "react";
import { useState } from "react";
import "./job.css";
import bird from "../assets/images/bird_2.jpg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus } from "@fortawesome/free-solid-svg-icons";


// Table
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";

// modal
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import { Link } from "react-router-dom";

function createData(name, calories, fat, carbs, Description) {
  return { name, calories, fat, carbs, Description };
}

const rows = [
  createData(
    "Fan",
    "USHA",
    "1 month",
    " 20-10-12",
    "Minor scratches on the fan blades.Excellent working condition."
  ),
  createData(
    "Sofa",
    "Furtniture ",
    "1 montnh",
    " 20-10-12",
    "Minor scratches on the fan blades.Excellent working condition."
  ),
];

// Vehicle

function vehicleData(model, type, vehicleNo, dealerAgency, description) {
  return { model, type, vehicleNo, dealerAgency, description };
}

const vehiclerows = [
  vehicleData(
    "Toyota Camry",
    "Sedan",
    "ABC123",
    "Toyota Dealership",
    "Reliable sedan with advanced safety features"
  ),
  vehicleData(
    "Ford Explorer",
    "SUV",
    "XYZ789",
    "Ford Dealership",
    "Versatile SUV with spacious interior and modern technology"
  ),
  vehicleData(
    "Chevrolet Corvette",
    "Sports Car",
    "DEF456",
    "Chevrolet Dealership",
    "High-performance sports car known for speed and style"
  ),
];

// Gadget

function gadgetData(gadget, brand, warranty, purchaseDate, description) {
  return { gadget, brand, warranty, purchaseDate, description };
}

const gadgetrows = [
  gadgetData(
    "Smartphone",
    "ABC Brand",
    "1 year",
    "2023-01-15",
    "High-end smartphone with advanced features"
  ),
  gadgetData(
    "Laptop",
    "XYZ Brand",
    "2 years",
    "2022-09-28",
    "Powerful laptop for gaming and productivity"
  ),
  gadgetData(
    "Smartwatch",
    "PQR Brand",
    "1.5 years",
    "2023-05-10",
    "Fitness tracking and notifications"
  ),
  gadgetData(
    "Tablet",
    "LMN Brand",
    "1 year",
    "2022-11-20",
    "Portable tablet for entertainment and work"
  ),
  gadgetData(
    "Camera",
    "DEF Brand",
    "3 years",
    "2022-07-05",
    "Professional-grade camera for photography"
  ),
];

//property
function createDatas(
  type,
  availability,
  property,
  location,
  description,
  land
) {
  return { type, availability, property, location, description, land };
}

const propertys = [
  createDatas(
    "House - 2BHK",
    "RENT",
    "Residential",
    "2500Sqft",
    "Chennai",
    "Charming 2-bed, 1-bath in Cityville. Cozy living space, updated kitchen. Close to amenities. Ideal for couples or singles. Check it out!"
  ),
];

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 600,
  bgcolor: "background.paper",
  border: "0px",
  boxShadow: 24,
  borderRadius: "12px",
  p: 4,
};

function Job() {
  const [Name, setName] = React.useState(false);
  const handleNameOpen = () => setName(true);
  const handleNameClose = () => setName(false);

  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const [personal, setpersonal] = React.useState(false);
  const handlePersonalOpen = () => setpersonal(true);
  const handlePersonalClose = () => setpersonal(false);

  const [Education, setEducation] = React.useState(false);
  const handleEducationOpen = () => setEducation(true);
  const handleEducationClose = () => setEducation(false);

  const [Job, setJob] = React.useState(false);
  const handleJobOpen = () => setJob(true);
  const handleJobClose = () => setJob(false);

  const [Home, setHome] = React.useState(false);
  const handleHomeOpen = () => setHome(true);
  const handleHomeClose = () => setHome(false);

  const [Vehicle, setVehicle] = React.useState(false);
  const handleVehicleOpen = () => setVehicle(true);
  const handleVehicleClose = () => setVehicle(false);

  const [Gadget, setGadget] = React.useState(false);
  const handleGadgetOpen = () => setGadget(true);
  const handleGadgetClose = () => setGadget(false);

  const [Property, setProperty] = React.useState(false);
  const handlePropertyOpen = () => setProperty(true);
  const handlePropertyClose = () => setProperty(false);
  const [selectedSpecializations, setSelectedSpecializations] = useState("");
    
  {/* Educatiion */}

  const handleEducationChange = (e) => {
    const { name, value } = e.target;
    setCurrentEducation((prevEducation) => ({
      ...prevEducation,
      [name]: value,
    }));
  };
  const handleSpecializationsChange = (e) => {
    setSelectedSpecializations(e.target.value);
  };
  const Specializations = [
    // Engineering
    "Civil Engineering",
    "Mechanical Engineering",
    "Electrical Engineering",
    "Aerospace Engineering",
    "Chemical Engineering",
    "Computer Engineering",
    "Software Engineering",

    // Computer Science
    "Computer Science",
    "Computer Application",
    "Data Science",
    "Information Technology",
    "Web Development",
    "Mobile App Development",
    "Cybersecurity",
    "Artificial Intelligence",

    // Health Sciences
    "Nursing",
    "Medicine",
    "Pharmacy",
    "Public Health",
    "Physical Therapy",
    "Occupational Therapy",
    "Radiology",

    // Business and Management
    "Finance",
    "Marketing",
    "Human Resources",
    "International Business",
    "Entrepreneurship",
    "Operations Management",
    "Supply Chain Management",

    // Social Sciences
    "Psychology",
    "Sociology",
    "Anthropology",
    "Political Science",
    "Economics",
    "International Relations",
    "Criminology",

    // Natural Sciences
    "Biology",
    "Chemistry",
    "Physics",
    "Environmental Science",
    "Geology",
    "Astronomy",
    "Mathematics",

    // Humanities
    "English Literature",
    "History",
    "Philosophy",
    "Fine Arts",
    "Linguistics",
    "Cultural Studies",
    "Music",

    // Education
    "Elementary Education",
    "Secondary Education",
    "Special Education",
    "Educational Leadership",
    "Curriculum and Instruction",
    "Counseling",

    // Media and Communication
    "Journalism",
    "Public Relations",
    "Media Studies",
    "Advertising",
    "Broadcasting",
    "Digital Media",

    // Information Technology
    "Network Administration",
    "Cloud Computing",
    "Digital Forensics",
    "IT Management",

    // Design
    "Graphic Design",
    "Industrial Design",
    "Interior Design",
    "Fashion Design",
    "UX/UI Design",
    "Game Design",

    // Agriculture and Environmental Science
    "Agronomy",
    "Horticulture",
    "Forestry",
    "Soil Science",
    "Environmental Management",
    "Wildlife Biology",
  ];
  const [selectedDegree, setSelectedDegree] = useState("");
  const allDegrees = [
    "Associate's",
    "Bachelor's",
    "Master's",
    "Ph.D.",
    "MD",
    "DMD",
    "DVM",
    "PharmD",
    "JD",
    "BSE",
    "MSE",
    "DEng",
    "BCA",
    "BSCS",
    "MSCS",
    "DCS",
    "BBA",
    "MBA",
    "DBA",
    "BSN",
    "MPH",
    "MD",
    "DMD",
    "PharmD",
    "BAP",
    "MAS",
    "PhD",
    "BS",
    "MS",
    "PhD",
    "BA",
    "MFA",
    "PhD",
    "BEd",
    "MEd",
    "EdD",
    "BA",
    "MA",
    "DC",
    "BSIT",
    "MSIS",
    "DIT",
    "BFA",
    "MDes",
    "DDes",
    "BSA",
    "MSES",
    "PhD",
  ];
  const handleUniversityChange = (e) => {
    setSelectedUniversity(e.target.value);
  };
  const [selectedUniversity, setSelectedUniversity] = useState("");

  const allUniversities = [
    "Research University",
    "Liberal Arts University",
    "Technical University",
    "Medical University",
    "Engineering University",
    "Business School",
    "Law School",
    "Art and Design School",
    "Agricultural University",
    "Music Conservatory",
    "Open University",
    "Online University",
    "Madras university",
    "Anna university",
    "Private University",
    "Public University",
    "Ivy League",
    "Historically Black College or University (HBCU)",
    "Community College",
    "State University",
    "International University",
    "Religious University",
    "Military Academy",
    "Women s University",
    "Men s University",
  ];
  const schoolQualificationList = [
    "SSLC (Secondary School Leaving Certificate)",
    "HSC (Higher Secondary Certificate)",
    "CBSE (Central Board of Secondary Education)",
    "ICSE (Indian Certificate of Secondary Education)",
    "ISC (Indian School Certificate)",
    "State Board",
    "Matriculation",
    "O-Level (Ordinary Level)",
    "A-Level (Advanced Level)",
    "GED (General Educational Development)",
    "High School Diploma",
    "National Certificate of Educational Achievement (NCEA)",
    "Brevet des Collèges",
    "Diploma di Maturità",
    "Abitur",
    "Eindexamen",
    "Leaving Certificate",
    "Matura",
    "Selectividad",
    "Vysvedčenie o maturitnej skúške",
    // Add more qualifications as needed
  ];
  const academicDisciplines = [
    "Computer Science",
    "Mathematics",
    "Biology",
    "Physics",
    "Chemistry",
    "Environmental Science",
    "Geology",
    "Astronomy",
    "Economics",
    "Political Science",
    "Psychology",
    "Sociology",
    "Anthropology",
    "History",
    "Philosophy",
    "Literature",
    "Languages and Linguistics",
    "Art History",
    "Music Theory",
    "Drama and Theater Arts",
    "Dance",
    "Film Studies",
    "Media Studies",
    "Communication Sciences",
    "Business Administration",
    "Marketing",
    "Finance",
    "Accounting",
    "Human Resource Management",
    "International Business",
    "Entrepreneurship",
    "Medical Science",
    "Nursing",
    "Pharmacy",
    "Dentistry",
    "Veterinary Science",
    "Physics Engineering",
    "Civil Engineering",
    "Mechanical Engineering",
    "Electrical Engineering",
    "Chemical Engineering",
    "Computer Engineering",
    // Add more disciplines as needed
  ];

  const handleDegreeChange = (e) => {
    setSelectedDegree(e.target.value);
  };
  const [currentEducation, setCurrentEducation] = useState({
    school: "",
    degree: "",
    fieldOfStudy: "",
    startDate: "",
    endDate: "",
    grade: "",
    description: "",
    highestQualification: "",
    specialization: "",
    collegeName: "",
    graduatedYear: "",
    educationType: "",
  });
  const [highestEducationOptions] = useState([
    "High School",
    "Diploma",
    "Bachelor's Degree",
    "Master's Degree",
    "Ph.D.",
  ]);

  const degreeSpecializations = [
    "Civil Engineering",
    "Mechanical Engineering",
    "Electrical Engineering",
    "Aerospace Engineering",
    "Chemical Engineering",
    "Computer Engineering",
    "Environmental Engineering",
    "Software Engineering",
    "Artificial Intelligence",
    "Data Science",
    "Cybersecurity",
    "Information Systems",
    "Web Development",
    "Mobile App Development",
    "Nursing",
    "Medicine",
    "Pharmacy",
    "Public Health",
    "Physical Therapy",
    "Occupational Therapy",
    "Radiology",
    "Finance",
    "Marketing",
    "Human Resources",
    "International Business",
    "Entrepreneurship",
    "Operations Management",
    "Supply Chain Management",
    "Psychology",
    "Sociology",
    "Anthropology",
    "Political Science",
    "Economics",
    "International Relations",
    "Criminology",
    "Biology",
    "Chemistry",
    "Physics",
    "Environmental Science",
    "Geology",
    "Astronomy",
    "Mathematics",
    "English Literature",
    "History",
    "Philosophy",
    "Fine Arts",
    "Linguistics",
    "Cultural Studies",
    "Music",
    "Elementary Education",
    "Secondary Education",
    "Special Education",
    "Educational Leadership",
    "Curriculum and Instruction",
    "Counseling",
    "Journalism",
    "Public Relations",
    "Media Studies",
    "Advertising",
    "Broadcasting",
    "Digital Media",
    "Information Technology",
    "Network Administration",
    "Cybersecurity",
    "Cloud Computing",
    "Digital Forensics",
    "IT Management",
    "Graphic Design",
    "Industrial Design",
    "Interior Design",
    "Fashion Design",
    "UX/UI Design",
    "Game Design",
    "Agronomy",
    "Horticulture",
    "Forestry",
    "Soil Science",
    "Environmental Management",
    "Wildlife Biology",
  ];
  const handleEducationDetailsChange = (index, field, value) => {
    const updatedEducationDetails = [...educationDetails];
    updatedEducationDetails[index] = {
      ...updatedEducationDetails[index],
      [field]: value,
    };
    setEducationDetails(updatedEducationDetails);
  };
  const [educationDetails, setEducationDetails] = useState([
    {
      highestQualification: true,
      course: "",
      specialization: "",
      year: "",
      university: "",
    },
  ]);
        {/* property  */}

        const [propertyTypes, setPropertyTypes] = useState([]);
        const [commercialType, setCommercialType] = useState("");
        const [residentialType, setResidentialType] = useState("");
        const [bhkType, setBhkType] = useState("");
        const [furnishingOptions, setFurnishingOptions] = useState([]);
        const [saleDate, setSaleDate] = useState("");
        const [sellerName, setSellerName] = useState("");
        const [propertyLocation, setPropertyLocation] = useState("");
        const [saleAmount, setSaleAmount] = useState("");
        const [saleDetails, setSaleDetails] = useState([]);
        const [agriculturalType, setAgriculturalType] = useState("");
        const [industrialType, setIndustrialType] = useState("");
        const [propertyStatus, setPropertyStatus] = useState("");
        const [landSquarefit, setLandSquarefit] = useState("");
        const [propertyDescription, setPropertyDescription] = useState("");
      
      
        const handlePropertyTypeChange = (propertyType) => {
          // If the property type is commercial, unselect other types
          if (propertyType === 'commercial') {
            setCommercialType('');
            setResidentialType('');
            setBhkType('');
            setAgriculturalType('');
            setIndustrialType('');
          } else if (propertyType === 'house') {
            // If the property type is house, unselect other types
            setCommercialType('');
            setAgriculturalType('');
            setIndustrialType('');
          } else if (propertyType === 'agricultural') {
            // If the property type is agricultural, unselect other types
            setCommercialType('');
            setResidentialType('');
            setBhkType('');
            setIndustrialType('');
          } else if (propertyType === 'industrial') {
            // If the property type is industrial, unselect other types
            setCommercialType('');
            setResidentialType('');
            setBhkType('');
            setAgriculturalType('');
          }
      
          const updatedPropertyTypes = [propertyType];
          setPropertyTypes(updatedPropertyTypes);
        };
      
      
        const handleResidentialTypeChange = (event) => {
          setResidentialType(event.target.value);
        };
        const handlePropertyDescriptionChange = (event) => {
          setPropertyDescription(event.target.value);
        };
      
        const handleBhkTypeChange = (bhkType) => {
          setBhkType(bhkType);
        };
        const handleAgriculturalTypeChange = (e) => {
          setAgriculturalType(e.target.value);
        };
      
        const handleIndustrialTypeChange = (e) => {
          setIndustrialType(e.target.value);
        };
        const handleDeleteDetails = (index) => {
          const updatedSaleDetails = [...saleDetails];
          updatedSaleDetails.splice(index, 1);
          setSaleDetails(updatedSaleDetails);
        };
        const handleAddDetails = () => {
          const newSaleDetails = {
            propertyTypes,
            commercialType,
            residentialType,
            bhkType,
            furnishingOptions,
            saleDate,
            sellerName,
            propertyLocation,
            saleAmount,
            agriculturalType,
            industrialType,
            propertyStatus,
            landSquarefit,
          };
      
          setSaleDetails([newSaleDetails]);
          setPropertyTypes([]);
          setCommercialType("");
          setResidentialType("");
          setBhkType("");
          setFurnishingOptions([]);
          setSaleDate("");
          setSellerName("");
          setPropertyLocation("");
          setSaleAmount("");
          setAgriculturalType("");
          setIndustrialType("");
          setPropertyStatus("");
          setLandSquarefit("");
        };
      




  return (
    <div className="job">
      <div className="card mt-4">
        <div className="profile">
          <div className="pro-img text-center">
            <img
              src={bird}
              alt=""
              className="img-fluid"
              style={{
                width: "110px",
                borderRadius: "50%",
                boxShadow: "0px 4px 50px rgba(0, 0, 0, 0.09)",
              }}
            />
          </div>
          <h5 className=" text-center mt-2">
            Tovino Thomas
            <sup>
              <Button onClick={handleNameOpen}>
                <Link to="demo">
                  <i class="fi fi-rr-file-edit"></i>
                </Link>
              </Button>
            </sup>
          </h5>
        </div>
      </div>
      <div className="card mt-4">
        <div className="d-flex justify-content-between align-items-center">
          <h5>Contact Information</h5>
          <p>
            <Button onClick={handleOpen}>
              <i class="fi fi-rr-file-edit ms-2"></i>
            </Button>
            <Modal
              open={open}
              onClose={handleClose}
              aria-labelledby="modal-modal-title"
              aria-describedby="modal-modal-description"
            >
              <Box sx={style}></Box>
            </Modal>
          </p>
        </div>
        <div className="row">
          <div className="col-md-4">
            <p>
              Email : <span> Tovino@gmail.com </span>
            </p>
          </div>
          <div className="col-md-4">
            <p>
              Mobile No : <span>9988776655</span>
            </p>
          </div>
          <div className="col-md-4">
            <p>
              Address :{" "}
              <span>
                {" "}
                above Super Star Briyani, Ram Nagar South, Pallikaranai,
                Chennai, Tamil Nadu 600100
              </span>
            </p>
          </div>
        </div>
        <h6 className="mt-3">ID Proof</h6>
        <div className="row">
          <div className="col-md-3">
            <p className="mb-0">
              Aadhar Card : <span> 233411231342</span>
            </p>
          </div>
          <div className="col-md-2">
            <p className="mb-0">
              Issue : <span> 23-01-342</span>
            </p>
          </div>
          <div className="col-md-2">
            <p className="mb-0">
              Expire : <span> 23-01-342</span>
            </p>
          </div>
          <div className="col-md-2">
            <p className="mb-0">
              Country : <span> India</span>
            </p>
          </div>
          <div className="col-md-3">
            <p className="mb-0">
              Issuing Authority : <span> Samsung</span>
            </p>
          </div>
        </div>
      </div>
      <div className="card mt-4">
        <div className="d-flex justify-content-between align-items-center">
          <h5>Personal Details</h5>
          <p>
            <Button onClick={handlePersonalOpen}>
              <i class="fi fi-rr-file-edit ms-2"></i>
            </Button>
            <Modal
              open={personal}
              onClose={handlePersonalClose}
              aria-labelledby="modal-modal-title"
              aria-describedby="modal-modal-description"
            >
              <Box sx={style}></Box>
            </Modal>
          </p>
        </div>
        <div className="row">
          <div className="col-md-2">
            <p>
              DOB : <span> 21-01-22</span>
            </p>
          </div>
          <div className="col-md-2">
            <p>
              Age : <span> 21</span>
            </p>
          </div>
          <div className="col-md-2">
            <p>
              Gender : <span> Male</span>
            </p>
          </div>
          <div className="col-md-3">
            <p>
              Material Status : <span> Married</span>
            </p>
          </div>
          <div className="col-md-3">
            <p>
              Occupation : <span> VideoGraph</span>
            </p>
          </div>
        </div>
        <h6 className="mt-3">Disability Details</h6>
        <div className="row">
          <div className="col-md-2">
            <p>
              Disability : <span>yes</span>
            </p>
          </div>
          <div className="col-md-3">
            <p>
              Description : <span>ColorBlindness</span>
            </p>
          </div>
        </div>
        <h6 className="mt-3">Relationship Details</h6>
        <div className="row">
          <div className="col-md-3">
            <p className="mb-0">
              Name : <span> SaraTara</span>
            </p>
          </div>
          <div className="col-md-3">
            <p className="mb-0">
              Dob : <span> 21-01-68</span>
            </p>
          </div>
          <div className="col-md-3">
            <p className="mb-0">
              Relation : <span> Mother</span>
            </p>
          </div>
          <div className="col-md-3">
            <p className="mb-0">
              Age : <span> 55</span>
            </p>
          </div>
        </div>
      </div>
      {/* Educatiion */}

      <div className="card mt-4">
        <div className="d-flex justify-content-between align-items-center">
          <h5>Education</h5>
          <p>
            <Button onClick={handleEducationOpen}>
              <i class="fi fi-rr-file-edit ms-2"></i>
            </Button>
            <Modal
              open={Education}
              onClose={handleEducationClose}
              aria-labelledby="modal-modal-title"
              aria-describedby="modal-modal-description"
            >
              <Box sx={style}>
                <div className="row">
                  {educationDetails.map((education, index) => (
                    <div key={index}>
                      {education.highestQualification && (
                        <div>
                          <h2 className="labels mb-4">Education Details:</h2>
                          <div className="row pb-4">
                            <h2 className="labels px-3">College Details:</h2>
                            <div className="col-6">
                              <label className="form-label">
                                Select Course:
                              </label>
                              <select
                                className="form-control"
                                value={selectedDegree}
                                onChange={handleDegreeChange}
                              >
                                <option value="">Select Degree</option>
                                {allDegrees.map((degree, index) => (
                                  <option key={index} value={degree}>
                                    {degree}
                                  </option>
                                ))}
                              </select>
                            </div>
                            <div className="col-6">
                              <label className="form-label">
                                Select Specialization:
                              </label>
                              <select
                                className="form-control"
                                value={selectedSpecializations}
                                onChange={handleSpecializationsChange}
                              >
                                <option value="">Select Course</option>
                                {Specializations.map((course, index) => (
                                  <option key={index} value={course}>
                                    {course}
                                  </option>
                                ))}
                              </select>
                            </div>
                            <div className="col-6">
                              <label className="form-label">Start Year:</label>
                              <input
                                type="number"
                                className="form-control"
                                placeholder="start year"
                                value={education.collegeStartYear}
                                onChange={(e) =>
                                  handleEducationDetailsChange(
                                    index,
                                    "collegeStartYear",
                                    e.target.value
                                  )
                                }
                              />
                            </div>
                            <div className="col-6">
                              <label className="form-label">End Year:</label>
                              <input
                                type="number"
                                className="form-control"
                                placeholder="end year"
                                value={education.endYear}
                                onChange={(e) =>
                                  handleEducationDetailsChange(
                                    index,
                                    "endYear",
                                    e.target.value
                                  )
                                }
                              />
                            </div>
                            <div className="col-6">
                              <label className="form-label">
                                Select University:
                              </label>
                              <select
                                className="form-control"
                                value={selectedUniversity}
                                onChange={handleUniversityChange}
                              >
                                <option value="">Select University</option>
                                {allUniversities.map((university, index) => (
                                  <option key={index} value={university}>
                                    {university}
                                  </option>
                                ))}
                              </select>
                            </div>
                            <div className="col-6">
                              <label className="form-label">
                                Enter College Name:
                              </label>
                              <input
                                type="text"
                                className="form-control"
                                value={education.schoolName}
                                onChange={(e) =>
                                  handleEducationDetailsChange(
                                    index,
                                    "schoolName",
                                    e.target.value
                                  )
                                }
                              />
                            </div>
                          </div>

                          <div className="row">
                            <h2 className="labels px-3">School Details:</h2>
                            <div className="col-6">
                              <label className="form-label">
                                Qualification:
                              </label>
                              <select className="form-select">
                                <option value="">
                                  Select School Qualification
                                </option>
                                {schoolQualificationList.map(
                                  (qualification, index) => (
                                    <option key={index} value={qualification}>
                                      {qualification}
                                    </option>
                                  )
                                )}
                              </select>
                            </div>
                            <div className="col-6">
                              <label className="form-label">
                                Specialization:
                              </label>
                              <select className="form-select">
                                <option value="">Select Specialization</option>
                                {academicDisciplines.map(
                                  (discipline, index) => (
                                    <option key={index} value={discipline}>
                                      {discipline}
                                    </option>
                                  )
                                )}
                              </select>
                            </div>
                            <div className="col-6">
                              <label className="form-label">Start Year:</label>
                              <input
                                type="text"
                                className="form-control"
                                placeholder="Enter Start Year"
                                value={education.schoolStartYear}
                                onChange={(e) =>
                                  handleEducationDetailsChange(
                                    index,
                                    "schoolStartYear",
                                    e.target.value
                                  )
                                }
                              />
                            </div>
                            <div className="col-6">
                              <label className="form-label">End Year:</label>
                              <input
                                type="text"
                                className="form-control"
                                placeholder="Enter End Year"
                                value={education.endYear}
                                onChange={(e) =>
                                  handleEducationDetailsChange(
                                    index,
                                    "endYear",
                                    e.target.value
                                  )
                                }
                              />
                            </div>
                            <div className="col-6">
                              <label className="form-label">
                                Enter School Name:
                              </label>
                              <input
                                type="text"
                                className="form-control"
                                value={education.schoolName}
                                onChange={(e) =>
                                  handleEducationDetailsChange(
                                    index,
                                    "schoolName",
                                    e.target.value
                                  )
                                }
                              />
                            </div>
                            <div className="col-12 text-center">
                              <button type="button" class="btn btn-danger me-2">
                                Cancel
                              </button>
                              <button type="button" class="btn btn-primary">
                                Save
                              </button>
                            </div>
                          </div>
                        </div>
                      )}
                    </div>
                  ))}
                </div>
              </Box>
            </Modal>
          </p>
        </div>
        <div className="expand">
          <div className="row">
            <div className="col-md-6">
              <p>
                School -
                <span>
                  Lorem ipsum dolor sit amet consectetur. Lorem ipsum dolor sit
                  amet.
                </span>
              </p>
              <p>
                B.com Accounts - <span> 98%</span>
              </p>
              <p>
                <span>2018 - 2021</span>
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="card mt-4">
        <div className="d-flex justify-content-between align-items-center">
          <h5>Job Details</h5>
          <p>
            <Button onClick={handleJobOpen}>
              <i class="fi fi-rr-file-edit ms-2"></i>
            </Button>
            <Modal
              open={Job}
              onClose={handleJobClose}
              aria-labelledby="modal-modal-title"
              aria-describedby="modal-modal-description"
            >
              <Box sx={style}>
                <Typography id="modal-modal-description" sx={{ mt: 2 }}>
                  Job
                </Typography>
              </Box>
            </Modal>
          </p>
        </div>
        <div className="d-flex justify-content-between">
          <p>
            Are you a working Professional or Fresher : <span>Experience</span>
          </p>
          <p>
            Resume : <span> Shetal resume.pdf</span>
          </p>
        </div>
        <div className="row">
          <div className="col-md-4">
            <p>
              Designation : <span> WebDesigner</span>
            </p>
          </div>
          <div className="col-md-4">
            <p>
              Years : <span>1 years</span>
            </p>
          </div>
        </div>
        <p>
          Skills : <span> Html ,CSS ,Javascript , React , Figma .</span>
        </p>
        <p>
          Previous Company : <span> Sanjai rama IT park .</span>
        </p>
      </div>


      <div className="card mt-4">
        <div className="d-flex justify-content-between align-items-center">
          <h5>Home Appliance Details</h5>
          <p>
            <Button onClick={handleHomeOpen}>
              <i class="fi fi-rr-file-edit ms-2"></i>
            </Button>
            <Modal
              open={Home}
              onClose={handleHomeClose}
              aria-labelledby="modal-modal-title"
              aria-describedby="modal-modal-description"
            >
              <Box sx={style}>
                <div className="row">
                  <div className="col-6">

                  </div>
                </div>
              </Box>
            </Modal>
          </p>
        </div>
        <TableContainer component={Paper} sx={{ border: "none", boxShadow: 0 }}>
          <Table sx={{ border: "none" }} aria-label="simple table">
            <TableHead>
              <TableRow sx={{ backgroundColor: "#f4f4f4" }}>
                <TableCell
                  sx={{
                    border: "none",
                    borderRadius: "8px 0px 0px 8px",
                    width: "15%",
                  }}
                >
                  Appliance Type
                </TableCell>
                <TableCell sx={{ border: "none", width: "15%" }} align="left">
                  Brand
                </TableCell>
                <TableCell sx={{ border: "none", width: "15%" }} align="left">
                  Warranty
                </TableCell>
                <TableCell sx={{ border: "none", width: "15%" }} align="left">
                  Purchase Date
                </TableCell>
                <TableCell
                  sx={{
                    border: "none",
                    borderRadius: "0px 8px 8px 0px",
                    width: "50%",
                  }}
                  align="left"
                >
                  Description
                </TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {rows.map((row, index) => (
                <TableRow
                  key={row.name}
                  sx={{
                    "&:last-child td, &:last-child th": { border: "0" },
                    borderRadius: "10px",
                    backgroundColor: index % 2 === 0 ? "#ffffff" : "#f4f4f4",
                  }}
                >
                  <TableCell
                    component="th"
                    scope="row"
                    sx={{ border: "0", borderRadius: "8px 0px 0px 8px" }}
                  >
                    {row.name}
                  </TableCell>
                  <TableCell sx={{ border: "0" }} align="left">
                    {row.calories}
                  </TableCell>
                  <TableCell sx={{ border: "0" }} align="left">
                    {row.fat}
                  </TableCell>
                  <TableCell sx={{ border: "0" }} align="left">
                    {row.carbs}
                  </TableCell>
                  <TableCell
                    sx={{ border: "0", borderRadius: "0px 8px 8px 0px" }}
                    align="left"
                  >
                    {row.Description}
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </div>
      <div className="card mt-4">
        <div className="d-flex justify-content-between align-items-center">
          <h5>Vehicle Details</h5>
          <p>
            <Button onClick={handleVehicleOpen}>
              <i class="fi fi-rr-file-edit ms-2"></i>
            </Button>
            <Modal
              open={Vehicle}
              onClose={handleVehicleClose}
              aria-labelledby="modal-modal-title"
              aria-describedby="modal-modal-description"
            >
              <Box sx={style}>
                <Typography id="modal-modal-description" sx={{ mt: 2 }}>
                  Vehicle
                </Typography>
              </Box>
            </Modal>
          </p>
        </div>
        <TableContainer component={Paper} sx={{ border: "none", boxShadow: 0 }}>
          <Table sx={{ border: "none" }} aria-label="simple table">
            <TableHead>
              <TableRow>
                <TableCell sx={{ border: "0" }}>Model</TableCell>
                <TableCell sx={{ border: "0" }}>Type</TableCell>
                <TableCell sx={{ border: "0" }}>Vehicle NO</TableCell>
                <TableCell sx={{ border: "0" }}>Dealer/Agency</TableCell>
                <TableCell sx={{ border: "0" }}>Description</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {vehiclerows.map((row) => (
                <TableRow
                  key={row.name}
                  sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                >
                  <TableCell component="th" scope="row" sx={{ border: "0" }}>
                    {row.model}
                  </TableCell>
                  <TableCell sx={{ border: "0" }}>{row.type}</TableCell>
                  <TableCell sx={{ border: "0" }}>{row.vehicleNo}</TableCell>
                  <TableCell sx={{ border: "0" }}>{row.dealerAgency}</TableCell>
                  <TableCell sx={{ border: "0" }}>{row.description}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </div>
      <div className="card mt-4">
        <div className="d-flex justify-content-between align-items-center">
          <h5>Gadget Details</h5>
          <p>
            <Button onClick={handleGadgetOpen}>
              {" "}
              <i class="fi fi-rr-file-edit ms-2"></i>
            </Button>
            <Modal
              open={Gadget}
              onClose={handleGadgetClose}
              aria-labelledby="modal-modal-title"
              aria-describedby="modal-modal-description"
            >
              <Box sx={style}>
                <Typography id="modal-modal-description" sx={{ mt: 2 }}>
                  Gadget
                </Typography>
              </Box>
            </Modal>
          </p>
        </div>
        <TableContainer component={Paper} sx={{ border: "none", boxShadow: 0 }}>
          <Table sx={{ border: "none" }} aria-label="simple table">
            <TableHead>
              <TableRow sx={{ backgroundColor: "#f4f4f4" }}>
                <TableCell
                  sx={{
                    border: "none",
                    borderRadius: "8px 0px 0px 8px",
                    width: "15%",
                  }}
                >
                  Gadget
                </TableCell>
                <TableCell sx={{ border: "none", width: "15%" }} align="left">
                  Brand
                </TableCell>
                <TableCell sx={{ border: "none", width: "15%" }} align="left">
                  Warranty
                </TableCell>
                <TableCell sx={{ border: "none", width: "15%" }} align="left">
                  Purchase Date
                </TableCell>
                <TableCell
                  sx={{
                    border: "none",
                    borderRadius: "0px 8px 8px 0px",
                    width: "50%",
                  }}
                  align="left"
                >
                  Description
                </TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {gadgetrows.map((gadgetRow, index) => (
                <TableRow
                  key={index}
                  sx={{
                    "&:last-child td, &:last-child th": { border: "0" },
                    borderRadius: "10px",
                    backgroundColor: index % 2 === 0 ? "#ffffff" : "#f4f4f4",
                  }}
                >
                  <TableCell
                    component="th"
                    scope="gadgetrows"
                    sx={{ border: "0", borderRadius: "8px 0px 0px 8px" }}
                  >
                    {gadgetRow.gadget}
                  </TableCell>
                  <TableCell sx={{ border: "0" }} align="left">
                    {gadgetRow.brand}
                  </TableCell>
                  <TableCell sx={{ border: "0" }} align="left">
                    {gadgetRow.warranty}
                  </TableCell>
                  <TableCell sx={{ border: "0" }} align="left">
                    {gadgetRow.purchaseDate}
                  </TableCell>
                  <TableCell
                    sx={{ border: "0", borderRadius: "0px 8px 8px 0px" }}
                    align="left"
                  >
                    {gadgetRow.description}
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </div>
      <div className="card mt-4">
        <div className="d-flex justify-content-between align-items-center">
          <h5>Property Details</h5>
          <p>
            <Button onClick={handlePropertyOpen}>
              {" "}
              <i class="fi fi-rr-file-edit ms-2"></i>
            </Button>
            <Modal
              open={Property}
              onClose={handlePropertyClose}
              aria-labelledby="modal-modal-title"
              aria-describedby="modal-modal-description"
            >
              <Box sx={style}>
                <div className="row">
                <h2 className="labels mb-4">Property Details:</h2>

                <div className="col-6">
                  <label className="pb-2">Property Types:</label>
          <div>
            <input
              type="checkbox"
              value="commercial"
              checked={propertyTypes.includes("commercial")}
              onChange={() => handlePropertyTypeChange("commercial")}
            />
            <label className="px-2">Commercial</label>

            {propertyTypes.includes("commercial") && (
              <select
                className="form-control"
                value={commercialType}
                onChange={(e) => setCommercialType(e.target.value)}
              >
                <option value="">Select Commercial Type</option>
                <option value="hotel">Hotel</option>
                <option value="officeSpace">Office Space</option>
                <option value="warehouse">Warehouse</option>
                <option value="showroom">Showroom</option>
              </select>
            )}
          </div>
          <div>
            <input
              type="checkbox"
              value="house"
              checked={propertyTypes.includes("house")}
              onChange={() => handlePropertyTypeChange("house")}
            />
            <label className="px-2">Residential</label>
            {propertyTypes.includes("house") && (
              <div>
                <select
                  className="form-control"
                  value={residentialType}
                  onChange={handleResidentialTypeChange}
                >
                  <option value="">Select Residential Type</option>
                  <option value="villa">Villa</option>
                  <option value="independentHouse">Independent House</option>
                  <option value="residentialPlot">Residential Plot</option>
                  <option value="farmHouse">Farm House</option>
                  <option value="bungalow">Bungalow</option>
                  <option value="payingGuest">Paying Guest</option>
                  <option value="rowhouse">Rowhouse</option>
                </select>
              </div>
            )}
          </div>
          <div>
            <input
              type="checkbox"
              value="agricultural"
              checked={propertyTypes.includes("agricultural")}
              onChange={() => handlePropertyTypeChange("agricultural")}
            />
            <label className="px-2">Agricultural</label>
            {propertyTypes.includes("agricultural") && (
              <select
                className="form-control"
                value={agriculturalType}
                onChange={handleAgriculturalTypeChange}
              >
                <option value="">Select Agricultural Type</option>
                <option value="farmLand">Farm Land</option>
                <option value="plantation">Plantation</option>
                <option value="orchard">Orchard</option>
                <option value="agriculturalLand">Agricultural Land</option>
              </select>
            )}
          </div>
          <div>
            <input
              type="checkbox"
              value="industrial"
              checked={propertyTypes.includes("industrial")}
              onChange={() => handlePropertyTypeChange("industrial")}
            />
            <label className="px-2">Industrial</label>
            {propertyTypes.includes("industrial") && (
              <select
                className="form-control"
                value={industrialType}
                onChange={handleIndustrialTypeChange}
              >
                <option value="">Select Industrial Type</option>
                <option value="factory">Factory</option>
                <option value="warehouse">Warehouse</option>
                <option value="industrialLand">Industrial Land</option>
                <option value="manufacturingPlant">Manufacturing Plant</option>
              </select>
            )}

                  </div>
                </div>
                <div className="col-6">
                <label>BHK Type:</label>
          <select
            value={bhkType}
            onChange={(e) => handleBhkTypeChange(e.target.value)}
            className="form-control">
            <option value="">BHK</option>
            <option value="1bhk">1 BHK</option>
            <option value="2bhk">2 BHK</option>
            <option value="3bhk">3 BHK</option>
            <option value="4bhk">4 BHK</option>
            <option value="4+bhk">4+ BHK</option>
          </select>

                </div>
                <div className="col-6">
                <label>Property Description</label>
    <textarea
      className="form-control"
      type="text"
      value={propertyDescription}
      onChange={(e) => handlePropertyDescriptionChange(e)}
    />

                </div>
                <div className="col-6">
                <label>Property Location:</label>
          <input
            className="form-control"
            type="text"
            value={propertyLocation}
            onChange={(e) => setPropertyLocation(e.target.value)}
          />
                </div>
                <div className="col-6">
                <label>property status</label>
          <select
            className="form-control"
            value={propertyStatus}
            onChange={(e) => setPropertyStatus(e.target.value)}>
            <option value="">select status</option>
            <option value="rent">Rent</option>
            <option value="sale">Sale</option>
          </select>
                </div>
                <div className="col-6">
                <label>Land Squarefit</label>
          <input
            className="form-control"
            type="text"
            value={landSquarefit}
            onChange={(e) => setLandSquarefit(e.target.value)}
          />
                </div>
                <div className="col-12 text-center">
                              <button type="button" class="btn btn-danger me-2">
                                Cancel
                              </button>
                              <button type="button" class="btn btn-primary">
                                Save
                              </button>
                </div>
                </div>
              </Box>
            </Modal>
          </p>
        </div>
        <TableContainer component={Paper} sx={{ border: "none", boxShadow: 0 }}>
          <Table sx={{ border: "none" }} aria-label="simple table">
            <TableHead>
              <TableRow sx={{ backgroundColor: "#f4f4f4" }}>
                <TableCell
                  sx={{
                    border: "none",
                    borderRadius: "8px 0px 0px 8px",
                    width: "15%",
                  }}
                >
                  Type
                </TableCell>
                <TableCell sx={{ border: "none", width: "15%" }} align="left">
                  Availability
                </TableCell>
                <TableCell sx={{ border: "none", width: "15%" }} align="left">
                  House Types
                </TableCell>
                <TableCell sx={{ border: "none", width: "15%" }} align="left">
                  Land Sq.ft
                </TableCell>
                <TableCell sx={{ border: "none", width: "15%" }} align="left">
                  Location
                </TableCell>
                <TableCell
                  sx={{
                    border: "none",
                    borderRadius: "0px 8px 8px 0px",
                    width: "50%",
                  }}
                  align="left"
                >
                  Description
                </TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {propertys.map((row, index) => (
                <TableRow
                  key={row.type}
                  sx={{
                    "&:last-child td, &:last-child th": { border: "0" },
                    borderRadius: "10px",
                    backgroundColor: index % 2 === 0 ? "#ffffff" : "#f4f4f4",
                  }}
                >
                  <TableCell
                    component="th"
                    scope="row"
                    sx={{ border: "0", borderRadius: "8px 0px 0px 8px" }}
                  >
                    {row.type}
                  </TableCell>
                  <TableCell sx={{ border: "0" }} align="left">
                    {row.availability}
                  </TableCell>
                  <TableCell sx={{ border: "0" }} align="left">
                    {row.property}
                  </TableCell>
                  <TableCell sx={{ border: "0" }} align="left">
                    {row.location}
                  </TableCell>
                  <TableCell sx={{ border: "0" }} align="left">
                    {row.description}
                  </TableCell>
                  <TableCell
                    sx={{ border: "0", borderRadius: "0px 8px 8px 0px" }}
                    align="left"
                  >
                    {row.land}
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </div>
    </div>
  );
}

export default Job;
