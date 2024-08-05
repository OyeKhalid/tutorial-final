import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {

  itemCount : number = 5;
  btnText : string = 'Add an Item'
  goalText : string = ''
  goal : any = [];

  ngOnInit(){
    this.itemCount = this.goal.length;
  }


  addItem(){
    this.goal.push(this.goalText);
    this.goalText = '';
    this.itemCount = this.goal.length;
  }

}
