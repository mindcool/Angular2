import { bootstrap } from "angular2/platform/browser";
import Component from 'angular2/core';

//Product is just a model we will use in our app
class Product{
	constructor(
		public sku:string,
		public name:string,
		public imageUrl:string,
		public department:string[],
		public price:number){
			
		}
}
@Component({
	selector: 'inventory-app',
	template: `
		<div class="inventory-app">
		</div>
	`
})
class InventoryApp{
	
}
bootstrap(InventoryApp);
