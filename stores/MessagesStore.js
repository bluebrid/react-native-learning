import {observable, computed, reaction} from 'mobx'
 class MessageStore {
    
    @observable users = [];
    @computed get blackersCount () {
        return this.users.reduce( (sum, u) => sum + (u.isBlacker ? 0 : 1) , 0)
    }
    @computed get usersCount () {
        return this.users.length - this.blackersCount;
    }
    
}
const messageStore = new MessageStore();
export default {messageStore}