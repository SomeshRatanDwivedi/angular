import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { PostapiService } from '../postapi.service';
@Component({
  selector: 'app-post-api',
  templateUrl: './post-api.component.html',
  styleUrls: ['./post-api.component.css']
})
export class PostApiComponent implements OnInit {

  constructor(private http:HttpClient, private postapiservices:PostapiService) { }
  employee:any;
  onSubmit(people:any){
     this.postapiservices.postApi(people).subscribe(data=>{
       this.employee=data;
     })
    
  }

  ngOnInit(): void {
  }


}
