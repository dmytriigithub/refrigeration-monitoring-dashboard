import AlertsList from "./AlertsList";
import StatCard from "../../components/common/StatCard";

import {
  FormControl,
  InputLabel,
  Select,
  MenuItem,
  TextField,
  Button,
  Grid,
  Box,
  Typography,
} from "@mui/material";

import { useState } from "react";
import { useQuery } from "@tanstack/react-query";
import { getAlerts } from "../../services/api/alertsApi";

import type { Alert, AlertSeverity, AlertStatus } from "./types";

function calculateAlertStats(alerts: Alert[]) {
  return {
    active: alerts.filter((alert) => alert.status === "active").length,
    critical: alerts.filter(
      (alert) => alert.severity === "critical" && alert.status === "active",
    ).length,
    warning: alerts.filter(
      (alert) => alert.severity === "warning" && alert.status === "active",
    ).length,
    resolved: alerts.filter((alert) => alert.status === "resolved").length,
  };
}

function AlertsPage() {
  const [resolvedAlertIds, setResolvedAlertIds] = useState<string[]>([]);
  const [searchQuery, setSearchQuery] = useState("");
  const [severityFilter, setSeverityFilter] = useState<AlertSeverity | "all">(
    "all",
  );
  const [statusFilter, setStatusFilter] = useState<AlertStatus | "all">("all");

  const {
    data: initialAlerts = [],
    isLoading,
    isError,
  } = useQuery({
    queryKey: ["alerts"],
    queryFn: getAlerts,
  });

  const alerts = initialAlerts.map((alert) =>
    resolvedAlertIds.includes(alert.id)
      ? { ...alert, status: "resolved" as const }
      : alert,
  );

  const stats = calculateAlertStats(alerts);

  const filteredAlerts = alerts.filter((alert) => {
    const query = searchQuery.toLowerCase();

    const matchesSearch =
      alert.title.toLowerCase().includes(query) ||
      alert.equipmentName.toLowerCase().includes(query) ||
      alert.equipmentId.toLowerCase().includes(query) ||
      alert.message.toLowerCase().includes(query);

    const matchesSeverity =
      severityFilter === "all" || alert.severity === severityFilter;

    const matchesStatus =
      statusFilter === "all" || alert.status === statusFilter;

    return matchesSearch && matchesSeverity && matchesStatus;
  });

  const handleResolveAlert = (alertId: string) => {
    setResolvedAlertIds((previousIds) =>
      previousIds.includes(alertId) ? previousIds : [...previousIds, alertId],
    );
  };

  const handleResetFilters = () => {
    setSearchQuery("");
    setSeverityFilter("all");
    setStatusFilter("all");
  };

  if (isLoading) {
    return <Box sx={{ p: 3 }}>Loading alerts...</Box>;
  }

  if (isError) {
    return (
      <Box sx={{ p: 3 }}>
        <Typography color="error">
          Failed to load alerts. Please try again.
        </Typography>
      </Box>
    );
  }

  return (
    <Box sx={{ p: 3 }}>
      <Typography variant="h5" sx={{ mb: 1, fontWeight: 600 }}>
        Alerts & Events
      </Typography>

      <Typography color="text.secondary" sx={{ mb: 3 }}>
        Monitor system alerts and equipment events
      </Typography>

      <Grid container spacing={2} sx={{ mb: 4 }}>
        <Grid size={{ xs: 12, sm: 6, lg: 3 }}>
          <StatCard
            title="Active Alerts"
            value={stats.active}
            subtitle="Currently active"
          />
        </Grid>

        <Grid size={{ xs: 12, sm: 6, lg: 3 }}>
          <StatCard
            title="Critical"
            value={stats.critical}
            subtitle="Require immediate attention"
          />
        </Grid>

        <Grid size={{ xs: 12, sm: 6, lg: 3 }}>
          <StatCard
            title="Warning"
            value={stats.warning}
            subtitle="Require attention"
          />
        </Grid>

        <Grid size={{ xs: 12, sm: 6, lg: 3 }}>
          <StatCard
            title="Resolved"
            value={stats.resolved}
            subtitle="Successfully resolved"
          />
        </Grid>
      </Grid>

      <Box
        sx={{
          display: "flex",
          gap: 2,
          flexWrap: "wrap",
          mb: 3,
        }}
      >
        <TextField
          size="small"
          fullWidth
          placeholder="Search alerts by title, equipment or ID..."
          value={searchQuery}
          onChange={(event) => setSearchQuery(event.target.value)}
          sx={{
            maxWidth: 450,
            mb: 2,
          }}
        />

        <FormControl size="small" sx={{ minWidth: 200 }}>
          <InputLabel id="severity-filter-label">Severity</InputLabel>

          <Select
            labelId="severity-filter-label"
            value={severityFilter}
            label="Severity"
            onChange={(event) =>
              setSeverityFilter(event.target.value as AlertSeverity | "all")
            }
          >
            <MenuItem value="all">All Severities</MenuItem>
            <MenuItem value="critical">Critical</MenuItem>
            <MenuItem value="warning">Warning</MenuItem>
            <MenuItem value="info">Info</MenuItem>
          </Select>
        </FormControl>

        <FormControl size="small" sx={{ minWidth: 200 }}>
          <InputLabel id="alert-status-filter-label">Status</InputLabel>

          <Select
            labelId="alert-status-filter-label"
            value={statusFilter}
            label="Status"
            onChange={(event) =>
              setStatusFilter(event.target.value as AlertStatus | "all")
            }
          >
            <MenuItem value="all">All Statuses</MenuItem>
            <MenuItem value="active">Active</MenuItem>
            <MenuItem value="resolved">Resolved</MenuItem>
          </Select>
        </FormControl>
        <Button
          variant="outlined"
          size="small"
          onClick={handleResetFilters}
          sx={{
            maxHeight: 40,
            px: 2,
          }}
        >
          Reset Filters
        </Button>
      </Box>

      <AlertsList alerts={filteredAlerts} onResolve={handleResolveAlert} />
    </Box>
  );
}

export default AlertsPage;
