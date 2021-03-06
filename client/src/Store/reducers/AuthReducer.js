import Storage from '../../Services/Storage';

const token = Storage.hasItem('access_token') ? Storage.getItem('access_token') : null;
const id = Storage.hasItem('auth_id') ? Storage.getItem('auth_id') : null;
const name = Storage.hasItem('name') ? Storage.getItem('name') : null;
const avatar = Storage.hasItem('avatar') ? Storage.getItem('avatar'): null;
const email = Storage.hasItem('email') ? Storage.getItem('email'): null;

const INITIAL_STATE = {
    loggedIn: Storage.hasItem('access_token'),
    token,
    id,
    name,
    avatar,
    email
};


const authReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case "LOGIN":
            Storage.setItem('access_token', action.value.access_token);
            Storage.setItem('auth_id', action.value.auth_id);
            Storage.setItem('name', action.value.name);
            Storage.setItem('avatar', action.value.avatar);
            Storage.setItem('email', action.value.email);

            return {
                token: action.value.access_token,
                loggedIn: true,
                id: parseInt(action.value.auth_id),
                name: action.value.name,
                avatar: action.value.avatar,
                email: action.value.email
            };

        case "LOGOUT":
           Storage.clearAll();
           return { loggedIn: false, token: null, id: null, name: null, avatar: null, email: null };

        case "CHANGE_AVATAR":
            Storage.setItem('avatar', action.value);
            return { ...state, avatar: action.value};

        case "SAVE_PERSONAL_INFORMATION":
            Storage.setItem('name', action.value.name);
            Storage.setItem('email', action.value.email);

            return {...state, name: action.value.name, email: action.value.email};

        default:
            return state;
    }
};

export default authReducer;
