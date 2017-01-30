import {Component} from "@angular/core";
@Component({
    selector: 'user',
    template: `
        <section>
            <h3>Sandro Birke</h3>
            <p>
            Auch gibt es niemanden, der den Schmerz an sich liebt, sucht oder wünscht, nur, weil er Schmerz ist, es sei denn, 
            es kommt zu zufälligen Umständen, in denen Mühen und Schmerz ihm große Freude bereiten können.
            </p>
        </section>`
})

export class UserComponent{
    constructor(){
        console.log('User Component exportiert');
    }
}
