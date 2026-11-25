import type { TemperatureReading } from "../features/monitoring/types";

export const mockTemperatureReadings: TemperatureReading[] = [
  // Cold Room A
  {
    timestamp: "2026-11-25T08:00:00Z",
    temperature: -18.2,
    equipmentId: "ROOM-001",
    equipmentName: "Cold Room A",
  },
  {
    timestamp: "2026-11-25T09:00:00Z",
    temperature: -18.4,
    equipmentId: "ROOM-001",
    equipmentName: "Cold Room A",
  },
  {
    timestamp: "2026-11-25T10:00:00Z",
    temperature: -18.3,
    equipmentId: "ROOM-001",
    equipmentName: "Cold Room A",
  },
  {
    timestamp: "2026-11-25T11:00:00Z",
    temperature: -18.5,
    equipmentId: "ROOM-001",
    equipmentName: "Cold Room A",
  },
  {
    timestamp: "2026-11-25T12:00:00Z",
    temperature: -18.4,
    equipmentId: "ROOM-001",
    equipmentName: "Cold Room A",
  },
  {
    timestamp: "2026-11-25T13:00:00Z",
    temperature: -18.5,
    equipmentId: "ROOM-001",
    equipmentName: "Cold Room A",
  },

  // Cold Room B
  {
    timestamp: "2026-11-25T08:00:00Z",
    temperature: -19.0,
    equipmentId: "ROOM-002",
    equipmentName: "Cold Room B",
  },
  {
    timestamp: "2026-11-25T09:00:00Z",
    temperature: -19.1,
    equipmentId: "ROOM-002",
    equipmentName: "Cold Room B",
  },
  {
    timestamp: "2026-11-25T10:00:00Z",
    temperature: -18.9,
    equipmentId: "ROOM-002",
    equipmentName: "Cold Room B",
  },
  {
    timestamp: "2026-11-25T11:00:00Z",
    temperature: -19.2,
    equipmentId: "ROOM-002",
    equipmentName: "Cold Room B",
  },
  {
    timestamp: "2026-11-25T12:00:00Z",
    temperature: -19.1,
    equipmentId: "ROOM-002",
    equipmentName: "Cold Room B",
  },
  {
    timestamp: "2026-11-25T13:00:00Z",
    temperature: -19.0,
    equipmentId: "ROOM-002",
    equipmentName: "Cold Room B",
  },

  // Cold Room C - temperature problem
  {
    timestamp: "2026-11-25T08:00:00Z",
    temperature: -18.5,
    equipmentId: "ROOM-003",
    equipmentName: "Cold Room C",
  },
  {
    timestamp: "2026-11-25T09:00:00Z",
    temperature: -17.8,
    equipmentId: "ROOM-003",
    equipmentName: "Cold Room C",
  },
  {
    timestamp: "2026-11-25T10:00:00Z",
    temperature: -16.9,
    equipmentId: "ROOM-003",
    equipmentName: "Cold Room C",
  },
  {
    timestamp: "2026-11-25T11:00:00Z",
    temperature: -15.2,
    equipmentId: "ROOM-003",
    equipmentName: "Cold Room C",
  },
  {
    timestamp: "2026-11-25T12:00:00Z",
    temperature: -12.8,
    equipmentId: "ROOM-003",
    equipmentName: "Cold Room C",
  },
  {
    timestamp: "2026-11-25T13:00:00Z",
    temperature: -10.2,
    equipmentId: "ROOM-003",
    equipmentName: "Cold Room C",
  },

  // Cold Room D
  {
    timestamp: "2026-11-25T08:00:00Z",
    temperature: -18.6,
    equipmentId: "ROOM-004",
    equipmentName: "Cold Room D",
  },
  {
    timestamp: "2026-11-25T09:00:00Z",
    temperature: -18.7,
    equipmentId: "ROOM-004",
    equipmentName: "Cold Room D",
  },
  {
    timestamp: "2026-11-25T10:00:00Z",
    temperature: -18.5,
    equipmentId: "ROOM-004",
    equipmentName: "Cold Room D",
  },
  {
    timestamp: "2026-11-25T11:00:00Z",
    temperature: -18.8,
    equipmentId: "ROOM-004",
    equipmentName: "Cold Room D",
  },
  {
    timestamp: "2026-11-25T12:00:00Z",
    temperature: -18.6,
    equipmentId: "ROOM-004",
    equipmentName: "Cold Room D",
  },
  {
    timestamp: "2026-11-25T13:00:00Z",
    temperature: -18.7,
    equipmentId: "ROOM-004",
    equipmentName: "Cold Room D",
  },
];
