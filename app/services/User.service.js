import { User } from "../shared/user/User";
import * as firebase from 'firebase';

export class UserService {
    usersDB: User[];

    constructor() {
        this.usersDB = [];
        // Initialize Firebase
        var config = {
            apiKey: "AIzaSyCDH5unIDJp4CJdH4eG2Ggkkhy-brxv-0U",
            authDomain: "voluntinder-b515d.firebaseapp.com",
            databaseURL: "https://voluntinder-b515d.firebaseio.com",
            projectId: "voluntinder-b515d",
            storageBucket: "voluntinder-b515d.appspot.com",
            messagingSenderId: "71680662197"
        };
        if(!firebase.apps.length) {
            firebase.initializeApp(config);
        }

        this.itemsRef = firebase.database().ref();
        this.state = { username: '', password: ''};
    }

    getUserByFacebookId(targetId: number) {
        return new Promise( function(resolve) {
            firebase.database().ref('usersByFacebookId/' + targetId).on('value', snap => {
                var returnedUser = snap.toJSON();
                console.log(returnedUser);
                console.log(returnedUser.name);
                resolve(new User(returnedUser.name, targetId, returnedUser.email, returnedUser.picture, returnedUser.state, returnedUser.headline));
            });
        });
    }

    saveProfile(responseJson) {
        let newUser = new User(responseJson.name, responseJson.id, responseJson.email);
        this.itemsRef.child(user.facebookId).set({
            name: user.name,
            age: user.age,
            city: user.city,
            state: user.state,
            headline: user.headline
        });
    }
}