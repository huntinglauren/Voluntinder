import { User } from "../shared/user/User";

export class UserService {
    public usersDb: User[] = [];

    constructor() {
        this.populateDb();
    }

    private populateDb() {
        this.usersDb.push(new User('Louis Pujol', 1));
        this.usersDb.push(new User('Lauren Hunter', 746452268710522));
        this.usersDb.push(new User('Kevin Fung', 2));
        this.usersDb.push(new User('Kevin Hudson', 3));
        this.usersDb.push(new User('Melissa Feather', 4));
    }
}