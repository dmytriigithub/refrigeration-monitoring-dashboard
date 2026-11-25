export type EquipmentStatus = "online" | "offline" | "warning" | "critical";

export type EquipmentType =
  | "compressor"
  | "evaporator"
  | "condenser"
  | "cold-room";

export interface Equipment {
  id: string;
  name: string;
  type: EquipmentType;
  location: string;
  status: EquipmentStatus;
  temperature: number | null;
  lastUpdated: string;
}
