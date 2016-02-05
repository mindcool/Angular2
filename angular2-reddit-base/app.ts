import { bootstrap } from "angular2/platform/browser";
import { Component } from "angular2/core";

@Component({
	selector: 'hello-world',
	template: `
	<div>
		Hello World {{name}}
	</div>
	`
})

class HelloWorld {
	name:string;
	constructor(){
		this.name = 'Noyan';
	}
}

bootstrap(HelloWorld);