import {Component} from "@angular/core";
import {UserArr, userData} from "./user/user.data";

@Component({
    selector: 'my-app',
    templateUrl: './app/app.component.html',
    styleUrls: ['./app/app.component.css']
})

export class AppComponent{

    constructor(){
        console.log('App Component exportiert');
    }

    userList: UserArr[] = userData;

    selected(selectedUsr:UserArr){
        console.log('User selected:', selectedUsr);
    }

}