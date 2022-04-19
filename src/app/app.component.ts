import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'angularpoc';
  fruits:string[]=[];
  child:string[]=[];
addParent(ele:any){
  this.child.push(ele);
}
  onClickSubmit(ele:any){
   this.fruits.push(ele.value.input);
  }
}
