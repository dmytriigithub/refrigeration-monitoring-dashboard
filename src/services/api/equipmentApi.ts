import { mockEquipment } from "../../mocks/equipment";
import type { Equipment } from "../../features/equipment/types";
import { USE_MOCK_DATA } from "./config";
import { apiGet } from "./apiClient";

export async function getEquipment(): Promise<Equipment[]> {
  if (USE_MOCK_DATA) {
    return mockEquipment;
  }

  return apiGet<Equipment[]>("/equipment");
}
