import { useEffect, useState } from "react";
import WelcomePage from "./Views/Page/Welcome/Index";
import LoginPage from "./Views/Page/Login/Index";
import ProfileExit from "./Views/Page/ProfileExit/Index";
import OtpPage from "./Views/Page/OtpPage/Index";
import VolunteerProfile from "./Views/Page/VolunteerProfile/Index";
import RegistrationType from "./Views/Page/RegistrationType/Index";
import { Routes, Route } from "react-router-dom";


function App() {
  const [flag, setFlag] = useState(false);

  useEffect(() => {
    const timerId = setTimeout(() => {
      setFlag(true);
    }, 3000)
    return () => {
      clearTimeout(timerId);
    }
  }, [flag])

  return (
    <div className="App">
      {!flag && <WelcomePage />}
      {/* {flag && <LoginPage />} */}
      {/* <LoginPage /> */}
      <div className="routing">
        <Routes>
          <Route path="/" element={<LoginPage />} />
          <Route path="/otp" element={<OtpPage />} />
          <Route path="/registrationType" element={<RegistrationType />} />
          <Route path="/volunteerProfile" element={<VolunteerProfile />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/profileExit" element={<ProfileExit />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;