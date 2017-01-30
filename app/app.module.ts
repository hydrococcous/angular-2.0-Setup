import {NgModule} from '@angular/core'
import {BrowserModule} from "@angular/platform-browser";
import {AppComponent} from './app.component'
import {UserModule} from "./user/user.module";
import {UserDateModul} from "./user/user.date.modul";

@NgModule({
    imports: [
        BrowserModule,
        UserModule,
        UserDateModul
    ],
    declarations: [AppComponent],
    bootstrap: [AppComponent]
})

/**
 * Applikations-Modul
 * Hier startet die Anwendung
 */
export class AppModule{}

