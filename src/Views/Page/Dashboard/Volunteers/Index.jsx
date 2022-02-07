import React ,{useEffect} from "react";
import MenubarLayout from "../../../Layout/Menubar/Main";
import VolunteerCard from "../../../../Components/ReceiptCard/Index";
import "./Index.css";
import {Link} from "react-router-dom";
import { getVolunteer } from "../../../../Api/Manage-volunteer/Create-volunteer";

const ManageVolunteer = () => {
    useEffect(()=>{
          const getVolunteerData =async()=>{
          const volunteerdata= await getVolunteer();
          console.log(volunteerdata);
        
          }
          getVolunteerData();
            },[])

    return (
        <>
            <MenubarLayout>
                <div className="manageVolContainer">
                    <div className="volunteerSearchBox">
                        <h4 className="">Manage Volunteers</h4>

                        <div className="searchReceiptVol">
                            <i className="fas fa-search searchIconVol"></i>
                            <input type="text" placeholder="Search by name, phone"/>
                        </div>
                    </div>
                    <div className="cardReceipts">
                        <VolunteerCard shareBtn={false} cardFooter={false}/>
                    </div>
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
