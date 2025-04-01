import React, { Suspense, useEffect, useState } from "react"
import { Routes, Route, Navigate, useLocation } from "react-router-dom"
import Authentication from "../Pages/Authentication"
import Home from "../Pages/Home"
import ProductPage from "../Pages/ProductPage"

const AppRouter = () => {
    const location = useLocation()
    const excludedRoutes = [] //will be updated later

    return (
        <><Suspense fallback={<Loader className="flex-grow p-4" speed="normal" content="Normal" />} />
            <Routes>
                <Route path="/home" element={<Home />} />
                <Route path="/product" element={<ProductPage />} />
            </Routes>
        </>
    )
}

export default AppRouter;