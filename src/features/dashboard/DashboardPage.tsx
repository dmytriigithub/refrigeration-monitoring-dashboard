import { Box, Grid, Typography } from "@mui/material";
import StatCard from "../../components/common/StatCard";
import { mockEquipment } from "../../mocks/equipment";
import { calculateDashboardStats } from "./utils/dashboardStats";
import EquipmentStatusTable from "../../components/common/EquipmentStatusTable";

function DashboardPage() {
  const stats = calculateDashboardStats(mockEquipment);
  const statusPriority = {
    critical: 1,
    warning: 2,
    offline: 3,
    online: 4,
  };

  const sortedEquipment = [...mockEquipment].sort(
    (a, b) => statusPriority[a.status] - statusPriority[b.status],
  );

  return (
    <Box sx={{ p: 3 }}>
      <Typography
        variant="h5"
        sx={{
          mb: 3,
          fontWeight: 600,
        }}
      >
        Dashboard Overview
      </Typography>

      <Grid container spacing={2}>
        <Grid size={{ xs: 12, sm: 6, lg: 3 }}>
          <StatCard
            title="Total Equipment"
            value={stats.totalEquipment}
            subtitle="Registered devices"
          />
        </Grid>

        <Grid size={{ xs: 12, sm: 6, lg: 3 }}>
          <StatCard
            title="Online Equipment"
            value={stats.onlineEquipment}
            subtitle="Currently operational"
          />
        </Grid>

        <Grid size={{ xs: 12, sm: 6, lg: 3 }}>
          <StatCard
            title="Active Alerts"
            value={stats.activeAlerts}
            subtitle="Warning and critical"
          />
        </Grid>

        <Grid size={{ xs: 12, sm: 6, lg: 3 }}>
          <StatCard
            title="Average Temperature"
            value={
              stats.averageTemperature !== null
                ? `${stats.averageTemperature} °C`
                : "N/A"
            }
            subtitle="Average temperature across cold rooms"
          />
        </Grid>
      </Grid>
      <Box sx={{ mt: 4 }}>
        <Typography variant="h6" sx={{ mb: 2, fontWeight: 600 }}>
          Recent Equipment
        </Typography>

        <EquipmentStatusTable equipment={sortedEquipment.slice(0, 5)} />
      </Box>
    </Box>
  );
}

export default DashboardPage;
