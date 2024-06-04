import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus } from "@fortawesome/free-solid-svg-icons";

const PropertySaleForm = () => {
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
    <div>
      <div className="row my-4">
        <div className="labels col-12 col-md-2 px-3">
          Property Sale Details:
        </div>
      </div>

      <div className="row dmo_occupation">
        <div className="col-12 col-md-2 pb-2">
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
        <div className="col-12 col-md-1 pb-2">
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

        <div className="col-12 col-md-2 pb-2">
    <label>Property Description</label>
    <textarea
      className="form-control"
      type="text"
      value={propertyDescription}
      onChange={(e) => handlePropertyDescriptionChange(e)}
    />
        </div>

        <div className="col-12 col-md-2 pb-2">
          <label>Property Location:</label>
          <input
            className="form-control"
            type="text"
            value={propertyLocation}
            onChange={(e) => setPropertyLocation(e.target.value)}
          />
        </div>
        <div className="col-12 col-md-2 pb-2">
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

        <div className="col-12 col-md-2 pb-2">
          <label>Land Squarefit</label>
          <input
            className="form-control"
            type="text"
            value={landSquarefit}
            onChange={(e) => setLandSquarefit(e.target.value)}
          />
        </div>
        <div className="col-12 col-md-1 pb-2">
          <button
            className="btn btn-primary profile-button dmo_salebtn mt-4"
            type="button"
            onClick={handleAddDetails}>
            <FontAwesomeIcon icon={faPlus} />
          </button>
        </div>
      </div>
      {saleDetails.length > 0 && (
        <div className="col-12">
          <h2 className="labels pt-3">Added Property Sale Details</h2>
          {saleDetails.map((data, index) => (
            <div className="row" key={index}>
              <p className="col-12 col-md-2">
                Property Types: {data.propertyTypes.join(", ")}
              </p>
              {data.propertyTypes.includes("commercial") && (
                <p className="col-12 col-md-2">
                  Commercial Type: {data.commercialType}
                </p>
              )}
              {data.propertyTypes.includes("Residential") && (
                <>
                  <p className="col-12 col-md-2">
                    Residential Type: {data.residentialType}
                  </p>

                </>
              )}
               {data.propertyTypes.includes("Agricultural") && (
                <p className="col-12 col-md-2">
                  Agricultural Type: {data.agriculturalType}
                </p>
              )}
               {data.propertyTypes.includes("industrial") && (
                <p className="col-12 col-md-2">
                  industrial Type: {data.industrialType}
                </p>
              )}
                                                
               <p className="col-12 col-md-2">BHK Type: {data.bhkType}</p>

              <p className="col-12 col-md-2">
                Property Description: {data.propertyDescription}
              </p>
              <p className="col-12 col-md-2">
                Property Location: {data.propertyLocation}
              </p>
              <p className="col-12 col-md-2">
                Property Status: {data.propertyStatus}
              </p>
              <p className="col-12 col-md-2">
                Land Squarefit: {data.landSquarefit}
              </p>
              <div className="col-12 col-md-2">
                <button
                  className="btn btn-outline-primary"
                  onClick={() => handleDeleteDetails(index)}
                >
                  Delete
                </button>
              </div>
              <hr />
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default PropertySaleForm;
