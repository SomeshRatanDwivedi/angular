import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Person } from './Person';
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
  getWeatherDate(ele:any){
    let url="https://api.openweathermap.org/data/2.5/weather?q="+ele+"&appid=f613511896ee5922228bcbf745a8bf41";
    
    this.http.get(url).subscribe((data)=>{
   this.weatherDate=data;

    })
  }
}


