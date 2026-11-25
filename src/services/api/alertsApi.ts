import { mockAlerts } from "../../mocks/alerts";
import type { Alert } from "../../features/alerts/types";
import { USE_MOCK_DATA } from "./config";
import { apiGet } from "./apiClient";

export async function getAlerts(): Promise<Alert[]> {
  if (USE_MOCK_DATA) {
    return mockAlerts;
  }

  return apiGet<Alert[]>("/alerts");
}
