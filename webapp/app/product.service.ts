import {Injectable} from 'angular2/core';
import {Observable}     from 'rxjs/Observable';
import {Http, Response} from 'angular2/http';

import {Product} from './product';


@Injectable()
export class ProductService {

	constructor(private _http: Http) {}

	private _productsUrl = 'http://localhost:1337/product';
	private _productByIdUrl = 'http://localhost:1337/product?id=';


	getProducts() {
		//return Promise.resolve(products);
		return this._http.get(this._productsUrl)
			.map(res => <Product[]> res.json())
			.do(data => console.log(data))
			.catch(this.handleError);
	}
	
	getProduct(id: string) {
		return this._http.get(this._productByIdUrl+id)
			.map(res => <Product> res.json())
			.do(data => console.log(data))
			.catch(this.handleError);
	}

	private handleError (error: Response) {
	    console.error(error);
	    return Observable.throw(error.json().error || 'Server error');
	}

}