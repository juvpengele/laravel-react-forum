const INITIAL_STATE = {
    message: '',
    show: false,
};

const FlashReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case "SHOW_FLASH":
            return {
                message: action.value.message,
                show: true
            };

        case "REMOVE_FLASH":
            return {
                message: "",
                show: false
            };

        default:
            return state
    }
};

export default FlashReducer;