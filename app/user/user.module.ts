import {NgModule} from "@angular/core";
import {CommonModule} from "@angular/common";
import {UserComponent} from "./user.component";
import {UserComponentBtn} from "./user.component.btn";

@NgModule({
    imports: [CommonModule],
    declarations: [UserComponent, UserComponentBtn],
    exports: [UserComponent, UserComponentBtn]
})

export class UserModule{}