import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {

  transform(allContacts:any [], searchKey:string,propfirstName:string): any [] {
    const result:any=[]
    if(!allContacts || searchKey==''|| propfirstName==''){
      return allContacts
    }
    allContacts.forEach((contact:any)=>{
      if(contact[propfirstName].trim().toLowerCase().includes(searchKey.toLowerCase())){
        result.push(contact)
      }
      
    })
    return result;
  }

}