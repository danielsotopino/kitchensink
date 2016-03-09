System.register(['angular2/core'], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var core_1;
    var AppComponent, products;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            }],
        execute: function() {
            AppComponent = (function () {
                function AppComponent() {
                    this.title = 'Tour of products';
                    this.products = products;
                }
                AppComponent.prototype.onSelect = function (product) {
                    this.selectedProduct = product;
                };
                AppComponent = __decorate([
                    core_1.Component({
                        selector: 'my-app',
                        template: "\t\t\n    \t\t\t<h2>My Products</h2>\n    \t\t\t<div *ngIf=\"selectedProduct\">\n\t    \t\t\t<div>{{selectedProduct.name}} details:</div>\n\t    \t\t\t<div>\n\t    \t\t\t\t<label>id: </label>{{selectedProduct.id}}\n\t    \t\t\t</div>\n\t    \t\t\t<div>\n\t\t\t\t\t\t<label>name: </label>\n\t\t\t\t\t    <input [(ngModel)]=\"selectedProduct.name\" placeholder=\"name\"/>\n\t\t\t\t\t</div>\n    \t\t\t</div>\n\t\t\t\t<ul class=\"products\">\n\t\t\t\t  <li *ngFor=\"#product of products\" [class.selected]=\"product === selectedProduct\" (click)=\"onSelect(product)\">\n\t\t\t\t    <span class=\"badge\">{{product.id}}</span> {{product.name}}\n\t\t\t\t  </li>\n\t\t\t\t</ul>\n    \t\t   ",
                        styles: ["\n\t\t\t  .selected {\n\t\t\t    background-color: #CFD8DC !important;\n\t\t\t    color: white;\n\t\t\t  }\n\t\t\t  .products {\n\t\t\t    margin: 0 0 2em 0;\n\t\t\t    list-style-type: none;\n\t\t\t    padding: 0;\n\t\t\t    width: 10em;\n\t\t\t  }\n\t\t\t  .products li {\n\t\t\t    cursor: pointer;\n\t\t\t    position: relative;\n\t\t\t    left: 0;\n\t\t\t    background-color: #EEE;\n\t\t\t    margin: .5em;\n\t\t\t    padding: .3em 0;\n\t\t\t    height: 1.6em;\n\t\t\t    border-radius: 4px;\n\t\t\t  }\n\t\t\t  .products li.selected:hover {\n\t\t\t    background-color: #BBD8DC !important;\n\t\t\t    color: white;\n\t\t\t  }\n\t\t\t  .products li:hover {\n\t\t\t    color: #607D8B;\n\t\t\t    background-color: #DDD;\n\t\t\t    left: .1em;\n\t\t\t  }\n\t\t\t  .products .text {\n\t\t\t    position: relative;\n\t\t\t    top: -3px;\n\t\t\t  }\n\t\t\t  .products .badge {\n\t\t\t    display: inline-block;\n\t\t\t    font-size: small;\n\t\t\t    color: white;\n\t\t\t    padding: 0.8em 0.7em 0 0.7em;\n\t\t\t    background-color: #607D8B;\n\t\t\t    line-height: 1em;\n\t\t\t    position: relative;\n\t\t\t    left: -1px;\n\t\t\t    top: -4px;\n\t\t\t    height: 1.8em;\n\t\t\t    margin-right: .8em;\n\t\t\t    border-radius: 4px 0 0 4px;\n\t\t\t  }\n\t"]
                    }), 
                    __metadata('design:paramtypes', [])
                ], AppComponent);
                return AppComponent;
            }());
            exports_1("AppComponent", AppComponent);
            products = [
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
        }
    }
});
//# sourceMappingURL=app.component.js.map