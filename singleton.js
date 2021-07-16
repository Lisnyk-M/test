class Singleton {
    constructor() {
        if (Singleton._instance) {
            return Singleton._instance
        }
        Singleton._instance = this;
    }

    static getInstance() {
        let th = this;

        return (function () {
            return th.instance || (th.instance = new th);
        })()
    }
}

module.exports = Singleton;
