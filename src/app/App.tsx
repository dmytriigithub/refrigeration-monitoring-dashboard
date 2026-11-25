import { BrowserRouter, Routes, Route } from "react-router-dom";

import AppLayout from "../components/layout/AppLayout";
import DashboardPage from "../features/dashboard/DashboardPage";
import EquipmentPage from "../features/equipment/EquipmentPage";
import AlertsPage from "../features/alerts/AlertsPage";
import MonitoringPage from "../features/monitoring/MonitoringPage";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<AppLayout />}>
          <Route index element={<DashboardPage />} />
          <Route path="equipment" element={<EquipmentPage />} />
          <Route path="alerts" element={<AlertsPage />} />
          <Route path="monitoring" element={<MonitoringPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
