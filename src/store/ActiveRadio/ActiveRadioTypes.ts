export interface IActiveRadio {
    radio: string
}

export type ActiveRadioState = {
    active: IActiveRadio
}

export type ActiveRadioAction = {
    type: string
    payload: IActiveRadio
}