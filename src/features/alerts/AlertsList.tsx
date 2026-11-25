import {
  Box,
  Card,
  CardContent,
  Chip,
  Typography,
  Button,
} from "@mui/material";

import type { Alert } from "./types";

interface AlertsListProps {
  alerts: Alert[];
  onResolve: (alertId: string) => void;
}

function AlertsList({ alerts, onResolve }: AlertsListProps) {
  return (
    <Box sx={{ display: "flex", flexDirection: "column", gap: 2 }}>
      {alerts.length === 0 ? (
        <Box
          sx={{
            py: 6,
            textAlign: "center",
            border: "1px dashed",
            borderColor: "divider",
            borderRadius: 2,
          }}
        >
          <Typography variant="h6" sx={{ mb: 1 }}>
            No alerts found
          </Typography>

          <Typography color="text.secondary" variant="body2">
            There are no alerts matching the selected filters.
          </Typography>
        </Box>
      ) : (
        alerts.map((alert) => (
          <Card
            key={alert.id}
            elevation={0}
            sx={{
              border: "1px solid",
              borderColor: "divider",
              borderRadius: 2,
            }}
          >
            <CardContent>
              <Box
                sx={{
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "flex-start",
                  gap: 2,
                  flexWrap: "wrap",
                }}
              >
                <Box>
                  <Typography variant="subtitle1" sx={{ fontWeight: 600 }}>
                    {alert.title}
                  </Typography>

                  <Typography variant="body2" color="text.secondary">
                    {alert.equipmentName} · {alert.equipmentId}
                  </Typography>
                </Box>

                <Box sx={{ display: "flex", gap: 1, flexWrap: "wrap" }}>
                  <Chip
                    label={alert.severity.toUpperCase()}
                    size="small"
                    color={
                      alert.severity === "critical"
                        ? "error"
                        : alert.severity === "warning"
                          ? "warning"
                          : "info"
                    }
                  />

                  <Chip
                    label={alert.status.toUpperCase()}
                    size="small"
                    variant="outlined"
                    color={alert.status === "active" ? "error" : "success"}
                  />
                </Box>
              </Box>

              <Typography variant="body2" sx={{ mt: 2 }}>
                {alert.message}
              </Typography>
              {alert.status === "active" && (
                <Button
                  variant="outlined"
                  color="success"
                  size="small"
                  sx={{ mt: 2 }}
                  onClick={() => onResolve(alert.id)}
                >
                  Mark as Resolved
                </Button>
              )}

              <Typography
                variant="caption"
                color="text.secondary"
                sx={{ display: "block", mt: 2 }}
              >
                {new Date(alert.timestamp).toLocaleString()}
              </Typography>
            </CardContent>
          </Card>
        ))
      )}
    </Box>
  );
}

export default AlertsList;
