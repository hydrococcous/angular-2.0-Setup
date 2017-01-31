import {UserArr, UserDataService} from "./user.data";
import {Injectable} from "@angular/core";

@Injectable()
export class UserService{

    constructor(private userDataService:UserDataService){

    }

    setSelectedUser(user:UserArr): void{
        localStorage.setItem('selected', JSON.stringify(user));
    }

    getselectedUser(){
       return  <UserArr>JSON.parse( localStorage.getItem('selected') );
    }

    getUserList():UserArr[]{
        return this.userDataService.getUserlist();
    }

}