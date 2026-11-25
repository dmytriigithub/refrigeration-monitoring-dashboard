import { useState } from "react";
import {
  Box,
  Paper,
  Typography,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
  Chip,
} from "@mui/material";

import TemperatureChart from "./TemperatureChart";
import { useQuery } from "@tanstack/react-query";
import { getTemperatureReadings } from "../../services/api/temperatureApi";
import { getEquipment } from "../../services/api/equipmentApi";

type TemperatureStatus = "Normal" | "Warning" | "Critical";

function getTemperatureStatus(temperature: number | null): TemperatureStatus {
  if (temperature === null) return "Normal";

  if (temperature > -12) return "Critical";
  if (temperature > -15) return "Warning";

  return "Normal";
}

function MonitoringPage() {
  const [selectedEquipmentId, setSelectedEquipmentId] = useState("ROOM-003");

  const {
    data: readings = [],
    isLoading,
    isError,
  } = useQuery({
    queryKey: ["temperature-readings"],
    queryFn: getTemperatureReadings,
  });

  const {
    data: equipment = [],
    isLoading: isEquipmentLoading,
    isError: isEquipmentError,
  } = useQuery({
    queryKey: ["equipment"],
    queryFn: getEquipment,
  });

  const coldRooms = equipment.filter((item) => item.type === "cold-room");

  const selectedEquipment = coldRooms.find(
    (item) => item.id === selectedEquipmentId,
  );

  const selectedReadings = readings.filter(
    (reading) => reading.equipmentId === selectedEquipmentId,
  );

  const latestReading = selectedReadings[selectedReadings.length - 1];

  const currentStatus = getTemperatureStatus(
    latestReading?.temperature ?? null,
  );

  const statusColor = {
    Normal: "success",
    Warning: "warning",
    Critical: "error",
  } as const;

  if (isLoading || isEquipmentLoading) {
    return <Box sx={{ p: 3 }}>Loading monitoring data...</Box>;
  }

  if (isError || isEquipmentError) {
    return (
      <Box sx={{ p: 3 }}>
        <Typography color="error">
          Failed to load monitoring data. Please try again.
        </Typography>
      </Box>
    );
  }

  return (
    <Box sx={{ p: 3 }}>
      <Typography variant="h5" sx={{ mb: 1, fontWeight: 600 }}>
        Temperature Monitoring
      </Typography>

      <Typography color="text.secondary" sx={{ mb: 3 }}>
        Monitor temperature trends across refrigeration systems
      </Typography>

      <Paper
        elevation={0}
        sx={{
          p: 3,
          border: "1px solid",
          borderColor: "divider",
          borderRadius: 2,
        }}
      >
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            gap: 2,
            flexWrap: "wrap",
            mb: 3,
          }}
        >
          <Box>
            <Typography variant="h6" sx={{ fontWeight: 600, mb: 1 }}>
              {selectedEquipment?.name} — Temperature History
            </Typography>

            <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
              <Typography variant="body2" color="text.secondary">
                Current temperature:
              </Typography>

              <Typography variant="body2" sx={{ fontWeight: 600 }}>
                {latestReading
                  ? `${latestReading.temperature.toFixed(1)} °C`
                  : "No data"}
              </Typography>

              <Chip
                label={currentStatus}
                color={statusColor[currentStatus]}
                size="small"
              />
            </Box>
          </Box>

          <FormControl size="small" sx={{ minWidth: 220 }}>
            <InputLabel id="equipment-select-label">Equipment</InputLabel>

            <Select
              labelId="equipment-select-label"
              value={selectedEquipmentId}
              label="Equipment"
              onChange={(event) => setSelectedEquipmentId(event.target.value)}
            >
              {coldRooms.map((equipment) => (
                <MenuItem key={equipment.id} value={equipment.id}>
                  {equipment.name}
                </MenuItem>
              ))}
            </Select>
          </FormControl>
        </Box>

        <TemperatureChart readings={selectedReadings} />
      </Paper>
    </Box>
  );
}

export default MonitoringPage;
