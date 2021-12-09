export enum ERadio {
    Accordion,
    Input
}

export type ActiveRadioState = {
    active: ERadio
}

export type ActiveRadioAction = {
    type: string
    payload: ERadio
}