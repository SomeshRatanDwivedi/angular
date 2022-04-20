import { Component, OnInit } from '@angular/core';
import { GetWeatherService } from '../get-weather.service';
import { HttpClient } from '@angular/common/http';
@Component({
  selector: 'app-apiget',
  templateUrl: './apiget.component.html',
  styleUrls: ['./apiget.component.css']
})
export class ApigetComponent implements OnInit {
  employeeInfo:any;
  constructor(private weather:GetWeatherService) {
    weather.getEmployeeInfo().subscribe((data)=>{
      this.employeeInfo=data;
    },
    error=>{
      console.log(error);
    }
    );
   }
   
  ngOnInit(): void {
  
  }

}
