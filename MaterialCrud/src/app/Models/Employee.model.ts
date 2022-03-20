export class Employee
{
    id:number;
    name:string;
    designation:string;
    department:string;
    gender:string;
    sales:string;


    constructor(id:number,name:string,designation:string,department:string,gender:string,sales:string)
    {
        this.id=id;
        this.name=name;
        this.designation=designation;
        this.department=department;
        this.gender=gender;
        this.sales=sales;
    }
}