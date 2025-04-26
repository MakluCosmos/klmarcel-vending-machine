export interface KeypadButton {
    label: string;
    value: number;
    func: (value: number) => void,
}

export interface CardOptionItem {
    label: string;
    name: string;
    value: string;
}

export const cardOptionsItems: CardOptionItem[] = [{
    label: "신한",
    name: "sinhan",
    value: "sinhan",
},
{
    label: "하나",
    name: "hana",
    value: "hana",
},
{
    label: "카카오뱅크",
    name: "kakaobank",
    value: "kakaobank",
},
{
    label: "해외",
    name: "foreign",
    value: "foreign",
}]