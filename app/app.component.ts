import {Component} from "@angular/core";

@Component({
    selector: 'my-app',
    templateUrl: './app/app.component.html',
    styleUrls: ['./app/app.component.css']
})

export class AppComponent{

    constructor(){
        console.log('App Component exportiert');
    }

    username:string = "Peter Mustermann";

}