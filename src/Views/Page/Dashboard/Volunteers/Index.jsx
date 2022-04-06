import React, { useEffect, useState } from "react";
import MenubarLayout from "../../../Layout/Menubar/Main";
import VolunteerCard from "../../../../Components/ReceiptCard/Index";
import "./Index.css";
import { Link } from "react-router-dom";
import { volunteerController } from "../../../../Api/Volunteer/controller";
import Spinner from "../../../../Components/Spinner/Index";
import { dismissKeyboard } from "../../../../Utils/dismissKeyboard";

const ManageVolunteer = () => {
  const [volunteers, setVolunteers] = useState([]);
  const [loading, setLoading] = useState(true);

  const getNgoVolunteers = () => {
    volunteerController
      .getNgoVolunteers()
      .then((response) => {
        setVolunteers(response.data);
        setLoading(false);
      })
      .catch((error) => {
        setLoading(false);
        return error;
      });
  };

  const deleteNGOVolunteer = async (id) => {
    const response = await volunteerController.deleteNGOVolunteer(id);
    console.log(response);
    getNgoVolunteers();

    console.log("volunteers: ", volunteers);
  };

  useEffect(() => {
    getNgoVolunteers();
  }, []);

  return (
    <>
      <MenubarLayout>
        <div className="manageVolContainer">
          <div className="volunteerSearchBox">
            <h4 className="">Manage Volunteers</h4>

            <div className="searchReceiptVol">
              <i className="fas fa-search searchIconVol"></i>
              <input
                type="text"
                onKeyUp={dismissKeyboard}
                placeholder="Search by name, phone"
              />
            </div>
          </div>
          {loading ? (
            <Spinner />
          ) : (
            volunteers?.map((volunteer, index) => (
              <VolunteerCard
                key={index}
                data={volunteer}
                deleteNGOVolunteer={deleteNGOVolunteer}
                volunteer={true}
                shareBtn={false}
                cardFooter={false}
              />
            ))
          )}
          {volunteers?.length === 0 && !loading && (
            <p className="empty">Data not available</p>
          )}
        </div>

        <div>
          <Link to="/create-volunteer">
            {/* css for addbtn : refer css of Manage Reciept  */}
            <button className="addBtn">
              <i className="bx bx-plus bx-lg"></i>
            </button>
          </Link>
        </div>
      </MenubarLayout>
    </>
  );
};

export default ManageVolunteer;
