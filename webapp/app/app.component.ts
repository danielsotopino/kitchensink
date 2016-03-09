import {Component} from 'angular2/core';

@Component({
    selector: 'my-app',
    template: `		
    			<h2>My Products</h2>
    			<div *ngIf="selectedProduct">
	    			<div>{{selectedProduct.name}} details:</div>
	    			<div>
	    				<label>id: </label>{{selectedProduct.id}}
	    			</div>
	    			<div>
						<label>name: </label>
					    <input [(ngModel)]="selectedProduct.name" placeholder="name"/>
					</div>
    			</div>
				<ul class="products">
				  <li *ngFor="#product of products" [class.selected]="product === selectedProduct" (click)="onSelect(product)">
				    <span class="badge">{{product.id}}</span> {{product.name}}
				  </li>
				</ul>
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
	`]

})



export class AppComponent {

	public title = 'Tour of products';
	
	public products = products;

	onSelect(product: Product) {
		this.selectedProduct = product;
	}

	public selectedProduct: Product;

}

interface Product {
	id: int;
	name: string;
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