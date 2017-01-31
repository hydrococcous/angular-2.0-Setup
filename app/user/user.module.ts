import {NgModule} from "@angular/core";
import {UserComponent} from "./user.component";
import {CommonModule} from "@angular/common";
import {UserService} from "./user.service";
import {UserDataService} from "./user.data";

@NgModule({
    imports: [CommonModule],
    declarations: [UserComponent],
    exports: [UserComponent],
    providers: [UserService, UserDataService]
})

export class UserModule{}


