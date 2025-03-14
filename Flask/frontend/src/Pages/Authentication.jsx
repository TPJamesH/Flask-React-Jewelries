import React, { useEffect } from "react";
import Auth from "../component/Authentication-Component/Authenticate/Auth";
function Authentication() {
    return (
        <div className="min-h-screen flex items-center justify-center">
            <div className=" flex flex-col bg-white w-full  sm:p-10 gap-8 rounded-md container-fluid items-center">
                <div className="grid grid-cols-1 gap-5 w-1/2">
                    <Auth />
                </div>
            </div>
        </div>
    );
};

export default Authentication;