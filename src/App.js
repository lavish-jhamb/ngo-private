import Donars from "./Views/Page/Donars/Index";
import MenuBar from "./Views/Page/Menubar/Index";
import Navbar from "./Views/Page/Navbar/Index";

function App() {
  return (
    <div style={{width:"90vw",margin:"0 auto",maxWidth:"480px"}} className="App">
      <Navbar/>
      <Donars/>
      <MenuBar/>
    </div>
  );
}

export default App;
