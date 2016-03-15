import {Component, OnInit} from 'angular2/core';
import {RouteParams} from 'angular2/router';

import {Product} from './product';
import {ProductService} from './product.service';

@Component({
	selector: 'product-detail',
	templateUrl: 'app/product-detail.component.html',
	styleUrls: ['app/product-detail.component.css'],
    inputs: ['product']
})

export class ProductDetailComponent implements OnInit {

	product: Product;
	
	constructor(
		private _productService: ProductService,
		private _routeParams: RouteParams) {}

	ngOnInit() {
		let id = +this._routeParams.get('id');
		this._productService.getProduct(id).then(product => this.product = product);
	}

	goBack() {
  		window.history.back();
	}

}