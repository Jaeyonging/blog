import React from "react";
import { Routes, Route, useLocation, Navigate } from "react-router-dom";
import { AnimatePresence, motion } from "framer-motion";
import { LocalRouteConfig } from "./LocalRouteConfig";
import ProtectedRoute from "./ProtectedRoute";

const AnimatedRoutes = () => {
  const location = useLocation();
  return (
    <>
      <AnimatePresence mode="wait">
        <Routes location={location} key={location.pathname}>
          {/* Public Routes */}
          {LocalRouteConfig.public.map(({ path, component }) => (
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
                  {component}
                </motion.div>
              }
            />
          ))}

          {/* Protected Routes */}
          {LocalRouteConfig.protected.map(({ path, component }) => (
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
                    {component}
                  </motion.div>
                </ProtectedRoute>
              }
            />
          ))}
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
      </AnimatePresence>
    </>
  );
};

export default AnimatedRoutes;
