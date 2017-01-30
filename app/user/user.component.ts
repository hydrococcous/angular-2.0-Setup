import {Component} from "@angular/core";
@Component({
    selector: 'user',
    template: `
        <section>
            <h3>{{username}}</h3>
            <p>
            {{getDescription()}}
            </p>
            <p>
            {{getSum(13,12)}}
            </p>
        </section>`
})

export class UserComponent{
    constructor(){
        console.log('User Component exportiert');
    }

    username:string = "Sandro Birke";

    getSum(num1:number, num2:number):number{
        return num1 + num2;
    }

    getDescription():string{
        return "Auch gibt es niemanden, der den Schmerz an sich liebt, sucht oder wünscht, nur, weil er Schmerz ist, es sei denn," +
               "es kommt zu zufälligen Umständen, in denen Mühen und Schmerz ihm große Freude bereiten können.";
    }
}
