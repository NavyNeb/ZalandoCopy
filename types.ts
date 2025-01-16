type HeaderLinksType = {
    title: string;
    path: string;
}

type FooterLinksType = {
    title: string;
    path: string;
}

type SizesDataType = {
    label: string;
    value: string;
    info: string | null;
}

type DeliveryDataType = {
    icon: any;
    iconTitle?: string;
    title?: string;
    type?: string;
    price?: string
}

type ProductType = {
    id: number;
    image: string;
    name: string;
    boutique: string;
    price: string;
    premium: boolean;
    reduction: {
        text: string;
        percent: string;
        amount: string
    };
    tags: string[];
}

export type { 
    HeaderLinksType,
    FooterLinksType,
    SizesDataType,
    DeliveryDataType,
    ProductType
 };