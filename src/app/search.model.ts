export class Search {
    public name: string;
    public date: string;
    public gender: string;
    public outcome: string[];
    public age: string[];

    constructor(name: string, date: string, gender:string, outcome:string[], age:string[]) {
        this.name = name;
        this.date = date;
        this.gender = gender;
        this.outcome=outcome;
        this.age=age;
    }
}