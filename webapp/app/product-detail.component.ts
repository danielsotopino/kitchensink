import {Component} from 'angular2/core';
import {Product} from './product';

@Component({
	selector: 'product-detail',
	template: `
				<div *ngIf="product">
	    			<div>{{product.name}} details:</div>
	    			<div>
	    				<label>id: </label>{{product.id}}
	    			</div>
	    			<div>
						<label>name: </label>
					    <input [(ngModel)]="product.name" placeholder="name"/>
					</div>
    			</div>
    			`,
    inputs: ['product']
})

export class ProductDetailComponent {
	product: Product;
}