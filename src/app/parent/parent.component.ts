import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.css']
})
export class ParentComponent implements OnInit {

  fruits:string[]=[];
  child:string[]=[];
addParent(ele:any){
  this.child.push(ele);
}
  onClickSubmit(ele:any){
   this.fruits.push(ele.value.input);
  }

  ngOnInit(): void {
  }

}
