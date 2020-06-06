export class Department {
    ID: number;
    Name: string;
    noOfEmployee: number;

    constructor(id : number, name : string, empCounter : number){
    this.ID = id;
    this.Name = name;
    this.noOfEmployee = empCounter;
    }
}
