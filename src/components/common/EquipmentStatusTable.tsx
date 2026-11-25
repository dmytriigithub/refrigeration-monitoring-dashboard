import {
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Chip,
} from "@mui/material";
import { useState } from "react";
import { TableSortLabel } from "@mui/material";

import type { Equipment } from "../../features/equipment/types";

interface EquipmentStatusTableProps {
  equipment: Equipment[];
}

function EquipmentStatusTable({ equipment }: EquipmentStatusTableProps) {
  type SortField = "name" | "type" | "location" | "status" | "temperature";

  const [sortField, setSortField] = useState<SortField>("name");
  const [sortOrder, setSortOrder] = useState<"asc" | "desc">("asc");

  const handleSort = (field: SortField) => {
    if (sortField === field) {
      setSortOrder((previous) => (previous === "asc" ? "desc" : "asc"));
    } else {
      setSortField(field);
      setSortOrder("asc");
    }
  };

  const sortedEquipment = [...equipment].sort((a, b) => {
    const aValue = a[sortField];
    const bValue = b[sortField];

    if (aValue === null) return 1;
    if (bValue === null) return -1;

    const comparison =
      typeof aValue === "number" && typeof bValue === "number"
        ? aValue - bValue
        : String(aValue).localeCompare(String(bValue));

    return sortOrder === "asc" ? comparison : -comparison;
  });

  return (
    <TableContainer component={Paper} elevation={0}>
      <Table>
        <TableHead>
          <TableRow>
            <TableCell>
              <TableSortLabel
                active={sortField === "name"}
                direction={sortField === "name" ? sortOrder : "asc"}
                onClick={() => handleSort("name")}
              >
                Equipment
              </TableSortLabel>
            </TableCell>
            <TableCell>
              <TableSortLabel
                active={sortField === "type"}
                direction={sortField === "type" ? sortOrder : "asc"}
                onClick={() => handleSort("type")}
              >
                Type
              </TableSortLabel>
            </TableCell>
            <TableCell>
              <TableSortLabel
                active={sortField === "location"}
                direction={sortField === "location" ? sortOrder : "asc"}
                onClick={() => handleSort("location")}
              >
                Location
              </TableSortLabel>
            </TableCell>
            <TableCell>
              <TableSortLabel
                active={sortField === "status"}
                direction={sortField === "status" ? sortOrder : "asc"}
                onClick={() => handleSort("status")}
              >
                Status
              </TableSortLabel>
            </TableCell>
            <TableCell>
              <TableSortLabel
                active={sortField === "temperature"}
                direction={sortField === "temperature" ? sortOrder : "asc"}
                onClick={() => handleSort("temperature")}
              >
                Temperature
              </TableSortLabel>
            </TableCell>
          </TableRow>
        </TableHead>

        <TableBody>
          {sortedEquipment.map((item) => (
            <TableRow key={item.id}>
              <TableCell>{item.name}</TableCell>
              <TableCell>{item.type}</TableCell>
              <TableCell>{item.location}</TableCell>
              <TableCell>
                <Chip
                  label={item.status.toUpperCase()}
                  size="small"
                  color={
                    item.status === "online"
                      ? "success"
                      : item.status === "warning"
                        ? "warning"
                        : item.status === "critical"
                          ? "error"
                          : "default"
                  }
                />
              </TableCell>
              <TableCell>
                {item.temperature !== null ? `${item.temperature} °C` : "N/A"}
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}

export default EquipmentStatusTable;
