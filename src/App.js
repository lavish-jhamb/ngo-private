import { useEffect, useState } from "react";
import WelcomePage from "./Views/Page/Welcome/Index";
import LoginPage from "./Views/Page/Login/Index";

function App() {
  const [flag,setFlag] = useState(false);

  useEffect(() => {
    const timerId = setTimeout(() => {
      setFlag(true);
    }, 2000)
    return () => {
      clearTimeout(timerId);
    }
  }, [])
  
  return (
    <div className="App">
      {!flag && <WelcomePage/>}
      {flag && <LoginPage />}
    </div>
  );
}

export default App;