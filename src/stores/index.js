import FindStore from './FindStore';
import HomeStore from './HomeStore';
import MessageStore from './MessagesStore';
import UserStore from './UsersStore';
const findStore = new FindStore();
const homeStore = new HomeStore();
const messageStore = new MessageStore();
const mineStore = new UserStore();
export default {
    findStore,
    homeStore,
    messageStore,
    mineStore
}