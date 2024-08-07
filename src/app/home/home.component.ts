import { Component } from '@angular/core';
import { trigger, style, transition, animate, keyframes, query, stagger } from '@angular/animations';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
  animations: [

    trigger('goal', [
      transition('* => *', [
        query(':enter', style({ opacity: 0 }),{ optional: true }),

      query(':enter', stagger('300ms', [
        animate('.6s ease-in', keyframes([
          style({ opacity: 0, transform: 'translate(-75%)', offset: 0 }),
          style({ opacity: .5, transform: 'translate(35px)', offset: .3 }),
          style({ opacity: 1, transform: 'translate(0)', offset: 1 }),
        ]))
      ]), {optional:true})
    ])

  ])
  ]
})
export class HomeComponent {

  itemCount: number = 5;
  btnText: string = 'Add an Item'
  goalText: string = ''
  goal: any = [];

  ngOnInit() {
    this.itemCount = this.goal.length;
  }


  addItem() {
    this.goal.push(this.goalText);
    this.goalText = '';
    this.itemCount = this.goal.length;
  }

}
