import { useEffect, useState } from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import WelcomePage from "./Views/Page/Auth/Welcome/Index";
import router from "./Config/Router/Router";
import { ToastContainer} from "react-toastify";

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
    <>
    <Routes>
      <Route
        path="/"
        element={!flag ? <WelcomePage /> : <Navigate replace to="/login" />}
      />
      {router.map((route) => (
        <Route key={route.id} path={route.path} element={route.element} />
      ))}
    </Routes>
    <ToastContainer pauseOnFocusLoss={false} autoClose={3000} limit={3} />
    </>
  );
}

export default App;
