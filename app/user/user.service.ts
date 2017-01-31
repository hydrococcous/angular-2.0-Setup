import {UserArr} from "./user.data";

export class UserService{

    setSelectedUser(user:UserArr): void{
        localStorage.setItem('selected', JSON.stringify(user));
    }

    getselectedUser(){
       return  <UserArr>JSON.parse( localStorage.getItem('selected') );
    }

}