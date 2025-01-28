import React from "react";
import { Outlet, useLocation } from "react-router-dom";
import Dashboard from "../pages/Dashboard/Dashboard";
import ButtonAppBar from "../common/components/Navbar/Navbar";
// import Header from "../common/components/Header/Header";
// import Footer from "../common/components/Footer/Footer";
// import Loader from "../common/components/Loader/Loader";
// import { useAuthorizationContext } from "../providers/AuthorizationHandler/AuthorizationHandler";

const PrivateRoutes = () => {
    //   const { isAuthenticated, user } = useAuthorizationContext();
    // const location = useLocation();
    // const isAuthenticated = true;
    // const user = true;
    console.log("From private routes")

    // Check if the user has access to the route
    // const hasAccess = user?.vtdms_functions?.some(role =>
    //     ROUTE_PRIVILEGE[role?.toLowerCase()]?.includes(location?.pathname)
    // );

    // if (!isAuthenticated || !user?.isLoaded) {
    //     console.log("fsgssytstut");
    //     return (
    //         <div
    //             style={{
    //                 height: "100vh",
    //                 backgroundColor: "#FFFFFF",
    //                 textAlign: "center",
    //                 display: "flex",
    //                 alignItems: "center",
    //                 justifyContent: "center",
    //             }}
    //         >
    //             {/* <Loader backgroundColor={"#FFFFFF"} /> */}
    //             <h1>Loading...</h1>
    //         </div>
    //     );
    // }

    return (
        <>
            {/* Header */}
            {/* <Header
                notificationCount={30}
                userName={user?.name || "User"}
                userEmail={user?.email || "user@example.com"}
            /> */}

            <ButtonAppBar />

            {/* Main Content */}
            <div className="main-content">
                <Outlet />
            </div>

            {/* Footer */}
            {/* <Footer /> */}
            <div>
                <h1>Footer</h1>
            </div>
        </>
    );
};

export default PrivateRoutes;