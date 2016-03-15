import {Product} from './product';
import {products} from './mock-products';
import {Injectable} from 'angular2/core';

@Injectable()
export class ProductService {

	getProducts() {
		return Promise.resolve(products);
	}

	getProduct(id: number) {
  		return Promise.resolve(products).then(
    		products => products.filter(product => product.id === id)[0]
  		);
	}

	getHeroesSlowly() {
    	return new Promise<Product[]>(resolve =>
      		setTimeout(()=>resolve(products), 2000) // 2 seconds
    	);
	}

}