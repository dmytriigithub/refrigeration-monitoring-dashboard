import { Box, Typography } from "@mui/material";

function EquipmentPage() {
  return (
    <Box sx={{ p: 4 }}>
      <Typography variant="h4">Equipment</Typography>

      <Typography sx={{ mt: 1 }} color="text.secondary">
        Monitor and manage refrigeration equipment
      </Typography>
    </Box>
  );
}

export default EquipmentPage;
