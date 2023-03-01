import PilotajesAdmin from "../pages/PilotajesAdmin";
import { BrowserRouter, Routes, Route,Link } from "react-router-dom";
function App() {
  //Push desde colaborador
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route
            path="/PilotajesAdmin"
            element={<PilotajesAdmin></PilotajesAdmin>}
          ></Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
