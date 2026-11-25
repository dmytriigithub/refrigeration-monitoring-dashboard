import { Box, Typography } from "@mui/material";

function MonitoringPage() {
  return (
    <Box sx={{ p: 4 }}>
      <Typography variant="h4">Temperature Monitoring</Typography>

      <Typography sx={{ mt: 1 }} color="text.secondary">
        Monitor temperature trends across refrigeration systems
      </Typography>
    </Box>
  );
}

export default MonitoringPage;
