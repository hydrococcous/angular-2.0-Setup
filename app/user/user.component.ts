import {Component, Input, Output, EventEmitter} from "@angular/core";
import {UserArr} from "./user.data";
@Component({
    selector: 'user',
    styles: [`
        .hide{
            display: none;
        }
        .img{
            margin: 3px 10px 5px 0;
            float: left;
        }
        P:after{
            content: "";
            display: block;
            height: 0;
            clear: both;
        }
        BUTTON{
            display: block;
            width: 100%;
        }
    `],
    template: `
        <section>
            <h3>{{usr.name}} <small>{{usr.pos}}</small></h3>
            <p>
            
            <template ngIf="usr.id">
                <img src="img/dummy-100x100-{{usr.id}}.jpg" alt="" class="img" [class.hide]="hidden" [attr.aria-label]="label" />
            </template>
            
            <!-- <img [src]="imgUrl" alt="" *ngIf="imgUrl" class="img" [class.hide]="hidden" [attr.aria-label]="label" /> -->
            
            {{getDescription()}}
            <br />
            <i>{{usr.phone}}</i>
            <br />
            <i>{{usr.mail}}</i>
            </p>
            <button [attr.disabled]="disabled" (click)="onClick($event)">Select User</button>
        </section>`
})

export class UserComponent{
    constructor(){
        console.log('User Component exportiert');
    }

    @Input('UserObj')
    usr:UserArr;

    /*
    @Input()
    username:string;

    @Input('img')
    imgUrl:string;
    */

    @Output()
    choice:EventEmitter<UserArr> = new EventEmitter<UserArr>();

    label:string = "Userimage";
    hidden:boolean = false;
    disabled:any = null;


    getSum(num1:number, num2:number):number{
        return num1 + num2;
    }

    getDescription():string{
        return this.usr.desc;
    }

    onClick(evt:Event):void{
        this.disabled = true;
        this.choice.emit(this.usr);
        console.log('deactivated: ', evt);
    }

}
