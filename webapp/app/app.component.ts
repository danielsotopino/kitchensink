import {Component} from 'angular2/core';
import {RouteConfig, ROUTER_DIRECTIVES, ROUTER_PROVIDERS} from 'angular2/router';

import {DashboardComponent} from './dashboard.component';
import {ProductComponent} from './product.component';
import {ProductDetailComponent} from './product-detail.component';
import {ProductService} from './product.service';


@Component({
	selector: 'my-app',
	template: `
				<h1>{{title}}</h1>
				<nav>
					<a [routerLink]="['Dashboard']">Dashboard</a>
					<a [routerLink]="['Products']">Productos</a>
				</nav>
  				<router-outlet></router-outlet>
			  `,
	styleUrls: ['app/app.component.css'],
	directives: [ROUTER_DIRECTIVES],
	providers: [ROUTER_PROVIDERS, ProductService]

})

@RouteConfig([
  {
    path: '/products',
    name: 'Products',
    component: ProductComponent
  },
  {
	path: '/dashboard',
	name: 'Dashboard',
	component: DashboardComponent,
	useAsDefault: true
  },
  {
  	path: '/detail/:id',
  	name: 'ProductDetail',
  	component: ProductDetailComponent
  }
])

export class AppComponent {

	title = 'Tour of products';

}

