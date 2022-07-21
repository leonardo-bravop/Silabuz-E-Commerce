import { BaseItem } from '@algolia/autocomplete-core';
import { Hit } from '@algolia/client-search';

export interface Product {
    id: number 
    title: string
    price: number
    description: string
    category: string
    image: string
    rating?: {
        rate: number
        count: number
    }
}

type ProductItem = BaseItem & Product;

export type AutocompleteItem = Hit<ProductItem>