import { observable, computed, reaction, action } from 'mobx'
import CONSTS  from '../configs/const'
import ajaxRequest from '../common/ajaxRequest';
export default class HomeStore {
    @observable users = [];
    @action
    getUsersList() {
        ajaxRequest(CONSTS.APIS.ALL_USERS)
            .get()
            .then(
                data => this.users = data,
                error =>  console.log(error)
            )
    }
    genertorUser() {
        setInterval(() => this.users.push({
            isBlacker: false
        }), 1000 * 10)
    }
    @computed get blackersCount() {
        return this.users.reduce((sum, u) => sum + (u.isBlacker ? 1 : 0), 0)
    }
    @computed get usersCount() {
        return this.users.length - this.blackersCount;
    }

}
