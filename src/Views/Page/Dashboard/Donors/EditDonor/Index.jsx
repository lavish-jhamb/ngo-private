import React, { useState } from "react";
import "./Index.css";
import EditDonorCard from "./Card/Index";
import { useNavigate } from "react-router-dom";
import notify from "../../../../../Utils/notify";
import { donorsController } from "../../../../../Api/Donors/controller";
import { uris } from "../../../../../Config/Router/URI";

function EditDonorDetails({ updateDonor, isDisabled, data, dueDate }) {
  const [donor, setDonor] = useState(data);

  // console.log(donor);

  const navigate = useNavigate();

  const handleChange = (e) => {
    setDonor({ ...donor, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    updateDonorInfo();
  };

  const handleMoreDonations = () => {
    navigate(uris.receipts, {
      state: { donorName: donor?.name },
    });
  };

  // const handleCard = () => {
  //   navigate(uris.donorDetails, {
  //     state: { donor, dueDate },
  //   });
  // };

  const updateDonorInfo = () => {
    const id = donor?.externalId;
    donorsController
      .updateDonor(id, donor)
      .then((response) => {
        if (response.status === 200) {
          navigate("/dashboard/donors");
        } else {
          notify.error(response?.response?.data?.message);
        }
      })
      .catch((err) => {
        return err;
      });
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className="edit-donor-details-wrapper-1">
        <div className="edit-donor-details-container-1">
          <div className="edit-donor-header-1">
            <h2>Donor Details</h2>
          </div>
          <div className="edit-donor-details-1">
            <div className="edit-inputField">
              <input
                onChange={handleChange}
                disabled={isDisabled}
                autoComplete="off"
                placeholder="Name"
                type="text"
                value={donor.name || ""}
                name="name"
              />
            </div>
            <div className="edit-spinner">
              <input
                onChange={handleChange}
                disabled={isDisabled}
                autoComplete="off"
                placeholder="Phone number"
                type="number"
                value={donor.mobile || ""}
                name="mobile"
              />
            </div>
            <div className="edit-inputField">
              <input
                onChange={handleChange}
                disabled={isDisabled}
                autoComplete="off"
                placeholder="Email"
                type="text"
                value={donor.email || ""}
                name="email"
              />
            </div>
            <div className="edit-inputField">
              <input
                onChange={handleChange}
                disabled={isDisabled}
                autoComplete="off"
                placeholder="PAN No."
                type="text"
                value={donor.panNumber || ""}
                name="panNumber"
              />
            </div>
            <div className="edit-inputField">
              <input
                onChange={handleChange}
                disabled={isDisabled}
                placeholder="Date of Birth"
                type="text"
                value={donor.dateOfBirth || ""}
                name="dob"
              />
            </div>
            <div className="gender">
              <h2>Gender</h2>
              <div className="edit-radioButtons">
                <div className="edit-male">
                  <input
                    onChange={handleChange}
                    disabled={isDisabled}
                    type="radio"
                    name="gender"
                    value="Male"
                    defaultChecked={donor.gender === "Male"}
                  />
                  <label htmlFor="male">Male</label>
                </div>
                <div className="edit-female">
                  <input
                    onChange={handleChange}
                    disabled={isDisabled}
                    type="radio"
                    name="gender"
                    value="Female"
                    defaultChecked={donor.gender === "Female"}
                  />
                  <label htmlFor="female">Female</label>
                </div>
              </div>
            </div>
            <div className="edit-address-details">
              <h2>Address Details</h2>
              <div className="edit-inputField">
                <input
                  onChange={handleChange}
                  disabled={isDisabled}
                  autoComplete="off"
                  placeholder="Address"
                  type="text"
                  value={donor.address && donor.address}
                  name="address"
                />
              </div>
              <div className="edit-inputField">
                <input
                  onChange={handleChange}
                  disabled={isDisabled}
                  autoComplete="off"
                  placeholder="City"
                  type="text"
                  value={donor.city && donor.city}
                  name="city"
                />
              </div>
              <div className="edit-inputField">
                <input
                  onChange={handleChange}
                  disabled={isDisabled}
                  autoComplete="off"
                  type="number"
                  placeholder="Pincode"
                  value={donor.pinCode && donor.pinCode}
                  name="pinCode"
                />
              </div>
              <div className="edit-inputField">
                <input
                  onChange={handleChange}
                  disabled={isDisabled}
                  autoComplete="off"
                  placeholder="State"
                  type="text"
                  value={donor.state && donor.state}
                  name="state"
                />
              </div>
            </div>
          </div>

          <div className="edit-donorLastDonation">
            <h2>Last Donations</h2>
            {!updateDonor && <button type="button" onClick={handleMoreDonations}>
              Show more donations
            </button>}
          </div>

          <div className="edit-program-details">
            <div>
              <EditDonorCard
                category={donor?.lastDonation?.category}
                amount={donor?.lastDonation?.amount}
                dueMonth={donor?.dueFromMonth}
                dueYear={donor?.dueFromYear}
                dueDate={dueDate}
                updateDonor={updateDonor}
              />
            </div>

            {updateDonor && (
              <button type="submit" className="updateDonorBtn">
                Update Donor
              </button>
            )}
          </div>
        </div>
      </div>
    </form>
  );
}
export default EditDonorDetails;
