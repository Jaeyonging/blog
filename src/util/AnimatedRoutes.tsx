import React from "react";
import { Routes, Route, useLocation } from "react-router-dom";
import { AnimatePresence, motion } from "framer-motion";
import { LocalRouteConfig } from "./LocalRouteConfig";
import ProtectedRoute from "./ProtectedRoute";

const AnimatedRoutes = () => {
  const location = useLocation();
  const hostname = window.location.hostname;

  const isAppRoute = hostname === "localhost";
  const showNavBar = isAppRoute && (
    location.pathname.startsWith("/kgeul") ||
    location.pathname == "/about" ||
    location.pathname.includes("/chart") ||
    location.pathname.startsWith("/mypage") ||
    location.pathname.startsWith("/topik") ||
    location.pathname.startsWith("/store")
  );

  return (
    <>
      <AnimatePresence mode="wait">
        <Routes location={location} key={location.pathname}>
          {/* Public Routes */}
          {LocalRouteConfig.public.map(({ path, element }) => (
            <Route
              key={path}
              path={path}
              element={
                <motion.div
                  initial={{ opacity: 0, }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.3 }}
                >
                  {element}
                </motion.div>
              }
            />
          ))}

          {/* Protected Routes */}
          {LocalRouteConfig.protected.map(({ path, element }) => (
            <Route
              key={path}
              path={path}
              element={
                <ProtectedRoute>
                  <motion.div
                    initial={{ opacity: 0, }}
                    animate={{ opacity: 1, }}
                    exit={{ opacity: 0, }}
                    transition={{ duration: 0.3 }}
                  >
                    {element}
                  </motion.div>
                </ProtectedRoute>
              }
            />
          ))}
        </Routes>
      </AnimatePresence>
      {/* {showNavBar && <AppNavBar />} */}
    </>
  );
};

export default AnimatedRoutes;
