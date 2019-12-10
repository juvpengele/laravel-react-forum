import Storage from '../../Services/Storage';

const token = Storage.hasItem('access_token') ? Storage.getItem('access_token') : null;
const id = Storage.hasItem('auth_id') ? Storage.getItem('auth_id') : null;
const name = Storage.hasItem('name') ? Storage.getItem('name') : null;
const avatar = Storage.hasItem('avatar') ? Storage.getItem('avatar'): null;

const INITIAL_STATE = {
    loggedIn: Storage.hasItem('access_token'),
    token,
    id,
    name,
    avatar
};


const authReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case "LOGIN":
            Storage.setItem('access_token', action.value.access_token);
            Storage.setItem('auth_id', action.value.auth_id);
            Storage.setItem('name', action.value.name);
            Storage.setItem('avatar', action.value.avatar);

            return {
                token: action.value.access_token,
                loggedIn: true,
                id: parseInt(action.value.auth_id),
                name: action.value.name,
                avatar: action.value.avatar
            };

        case "LOGOUT":
           Storage.clearAll();
           return { loggedIn: false, token: null, id: null, name: null, avatar: null };

        default:
            return state;
    }
};

export default authReducer;
