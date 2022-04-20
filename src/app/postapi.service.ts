import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class PostapiService {

  constructor(private http:HttpClient) { }
  postApi(people:any){
    let url="https://jsonplaceholder.typicode.com/users";
    return this.http.post(url, people);

  }
}
