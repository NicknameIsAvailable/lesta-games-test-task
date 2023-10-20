export interface Icon {
    __typename: string
    large: string
    small: string
}

export interface Type {
    __typename: string
    default: string
    name: string
    title: string
}

export interface Nation {
    __typename: string
    color: string
    name: string
    title: string
    icons: Icon
}

export interface Ship {
    __typename: string
    description: string
    icons: Icon
    level: number
    title: string
    nation: Nation
    type: Type
}