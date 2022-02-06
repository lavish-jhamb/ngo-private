import React from "react";
import MenubarLayout from "../../../Layout/Menubar/Main";
import ManageRecData from "../Receipts/ReceiptCard/ManageRecData";
import "./Index.css";
import {Link} from "react-router-dom";
import { useEffect } from "react";
import { volunteer } from "../../../../Api/Volunteer/Volunteer";


const ManageVolunteer = () => {
//     useEffect(()=>{
//   const getVolunteerData =async()=>{
//   const volunteerdata= await volunteer();
//   console.log(volunteerdata);

//   }
//   getVolunteerData();
//     },[])
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
                        <ManageRecData shareBtn={false} cardFooter={false}/>
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
