import { BunjiEvent } from "./types";
import { v4 as uuidv4 } from "uuid";

export const defaultEvents: BunjiEvent[] = [
  {
    id: "44e2f7a3-bebe-459f-a019-afbe1241b9d3",
    isDone: false,
    description: "Stand-up Daily Meeting",
    startAtDate: "2024-04-22",
    startAtTime: "09:00",
    endAtDate: "2024-04-22",
    endAtTime: "10:00",
    userId: 1,
  },
  {
    id: "6d475223-2638-4bf7-a90e-5b85b34836b8",
    isDone: false,
    description: "Point conception",
    startAtDate: "2024-04-23",
    startAtTime: "15:00",
    endAtDate: "2024-04-23",
    endAtTime: "15:30",
    userId: 1,
  },
  {
    id: "83f1fa8b-b027-47e5-8900-8f7d9fa53c30",
    isDone: false,
    description: "Call client",
    startAtDate: "2024-04-27",
    startAtTime: "18:00",
    endAtDate: "2024-04-25",
    endAtTime: "18:30",
    userId: 1,
  },
];
