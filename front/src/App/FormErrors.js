class FormErrors {

    constructor() {
        this.errors = {};
    }

    record(errors) {
        this.errors = errors;
    }

    has(key) {
        return this.errors.hasOwnProperty(key);
    }

    get(key) {
        return this.errors[key][0];
    }

    clear(key) {
        delete this.errors[key];
    }

    clearAll() {
        this.errors = {};
    }

}

export default FormErrors;