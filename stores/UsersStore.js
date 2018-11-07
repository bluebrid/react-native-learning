import {observable, computed, reaction} from 'mobx'
 class UserStore {
    
    @observable users = [];
    @computed get blackersCount () {
        return this.users.reduce( (sum, u) => sum + (u.isBlacker ? 0 : 1) , 0)
    }
    @computed get usersCount () {
        return this.users.length - this.blackersCount;
    }
    
}
const userStore = new UserStore();
export default {userStore}