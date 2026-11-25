import { mockTemperatureReadings } from "../../mocks/temperatureReadings";
import type { TemperatureReading } from "../../features/monitoring/types";
import { USE_MOCK_DATA } from "./config";
import { apiGet } from "./apiClient";

export async function getTemperatureReadings(): Promise<TemperatureReading[]> {
  if (USE_MOCK_DATA) {
    return mockTemperatureReadings;
  }

  return apiGet<TemperatureReading[]>("/temperature-readings");
}
