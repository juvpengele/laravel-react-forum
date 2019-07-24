import Storage from '../../Services/Storage';

const token = Storage.hasItem('access_token') ? Storage.getItem('access_token') : null;

const INITIAL_STATE = {
    loggedIn: Storage.hasItem('access_token'),
    token
};

const authReducers = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case "LOGIN":
            Storage.setItem('access_token', action.value.access_token);
            return {
                token: action.value.access_token,
                loggedIn: true
            };

        case "LOGOUT":
           Storage.clearAll();
           return { loggedIn: false, token: null };

        default:
            return state;
    }
};

export default authReducers