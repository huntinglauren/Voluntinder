import { User } from "../shared/user/User";

export class UserService {
    usersDB: User[];

    constructor() {
        this.usersDB = [];
        this.populateDb();
    }

    getUserById(targetId: number) {
        for (let user of this.usersDB) {
            if (user.id === targetId) {
                return user;
            }
        }
        return undefined;
    }

    populateDb() {
        //TODO: Update IDs with actual FB Ids
        this.usersDB.push(new User('Louis Pujol', 1314119188601872));
        this.usersDB.push(new User('Lauren Hunter', 746452268710522));
        this.usersDB.push(new User('Kevin Fung', 2));
        this.usersDB.push(new User('Kevin Hudson', 501938162));
        this.usersDB.push(new User('Melissa Feather', 683210195161618));
    }
}