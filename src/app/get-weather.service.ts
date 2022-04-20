import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class GetWeatherService {
   
  constructor(private http:HttpClient) { }
  ngOnInit(){

  }
weatherDate:any;
getEmployeeInfo(){
  let url1="https://jsonplaceholder.typicode.com/users";
  return this.http.get(url1)
}
}


