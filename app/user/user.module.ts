import {NgModule} from "@angular/core";
import {CommonModule} from "@angular/common";
import {UserComponent} from "./user.component";
import {UserComponentBtn} from "./user.component.btn";
import {UserComponentSubline} from "./user.component.subline";
import {UserComponentHeadline} from "./user.component.headline";

@NgModule({
    imports: [CommonModule],
    declarations: [UserComponent, UserComponentBtn, UserComponentSubline, UserComponentHeadline],
    exports: [UserComponent, UserComponentBtn, UserComponentSubline, UserComponentHeadline]
})

export class UserModule{}