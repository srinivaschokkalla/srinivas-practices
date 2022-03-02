import { Pipe, PipeTransform } from '@angular/core';
import { Employee } from '../Models/Employee.model';

@Pipe({
  name: 'nameFilter'
})
export class NameFilterPipe implements PipeTransform {

  transform( employeelist: any[],findvalue: string): any {

    return employeelist.filter((emp:Employee)=>
     emp.name.toLowerCase().includes(findvalue.toLowerCase())
     ||emp.location.toLowerCase().includes(findvalue.toLowerCase())
     ||emp.gender.toLowerCase().includes(findvalue.toLowerCase())
     ||emp.id==+findvalue);

   }
  }


