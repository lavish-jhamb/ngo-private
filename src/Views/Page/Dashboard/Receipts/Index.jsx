import React from "react";
import "./Index.css";
import MenubarLayout from "../../../Layout/Menubar/Main";
import ReceiptCard from "../../../../Components/ReceiptCard/Index";
import {useNavigate} from "react-router-dom";
import { uris } from "../../../../Config/Router/URI";

const ManageReceipt = () => {
    const navigate = useNavigate();

    const createReceipt = () => {
        navigate(uris.createReceipt);
    };

    return (
        <>
            <MenubarLayout>
                <div className="manageRecContainer">
                    <div className="receiptSearchBox">
                        <h4 className="">Manage Receipts</h4>

                        <div className="searchReceipt">
                            <i className="fas fa-search searchIcon"></i>
                            <input type="text" placeholder="Search by name, phone"/>
                            <button className="filterIcon" id="button-addon2" type="button">
                                <i className="bx bx-filter-alt bx-md"></i>
                            </button>
                        </div>
                    </div>

                    <div className="cardReceipts">
                        <ReceiptCard shareBtn={true} cardFooter={true}/>
                    </div>

                    <div>
                        <button onClick={createReceipt} className="addBtn">
                            <i className="bx bx-plus bx-lg"></i>
                        </button>
                    </div>
                </div>
            </MenubarLayout>
        </>
    );
};

export default ManageReceipt;
