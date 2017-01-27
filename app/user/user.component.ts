import {Component} from "@angular/core";

@Component({
    selector: 'user',
    templateUrl: './app/user/user.component.html',
    styleUrls: ['./app/user/user.component.css']
})

export class UserComponent{
    teaser:string = "Ich bin ein Teaser";
    getSum(num1:number, num2:number): number{
        return num1 + num2;
    }
    getDescription():string{
        return 'Auch gibt es niemanden, der den Schmerz an sich liebt, sucht oder wünscht, nur, weil er Schmerz ist, es sei denn, es kommt zu zufälligen Umständen, in denen Mühen und Schmerz ihm große Freude bereiten können.';
    }
}
