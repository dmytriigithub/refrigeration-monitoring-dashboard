import { Box, Typography } from "@mui/material";
import EquipmentStatusTable from "../../components/common/EquipmentStatusTable";
import { mockEquipment } from "../../mocks/equipment";
import { useState } from "react";
import {
  TextField,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
} from "@mui/material";

import type { EquipmentStatus, EquipmentType } from "./types";

function EquipmentPage() {
  const [searchQuery, setSearchQuery] = useState("");
  const [statusFilter, setStatusFilter] = useState<EquipmentStatus | "all">(
    "all",
  );
  const [typeFilter, setTypeFilter] = useState<EquipmentType | "all">("all");

  const filteredEquipment = mockEquipment.filter((item) => {
    const query = searchQuery.toLowerCase();

    const matchesSearch =
      item.name.toLowerCase().includes(query) ||
      item.id.toLowerCase().includes(query) ||
      item.location.toLowerCase().includes(query);

    const matchesStatus =
      statusFilter === "all" || item.status === statusFilter;

    const matchesType = typeFilter === "all" || item.type === typeFilter;

    return matchesSearch && matchesStatus && matchesType;
  });

  return (
    <Box sx={{ p: 3 }}>
      <TextField
        fullWidth
        size="small"
        placeholder="Search by name, ID or location..."
        value={searchQuery}
        onChange={(event) => setSearchQuery(event.target.value)}
        sx={{ mb: 3, maxWidth: 450 }}
      />
      <FormControl size="small" sx={{ minWidth: 200, mb: 3, mr: 2 }}>
        <InputLabel id="status-filter-label">Status</InputLabel>

        <Select
          labelId="status-filter-label"
          value={statusFilter}
          label="Status"
          onChange={(event) =>
            setStatusFilter(event.target.value as EquipmentStatus | "all")
          }
        >
          <MenuItem value="all">All Statuses</MenuItem>
          <MenuItem value="online">Online</MenuItem>
          <MenuItem value="warning">Warning</MenuItem>
          <MenuItem value="critical">Critical</MenuItem>
          <MenuItem value="offline">Offline</MenuItem>
        </Select>
      </FormControl>
      <FormControl size="small" sx={{ minWidth: 200, mb: 3 }}>
        <InputLabel id="type-filter-label">Equipment Type</InputLabel>

        <Select
          labelId="type-filter-label"
          value={typeFilter}
          label="Equipment Type"
          onChange={(event) =>
            setTypeFilter(event.target.value as EquipmentType | "all")
          }
        >
          <MenuItem value="all">All Types</MenuItem>
          <MenuItem value="compressor">Compressor</MenuItem>
          <MenuItem value="evaporator">Evaporator</MenuItem>
          <MenuItem value="condenser">Condenser</MenuItem>
          <MenuItem value="cold-room">Cold Room</MenuItem>
        </Select>
      </FormControl>
      <Typography variant="h5" sx={{ mb: 1, fontWeight: 600 }}>
        Equipment
      </Typography>

      <Typography color="text.secondary" sx={{ mb: 3 }}>
        Monitor and manage all refrigeration equipment
      </Typography>

      <Typography variant="body2" color="text.secondary" sx={{ mb: 2 }}>
        Showing {filteredEquipment.length} of {mockEquipment.length} equipment
      </Typography>

      <EquipmentStatusTable equipment={filteredEquipment} />
    </Box>
  );
}

export default EquipmentPage;
