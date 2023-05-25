import { Component, OnInit } from '@angular/core';
import { MyContact } from 'src/Models/myContact';
import { ApiService } from '../services/api.service';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit{

  allContacts:MyContact[] = []
  searchKey:string=''
constructor( private api:ApiService){

}
 ngOnInit(): void {
   this.getAllcontacts()
 }
 //function to get all contacts
 getAllcontacts(){
  this.api.getAllcontacts().subscribe((data:any)=>{
    console.log(data);
     this.allContacts = data.users
      console.log(this.allContacts);
      
    
  })

 }
 //search

 search(event:any){
  console.log(event.target.value);
  this.searchKey = event.target.value
  
 }
}
