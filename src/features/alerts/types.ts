export type AlertSeverity = "critical" | "warning" | "info";

export type AlertStatus = "active" | "resolved";

export interface Alert {
  id: string;
  equipmentId: string;
  equipmentName: string;
  severity: AlertSeverity;
  title: string;
  message: string;
  timestamp: string;
  status: AlertStatus;
}
