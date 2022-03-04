import React,{useState}from "react";
import MenubarLayout from "../../../Layout/Menubar/Main";
import VolunteerCard from "../../../../Components/VolunteerCard/Index";
import "./Index.css";
import {Link} from "react-router-dom";
import { useEffect } from "react";
import { volunteer } from "../../../../Api/Volunteer/Volunteer";
import { useNavigate } from "react-router-dom";
import { uris } from "../../../../Config/Router/URI";
import Spinner from "../../../../Components/Spinner/Index";


const ManageVolunteer = () => {
    const [data, setData] = useState([
        
    ]);
    const [loading, setLoading] = useState(true);
    
    const getVolunteer = async () => {
        try {
          const response = await volunteer.getVolunteer();
          
          const data = response?.data;
          setData(data);
          
          setLoading(false);
         
        } catch (error) {
            setLoading(false);
          return error;
        }
      };
     

      useEffect(() => {
        getVolunteer();
        return () => setLoading(false);
      }, []);

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
                    {loading && data?.length === 0 ? (
            <Spinner />
          ) : (
            data?.map((volunteer, idx) => (
                        <VolunteerCard
                        key={idx}
                        loading={loading}
                        data={volunteer}
                            
                            shareBtn={false} cardFooter={false}/>
                            ))
                            )}
                             {data?.length === 0 && !loading && (
            <p className="empty">Data not available</p>
          )}
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


