import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus, faTrash } from "@fortawesome/free-solid-svg-icons";
import "./demo.css";

const Work = () => {
  const [selectedCurrentDistrict, setSelectedCurrentDistrict] = useState("");
  const [selectedSpecializations, setSelectedSpecializations] = useState("");
  const [selectedOpenToWorkDistrict, setSelectedOpenToWorkDistrict] =
    useState("");
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
    // // Undergraduate Degrees
    // "Associate's Degree",
    // "Bachelor's Degree",

    // // Graduate Degrees
    // "Master's Degree",
    // "Ph.D.",
    // "Doctor of Medicine (MD)",
    // "Doctor of Dental Medicine (DMD)",
    // "Doctor of Veterinary Medicine (DVM)",
    // "Doctor of Pharmacy (PharmD)",
    // "Juris Doctor (JD)",

    // // Engineering Degrees
    // "Bachelor of Science in Engineering (BSE)",
    // "Master of Science in Engineering (MSE)",
    // "Doctor of Engineering (DEng)",

    // // Computer Science Degrees
    // "Bachelor of Science in Computer Science (BSCS)",
    // "Master of Science in Computer Science (MSCS)",
    // "Doctor of Computer Science (DCS)",

    // // Business Degrees
    // "Bachelor of Business Administration (BBA)",
    // "Master of Business Administration (MBA)",
    // "Doctor of Business Administration (DBA)",

    // // Health Science Degrees
    // "Bachelor of Science in Nursing (BSN)",
    // "Master of Public Health (MPH)",
    // "Doctor of Medicine (MD)",
    // "Doctor of Dental Medicine (DMD)",
    // "Doctor of Pharmacy (PharmD)",

    // // Social Science Degrees
    // "Bachelor of Arts in Psychology (BAP)",
    // "Master of Arts in Sociology (MAS)",
    // "Doctor of Philosophy in Economics (PhD)",

    // // Natural Science Degrees
    // "Bachelor of Science in Biology (BS)",
    // "Master of Science in Chemistry (MS)",
    // "Doctor of Physics (PhD)",

    // // Humanities Degrees
    // "Bachelor of Arts in English (BA)",
    // "Master of Fine Arts in Creative Writing (MFA)",
    // "Doctor of Philosophy in Philosophy (PhD)",

    // // Education Degrees
    // "Bachelor of Education (BEd)",
    // "Master of Education (MEd)",
    // "Doctor of Education (EdD)",

    // // Media and Communication Degrees
    // "Bachelor of Arts in Journalism (BA)",
    // "Master of Arts in Communication (MA)",
    // "Doctor of Communication (DC)",

    // // Information Technology Degrees
    // "Bachelor of Science in Information Technology (BSIT)",
    // "Master of Science in Information Systems (MSIS)",
    // "Doctor of Information Technology (DIT)",

    // // Design Degrees
    // "Bachelor of Fine Arts in Graphic Design (BFA)",
    // "Master of Design (MDes)",
    // "Doctor of Design (DDes)",

    // // Agriculture and Environmental Science Degrees
    // "Bachelor of Science in Agriculture (BSA)",
    // "Master of Science in Environmental Science (MSES)",
    // "Doctor of Philosophy in Soil Science (PhD)",
  ];
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

  const handleUniversityChange = (e) => {
    setSelectedUniversity(e.target.value);
  };
  const handleCurrentDistrictChange = (event) => {
    setSelectedCurrentDistrict(event.target.value);
  };

  const handleDegreeChange = (e) => {
    setSelectedDegree(e.target.value);
  };

  const handleOpenToWorkDistrictChange = (event) => {
    setSelectedOpenToWorkDistrict(event.target.value);
  };
  const handleSpecializationsChange = (e) => {
    setSelectedSpecializations(e.target.value);
  };

  const [workExperience, setWorkExperience] = useState([
    {
      company: "",
      startDate: "",
      endDate: "",
      designation: "",
      employmentType: "",
      jobType: "",
      noticePeriod: "",
      payScale: "",
      skills: "",
      resume: null,
      photo: null,
      employmentStatus: "",
      selectedIndustries: [],
    },
  ]);
  const [educationDetails, setEducationDetails] = useState([
    {
      highestQualification: true,
      course: "",
      specialization: "",
      year: "",
      university: "",
    },
  ]);

  const handleEducationDetailsChange = (index, field, value) => {
    const updatedEducationDetails = [...educationDetails];
    updatedEducationDetails[index] = {
      ...updatedEducationDetails[index],
      [field]: value,
    };
    setEducationDetails(updatedEducationDetails);
  };

  const [commonFields, setCommonFields] = useState({
    yearsOfExperience: "",
    currentRole: "",
    skills: Array(1).fill({ name: "", level: "" }),
  });

  const [studentFields, setStudentFields] = useState({
    preferredJobs: "",
    preferredRole: "",
  });

  const handleCommonFieldChange = (field, value) => {
    setCommonFields((prev) => ({ ...prev, [field]: value }));
  };

  const handleSkillChange = (index, field, value) => {
    setCommonFields((prev) => {
      const updatedSkills = [...prev.skills];
      updatedSkills[index][field] = value;
      return { ...prev, skills: updatedSkills };
    });
  };

  const handleStudentFieldChange = (field, value) => {
    setStudentFields((prev) => ({ ...prev, [field]: value }));
  };

  const handleEmploymentStatusChange = (index, status) => {
    setWorkExperience((prev) => [
      ...prev.slice(0, index),
      { ...prev[index], employmentStatus: status },
      ...prev.slice(index + 1),
    ]);
  };

  const handleCareerBreakFieldsChange = (index, field, value) => {
    setWorkExperience((prev) => [
      ...prev.slice(0, index),
      {
        ...prev[index],
        [field]: value,
        startDate: {
          month:
            field === "startDate"
              ? value.month
              : prev[index]?.startDate?.month || "",
          year:
            field === "startDate"
              ? value.year
              : prev[index]?.startDate?.year || "",
        },
      },
      ...prev.slice(index + 1),
    ]);
  };

  const handleRemoveSkill = (index) => {
    setCommonFields((prev) => {
      const updatedSkills = [
        ...prev.skills.slice(0, index),
        ...prev.skills.slice(index + 1),
      ];
      return { ...prev, skills: updatedSkills };
    });
  };

  const handleAddSkill = () => {
    setCommonFields((prev) => {
      const updatedSkills = [...prev.skills, { name: "", level: "" }];
      return { ...prev, skills: updatedSkills };
    });
  };
  const handleResumeChange = (index, file) => {
    setWorkExperience((prev) => [
      ...prev.slice(0, index),
      { ...prev[index], resume: file },
      ...prev.slice(index + 1),
    ]);
  };

  const handleNoticePeriodChange = (index, value) => {
    setWorkExperience((prev) => [
      ...prev.slice(0, index),
      { ...prev[index], noticePeriod: value },
      ...prev.slice(index + 1),
    ]);
  };
  const handlePreviousCompaniesChange = (index, value) => {
    const updatedWorkExperience = [...workExperience];
    updatedWorkExperience[index].previousCompanies = value;
    setWorkExperience(updatedWorkExperience);
  };

  const handleSelectedIndustriesChange = (index, value) => {
    const updatedWorkExperience = [...workExperience];
    updatedWorkExperience[index].selectedIndustries = value;
    setWorkExperience(updatedWorkExperience);
  };
  const industries = [
    "Airlines/Aviation",
    "Advertising Agency",
    "Agriculture/Allied Industries",
    "Automobiles",
    "Autoparts",
    "Auto Fimnance",
    "Arms Dealer",
    "Accounting",
    "Alternative Dispute Resolution",
    "Alternative Medicine",
    "Animation",
    "Apparel & Fashion",
    "Architecture & Planning",
    "Arts and Crafts",
    "Automotive",
    "Aviation & Aerospace",
    "Banking/Financial Services",
    "Biotechnology",
    "Broadcast Media",
    "Building Materials",
    "Business Supplies and Equipment",
    "Capital Markets",
    "Call Centers/BPO",
    "Chemicals",
    "Chit Funds",
    "Cements/Paints",
    "Civic & Social Organization",
    "Civil Engineering",
    "Commercial Real Estate",
    "Computer & Network Security",
    "Computer Games",
    "Computer Hardware",
    "Computer Networking",
    "Computer Software",
    "Consultancy",
    "Construction",
    "Consumer Durables",
    "Consumer Electronics",
    "Consumer Goods",
    "Consumer Services",
    "Construction/Real Estate",
    "Courier/Cargo",
    "Cosmetics",
    "Dairy",
    "Defense & Space",
    "Design",
    "Engineering/Capital Goods",
    "Education Management",
    "E-learning",
    "Electronics",
    "Electrical & Electronic Manufacturing",
    "Entertainment",
    "Environmental Services",
    "Events Services",
    "Executive Office",
    "Fertilizers/Chemicals/Seeds",
    "Facilities Services",
    "Farming",
    "Financial Services",
    "Fine Art",
    "Fisheries/Poultry",
    "Forex Dealers/Bullion",
    "Food & Beverages",
    "Food Production",
    "Fundraising",
    "Furniture/Timber",
    "Gems/Jewellery",
    "Gambling & Casinos",
    "Glass, Ceramics & Concrete",
    "Government Bodies",
    "Government Administration",
    "Government Relations",
    "Graphic Design",
    "Health, Wellness & Fitness",
    "Higher Education",
    "Hostels/Restaurants",
    "Hospital & Health Care",
    "Hospitals/Clinics/Nursing Home",
    "Human Resources",
    "Import/Export",
    "Individual & Family Services",
    "Industrial Automation",
    "Infrastructure",
    "Information Services",
    "Information Technology & Services",
    "Insurance",
    "International Affairs",
    "International Trade and Development",
    "Internet",
    "Investment Banking",
    "Investment Management",
    "Judiciary",
    "Law Enforcement",
    "Law Practice",
    "Legal Services",
    "Legislative Office",
    "Leisure, Travel & Tourism",
    "Libraries",
    "Logistics & Supply Chain",
    "Luxury Goods & Jewelry",
    "Machinery",
    "Management Consulting",
    "Maritime",
    "Marbel/Granite",
    "Manufacturing",
    "Marketing & Advertising",
    "Market Research",
    "Mechanical or Industrial Engineering",
    "Media/Entertainment",
    "Media Production",
    "Medical Devices",
    "Medical Practice",
    "Mental/HealthCare",
    "Military",
    "Mining & Metals",
    "Motion Pictures & Film",
    "Money Lender",
    "Museums and Institutions",
    "Music",
    "Nanotechnology",
    "Newspapers",
    "Nonprofit Organization Management",
    "Oil & Energy",
    "Oil & Gas",
    "Online Media",
    "Outsourcing/Offshoring",
    "Pesticides",
    "Package/Freight Delivery",
    "Packaging and Containers",
    "Paper & Forest Products",
    "Performing Arts",
    "Petrol  Pumps",
    "Pharmaceuticals",
    "Philanthropy",
    "Photography",
    "Plastics",
    "Political Organization",
    "Primary/Secondary Education",
    "Printing/Publishing",
    "Professionals(Doctors,Lawyer,ENGG,Consulting,HR)",
    "Professional Training & Coaching",
    "Program Development",
    "Public Policy",
    "Public Relations and Communications",
    "Public Safety",
    "Publishing",
    "Railroad Manufacture",
    "Ranching",
    "Real Estate",
    "Recreational Facilities and Services",
    "Religious Institutions",
    "Renewables & Environment",
    "Research",
    "Restaurants",
    "Retail Chain/FMCG",
    "Science & Technology",
    "School/Colleges/Institutes",
    "Security and Investigations",
    "Semiconductors",
    "Shipbuilding",
    "Sporting Goods",
    "Sports",
    "Stocks & Shares",
    "Staffing and Recruiting",
    "Steel/Hardware",
    "Supermarkets",
    "Tech Startups",
    "Telecommunications",
    "Textiles/Garments",
    "Think Tanks",
    "Tobacco",
    "Translation and Localization",
    "Travel & Tourism",
    "Transportation & Logistics",
    "Utilities",
    "Venture Capital & Private Equity",
    "Veterinary",
    "Warehousing",
    "Wholesale",
    "Wine and Spirits",
    "Wireless",
    "Writing and Editing",
  ];

  const jobRoles = [
    "Accountant",
    "Administrative Assistant",
    "Architect",
    "Art Director",
    "Business Analyst",
    "Chef",
    "Civil Engineer",
    "Content Writer",
    "Customer Service Representative",
    "Data Scientist",
    "Dental Hygienist",
    "Digital Marketing Specialist",
    "Electrician",
    "Power/Electricity",
    "Event Planner",
    "Financial Analyst",
    "Graphic Designer",
    "Human Resources Manager",
    "Interior Designer",
    "IT Manager",
    "IT Services",
    "Journalist",
    "Legal Assistant",
    "Librarian",
    "Mechanical Engineer",
    "Nurse",
    "Operations Manager",
    "Pharmacist",
    "Photographer",
    "Physical Therapist",
    "Police Officer",
    "Project Manager",
    "Quality Assurance Analyst",
    "Real Estate Agent",
    "Research Scientist",
    "Software Engineer",
    "Teacher",
    "Translator",
    "Travel Agent",
    "UX/UI Designer",
    "Veterinarian",
    "Web Developer",
    "Writer",
  ];

  const months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];
  const startYear = 2000;
  const endYear = new Date().getFullYear();
  const years = Array.from(
    { length: endYear - startYear + 1 },
    (_, index) => startYear + index
  );
  const districts = [
    "Chennai",
    "Coimbatore",
    "Cuddalore",
    "Dharmapuri",
    "Dindigul",
    "Erode",
    "Kanchipuram",
    "Kanyakumari",
    "Karur",
    "Krishnagiri",
    "Madurai",
    "Nagapattinam",
    "Namakkal",
    "Nilgiris (Udhagamandalam)",
    "Perambalur",
    "Pudukkottai",
    "Ramanathapuram",
    "Salem",
    "Sivaganga",
    "Thanjavur",
    "Theni",
    "Thiruvallur",
    "Thiruvarur",
    "Thoothukudi (Tuticorin)",
    "Tiruchirappalli",
    "Tirunelveli",
    "Tiruppur",
    "Tiruvannamalai",
    "Vellore",
    "Viluppuram",
    "Virudhunagar",
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

  const handleJobTitleChange = (index, value) => {
    const updatedWorkExperience = [...workExperience];
    updatedWorkExperience[index].currentJobTitle = value;
    setWorkExperience(updatedWorkExperience);
  };

  const handleCurrentCompanyChange = (index, value) => {
    const updatedWorkExperience = [...workExperience];
    updatedWorkExperience[index].currentCompany = value;
    setWorkExperience(updatedWorkExperience);
  };
  return (
    <div>
      <div className="row my-4">
        <div className="labels col-12 col-md-2 px-3">Job Details:</div>
      </div>
      <div className="row my-4">
        <div className="labels col-12 col-md-4 px-3 pb-3">
          Are you a working Professional or Fresher?
        </div>
        <div>
          {workExperience.map((experience, index) => (
            <div key={index} className="row">
              <div className="col-12 col-md-4">
                <input
                  type="radio"
                  name={`employmentStatus${index}`}
                  checked={
                    experience.employmentStatus === "workingProfessional"
                  }
                  onChange={() =>
                    handleEmploymentStatusChange(index, "workingProfessional")
                  }
                />
                <label className="px-2">I am a working Professional</label>
              </div>
              <div className="col-12 col-md-4">
                <input
                  type="radio"
                  name={`employmentStatus${index}`}
                  checked={experience.employmentStatus === "student"}
                  onChange={() =>
                    handleEmploymentStatusChange(index, "student")
                  }
                />
                <label className="px-2">I am a student or fresher</label>
              </div>
              <div className="col-12 col-md-4">
                <input
                  type="radio"
                  name={`employmentStatus${index}`}
                  checked={experience.employmentStatus === "careerBreak"}
                  onChange={() =>
                    handleEmploymentStatusChange(index, "careerBreak")
                  }
                />
                <label className="px-2">I am on a Career break</label>
              </div>
            </div>
          ))}
        </div>
      </div>

      {workExperience.map((experience, index) => (
        <div key={index}>
          {experience.employmentStatus && (
            <div>
              {experience.employmentStatus === "workingProfessional" && (
                <div>
                  <div className="row">
                    <div className="col-md-4">
                      <div className="mb-3">
                        <label
                          htmlFor="yearsOfExperience"
                          className="form-label"
                        >
                          How many years of work experience do you have?
                        </label>
                        <input
                          type="number"
                          className="form-control"
                          id="yearsOfExperience"
                          value={commonFields.yearsOfExperience}
                          onChange={(e) =>
                            handleCommonFieldChange(
                              "yearsOfExperience",
                              e.target.value
                            )
                          }
                        />
                      </div>
                    </div>
                    <div className="col-md-4">
                      <div className="mb-3">
                        <label htmlFor="currentRole" className="form-label">
                          Select your current role
                        </label>
                        <select
                          className="form-select"
                          id="currentRole"
                          value={commonFields.currentRole}
                          onChange={(e) =>
                            handleCommonFieldChange(
                              "currentRole",
                              e.target.value
                            )
                          }
                        >
                          <option value="">Select Current Role</option>
                          {jobRoles.map((role, index) => (
                            <option key={index} value={role}>
                              {role}
                            </option>
                          ))}
                        </select>
                      </div>
                    </div>
                    <div className="col-md-4">
                      <div className="mb-3">
                        <label htmlFor="skills" className="form-label">
                          skills
                        </label>
                        {commonFields.skills.map((skill, index) => (
                          <div key={index} className="mb-2 row">
                            <div className="col-6">
                              <input
                                type="text"
                                className="form-control"
                                placeholder="Enter skill"
                                value={skill.name}
                                onChange={(e) =>
                                  handleSkillChange(
                                    index,
                                    "name",
                                    e.target.value
                                  )
                                }
                              />
                            </div>
                            <div className="col-6">
                              <select
                                className="form-select"
                                value={skill.level}
                                onChange={(e) =>
                                  handleSkillChange(
                                    index,
                                    "level",
                                    e.target.value
                                  )
                                }
                              >
                                <option value=""> Level</option>
                                <option value="beginner">Beginner</option>
                                <option value="intermediate">
                                  Intermediate
                                </option>
                                <option value="expert">Expert</option>
                              </select>
                            </div>

                            {index === commonFields.skills.length - 1 && (
                              <span className="px-3 py-2 delete-icon">
                                <FontAwesomeIcon
                                  icon={faPlus}
                                  onClick={handleAddSkill}
                                  className="cursor-pointer"
                                />
                                {commonFields.skills.length > 1 && (
                                  <FontAwesomeIcon
                                    icon={faTrash}
                                    onClick={() => handleRemoveSkill(index)}
                                    className="cursor-pointer ml-1"
                                  />
                                )}
                              </span>
                            )}
                          </div>
                        ))}
                      </div>
                    </div>
                    {/* <div className="col-md-4">
                      <div className="mb-3">
                        <label
                          htmlFor="yearsOfExperience"
                          className="form-label"
                        >
                          How many years of work experience do you have?
                        </label>
                        <input
                          type="text"
                          className="form-control"
                          id="yearsOfExperience"
                          value={commonFields.yearsOfExperience}
                          onChange={(e) =>
                            handleCommonFieldChange(
                              "yearsOfExperience",
                              e.target.value
                            )
                          }
                        />
                      </div>
                    </div> */}
                    <div className="col-md-4">
                      <div className="mb-3">
                        <label htmlFor="currentJobTitle" className="form-label">
                          What is your current job title and company
                        </label>
                        <input
                          type="text"
                          className="form-control"
                          id="currentJobTitle"
                          placeholder="e.g. Software Engineer"
                          value={experience.currentJobTitle}
                          onChange={(e) =>
                            handleJobTitleChange(index, e.target.value)
                          }
                        />
                        <input
                          type="text"
                          className="form-control"
                          id="currentCompany"
                          placeholder="e.g. Amazon"
                          value={experience.currentCompany}
                          onChange={(e) =>
                            handleCurrentCompanyChange(index, e.target.value)
                          }
                        />
                      </div>
                    </div>
                    <div className="col-md-4">
                      <div className="mb-3">
                        <label
                          htmlFor="previousCompanies"
                          className="form-label"
                        >
                          Which companies have you previously worked at?
                        </label>
                        <input
                          type="text"
                          className="form-control"
                          id="previousCompanies"
                          value={experience.previousCompanies}
                          onChange={(e) =>
                            handlePreviousCompaniesChange(index, e.target.value)
                          }
                        />
                      </div>
                    </div>
                    <div className="col-md-4">
                      <div className="mb-3">
                        <label
                          htmlFor="selectedIndustries"
                          className="form-label"
                        >
                          Select an industry your companies operate in
                        </label>
                        <select
                          className="form-select"
                          value={experience.selectedIndustries}
                          onChange={(e) =>
                            handleSelectedIndustriesChange(
                              index,
                              e.target.value
                            )
                          }
                        >
                          <option value="" disabled>
                            Select an industry
                          </option>
                          {industries.map((industry, idx) => (
                            <option key={idx} value={industry}>
                              {industry}
                            </option>
                          ))}
                        </select>
                      </div>
                    </div>
                  </div>
                </div>
              )}
              {experience.employmentStatus === "student" && (
                <div>
                  {/* <h2 className='labels'>Student Fields</h2> */}
                  <div className="row mb-4">
                    <div className="col-12 col-md-4">
                      <div className="mb-3">
                        <label className="form-label">
                          What kind of jobs are you looking for?
                        </label>
                        <div className="form-check">
                          <input
                            type="radio"
                            id="preferredJobsOption1"
                            className="form-check-input"
                            name="preferredJobs"
                            value="Option 1"
                            checked={studentFields.preferredJobs === "Option 1"}
                            onChange={() =>
                              handleStudentFieldChange(
                                "preferredJobs",
                                "Option 1"
                              )
                            }
                          />
                          <label
                            htmlFor="preferredJobsOption1"
                            className="form-check-label"
                          >
                            Both internships and full-time
                          </label>
                        </div>
                        <div className="form-check">
                          <input
                            type="radio"
                            id="preferredJobsOption2"
                            className="form-check-input"
                            name="preferredJobs"
                            value="Option 2"
                            checked={studentFields.preferredJobs === "Option 2"}
                            onChange={() =>
                              handleStudentFieldChange(
                                "preferredJobs",
                                "Option 2"
                              )
                            }
                          />
                          <label
                            htmlFor="preferredJobsOption2"
                            className="form-check-label"
                          >
                            Full-time only
                          </label>
                        </div>
                        <div className="form-check">
                          <input
                            type="radio"
                            id="preferredJobsOption3"
                            className="form-check-input"
                            name="preferredJobs"
                            value="Option 3"
                            checked={studentFields.preferredJobs === "Option 3"}
                            onChange={() =>
                              handleStudentFieldChange(
                                "preferredJobs",
                                "Option 3"
                              )
                            }
                          />
                          <label
                            htmlFor="preferredJobsOption3"
                            className="form-check-label"
                          >
                            Internships only
                          </label>
                        </div>
                      </div>
                    </div>

                    <div className=" col-12 col-md-4">
                      <div className="mb-3">
                        <label htmlFor="preferredRole" className="form-label">
                          Select your preferred role
                        </label>
                        <select
                          className="form-select"
                          id="preferredRole"
                          value={studentFields.preferredRole}
                          onChange={(e) =>
                            handleStudentFieldChange(
                              "preferredRole",
                              e.target.value
                            )
                          }
                        >
                          <option value="">Select Preferred Role</option>
                          {jobRoles.map((role, index) => (
                            <option key={index} value={role}>
                              {role}
                            </option>
                          ))}
                        </select>
                      </div>
                    </div>
                    <div className=" col-12 col-md-4">
                      <div className="mb-3">
                        <label htmlFor="skills" className="form-label">
                          skills
                        </label>
                        {commonFields.skills.map((skill, index) => (
                          <div key={index} className="mb-2 row">
                            <div className="col-6">
                              <input
                                type="text"
                                className="form-control"
                                placeholder="Enter skill"
                                value={skill.name}
                                onChange={(e) =>
                                  handleSkillChange(
                                    index,
                                    "name",
                                    e.target.value
                                  )
                                }
                              />
                            </div>
                            <div className="col-6">
                              <select
                                className="form-select"
                                value={skill.level}
                                onChange={(e) =>
                                  handleSkillChange(
                                    index,
                                    "level",
                                    e.target.value
                                  )
                                }
                              >
                                <option value=""> Level</option>
                                <option value="beginner">Beginner</option>
                                <option value="intermediate">
                                  Intermediate
                                </option>
                                <option value="expert">Expert</option>
                              </select>
                            </div>

                            {index === commonFields.skills.length - 1 && (
                              <span className="px-3 py-2 delete-icon">
                                <FontAwesomeIcon
                                  icon={faPlus}
                                  onClick={handleAddSkill}
                                  className="cursor-pointer"
                                />
                                {commonFields.skills.length > 1 && (
                                  <FontAwesomeIcon
                                    icon={faTrash}
                                    onClick={() => handleRemoveSkill(index)}
                                    className="cursor-pointer ml-1"
                                  />
                                )}
                              </span>
                            )}
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              )}
              {experience.employmentStatus === "careerBreak" && (
                <div>
                  <div className="row">
                    <div className="col-12 col-md-3">
                      <div className="mb-3">
                        <label
                          htmlFor={`startDate${index}`}
                          className="form-label"
                        >
                          Start Date of Career Break
                        </label>
                        <div className="row">
                          <div className="col-6">
                            <select
                              className="form-select"
                              id={`month${index}`}
                              value={experience.startDate.month}
                              onChange={(e) =>
                                handleCareerBreakFieldsChange(
                                  index,
                                  "startDate",
                                  {
                                    ...experience.startDate,
                                    month: e.target.value,
                                  }
                                )
                              }
                            >
                              <option value="">Month</option>
                              {months.map((month, i) => (
                                <option key={i} value={month}>
                                  {month}
                                </option>
                              ))}
                            </select>
                          </div>
                          <div className="col-6">
                            <select
                              className="form-select"
                              id={`year${index}`}
                              value={experience.startDate.year}
                              onChange={(e) =>
                                handleCareerBreakFieldsChange(
                                  index,
                                  "startDate",
                                  {
                                    ...experience.startDate,
                                    year: e.target.value,
                                  }
                                )
                              }
                            >
                              <option value="">Year</option>
                              {years.map((year, i) => (
                                <option key={i} value={year}>
                                  {year}
                                </option>
                              ))}
                            </select>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="col-12 col-md-3">
                      <div className="mb-3">
                        <label
                          htmlFor={`reason${index}`}
                          className="form-label"
                        >
                          Reason for Career Break
                        </label>
                        <textarea
                          className="form-control"
                          id={`reason${index}`}
                          value={experience.reasonForBreak}
                          onChange={(e) =>
                            handleCareerBreakFieldsChange(
                              index,
                              "reasonForBreak",
                              e.target.value
                            )
                          }
                        />
                      </div>
                    </div>
                    <div className="col-12 col-md-3">
                      <div className="mb-3">
                        <label htmlFor="preferredRole" className="form-label">
                          Select your preferred role
                        </label>
                        <select
                          className="form-select"
                          id="preferredRole"
                          value={studentFields.preferredRole}
                          onChange={(e) =>
                            handleStudentFieldChange(
                              "preferredRole",
                              e.target.value
                            )
                          }
                        >
                          <option value="">Select Preferred Role</option>
                          {jobRoles.map((role, index) => (
                            <option key={index} value={role}>
                              {role}
                            </option>
                          ))}
                        </select>
                      </div>
                    </div>
                    <div className="col-12 col-md-3">
                      <div className="mb-3">
                        <label htmlFor="skills" className="form-label">
                          skills
                        </label>
                        {commonFields.skills.map((skill, index) => (
                          <div key={index} className="mb-2 row">
                            <div className="col-6">
                              <input
                                type="text"
                                className="form-control"
                                placeholder="Enter skill"
                                value={skill.name}
                                onChange={(e) =>
                                  handleSkillChange(
                                    index,
                                    "name",
                                    e.target.value
                                  )
                                }
                              />
                            </div>
                            <div className="col-6">
                              <select
                                className="form-select"
                                value={skill.level}
                                onChange={(e) =>
                                  handleSkillChange(
                                    index,
                                    "level",
                                    e.target.value
                                  )
                                }
                              >
                                <option value=""> Level</option>
                                <option value="beginner">Beginner</option>
                                <option value="intermediate">
                                  Intermediate
                                </option>
                                <option value="expert">Expert</option>
                              </select>
                            </div>

                            {index === commonFields.skills.length - 1 && (
                              <span className="px-3 py-2 delete-icon cursor-color">
                                <FontAwesomeIcon
                                  icon={faPlus}
                                  onClick={handleAddSkill}
                                  className="cursor-pointer"
                                />
                                {commonFields.skills.length > 1 && (
                                  <FontAwesomeIcon
                                    icon={faTrash}
                                    onClick={() => handleRemoveSkill(index)}
                                    className="cursor-pointer ml-1 cursor-color"
                                  />
                                )}
                              </span>
                            )}
                          </div>
                        ))}
                      </div>
                    </div>
                    <div className="col-12 col-md-3">
                      <div className="mb-3">
                        <label
                          htmlFor="yearsOfExperience"
                          className="form-label"
                        >
                          How many years of work experience do you have?
                        </label>
                        <input
                          type="number"
                          className="form-control"
                          id="yearsOfExperience"
                          value={commonFields.yearsOfExperience}
                          onChange={(e) =>
                            handleCommonFieldChange(
                              "yearsOfExperience",
                              e.target.value
                            )
                          }
                        />
                      </div>
                    </div>
                  </div>
                </div>
              )}
            </div>
          )}
        </div>
      ))}

      {workExperience.map((experience, index) => (
        <div className="mb-4" key={index}>
          {experience.employmentStatus && (
            <div>
              <h2 className="labels">Job Preferences:</h2>
              <div className="row">
                <div className="col-12 col-md-3 pb-3">
                  <label className="form-label">
                    Where are you currently located?
                  </label>
                  <select
                    className="form-control"
                    value={selectedCurrentDistrict}
                    onChange={handleCurrentDistrictChange}
                  >
                    <option value="">Select District</option>
                    {districts.map((district, index) => (
                      <option key={index} value={district}>
                        {district}
                      </option>
                    ))}
                  </select>
                </div>

                <div className="col-12 col-md-3 pb-3">
                  <label className="form-label">
                    Where are you open to working?
                  </label>
                  <select
                    className="form-control"
                    value={selectedOpenToWorkDistrict}
                    onChange={handleOpenToWorkDistrictChange}
                  >
                    <option value="">Select District</option>
                    {districts.map((district, index) => (
                      <option key={index} value={district}>
                        {district}
                      </option>
                    ))}
                  </select>
                </div>
                <div className="col-12 col-md-4 pb-3">
                  <label className="form-label">
                    What is the minimum salary you will Expectation?
                  </label>
                  <div className="job_salary">
                    <span className="job_rs">RS.</span>
                    <input
                      type="number"
                      className="form-control text-center"
                      placeholder="eg.12.5"
                    ></input>
                    <span className="job_lpa">LPA</span>
                  </div>
                </div>
                <div className="col-12 col-md-4 pb-3">
                  <label className="form-label">
                    When can you join the company if selected?
                  </label>
                  <select
                    className="form-select"
                    id={`noticePeriod${index}`}
                    value={experience.noticePeriod}
                    onChange={(e) =>
                      handleNoticePeriodChange(index, e.target.value)
                    }
                  >
                    <option value="">Select Notice Period</option>
                    <option value="immediately">Immediately</option>
                    <option value="15days">15 Days</option>
                    <option value="1month">1 Month</option>
                    <option value="2months">2 Months</option>
                    <option value="3months">3+ Months</option>
                  </select>
                </div>
                <div className="col-12 col-md-3 pb-2">
                  <label className="form-label">Resume</label>
                  <div>
                    <input
                      type="file"
                      className="form-control"
                      onChange={(e) =>
                        handleResumeChange(index, e.target.files[0])
                      }
                    />
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      ))}

      {educationDetails.map((education, index) => (
        <div key={index}>
          {education.highestQualification && (
            <div>
              <h2 className="labels mb-4">Education Details:</h2>
              <div className="row pb-4">
                <h2 className="labels px-3">College Details:</h2>
                <div className="col-12 col-md-2 pb-2">
                  <label className="form-label">Select Course:</label>
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
                <div className="col-12 col-md-2 pb-2">
                  <label className="form-label">Select Specialization:</label>
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
                <div className="col-12 col-md-2 pb-2">
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
                  {/* <select
                    className="form-control"
                    value={education.graduatedYearyears}
                    onChange={(e) =>
                      handleEducationDetailsChange(
                        index,
                        "year",
                        e.target.value
                      )
                    }
                  >
                    <option value="">Select Year</option>
                    {years.map((graduatedYearyears, yearIndex) => (
                      <option key={yearIndex} value={graduatedYearyears}>
                        {graduatedYearyears}
                      </option>
                    ))}
                  </select> */}
                </div>
                <div className="col-12 col-md-2 pb-2">
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
                <div className="col-12 col-md-2 pb-2">
                  <label className="form-label">Select University:</label>
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
                <div className="col-12 col-md-2 pb-2">
                  <label className="form-label">Enter College Name:</label>
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
                <div className="col-12 col-md-2 pb-2">
                  <label className="form-label">Qualification:</label>
                  <select className="form-select">
                    <option value="">Select School Qualification</option>
                    {schoolQualificationList.map((qualification, index) => (
                      <option key={index} value={qualification}>
                        {qualification}
                      </option>
                    ))}
                  </select>
                </div>
                <div className="col-12 col-md-2 pb-2">
                  <label className="form-label">Specialization:</label>
                  <select className="form-select">
                    <option value="">Select Specialization</option>
                    {academicDisciplines.map((discipline, index) => (
                      <option key={index} value={discipline}>
                        {discipline}
                      </option>
                    ))}
                  </select>
                </div>
                <div className="col-12 col-md-2 pb-2">
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
                <div className="col-12 col-md-2 pb-2">
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
                <div className="col-12 col-md-2 pb-2">
                  <label className="form-label">Enter School Name:</label>
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
            </div>
          )}
        </div>
      ))}

      {workExperience.length > 1 && (
        <div className="container mt-3" key={workExperience.length - 1}>
          <h2 className="labels">Work Experience</h2>
          {workExperience.map((exp, idx) => (
            <div className="row" key={idx}>
              <p className="col-12 col-md-2">company: {exp.company}</p>
              <p className="col-12 col-md-2">startDate: {exp.startDate}</p>
              <p className="col-12 col-md-2">endDate: {exp.endDate}</p>
              <p className="col-12 col-md-2">designation: {exp.designation}</p>
              <p className="col-12 col-md-2">
                employmentType: {exp.employmentType}
              </p>
              <p className="col-12 col-md-2">jobType: {exp.jobType}</p>
              <p className="col-12 col-md-2">
                noticePeriod: {exp.noticePeriod}
              </p>
              <p className="col-12 col-md-2">payScale: {exp.payScale}</p>
              <p className="col-12 col-md-2">skills: {exp.skills}</p>
              <hr />
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Work;
