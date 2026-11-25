import { Box, Typography } from "@mui/material";

function DashboardPage() {
  return (
    <Box sx={{ p: 4 }}>
      <Typography variant="h4">Dashboard</Typography>

      <Typography sx={{ mt: 1 }} color="text.secondary">
        Refrigeration system overview
      </Typography>
    </Box>
  );
}

export default DashboardPage;
