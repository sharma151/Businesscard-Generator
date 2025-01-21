import Homepage from "./Pages/Homepage";
import { UserDataProvider } from "./Context/userdatacontext";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Layout from "./Layout";
import Businesscard from "./Pages/Businesscard";
import Qrcode from "./Pages/Qrcode";
import Barcode from "./Pages/Barcode";

const App = () => {
  return (
    <>
      <UserDataProvider>
        <Router>
          <Routes>
            <Route element={<Layout />}>
              <Route path="/" element={<Homepage />} />
              <Route path="/Qrcode" element={<Qrcode />} />
              <Route path="/Barcode" element={<Barcode />} />

              <Route path="/BusinessCard" element={<Businesscard />} />
            </Route>
          </Routes>
        </Router>
      </UserDataProvider>
    </>
  );
};

export default App;
