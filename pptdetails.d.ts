import { PowerpointElement } from "./pptelement";
export interface PowerpointDetails {
    powerPointElements: PowerpointElement[][];
    inputPath: string;
    slidesLength: number;
}
export interface PptSection {
    title: string;
    startingSlide: number;
    lastSlide: number;
}
