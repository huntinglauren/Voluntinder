import { User } from "../shared/user/User";
import * as firebase from 'firebase';

export class UserService {
    usersDB: User[];

    constructor() {
        this.usersDB = [];
        // Initialize Firebase
        var config = {
            apiKey: "AIzaSyA1ES9CmgL9poZdc3t0Pi4cZzEN9OA1KDo",
            authDomain: "voluntinder-43c96.firebaseapp.com",
            databaseURL: "https://voluntinder-43c96.firebaseio.com",
            projectId: "voluntinder-43c96",
            storageBucket: "",
            messagingSenderId: "551611584503"
        };
        firebase.initializeApp(config);

        this.itemsRef = firebase.database().ref();
        this.state = { username: '', password: ''};
        this.populateDb();
    }

    getUserByFacebookId(targetId: number) {
        for (let user of this.usersDB) {
            if (user.facebookId === targetId) {
                return user;
            }
        }
        return undefined;
    }

    populateDb() {
        this.usersDB.push(new User('Louis Pujol', 1314119188601872));
        this.usersDB.push(new User('Lauren Hunter', 746452268710522));
        this.usersDB.push(new User('Kevin Fung', 10110613385053150));
        this.usersDB.push(new User('Kevin Hutson', 501938162));
        this.usersDB.push(new User('Melissa Feather', 683210195161618));

        // load our peeps into db
        this.usersDB.forEach((user) => {
            console.log('pushing user to db user=', JSON.stringify(user));
            this.itemsRef.push({ name: user.name, facebookId: user.facebookId });
        });
    }
}