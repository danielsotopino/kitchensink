import {Component, OnInit} from 'angular2/core';
import {Router} from 'angular2/router';

import {Product} from './product';
import {ProductDetailComponent} from './product-detail.component';
import {ProductService} from './product.service';

@Component({
    selector: 'products-app',
    templateUrl: 'app/product.component.html',
   	styleUrls: ['app/product.component.css'],
	directives: [ProductDetailComponent]
})

export class ProductComponent implements OnInit {
  
	products: Product[];
	selectedProduct: Product;

	constructor(
		private _productService: ProductService,
		private _router: Router
	) { }

	getProducts() {
    	this._productService.getProducts().then(products => this.products = products);
  	}

  	ngOnInit() {
  		this.getProducts();
  	}

	onSelect(product: Product) {
		this.selectedProduct = product;
	}

	gotoDetail() {
    	this._router.navigate(['ProductDetail', { id: this.selectedProduct.id }]);
  	}

}
