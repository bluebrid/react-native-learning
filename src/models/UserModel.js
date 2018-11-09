// import {observable} from 'mobx'
class UserModel {
    store;
    id;
    name;
    picture;
    isBlacker;
    constructor(store, id, name, picture) {
        this.store = store;
        this.id = id;
        this.name = name;
        this.picture = picture;
        this.isBlacker = false;
    }
    toggleBlacker () {
        this.isBlacker = !this.isBlacker;
    }
    deleteUser () {
        this.store.users.remove(this);
    }
    setName (name) {
        this.name = name;
    }
    toJs () {
        return {
            id: this.id,
            name: this.name,
            picture: this.picture,
            isBlacker: this.isBlacker
        }
    }
    static fromJS (store, object) {
        return new UserModel(store, object.id, object.name, object.picture);
    }
}