import { Box, Typography } from "@mui/material";

function AlertsPage() {
  return (
    <Box sx={{ p: 4 }}>
      <Typography variant="h4">Alerts & Events</Typography>

      <Typography sx={{ mt: 1 }} color="text.secondary">
        Monitor system alerts and equipment events
      </Typography>
    </Box>
  );
}

export default AlertsPage;
