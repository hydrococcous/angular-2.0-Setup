import {Component} from "@angular/core";
import {UserArr, userData} from "./user/user.data";
import {UserService} from "./user/user.service";

@Component({
    selector: 'my-app',
    templateUrl: './app/app.component.html',
    styleUrls: ['./app/app.component.css']
})

export class AppComponent{

    constructor(private userService:UserService){
        console.log('App Component exportiert');

        let lastSelected:UserArr = this.userService.getselectedUser();
        if( lastSelected ){
            this.selectedUser = this.userList.find( (value)=>{
                return value.id === lastSelected.id;
            } );
        }
    }

    userList: UserArr[] = userData;
    selectedUser: UserArr;
    padding:number = 10;

    selected(selectedUsr:UserArr){
        console.log('User selected:', selectedUsr);
        this.selectedUser = selectedUsr;
        this.userService.setSelectedUser(this.selectedUser);
    }

}