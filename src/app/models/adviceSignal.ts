import { Klantgegevens } from "./klantgegevens";

export interface AdviceSignal {
    CreateDate: Date,
    Title: string;
    Status: number,
    Description: string,
    Klantgegevens: Klantgegevens
}; 