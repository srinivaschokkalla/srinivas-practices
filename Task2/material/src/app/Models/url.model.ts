export class Employee
{
    id:number;
    from: string;
    to:string;
    dateCreated:string;
    permanentLink: true;


    constructor(id:number,
        from: string,
        to:string,
        dateCreated:string,
        permanentLink: true)
    {
        this.id=id;
        this.from=from;
        this.to=to;
        this.dateCreated=dateCreated;
        this.permanentLink=permanentLink;
    }
}