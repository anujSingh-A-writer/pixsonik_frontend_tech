import { ProductProps } from "../components/product/types";
import armorAll from "../assests/images/products/armorAll.png";
import stpEngineDegreaser from "../assests/images/products/stpEngineDegreaser.png";
import stpEngineFlush from "../assests/images/products/stpEngineFlush.png";
import stpRadiatorFlush from "../assests/images/products/stpRadiatorFlush.png";

export const PRODUCT_LIST: ProductProps[] = [
  {
    name: "Claritas est etiam processus",
    image: armorAll,
    price: 160,
    ratings: 3,
    discountInPercent: 15,
    reviewCount: 3,
  },
  {
    name: "Claritas est etiam processus",
    image: stpEngineDegreaser,
    price: 160,
    ratings: 2,
    discountInPercent: 15,
    reviewCount: 3,
  },
  {
    name: "Claritas est etiam processus",
    image: stpEngineFlush,
    price: 160,
    ratings: 3,
    discountInPercent: 15,
    reviewCount: 3,
  },
  {
    name: "Claritas est etiam processus",
    image: stpRadiatorFlush,
    price: 160,
    ratings: 1,
    discountInPercent: 15,
    reviewCount: 3,
  },
];
