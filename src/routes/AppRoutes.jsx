import React from "react";
import { Route, Routes } from "react-router-dom";
import RootLayout from "../components/layout/RootLayout";
import HomePage from "../pages/HomePage";
import AddTicketPage from "./../pages/AddTicketPage";
import ExportsPage from "../pages/ExportsPage";
import ArchivedTicketsPage from "../pages/ArchivedTicketsPage";
import TicketsReceivedPage from "../pages/TicketsReceivedPage";

function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<RootLayout />}>
        <Route path="/home" element={<HomePage />} />
        <Route path="/exports" element={<ExportsPage />} />
        <Route path="/tickets/archive" element={<ArchivedTicketsPage />} />
        <Route path="/tickets/receive" element={<TicketsReceivedPage />} />
        <Route path="/tickets/sent" element={<AddTicketPage />} />
        <Route path="/tickets/add" element={<AddTicketPage />} />
      </Route>
    </Routes>
  );
}

export default AppRoutes;
