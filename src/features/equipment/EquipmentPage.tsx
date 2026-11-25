import { useState } from "react";
import {
  Box,
  Typography,
  TextField,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
  Button,
} from "@mui/material";

import { useQuery } from "@tanstack/react-query";
import { getEquipment } from "../../services/api/equipmentApi";

import EquipmentStatusTable from "../../components/common/EquipmentStatusTable";
import type { EquipmentStatus, EquipmentType } from "./types";

function EquipmentPage() {
  const {
    data: equipment = [],
    isLoading,
    isError,
  } = useQuery({
    queryKey: ["equipment"],
    queryFn: getEquipment,
  });

  const [searchQuery, setSearchQuery] = useState("");
  const [statusFilter, setStatusFilter] = useState<EquipmentStatus | "all">(
    "all",
  );
  const [typeFilter, setTypeFilter] = useState<EquipmentType | "all">("all");

  const filteredEquipment = equipment.filter((item) => {
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

  const handleResetFilters = () => {
    setSearchQuery("");
    setStatusFilter("all");
    setTypeFilter("all");
  };

  if (isLoading) {
    return <Box sx={{ p: 3 }}>Loading equipment...</Box>;
  }

  if (isError) {
    return (
      <Box sx={{ p: 3 }}>
        <Typography color="error">
          Failed to load equipment. Please try again.
        </Typography>
      </Box>
    );
  }

  return (
    <Box
      sx={{
        p: { xs: 2, md: 3 },
        width: "100%",
        boxSizing: "border-box",
      }}
    >
      {/* Page heading */}
      <Typography variant="h5" sx={{ mb: 1, fontWeight: 600 }}>
        Equipment
      </Typography>

      <Typography color="text.secondary" sx={{ mb: 3 }}>
        Monitor and manage all refrigeration equipment
      </Typography>

      {/* Search and filters */}
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          gap: 2,
          flexWrap: "wrap",
          mb: 3,
        }}
      >
        <TextField
          size="small"
          placeholder="Search by name, ID or location..."
          value={searchQuery}
          onChange={(event) => setSearchQuery(event.target.value)}
          sx={{
            width: { xs: "100%", md: 450 },
          }}
        />

        <FormControl size="small" sx={{ minWidth: 200 }}>
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

        <FormControl size="small" sx={{ minWidth: 200 }}>
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

        <Button
          variant="outlined"
          size="small"
          onClick={handleResetFilters}
          sx={{
            minHeight: 40,
            px: 2,
          }}
        >
          Reset Filters
        </Button>
      </Box>

      {/* Results count */}
      <Typography variant="body2" color="text.secondary" sx={{ mb: 2 }}>
        Showing {filteredEquipment.length} of {equipment.length} equipment
      </Typography>

      {/* Equipment table */}
      <EquipmentStatusTable equipment={filteredEquipment} />
    </Box>
  );
}

export default EquipmentPage;
