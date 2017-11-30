export class User {
    name: string;
    facebookId: number;
    age: number;
    city: string;
    state: string;
    headline: string;

    constructor(name: string, facebookId: number, age: number, city: string, state: string, headline: string) {
        this.name = name;
        this.facebookId = facebookId;
        this.age = age;
        this.city = city;
        this.state = state;
        this.headline = headline;
    }
}