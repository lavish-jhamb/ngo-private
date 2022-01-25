import { useEffect, useState } from "react";
import WelcomePage from "./Views/Page/Auth/Welcome/Index";
import LoginPage from "./Views/Page/Auth/Login/Index";
import ProfileExit from "./Views/Page/Profile/Created/Index";
import OtpPage from "./Views/Page/Auth/OtpPage/Index";
import VolunteerProfile from "./Views/Page/Profile/Volunteer/Index";
import RegistrationType from "./Views/Page/Auth/RegistrationType/Index";
import { Routes, Route, Navigate } from "react-router-dom";
import NgoProfile from "./Views/Page/Profile/Ngo/Main";
import Menubar  from "./Views/Layout/Menubar/Index";
import ReceiptGenerated from "./Views/Page/Dashboard/Receipts/ReceiptGenerated/Index";
import ReceiptPreview from "./Views/Page/Dashboard/Receipts/ReceiptPreview/Index";
import NewDonor from "./Views/Page/Dashboard/Donors/CreateDonor/Index";
import Dashboard from "./Views/Page/Dashboard/Home/Index";
import ManageVolunteer from "./Views/Page/Dashboard/Volunteers/Index";
import ManageDonors from "./Views/Page/Dashboard/Donors/Index";
import NewVolunteer from "./Views/Page/Dashboard/Volunteers/CreateVolunteer/Index";
import ManageReceipt from "./Views/Page/Dashboard/Receipts/Index";
import CreateRecieptForm from "./Views/Page/Dashboard/Receipts/CreateReciept/Main";


function App() {
  const [flag, setFlag] = useState(false);

  useEffect(() => {
    const timerId = setTimeout(() => {
      setFlag(true);
    }, 3000);
    return () => {
      clearTimeout(timerId);
    };
  }, [flag]);

  return (
    <div className="routing">
      <Routes>
        <Route
          path="/"
          element={!flag ? <WelcomePage /> : <Navigate replace to="/login" />}
        />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/otp" element={<OtpPage />} />
        <Route path="/registrationType" element={<RegistrationType />} />
        <Route path="/NGOprofile" element={<NgoProfile />} />
        <Route path="/volunteer-profile" element={<VolunteerProfile />} />
        <Route path="/profile-exit" element={<ProfileExit />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/donors" element={<ManageDonors/>} />
        <Route path="/create-donor" element={<NewDonor />} />
        <Route path="/receipts" element={<ManageReceipt />} />
        <Route path="/create-receipt" element={<CreateRecieptForm />} />
        <Route path="/receipt-preview" element={<ReceiptPreview />} />
        <Route path="/receipt-generated" element={<ReceiptGenerated />} />
        <Route path="/volunteers" element={<ManageVolunteer />} />
        <Route path="/create-volunteer" element={<NewVolunteer />} />
        <Route
          path="*"
          element={
            <main>
              <h1
                style={{
                  paddingTop: "50vh",
                  textAlign: "center",
                }}
              >
                Coming soon
              </h1>
              <Menubar />
            </main>
          }
        />
      </Routes>
    </div>
  );
}

export default App;
