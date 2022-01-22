import { useEffect, useState } from "react";
import WelcomePage from "./Views/Page/Welcome/Index";
import LoginPage from "./Views/Page/Login/Index";
import ProfileExit from "./Views/Page/ProfileExit/Index";
import OtpPage from "./Views/Page/OtpPage/Index";
import VolunteerProfile from "./Views/Page/VolunteerProfile/Index";
import RegistrationType from "./Views/Page/RegistrationType/Index";
import { Routes, Route, Navigate } from "react-router-dom";
import NgoProfile from "./Views/Page/NGOProfile/Main";
import ManageReceipt from "./Views/Page/ManageReceipts/Index";
import { NavBar } from "./Views/Page/Menubar/Index";
import NewDonor from "./Views/Page/NewDonor/Index";
import Dashboard from "./Views/Page/Dashboard/Index";
// import ManageVolunteer from "./Views/Page/ManageVolunteer/Index";
// import NewVolunteer from "./Views/Page/NewVolunteer/Index";


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
        <Route path="/receipts" element={<ManageReceipt />} />
        <Route path="/NGOprofile" element={<NgoProfile />} />
        <Route path="/volunteer-profile" element={<VolunteerProfile />} />
        <Route path="/donor-new" element={<NewDonor />} />
        <Route path="/profile-exit" element={<ProfileExit />} />
        <Route path="dashboard" element={<Dashboard />} />
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
                There's nothing here!
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
