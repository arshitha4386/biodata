import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable} from 'rxjs';
import { MyContact } from 'src/Models/myContact';



@Injectable({
  providedIn: 'root'
})
export class ApiService {

  baseUrl:string = 'https://dummyjson.com/users'

  constructor(private http:HttpClient) {}

     //api call for get allcontacts-function
    
     getAllcontacts():Observable<MyContact>{
      return this.http.get(this.baseUrl)
    }
 
     
     
   
}
