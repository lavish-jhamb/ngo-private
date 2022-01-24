import { useEffect, useState } from "react";
import WelcomePage from "./Views/Page/Welcome/Index";
import LoginPage from "./Views/Page/Login/Index";
import ProfileExit from "./Views/Page/ProfileExit/Index";
import OtpPage from "./Views/Page/OtpPage/Index";
import VolunteerProfile from "./Views/Page/VolunteerProfile/Index";
import RegistrationType from "./Views/Page/RegistrationType/Index";
import { Routes, Route, Navigate } from "react-router-dom";
import NgoProfile from "./Views/Page/NGOProfile/Main";
import { NavBar } from "./Views/Page/Menubar/Index";
import ReceiptGenerated from "./Views/Page/ReceiptGenerated/Index";
import ReceiptPreview from "./Views/Page/ReceiptPreview/Index";
import NewDonor from "./Views/Page/NewDonor/Index";
import Dashboard from "./Views/Page/Dashboard/Index";
import ManageVolunteer from "./Views/Page/ManageVolunteer/Index";
import ManageDonors from "./Views/Page/Donars/Index";
import NewVolunteer from "./Views/Page/NewVolunteer/Index";
import ManageReceipt from "./Views/Page/ManageReceipts/Index";
import CreateRecieptForm from "./Views/Page/CreateReciept/Main";


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
              <NavBar />
            </main>
          }
        />
      </Routes>
    </div>
  );
}

export default App;
