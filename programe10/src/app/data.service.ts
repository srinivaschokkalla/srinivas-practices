import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  info1: string[]=["srinivas",'E123','sri@net']
  info2: string[]=["kumar",'A254','suresh@ADO']
  info3: string[]=["raju",'D452','mohan@sql']

getinfo1():string[]{
  return this.info1
}
getinfo2():string[]{
  return this.info2
}
getinfo3():string[]{
  return this.info3
}
addInfo(info:any){
  this.info1.push(info)
  this.info2.push(info)
  this.info3.push(info)
  return this.info1
}
  constructor() { }
}
