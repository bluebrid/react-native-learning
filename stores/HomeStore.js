import {observable, computed, reaction} from 'mobx'
 class HomeStore {  
    @observable users = [{
        isBlacker: false
    }, {
        isBlacker: false
    }];
    constructor() {
        this.genertorUser();
    }
    genertorUser () {
        setInterval(() => this.users.push({
            isBlacker: false
        }), 1000 * 10)
    }
    @computed get blackersCount () {
        return this.users.reduce( (sum, u) => sum + (u.isBlacker ? 1 : 0) , 0)
    }
    @computed get usersCount () {
        return this.users.length - this.blackersCount;
    }
    
}
const homeStore = new HomeStore();
export default {homeStore}