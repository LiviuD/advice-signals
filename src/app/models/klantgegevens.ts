export interface Klantgegevens {
    Origin: string,
    Paramters: Parameter[]
}

export interface Parameter{
    ParmName: string,
    ParmValue: any
}