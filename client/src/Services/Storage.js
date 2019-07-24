const Storage = {
    init() {
        this.storage = localStorage;
        return this;
    },

    getItem(key) {
        return this.storage.getItem(key);
    },

    setItem(key, value) {
        this.storage.setItem(key, value);
    },

    hasItem(key) {
        return !! this.storage.getItem(key);
    },

    removeItem(key) {
        this.storage.removeItem(key)
    },

    clearAll() {
        this.storage.clear()
    }
};
export default Storage.init();