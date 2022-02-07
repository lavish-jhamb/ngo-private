import React from "react";
import receiptUsertData from "./UserDataReceipt.json";
import "./Index.css";
import { getVolunteer } from "../../Api/Manage-volunteer/Create-volunteer";

const Receipt = (props) => {
  return (
    <div>
      {receiptUsertData.map((data,idx) => (
        <div key={idx} className="cardContent">
          <div className="cardHeader">
            <div className="cardTitle">
              <h4>
                <div className="">{data.name}</div>
              </h4>
              <div>
                {props.shareBtn && (
                    <button className="menuBtn">
                      <i className="bx bxs-share-alt"></i>
                    </button>
                )}
                <button className="menuBtn">
                  <i className="bx bx-dots-vertical-rounded"></i>
                </button>
              </div>
            </div>
            <div className="cardData">
              <p>
                <i className="fas fa-phone-alt cardIcon"></i> {data.phone}
              </p>
              <p>
                <i className="fas fa-envelope cardIcon"></i> {data.email}
              </p>
            </div>
          </div>

          {props.cardFooter && (
            <div className="cardFooter">
              <div>
                <h5>Rs. {data.price}</h5>
                <span className="categoryReceipt">For: {data.category}</span>
              </div>
              <div>
                <p>Receipt No. {data.receiptno}</p>
              </div>
            </div>
          )}
        </div>
      ))}
    </div>
  );
};

export default Receipt;
