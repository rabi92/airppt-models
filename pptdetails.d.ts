import { PowerpointElement } from "./pptelement";
export interface PowerpointDetails {
    slideShowGlobals: any;
    slideShowTheme: any;
    powerPointElements: PowerpointElement[];
    inputPath: string;
    sections: PptSection[];
}

export interface PptSection {
    title: string,
    startingSlide: number,
    lastSlide: number
}
