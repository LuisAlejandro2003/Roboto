import PilotajesAdmin from "../pages/PilotajesAdmin"
import { BrowserRouter , Routes , Route } from "react-router-dom";
function App() {

  return (
    <>
    <BrowserRouter>
    <Routes>
    <Route path="/PilotajesAdmin" element={<PilotajesAdmin></PilotajesAdmin>}></Route>
    </Routes>
    </BrowserRouter>
    </>
  )
}

export default App;
