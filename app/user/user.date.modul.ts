/**
 * Created by s.birke on 30.01.2017.
 */

import {NgModule} from "@angular/core";
import {UserDateComponent} from "./user.date.component";
@NgModule({
    declarations: [UserDateComponent],
    exports: [UserDateComponent]
})

export class UserDateModul{
    constructor(){
        console.log('UserDate Modul exportiert.')
    }
}