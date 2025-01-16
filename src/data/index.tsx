import VanIcon from '@/components/atoms/VanIcon';
import { HeaderLinksType, LivraisonDataType, SizesDataType } from '../../types'
import VanFlashIcon from '@/components/atoms/VanFlashIcon';
import ReturnIcon from '@/components/atoms/ReturnIcon';

const HEADER_LINKS: HeaderLinksType[] = [
    {
        title: "Home",
        path: "/home",
    },
    {
        title: "Menu",
        path: "/menu",
    },
    {
        title: "Blog",
        path: "/blog",
    },
    {
        title: "Contact",
        path: "/contact",
    },
];

const SIZES_DATA: SizesDataType[] = [
    {
        label: "extraSmall",
        value: "xs",
        info: null,
    },
    {
        label: "Small",
        value: "sm",
        info: null,
    },
    {
        label: "Medium",
        value: "md",
        info: "Épuisé",
    },
    {
        label: "Large",
        value: "l",
        info: "Seulement 1 article en stock",
    },
    {
        label: "extraLarge",
        value: "xl",
        info: "Article longue distance 4,95 €",
    }
]

const MATERIAL_DATA: string[] = [
    "Matériau recyclé",
    "Matériau natural",
    "Matériau synthétique",
    "Matériau acier",
    "Matériau plastique",
    "Matériau métal",
] 

const DELIVERY_DATA: LivraisonDataType[] = [
    {
        icon: <VanIcon />,
        iconTitle: undefined,
        title: "ven 17 janv - sam 18 janv",
        type: "Livraison Standard",
        price: undefined,
    },
    {
        icon: <VanFlashIcon />,
        iconTitle: undefined,
        title: "ven 17 janv - sam 18 janv",
        type: "Livraison Premium",
        price: "5,95 €",
    },
    {
        icon: <ReturnIcon />,
        iconTitle: "Retour gratuit sous 30 jours",
        title: undefined,
        type: undefined,
        price: undefined,
    }
]



export { 
    HEADER_LINKS,
    SIZES_DATA,
    MATERIAL_DATA,
    DELIVERY_DATA
};