import React from "react";
import receiptUsertData from "./UserDataReceipt.json";
import "./ManageRecData.css";

const ManageRecData = (props) => {
  return (
    <div>
      {receiptUsertData.map((data) => (
        <div className="card">
          <div className="card-body">
            <div className="innerBody">
              <h4 className="card-title pb-2">
                {/*  */}
                <div className="d-flex bd-highlight">
                  <div className="flex-grow-1 bd-highlight">{data.name}</div>
                  {props.shareBtn && (
                    <div className="bd-highlight">
                      <button className="menuBtn pe-2">
                        <i className="bx bxs-share-alt"></i>
                      </button>
                    </div>
                  )}
                  <div className="bd-highlight">
                    <button className="menuBtn">
                      <i className="bx bx-dots-vertical-rounded"></i>
                    </button>
                  </div>
                </div>
              </h4>
              <span className="card-textData">
                <p>
                  <i className="fas fa-phone-alt cardIcon pe-2"></i>{" "}
                  {data.phone}
                </p>
                <p>
                  <i className="fas fa-envelope cardIcon pe-2"></i> {data.email}
                </p>
              </span>
            </div>

            {props.cardFooter && (
              <div className="cardFooter">
                <div>
                  <h5>Rs. {data.price}</h5>
                  <span className="categoryReceipt">For: {data.category}</span>
                </div>
                <div>
                  <p>Invoice No. {data.receiptno}</p>
                </div>
              </div>
            )}
          </div>
        </div>
      ))}
    </div>
  );
};

export default ManageRecData;
