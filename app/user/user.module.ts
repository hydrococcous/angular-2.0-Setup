import {NgModule} from "@angular/core";
import {UserComponent} from "./user.component";
import {CommonModule} from "@angular/common";
import {UserService} from "./user.service";

@NgModule({
    imports: [CommonModule],
    declarations: [UserComponent],
    exports: [UserComponent],
    providers: [UserService]
})

export class UserModule{}


