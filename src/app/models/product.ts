export interface Product {
    label: string;
    name: string;
    price: number;
    inStock: boolean;
}

export const products: Product[] = [{
    label: '콜라',
    name: 'cola',
    price: 1100,
    inStock: true,
},{
    label: '생수',
    name: 'water',
    price: 600,
    inStock: true,
},{
    label: '커피',
    name: 'coffee',
    price: 700,
    inStock: true,
},{
    label: '아무거나',
    name: 'pumjeol',
    price: 300,
    inStock: false,
},]