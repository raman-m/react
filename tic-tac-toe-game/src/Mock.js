export class ArgsMockingResult {
    constructor(mock, result, args = []) {
        this.mock = mock;
        this.result = result;
        this.args = args;
    }
}

export class Mock {
    constructor(setupObj) {
        this.setupObj = setupObj;
        setupObj.mock = this;

        this.clear();
    }

    clear() {
        this.setupFunc = null;
        this.returnFunc = null;
        this.asTypeFunc = null;
        this.called = 0;
    }

    setup(func) {
        this.clear();
        //let fn = func.bind(this, this);
        this[func.name] = func;
        this.setupFunc = func;
        return this;
    }

    returns(func) {
        this.returnFunc = func;
        return this;
    }

    as(type) {
        this.asTypeFunc = type;
        return this;
    }

    object(...args) {
        let a = args, fn = this.returnFunc;
        if (!fn || !(fn instanceof Function)) {
            throw new TypeError(`The returns() has no setup!`)
        }
        let value = fn.apply(this, args);

        this.called++;

        fn = this.asTypeFunc;
        if (!fn) {
            return value;
        }
        if (!(fn instanceof Function)) {
            throw new TypeError(`The as() has bad setup!`)
        }
        let result = new fn(this, value, args);
        return result;
    }
}