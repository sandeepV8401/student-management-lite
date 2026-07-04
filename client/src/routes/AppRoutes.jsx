import React from "react";
import { Navigate, Route, Routes } from "react-router-dom";
import MainLayout from "../layouts/MainLayout";
import AddStudent from "../pages/AddStudent";
import EditStudent from "../pages/EditStudent";
import Students from "../pages/Students";
import NotFound from "../pages/NotFound";
import Home from "../pages/Home";
import StudentDetails from "../pages/StudentDetails";

const AppRoutes = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Navigate to="/Home" replace />} />

        <Route element={<MainLayout />}>
          <Route path="/home" element={<Home />} />
          <Route path="/students" element={<Students />} />
          <Route path="/students/add" element={<AddStudent />} />
          <Route path="/students/edit/:id" element={<EditStudent />} />
          <Route path="/students/:id" element={<StudentDetails />} />
        </Route>

        <Route path="*" element={<NotFound />} />
      </Routes>
    </>
  );
};

export default AppRoutes;
