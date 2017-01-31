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

    username:string = "Hans Müller";
    imgUrl:string = "https://placeholdit.imgix.net/~text?txtsize=15&txt=100%C3%97100&w=100&h=100";


    selected(evt:Event){
        console.log('User selected:', evt);
    }

}