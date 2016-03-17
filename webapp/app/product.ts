import {Location} from './location';

export interface Product {
	id: string;
	name: string;
	description: string;
	imageUrl: string;
	price: number;
	location: Location;
}