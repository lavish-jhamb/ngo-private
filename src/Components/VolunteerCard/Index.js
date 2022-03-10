import React from "react";
import "./Index.css";

const VolunteerCard = (props) => {
  const { data } = props;
  
  return (
    <div>
      <div className="cardContent">
        <div className="cardHeader">
          <div className="cardTitle">
            <h4>
              <div className="">{data?.name}</div>
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
              <i className="fas fa-phone-alt cardIcon"></i> {data?.mobile}
            </p>
            <p>
              <i className="fas fa-envelope cardIcon"></i> {data?.email}
            </p>
          </div>
        </div>
        {props.cardFooter && (
          <div className="cardFooter">
            <div>
              <h5>Rs. {data.Amount}</h5>
              <span className="categoryReceipt">For: {data?.donorInfo?.category}</span>
            </div>
            <div>
              <p>Receipt No. {data?.externalId.split('-')[0]}</p>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default VolunteerCard;