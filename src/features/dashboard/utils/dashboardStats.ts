import type { Equipment } from "../../equipment/types";

export interface DashboardStats {
  totalEquipment: number;
  onlineEquipment: number;
  activeAlerts: number;
  averageTemperature: number | null;
}

export function calculateDashboardStats(
  equipment: Equipment[],
): DashboardStats {
  const totalEquipment = equipment.length;

  const onlineEquipment = equipment.filter(
    (item) => item.status === "online",
  ).length;

  const activeAlerts = equipment.filter(
    (item) => item.status === "warning" || item.status === "critical",
  ).length;

  const equipmentWithTemperature = equipment.filter(
    (item) => item.type === "cold-room" && item.temperature !== null,
  );

  const averageTemperature =
    equipmentWithTemperature.length > 0
      ? equipmentWithTemperature.reduce(
          (sum, item) => sum + item.temperature!,
          0,
        ) / equipmentWithTemperature.length
      : null;

  return {
    totalEquipment,
    onlineEquipment,
    activeAlerts,
    averageTemperature:
      averageTemperature !== null
        ? Number(averageTemperature.toFixed(1))
        : null,
  };
}
