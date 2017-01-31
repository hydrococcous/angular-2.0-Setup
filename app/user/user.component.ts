import {Component, Input, Output, EventEmitter} from "@angular/core";
@Component({
    selector: 'user',
    styles: [`
        .hide{
            display: none;
        }
        .img{
            margin: 0 10px 5px 0;
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
            <h3>{{username}} <small>{{getSum(13,12)}}</small></h3>
            <p>
            
            <template ngIf="imgUrl">
                <img [src]="imgUrl" alt="" class="img" [class.hide]="hidden" [attr.aria-label]="label" />
            </template>
            <!-- <img [src]="imgUrl" alt="" *ngIf="imgUrl" class="img" [class.hide]="hidden" [attr.aria-label]="label" /> -->
            
            {{getDescription()}}
            </p>
            <button [attr.disabled]="disabled" (click)="onClick($event)">Select User</button>
            <input type="text" (keydown)="onKeyDown($event)" />
        </section>`
})

export class UserComponent{
    constructor(){
        console.log('User Component exportiert');
    }

    @Input()
    username:string;

    @Input('img')
    imgUrl:string;

    @Output()
    choice:EventEmitter<string> = new EventEmitter<string>();

    label:string = "Userimage";
    hidden:boolean = false;
    disabled:any = null;


    getSum(num1:number, num2:number):number{
        return num1 + num2;
    }

    getDescription():string{
        return "Auch gibt es niemanden, der den Schmerz an sich liebt, sucht oder wünscht, nur, weil er Schmerz ist, es sei denn," +
               "es kommt zu zufälligen Umständen, in denen Mühen und Schmerz ihm große Freude bereiten können. Auch gibt es " +
               "niemanden, der den Schmerz an sich liebt, sucht oder wünscht, nur, weil er Schmerz ist, es sei denn," +
               "es kommt zu zufälligen Umständen, in denen Mühen und Schmerz ihm große Freude bereiten können. Auch gibt es " +
               "niemanden, der den Schmerz an sich liebt, sucht oder wünscht, nur, weil er Schmerz ist, es sei denn," +
               "es kommt zu zufälligen Umständen, in denen Mühen und Schmerz ihm große Freude bereiten können.";
    }

    onClick(evt:Event):void{
        this.disabled = true;
        this.choice.emit(this.username);
        console.log('deactivated: ', evt);
    }

    onKeyDown(evt:Event):void{
        console.log('key down: ', evt);
    }
}
