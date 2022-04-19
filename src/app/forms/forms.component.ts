import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validator, Validators  } from '@angular/forms';

@Component({
  selector: 'app-forms',
  templateUrl: './forms.component.html',
  styleUrls: ['./forms.component.css']
})
export class FormsComponent implements OnInit {

  constructor() { }
  template:any;
  formdata:any;
onSubmit(ele:any){
   this.template=ele;
}
  ngOnInit(): void {
    this.formdata=new FormGroup({
      userName: new FormControl("",[Validators.required]),
      userEmail: new FormControl("", [Validators.required, Validators.email]),
      userPhone: new FormControl("", [Validators.required, Validators.minLength(8), Validators.maxLength(12)])
    })
  }

}
