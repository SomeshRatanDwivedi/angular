import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';


@Component({
  selector: 'app-childcomponenet',
  templateUrl: './childcomponenet.component.html',
  styleUrls: ['./childcomponenet.component.css']
})
export class ChildcomponenetComponent implements OnInit {
@Input() parentFormInfo:any;
  constructor() { }
@Output() fruits=new EventEmitter<string>();
childInfo:string[]=[];
onSubmit(ele:any){
  this.fruits.emit(ele.value.input);
  this.childInfo.push(ele.value.input);
}

  ngOnInit(): void {
  }

}
