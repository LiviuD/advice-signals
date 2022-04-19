import { AdviceSignal } from "./adviceSignal";

export interface Klanten {
    Id: number;
    ClientName: string;
    BsnFi: number;
    AdviceSignals: AdviceSignal[]
  }
  