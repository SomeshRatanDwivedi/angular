import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validator, Validators  } from '@angular/forms';
import { PostapiService } from '../postapi.service';
@Component({
  selector: 'app-forms',
  templateUrl: './forms.component.html',
  styleUrls: ['./forms.component.css']
})
export class FormsComponent implements OnInit {

  constructor(private postapiservice:PostapiService) { }
  template:any;
  formdata:any;
  userData={
    "name":"",
     "email":"",
     "phone":""
  }
  tempFormData:any;
  modFormData:any;
onSubmit(ele:any){
   this.postapiservice.postApi(ele).subscribe(data=>{
     this.tempFormData=data;
   },
   error=>{
     console.log(error);
   }
   );
}
modSubmit(){
  this.postapiservice.postApi(this.formdata.value).subscribe(data=>{
    this.modFormData=data;
  },
  error=>{
    console.log(error);
  }
  );
}
  ngOnInit(): void {
    this.formdata=new FormGroup({
      userName: new FormControl("somesh",[Validators.required]),
      userEmail: new FormControl("somesh@123", [Validators.required, Validators.email]),
      userPhone: new FormControl("123456789", [Validators.required, Validators.minLength(8), Validators.maxLength(12)])
    })
  }

}
