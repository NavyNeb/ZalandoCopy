import React from "react";

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

export type { 
    HeaderLinksType,
    FooterLinksType,
    SizesDataType,
    DeliveryDataType
 };