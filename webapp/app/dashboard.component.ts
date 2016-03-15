import { Component, OnInit } from 'angular2/core';
import { Router } from 'angular2/router';

import {ProductService} from './product.service';
import {Product} from './product';

@Component({
  selector: 'my-dashboard',
  templateUrl: 'app/dashboard.component.html',
  styleUrls: ['app/dashboard.component.css']
})

export class DashboardComponent implements OnInit { 

	products: Product[];

	constructor(
		private _router: Router,
		private _productService: ProductService
	) {}

	ngOnInit() {
    	this._productService.getProducts()
      		.then(products => this.products = products.slice(1,5));
  	}

	gotoDetail(product) {
		let link = ['ProductDetail', { id: product.id }];
  		this._router.navigate(link);
	}

}