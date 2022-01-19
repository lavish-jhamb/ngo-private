import { useEffect, useState } from "react";
import WelcomePage from "./Views/Page/Welcome/Index";
import LoginPage from "./Views/Page/Login/Index";
import OtpPage from "./Views/Page/OtpPage/Index";
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
        </Routes>
      </div>
    </div>
  );
}

export default App;