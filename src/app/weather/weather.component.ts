import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators} from '@angular/forms' 
import { GetWeatherService } from '../get-weather.service';
@Component({
  selector: 'app-weather',
  templateUrl: './weather.component.html',
  styleUrls: ['./weather.component.css']
})
export class WeatherComponent implements OnInit {
   formdata:any;
  constructor(private weather:GetWeatherService) { }

  ngOnInit(): void {
    this.formdata=new FormGroup({
      country:new FormControl("" ,[Validators.required])
    })
  }
  weatherData:any;
countryInfo(ele:any){
  this.weather.getWeatherDate(ele.country);
  this.weatherData=this.weather.weatherDate;
}
}
