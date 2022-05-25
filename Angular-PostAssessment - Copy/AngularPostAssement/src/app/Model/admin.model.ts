

export class books
{
    id:number;
    Name:string;
    Genere:string;
    AuthorName:string;
    Description:string;
    Content:string;
    availability:number;
    
    constructor(id:number,Name:string,Genere:string,AuthorName:string,Description:string,Content:string,availability:number)
    {
        this.id=id;
        this.Name=Name;
        this.Genere=Genere;
        this.AuthorName=AuthorName;
        this.Description=Description;
        this.Content=Content;
        this.availability=availability;

    }
}