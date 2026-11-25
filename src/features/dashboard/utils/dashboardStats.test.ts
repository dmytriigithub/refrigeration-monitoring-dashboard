import { describe, it, expect } from "vitest";

import { calculateDashboardStats } from "./dashboardStats";
import type { Equipment } from "../../equipment/types";

describe("calculateDashboardStats", () => {
  it("calculates equipment statistics correctly", () => {
    const equipment: Equipment[] = [
      {
        id: "COMP-001",
        name: "Compressor 01",
        type: "compressor",
        location: "Plant Room A",
        status: "online",
        temperature: null,
        lastUpdated: "2026-11-25T15:00:00Z",
      },
      {
        id: "ROOM-001",
        name: "Cold Room A",
        type: "cold-room",
        location: "Storage Area A",
        status: "online",
        temperature: -18,
        lastUpdated: "2026-11-25T15:00:00Z",
      },
      {
        id: "ROOM-002",
        name: "Cold Room B",
        type: "cold-room",
        location: "Storage Area B",
        status: "warning",
        temperature: -16,
        lastUpdated: "2026-11-25T15:00:00Z",
      },
      {
        id: "ROOM-003",
        name: "Cold Room C",
        type: "cold-room",
        location: "Storage Area C",
        status: "critical",
        temperature: -10,
        lastUpdated: "2026-11-25T15:00:00Z",
      },
    ];

    const result = calculateDashboardStats(equipment);

    expect(result).toEqual({
      totalEquipment: 4,
      onlineEquipment: 2,
      activeAlerts: 2,
      averageTemperature: -14.7,
    });
  });

  it("returns zero statistics for an empty equipment list", () => {
    const result = calculateDashboardStats([]);

    expect(result).toEqual({
      totalEquipment: 0,
      onlineEquipment: 0,
      activeAlerts: 0,
      averageTemperature: null,
    });
  });

  it("returns null when no equipment has temperature data", () => {
    const equipment: Equipment[] = [
      {
        id: "COMP-001",
        name: "Compressor 01",
        type: "compressor",
        location: "Plant Room A",
        status: "online",
        temperature: null,
        lastUpdated: "2026-11-25T15:00:00Z",
      },
    ];

    const result = calculateDashboardStats(equipment);

    expect(result.averageTemperature).toBeNull();
  });
});
