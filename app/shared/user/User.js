export class User {
    name: string;
    token: string;
    id: number;
    age: string;
    gender: string;
    email: string;
    city: string;
    about: string;
    profile_picture: any;

    constructor(response: any) {
        console.log('USER: ', response);
        this.name = response.name;
        this.token = response.token;
        this.id = response.id;
        this.age = `> ${response.age_range.min.toString()}`;
        this.gender = response.gender;
        this.email = response.email ? response.email : '';
        this.city = response.hometown.name ? response.hometown.name: '';
        this.about = response.about ? response.about : '';
        this.profile_picture = {uri: response.picture.data.url};
    }
}