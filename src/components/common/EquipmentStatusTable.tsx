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
  const [sortOrder, setSortOrder] = useState<"asc" | "desc">("asc");

  const sortedEquipment = [...equipment].sort((a, b) => {
    const comparison = a.name.localeCompare(b.name);

    return sortOrder === "asc" ? comparison : -comparison;
  });
  return (
    <TableContainer component={Paper} elevation={0}>
      <Table>
        <TableHead>
          <TableRow>
            <TableCell>
              <TableSortLabel
                active
                direction={sortOrder}
                onClick={() =>
                  setSortOrder((previous) =>
                    previous === "asc" ? "desc" : "asc",
                  )
                }
              >
                Equipment
              </TableSortLabel>
            </TableCell>
            <TableCell>Type</TableCell>
            <TableCell>Location</TableCell>
            <TableCell>Status</TableCell>
            <TableCell>Temperature</TableCell>
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
