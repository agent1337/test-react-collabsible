export interface IAccordion {
    id: number
    title: string
    content: string
    active: boolean
}

export type AccordionsState = {
    accordions: IAccordion[]
}

export type AccordionsAction = {
    type: string
    payload: IAccordion
}