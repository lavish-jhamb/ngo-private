import { useEffect, useState } from "react";
import WelcomePage from "./Views/Page/Welcome/Index";
import LoginPage from "./Views/Page/Login/Index";
import OtpPage from "./Views/Page/OtpPage/Index";
import RegistrationType from "./Views/Page/RegistrationType/Index";
import { Routes, Route, Navigate } from "react-router-dom";
import NgoProfileOne from "./Views/Page/NGOProfile/Step1/Index";
import NgoProfileTwo from "./Views/Page/NGOProfile/Step2/Index";
import ManageReceipt from "./Views/Page/ManageReceipts/Index";
import { NavBar } from "./Views/Page/Menubar/Index";

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
        <Route path="/NGOProfile" element={<NgoProfileOne />} />
        <Route path="/receipts" element={<ManageReceipt />} />
        <Route path="/step2" element={<NgoProfileTwo />} />
        {/* <Route path="/profile/2" element={<NgoProfilePage2 />} /> */}
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
                {" "}
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
