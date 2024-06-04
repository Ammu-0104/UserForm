import React, { useRef } from "react";
import profileImg from "../profile/hrmsprofile.jpg";
import Navtab from "../hrms/navtab";
import "../comp/form.css";

const Profile = () => {
  const fileInputRef = useRef(null);

  const handleImageClick = () => {
    fileInputRef.current.click();
  };

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    console.log("Selected file:", file);
  };

  return (
    <div className="main_container">
    <div></div>
      <div className="container bg-white">
        <div className="logo_container">
          <div className="row py-4 text-center">
            <div className="logo_subCont col-12">
              <img
                onClick={handleImageClick}
                src={profileImg}
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
                Click here to upload Company Logo
              </label>
            </div>
          </div>
        </div>
        <Navtab />
      </div>
    </div>
  );
};

export default Profile;
