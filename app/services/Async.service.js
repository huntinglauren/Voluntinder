import { AsyncStorage } from 'react-native';
import { User } from '../shared/user/User';

export class AsyncService {

    save = async function saveFacebookAccount(user) {
        console.log('value to save ', user);

        let newUser = new User(user);
        console.log('test: ', newUser);

        await AsyncStorage.setItem(user.id, JSON.stringify(newUser));
        return await this.getAccount();
    };

    update = async function updateAccount(user) {
        console.log('value to udpate', user);

        await AsyncStorage.setItem(user.id, JSON.stringify(user));
        return await this.getAccount();
    };

    getAccount = async function getFaceBookAccount() {
        const value = await AsyncStorage.getItem('1583801678308906');
        let userObject = await JSON.parse(value) || null;
        console.log('retrieve ', userObject);
        return userObject;
    };

    clearAsync() {
        AsyncStorage.removeItem('1583801678308906', (err) => {console.log(err)});
    }
}