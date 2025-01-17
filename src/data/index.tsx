import VanIcon from '@/components/atoms/VanIcon';
import { HeaderLinksType, DeliveryDataType, SizesDataType, ProductType } from '../../types'
import VanFlashIcon from '@/components/atoms/VanFlashIcon';
import ReturnIcon from '@/components/atoms/ReturnIcon';
import ShoesImage from "@/assets/images/shoes.jpg";
import WorldIcon from '@/components/atoms/WorldIcon';
import UserIcon from '@/components/atoms/UserIcon';
import HeartIcon from '@/components/atoms/HeartIcon';
import BagIcon from '@/components/atoms/BagIcon';
import AccountDropdownItem from '@/components/molecules/AccountDropdownItem';
import CardDropdownElement from '@/components/molecules/CardDropdownElement';

const HEADER_LINKS: HeaderLinksType[] = [
    {
        title: "Homme",
        path: "/homme",
    },
    {
        title: "Femme",
        path: "/femme",
    },
    {
        title: "Enfant",
        path: "/enfant",
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

const DELIVERY_DATA: DeliveryDataType[] = [
    {
        icon: <VanIcon />,
        iconTitle: undefined,
        title: "ven 17 janv - sam 18 janv",
        type: "Livraison Standard",
        price: "gratuit",
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

const PRODUCTS_MAIN = [
    { id: 1, image: ShoesImage, name: "Product 1" },
    { id: 2, image: ShoesImage, name: "Product 2" },
    { id: 3, image: ShoesImage, name: "Product 3" },
    { id: 3, image: ShoesImage, name: "Product 3" },
    { id: 4, image: ShoesImage, name: "Product 4" },
    { id: 5, image: ShoesImage, name: "Product 5" },
    { id: 6, image: ShoesImage, name: "Product 6" },
    // Add more products as needed
  ];

  const PRODUCTS: ProductType[] = [
    { id: 1, image: ShoesImage, name: "Classic Nice Shoe - Dark white", boutique: "Nike", price: "50,95 €", reduction: { text: `À l'origine`, amount: "18,99 €", percent: "-15%",  }, premium: true, tags: ["Promo", "Grande"] },
    { id: 2, image: ShoesImage, name: "Classic Nice Shoe - Dark white", boutique: "Nike", price: "50,95 €", reduction: { text: "À l'origine", amount: "18,99 €", percent: "-15%",  }, premium: false, tags: ["Promo", "Grande"] },
    { id: 3, image: ShoesImage, name: "Classic Nice Shoe - Dark white", boutique: "Nike", price: "50,95 €", reduction: { text: "À l'origine", amount: "18,99 €", percent: "-15%",  }, premium: false, tags: ["Promo", ] },
    { id: 4, image: ShoesImage, name: "Classic Nice Shoe - Dark white", boutique: "Nike", price: "50,95 €", reduction: { text: "À l'origine", amount: "18,99 €", percent: "-15%",  }, premium: true, tags: ["Promo", "Grande"] },
    { id: 5, image: ShoesImage, name: "Classic Nice Shoe - Dark white", boutique: "Nike", price: "50,95 €", reduction: { text: "À l'origine", amount: "18,99 €", percent: "-15%",  }, premium: false, tags: ["Promo", ] },
    { id: 6, image: ShoesImage, name: "Classic Nice Shoe - Dark white", boutique: "Nike", price: "50,95 €", reduction: { text: "À l'origine", amount: "18,99 €", percent: "-15%",  }, premium: false, tags: ["Promo", "Grande"] },
    { id: 7, image: ShoesImage, name: "Classic Nice Shoe - Dark white", boutique: "Nike", price: "50,95 €", reduction: { text: "À l'origine", amount: "18,99 €", percent: "-15%",  }, premium: false, tags: ["Promo", ] },
    { id: 8, image: ShoesImage, name: "Classic Nice Shoe - Dark white", boutique: "Nike", price: "50,95 €", reduction: { text: "À l'origine", amount: "18,99 €", percent: "-15%",  }, premium: true, tags: ["Promo",] },
    // Add more products as needed
  ];

  const HEADER_ICONS = [
      {
          icon: <WorldIcon />,
          dropable: false,
          children: null
      },
      {
        icon: <UserIcon />,
          dropable: true,
          children: <AccountDropdownItem />
      },
      {
        icon: <HeartIcon />,
          dropable: false,
          children: null
      },
      {
        icon: <BagIcon />,
          dropable: true,
          children: <CardDropdownElement />
      }
  ]
// Mocked data for the sake of this example



export { 
    HEADER_LINKS,
    SIZES_DATA,
    MATERIAL_DATA,
    DELIVERY_DATA,
    PRODUCTS_MAIN,
    PRODUCTS,
    HEADER_ICONS
};