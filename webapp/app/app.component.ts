import {Component} from 'angular2/core';
import {Product} from './product';
import {ProductDetailComponent} from './product-detail.component';

@Component({
    selector: 'my-app',
    template: `		
    			<h1>{{title}}</h1>
    			<h2>My Products</h2>
				<ul class="products">
				  <li *ngFor="#product of products" [class.selected]="product === selectedProduct" (click)="onSelect(product)">
				    <span class="badge">{{product.id}}</span> {{product.name}}
				  </li>
				</ul>
				<product-detail [product]="selectedProduct"></product-detail>
    		   `,
   	styles:[`
			  .selected {
			    background-color: #CFD8DC !important;
			    color: white;
			  }
			  .products {
			    margin: 0 0 2em 0;
			    list-style-type: none;
			    padding: 0;
			    width: 10em;
			  }
			  .products li {
			    cursor: pointer;
			    position: relative;
			    left: 0;
			    background-color: #EEE;
			    margin: .5em;
			    padding: .3em 0;
			    height: 1.6em;
			    border-radius: 4px;
			  }
			  .products li.selected:hover {
			    background-color: #BBD8DC !important;
			    color: white;
			  }
			  .products li:hover {
			    color: #607D8B;
			    background-color: #DDD;
			    left: .1em;
			  }
			  .products .text {
			    position: relative;
			    top: -3px;
			  }
			  .products .badge {
			    display: inline-block;
			    font-size: small;
			    color: white;
			    padding: 0.8em 0.7em 0 0.7em;
			    background-color: #607D8B;
			    line-height: 1em;
			    position: relative;
			    left: -1px;
			    top: -4px;
			    height: 1.8em;
			    margin-right: .8em;
			    border-radius: 4px 0 0 4px;
			  }
	`],
	directives: [ProductDetailComponent],
})



export class AppComponent {

	title = 'Tour of products';
	
	products = products;

	onSelect(product: Product) {
		this.selectedProduct = product;
	}

	selectedProduct: Product;

}

var products: Product[] = [
  { "id": 11, "name": "Mr. Nice" },
  { "id": 12, "name": "Narco" },
  { "id": 13, "name": "Bombasto" },
  { "id": 14, "name": "Celeritas" },
  { "id": 15, "name": "Magneta" },
  { "id": 16, "name": "RubberMan" },
  { "id": 17, "name": "Dynama" },
  { "id": 18, "name": "Dr IQ" },
  { "id": 19, "name": "Magma" },
  { "id": 20, "name": "Tornado" }
];