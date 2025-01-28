import { Routes, Route, BrowserRouter } from "react-router-dom";

import { allRoutes } from "./constants/routeConstants";
// import "./App.css";
// import ApiBasedInactivityCheck from "../src/providers/ApiBasedInactivityCheck";
// import Loader from "./common/components/Loader/Loader";
import PrivateRoutes from "./routing/PrivateRoutes";

const App = () => {
  return (
    <>
      <BrowserRouter>
        <Routes>
          {/* Protected Routes */}
          <Route element={<PrivateRoutes />}>
            {allRoutes.map(({ path, Component }, key) => {
              // console.log("From allroutes", path, Component)
              return <Route key={key} path={path} element={<Component />} />;
            })}
          </Route>

          {/* Public Route for Login */}
          <Route
            path="/login"
            element={
              <div
                style={{
                  height: "100vh",
                  backgroundColor: "#fff",
                  textAlign: "center",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                {/* <Loader /> */}
              </div>
            }
          />
        </Routes>
      </BrowserRouter>
      {/* Global Inactivity Check */}
      {/* <ApiBasedInactivityCheck /> */}
    </>
  );
};

export default App;